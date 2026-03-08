"use client";

import { useState, useEffect } from "react";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  // Ky kod bën që Pop-up të shfaqet automatikisht 2 sekonda pasi hapet faqja
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Nëse vizitori e ka mbyllur, mos e shfaq më
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Sfondi i errët që mjegullon faqen (kur klikon jashtë, mbyllet) */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer" 
        onClick={() => setIsOpen(false)}
      ></div>
      
      {/* Karta e Njoftimit */}
      <div className="relative bg-[#0f172a] border border-orange-500/30 rounded-3xl shadow-2xl p-8 max-w-md w-full text-center transform transition-all animate-fade-in-up">
        
        {/* Butoni X për ta mbyllur */}
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* Përmbajtja e Urimit */}
        <div className="text-5xl mb-4 animate-pulse">🌙</div>
        <h3 className="text-2xl font-bold text-white mb-3">Gëzuar Ramazanin!</h3>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Stafi i Kreshniku Transport ju uron një muaj të bekuar, agjërim të lehtë dhe të pranuar për të gjithë ju dhe familjet tuaja!
        </p>
        
        {/* Butoni i Veprimit */}
        <button 
          onClick={() => setIsOpen(false)} 
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-transform hover:-translate-y-1 w-full shadow-lg shadow-orange-500/20"
        >
          Faleminderit
        </button>
      </div>
    </div>
  );
}