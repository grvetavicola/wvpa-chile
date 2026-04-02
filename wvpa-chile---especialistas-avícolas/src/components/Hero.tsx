import { motion } from "motion/react";
import { ArrowRight, Bird, ShieldCheck, Microscope } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#064e3b]">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=2070&auto=format&fit=crop" 
          alt="Forest background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#064e3b]/80 via-[#064e3b]/60 to-[#064e3b]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6 backdrop-blur-sm">
              <Bird className="w-4 h-4" />
              <span>WVPA Chile - Rama Nacional</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold tracking-tight text-white mb-8 leading-[1.1]">
              Excelencia en <br />
              <span className="text-emerald-400">Salud Aviar</span>
            </h1>
            <p className="text-xl text-emerald-50/80 mb-10 max-w-lg leading-relaxed">
              Impulsamos el bienestar de aves domésticas y la eficiencia productiva a través de la ciencia y la bioseguridad en Chile.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-emerald-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-500/20 flex items-center gap-2 group">
                Ingresar al Portal
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all">
                Nuestros Protocolos
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
              <div className="flex flex-col gap-2">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
                <span className="text-sm font-bold text-white">Bioseguridad</span>
                <span className="text-xs text-emerald-200/60">Estándares Globales</span>
              </div>
              <div className="flex flex-col gap-2">
                <Microscope className="w-6 h-6 text-emerald-400" />
                <span className="text-sm font-bold text-white">Investigación</span>
                <span className="text-xs text-emerald-200/60">Ciencia Aplicada</span>
              </div>
              <div className="flex flex-col gap-2">
                <Bird className="w-6 h-6 text-emerald-400" />
                <span className="text-sm font-bold text-white">Bienestar</span>
                <span className="text-xs text-emerald-200/60">Cuidado Integral</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/10 backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=2070&auto=format&fit=crop"
                alt="Poultry in nature"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-[#064e3b] p-6 rounded-2xl shadow-xl border border-emerald-500/20 max-w-[240px] backdrop-blur-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Bird className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">WVPA Global</div>
                  <div className="text-[10px] text-emerald-400 uppercase tracking-widest font-bold">Asociación Mundial</div>
                </div>
              </div>
              <p className="text-xs text-emerald-100/70 leading-relaxed">
                Conectamos a Chile con los mayores expertos mundiales en medicina veterinaria aviar.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

  );
}
