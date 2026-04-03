import { motion } from "motion/react";

export default function Features() {
  const features = [
    {
      title: "Salud Aviar",
      description: "Protocolos médicos avanzados y prevención de enfermedades de última generación para la industria.",
      image: "/saludaviar.png",
      bg: "bg-blue-50",
    },
    {
      title: "Bioseguridad",
      description: "Protección estricta para garantizar la integridad de la producción y evitar brotes infecciosos.",
      image: "/bioseguridad.png",
      bg: "bg-blue-50/80",
    },
    {
      title: "Nutrición",
      description: "Optimización de dietas para un crecimiento sano, eficiente y sostenible de las aves.",
      image: "/nutricion.png",
      bg: "bg-blue-50/60",
    },

    {
      title: "Investigación",
      description: "Desarrollo de estudios científicos aplicados a la realidad de la producción avícola en Chile.",
      image: "/investigacion.png",
      bg: "bg-blue-50/40",
    },
    {
      title: "Red Global",
      description: "Acceso directo a la red mundial de especialistas de la World Veterinary Poultry Association.",
      image: "/red.png",
      bg: "bg-blue-50/20",
    },
    {
      title: "Capacitación",
      description: "Programas de formación continua para veterinarios y técnicos del sector avícola.",
      image: "/capacit.png",
      bg: "bg-blue-100/30",
    },
  ];

  return (
    <section id="salud" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">Nuestros Pilares</h2>
          <p className="text-2xl lg:text-3xl font-serif font-bold text-gray-900 mb-2 tracking-tight">
            Excelencia Profesional en Salud y Bienestar Aviar
          </p>
          <p className="text-xs text-gray-600 max-w-xl mx-auto leading-tight">
            Trabajamos bajo los más altos estándares internacionales para asegurar una industria avícola sana, eficiente y responsable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="p-3 rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-500/5 transition-all group bg-white"
            >
              <div className={`w-10 h-10 rounded-lg ${feature.bg} flex items-center justify-center mb-2 group-hover:scale-105 transition-transform overflow-hidden p-1.5`}>
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-[13px] font-bold text-[#1e3a8a] mb-1 leading-tight">{feature.title}</h3>
              <p className="text-[10px] text-gray-500 leading-snug">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
}
