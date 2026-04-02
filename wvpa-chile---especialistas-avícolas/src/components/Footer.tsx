import { Bird, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#064e3b] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Bird className="w-8 h-8 text-emerald-400" />
              <span className="font-bold text-2xl tracking-tight">
                WVPA <span className="text-emerald-400">Chile</span>
              </span>
            </div>
            <p className="text-emerald-100/60 leading-relaxed">
              Rama chilena de la World Veterinary Poultry Association. Dedicados a la excelencia en medicina veterinaria aviar desde hace décadas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-emerald-100/60">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Inicio</a></li>
              <li><a href="#salud" className="hover:text-emerald-400 transition-colors">Salud Aviar</a></li>
              <li><a href="#bioseguridad" className="hover:text-emerald-400 transition-colors">Bioseguridad</a></li>
              <li><a href="#nutricion" className="hover:text-emerald-400 transition-colors">Nutrición</a></li>
              <li><a href="#asistente" className="hover:text-emerald-400 transition-colors">Asistente AI</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Recursos</h4>
            <ul className="space-y-4 text-emerald-100/60">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Protocolos Técnicos</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Eventos y Congresos</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Publicaciones Científicas</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Membresía</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">WVPA Global</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4 text-emerald-100/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Santiago, Chile. <br /> Región Metropolitana.</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>secretaria@wvpachile.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>+56 2 2345 6789</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-emerald-100/40 text-sm">
            © {new Date().getFullYear()} WVPA Chile. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-sm text-emerald-100/40">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>

  );
}
