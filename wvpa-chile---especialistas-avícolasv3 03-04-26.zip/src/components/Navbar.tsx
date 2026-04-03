import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Salud Aviar", href: "#salud" },
    { name: "Bioseguridad", href: "#bioseguridad" },
    { name: "Nutrición", href: "#nutricion" },
    { name: "Asistente AI", href: "#asistente" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12 items-center">
          <div className="flex flex-col items-start scale-90 origin-left">
            <img 
              src="/logowvpa.png" 
              alt="WVPA Logo" 
              className="h-9 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-[8px] uppercase tracking-widest font-semibold text-gray-500 mt-0.5 ml-0.5">
              Rama Chilena
            </span>
          </div>


          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-semibold text-gray-600 hover:text-blue-600 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-[11px] font-bold hover:bg-blue-700 transition-all shadow-sm uppercase tracking-wider">
              Contactar
            </button>
          </div>


          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <button className="w-full bg-blue-600 text-white px-5 py-3 rounded-xl text-base font-semibold hover:bg-blue-700 transition-all shadow-sm">
                  Contactar
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}
