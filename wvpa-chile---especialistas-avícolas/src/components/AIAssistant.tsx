import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Send, Loader2, Bird, User, BrainCircuit } from "lucide-react";
import { askExpert } from "../services/gemini";
import ReactMarkdown from "react-markdown";

export default function AIAssistant() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await askExpert(userMessage);
      setMessages((prev) => [...prev, { role: "assistant", content: response || "Lo siento, no pude procesar tu consulta." }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { role: "assistant", content: "Error al conectar con el experto AI. Por favor intenta más tarde." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="asistente" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
              <BrainCircuit className="w-4 h-4" />
              <span>IA de Alta Complejidad</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-8 tracking-tight">
              Consulta a nuestro <span className="text-emerald-600">Experto Virtual</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Utilizamos modelos de lenguaje de última generación para proporcionarte asesoría técnica inmediata sobre patologías, bioseguridad y manejo avícola.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Razonamiento Avanzado</h4>
                  <p className="text-sm text-gray-600">Capacidad para analizar casos complejos y protocolos técnicos.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Bird className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Especialización Avícola</h4>
                  <p className="text-sm text-gray-600">Entrenado con conocimientos específicos de la industria chilena.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-emerald-500/10 border border-gray-100 overflow-hidden flex flex-col h-[600px]">
            {/* Header */}
            <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center">
                  <BrainCircuit className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">WVPA Expert AI</div>
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    En línea
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="w-16 h-16 rounded-3xl bg-emerald-50 flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">¿En qué puedo ayudarte hoy?</h3>
                  <p className="text-sm text-gray-500 max-w-[240px]">
                    Pregúntame sobre protocolos de vacunación, bioseguridad o nutrición aviar.
                  </p>
                </div>
              )}
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-gray-100" : "bg-emerald-100"}`}>
                      {msg.role === "user" ? <User className="w-4 h-4 text-gray-600" /> : <BrainCircuit className="w-4 h-4 text-emerald-600" />}
                    </div>
                    <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${msg.role === "user" ? "bg-gray-900 text-white rounded-tr-none" : "bg-gray-50 text-gray-800 border border-gray-100 rounded-tl-none"}`}>
                      <div className="prose prose-sm prose-slate max-w-none">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <BrainCircuit className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="bg-gray-50 border border-gray-100 p-4 rounded-2xl rounded-tl-none flex items-center gap-3">
                    <Loader2 className="w-4 h-4 text-emerald-600 animate-spin" />
                    <span className="text-sm text-gray-500 font-medium">Analizando consulta técnica...</span>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-gray-100 bg-white">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Escribe tu consulta técnica aquí..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 pr-16 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-600/20"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-[10px] text-gray-400 mt-3 text-center uppercase tracking-widest font-bold">
                Asistente impulsado por Gemini 3.1 Pro
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
