import { Bird, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1e3a8a] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-start scale-75 origin-left">
              <img 
                src="/logowvpa.png" 
                alt="WVPA Logo" 
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="text-[8px] uppercase tracking-widest font-semibold text-blue-200/60 mt-0.5 ml-0.5">
                Rama Chilena
              </span>
            </div>
            <p className="text-[10px] text-blue-100/40 max-w-[200px] leading-tight hidden sm:block">
              Excelencia en medicina veterinaria aviar.
            </p>
          </div>

          <div className="flex gap-8">
            <div className="flex gap-4 text-[10px] text-blue-100/60 font-bold uppercase tracking-wider">
              <a href="#" className="hover:text-blue-400 transition-colors">Inicio</a>
              <a href="#salud" className="hover:text-blue-400 transition-colors">Salud</a>
              <a href="#bioseguridad" className="hover:text-blue-400 transition-colors">Bioseguridad</a>
              <a href="#nutricion" className="hover:text-blue-400 transition-colors">Nutrición</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <a href="#" className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Facebook className="w-3 h-3" />
              </a>
              <a href="#" className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Linkedin className="w-3 h-3" />
              </a>
              <a href="#" className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Mail className="w-3 h-3" />
              </a>
            </div>
            <div className="text-[10px] text-blue-100/40 border-l border-white/10 pl-4">
              © {new Date().getFullYear()} WVPA Chile
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
}
