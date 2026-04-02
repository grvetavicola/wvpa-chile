import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Image as ImageIcon, Sparkles, Loader2, Download, Wand2, Upload, X, Bird, Layout } from "lucide-react";
import { generatePoultryImage, editPoultryImage } from "../services/gemini";

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<"1:1" | "16:9" | "9:16">("1:1");
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleGenerate = async () => {
    if (!prompt.trim() || isLoading) return;
    setIsLoading(true);
    try {
      const result = await generatePoultryImage(prompt, aspectRatio);
      setGeneratedImage(result);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = async () => {
    if (!prompt.trim() || !generatedImage || isLoading) return;
    setIsLoading(true);
    try {
      const result = await editPoultryImage(generatedImage, prompt);
      setGeneratedImage(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGeneratedImage(reader.result as string);
        setIsEditing(true);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="generador" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
            <ImageIcon className="w-4 h-4" />
            <span>Generador de Visuales Avícolas</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 tracking-tight">
            Crea <span className="text-emerald-600">Imágenes Profesionales</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Genera o edita visuales de alta calidad para tus presentaciones, informes técnicos o materiales educativos de la industria avícola.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                  {isEditing ? "Editar Imagen" : "Nueva Generación"}
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setAspectRatio("1:1")}
                    className={`p-2 rounded-lg border transition-all ${aspectRatio === "1:1" ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-gray-600 border-gray-200 hover:border-emerald-200"}`}
                    title="1:1"
                  >
                    <Layout className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setAspectRatio("16:9")}
                    className={`p-2 rounded-lg border transition-all ${aspectRatio === "16:9" ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-gray-600 border-gray-200 hover:border-emerald-200"}`}
                    title="16:9"
                  >
                    <Layout className="w-4 h-4 rotate-90" />
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={isEditing ? "Describe los cambios que quieres hacer..." : "Describe la imagen que necesitas (ej: 'Pollo broiler en ambiente controlado de alta tecnología')..."}
                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 min-h-[120px] text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none"
                  />
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={isEditing ? handleEdit : handleGenerate}
                    disabled={!prompt.trim() || isLoading}
                    className="flex-1 bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Procesando...
                      </>
                    ) : (
                      <>
                        {isEditing ? <Wand2 className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
                        {isEditing ? "Aplicar Cambios" : "Generar Imagen"}
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-white text-gray-900 border border-gray-200 px-6 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center gap-2"
                  >
                    <Upload className="w-5 h-5" />
                    Subir Base
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept="image/*"
                    className="hidden"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
                <Bird className="w-6 h-6 text-emerald-600 mb-3" />
                <h4 className="font-bold text-gray-900 text-sm mb-1">Contexto Avícola</h4>
                <p className="text-xs text-gray-600">Optimizado para anatomía y entornos de producción realistas.</p>
              </div>
              <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
                <Wand2 className="w-6 h-6 text-green-600 mb-3" />
                <h4 className="font-bold text-gray-900 text-sm mb-1">Edición Inteligente</h4>
                <p className="text-xs text-gray-600">Modifica elementos específicos manteniendo el estilo original.</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className={`aspect-square rounded-[2.5rem] bg-gray-50 border-2 border-dashed border-gray-200 overflow-hidden flex items-center justify-center transition-all ${generatedImage ? "border-solid border-white shadow-2xl" : ""}`}>
              <AnimatePresence mode="wait">
                {generatedImage ? (
                  <motion.div
                    key="image"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="relative w-full h-full"
                  >
                    <img
                      src={generatedImage}
                      alt="Generated poultry visual"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <a
                        href={generatedImage}
                        download="wvpa-chile-visual.png"
                        className="p-4 bg-white text-gray-900 rounded-full hover:scale-110 transition-transform shadow-xl"
                      >
                        <Download className="w-6 h-6" />
                      </a>
                      <button
                        onClick={() => {
                          setGeneratedImage(null);
                          setIsEditing(false);
                        }}
                        className="p-4 bg-white text-red-600 rounded-full hover:scale-110 transition-transform shadow-xl"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center p-12"
                  >
                    <div className="w-20 h-20 rounded-3xl bg-white shadow-sm flex items-center justify-center mx-auto mb-6">
                      <ImageIcon className="w-10 h-10 text-gray-300" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Previsualización</h3>
                    <p className="text-sm text-gray-500 max-w-[200px] mx-auto">
                      Tu imagen generada aparecerá aquí. Puedes descargarla en alta resolución.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {isLoading && (
              <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center rounded-[2.5rem] z-10">
                <Loader2 className="w-12 h-12 text-emerald-600 animate-spin mb-4" />
                <p className="text-lg font-bold text-gray-900">Creando tu visual...</p>
                <p className="text-sm text-gray-500">Esto puede tardar unos segundos</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>

  );
}
