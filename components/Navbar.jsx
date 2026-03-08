"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Funksion për të mbyllur menynë e celularit kur klikohet një link
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-10 transition-all duration-500 ease-in-out ${
          isScrolled || isMobileMenuOpen
            ? "py-3 md:py-2 bg-[#060912]/95 backdrop-blur-lg border-b border-white/5 shadow-lg" 
            : "py-5 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logoja */}
          <a href="#home" className="flex-shrink-0 relative z-[60]" onClick={closeMobileMenu}>
            <img 
              src="/logo1.svg" 
              alt="Kreshniku Logo" 
              className={`w-auto object-contain transition-all duration-500 ${
                isScrolled || isMobileMenuOpen ? "h-12 md:h-14" : "h-16 md:h-20"
              }`} 
            />
          </a>
          
          {/* Menuja për Desktop (Kompjuter) */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#home" className="hover:text-orange-500 transition-colors">Ballina</a>
            <a href="#rreth" className="hover:text-orange-500 transition-colors">Rreth Nesh</a>
            <a href="#sherbime" className="hover:text-orange-500 transition-colors">Shërbimet</a>
            <a href="#orari" className="hover:text-orange-500 transition-colors">Oraret</a>
            <a href="#kontakt" className="hover:text-orange-500 transition-colors">Kontaktet</a>
          </div>

          {/* Butoni WhatsApp për Desktop */}
          <a href="https://wa.me/355695457266" className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-transform hover:-translate-y-0.5">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp Live
          </a>

          {/* Butoni i Menysë Mobile (Hamburger) */}
          <button 
            className="md:hidden relative z-[60] p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              // Ikona X (Mbyll)
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              // Ikona Hamburger (Hap)
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Sfondi i Menysë Mobile (Fullscreen Overlay) */}
      <div 
        className={`fixed inset-0 bg-[#060912]/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-xl font-bold text-white">
          <a href="#home" onClick={closeMobileMenu} className="hover:text-orange-500 transition-colors">Ballina</a>
          <a href="#rreth" onClick={closeMobileMenu} className="hover:text-orange-500 transition-colors">Rreth Nesh</a>
          <a href="#sherbime" onClick={closeMobileMenu} className="hover:text-orange-500 transition-colors">Shërbimet</a>
          <a href="#procesi" onClick={closeMobileMenu} className="hover:text-orange-500 transition-colors">Procesi</a>
          <a href="#rruget" onClick={closeMobileMenu} className="hover:text-orange-500 transition-colors">Rrugët</a>
          <a href="#orari" onClick={closeMobileMenu} className="hover:text-orange-500 transition-colors">Oraret</a>
          <a href="#rregullorja" onClick={closeMobileMenu} className="hover:text-orange-500 transition-colors">Rregullorja</a>
          <a href="#kontakt" onClick={closeMobileMenu} className="hover:text-orange-500 transition-colors">Kontaktet</a>
          
          <a href="https://wa.me/355695457266" onClick={closeMobileMenu} className="mt-6 flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-black text-lg shadow-[0_5px_15px_rgba(34,197,94,0.3)]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Bisedo në WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}