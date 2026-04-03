import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Microscope, Activity } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-8 lg:pt-20 lg:pb-10 overflow-hidden bg-[#1e3a8a]">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=2070&auto=format&fit=crop" 
          alt="Forest background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a]/90 via-[#1e3a8a]/70 to-[#1e3a8a]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold mb-3 backdrop-blur-sm uppercase tracking-wider">
              <ShieldCheck className="w-3 h-3" />
              <span>WVPA Chile - Rama Nacional</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-serif font-bold tracking-tight text-white mb-3 leading-tight">
              Excelencia en <br />
              <span className="text-blue-400">Salud Aviar</span>
            </h1>
            <p className="text-sm text-blue-50/70 mb-5 max-w-md leading-relaxed">
              Impulsamos el bienestar de aves domésticas y la eficiencia productiva a través de la ciencia y la bioseguridad en Chile.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-[12px] font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/20 flex items-center gap-1.5 group uppercase tracking-wider">
                Ingresar al Portal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-5 py-2 rounded-md text-[12px] font-bold hover:bg-white/20 transition-all uppercase tracking-wider">
                Protocolos
              </button>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-white/10 pt-4">
              <div className="flex flex-col gap-1">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span className="text-[11px] font-bold text-white uppercase tracking-wider">Bioseguridad</span>
                <span className="text-[9px] text-blue-200/50">Estándares Globales</span>
              </div>
              <div className="flex flex-col gap-1">
                <Microscope className="w-4 h-4 text-blue-400" />
                <span className="text-[11px] font-bold text-white uppercase tracking-wider">Investigación</span>
                <span className="text-[9px] text-blue-200/50">Ciencia Aplicada</span>
              </div>
              <div className="flex flex-col gap-1">
                <Activity className="w-4 h-4 text-blue-400" />
                <span className="text-[11px] font-bold text-white uppercase tracking-wider">Bienestar</span>
                <span className="text-[9px] text-blue-200/50">Cuidado Integral</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white/10 backdrop-blur-sm max-w-[320px] ml-auto">
              <img
                src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=2070&auto=format&fit=crop"
                alt="Poultry in nature"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Card - Scaled down */}
            <div className="absolute -bottom-3 -left-2 bg-[#1e3a8a]/90 p-3 rounded-xl shadow-xl border border-blue-500/20 max-w-[160px] backdrop-blur-md scale-90">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <img 
                    src="/logowvpa.png" 
                    alt="WVPA Mini" 
                    className="w-4 h-4 object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white">WVPA Global</div>
                  <div className="text-[7px] text-blue-400 uppercase tracking-widest font-bold">Asociación</div>
                </div>
              </div>
              <p className="text-[9px] text-blue-100/60 leading-tight">
                Conectamos a Chile con expertos mundiales.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>


  );
}
