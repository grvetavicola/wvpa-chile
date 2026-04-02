import { GoogleGenAI, ThinkingLevel, Type, GenerateContentResponse, Modality } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

export async function askExpert(prompt: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: prompt,
    config: {
      thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH },
      systemInstruction: "Eres un experto veterinario avícola de la WVPA Chile. Proporcionas respuestas técnicas, precisas y profesionales sobre salud, bienestar y producción aviar.",
    },
  });
  return response.text;
}

export async function generatePoultryImage(prompt: string, aspectRatio: "1:1" | "16:9" | "9:16" = "1:1") {
  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-image-preview",
    contents: {
      parts: [
        { text: `Imagen profesional de alta calidad relacionada con la industria avícola: ${prompt}` },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio,
        imageSize: "1K",
      },
    },
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
}

export async function editPoultryImage(base64Image: string, prompt: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-image-preview",
    contents: {
      parts: [
        {
          inlineData: {
            data: base64Image.split(",")[1],
            mimeType: "image/png",
          },
        },
        { text: prompt },
      ],
    },
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
}
