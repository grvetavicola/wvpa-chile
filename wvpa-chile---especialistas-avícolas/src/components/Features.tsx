import { motion } from "motion/react";
import { ShieldCheck, Microscope, Apple, Users, Globe, Activity } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Salud Aviar",
      description: "Protocolos médicos avanzados y prevención de enfermedades de última generación para la industria.",
      icon: Activity,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Bioseguridad",
      description: "Protección estricta para garantizar la integridad de la producción y evitar brotes infecciosos.",
      icon: ShieldCheck,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "Nutrición",
      description: "Optimización de dietas para un crecimiento sano, eficiente y sostenible de las aves.",
      icon: Apple,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },

    {
      title: "Investigación",
      description: "Desarrollo de estudios científicos aplicados a la realidad de la producción avícola en Chile.",
      icon: Microscope,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      title: "Red Global",
      description: "Acceso directo a la red mundial de especialistas de la World Veterinary Poultry Association.",
      icon: Globe,
      color: "text-cyan-600",
      bg: "bg-cyan-50",
    },
    {
      title: "Capacitación",
      description: "Programas de formación continua para veterinarios y técnicos del sector avícola.",
      icon: Users,
      color: "text-rose-600",
      bg: "bg-rose-50",
    },
  ];

  return (
    <section id="salud" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">Nuestros Pilares</h2>
          <p className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 tracking-tight">
            Excelencia Profesional en <br className="hidden md:block" /> Salud y Bienestar Aviar
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trabajamos bajo los más altos estándares internacionales para asegurar una industria avícola sana, eficiente y responsable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-gray-100 hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-500/5 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
}
