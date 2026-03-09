"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Kontrollojmë nëse përdoruesi e ka pranuar më parë
    const consent = localStorage.getItem("kreshniku_cookies_accepted");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("kreshniku_cookies_accepted", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[150] p-4 md:p-6 bg-slate-900/95 backdrop-blur-md border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] animate-fade-in-up">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3 text-sm text-gray-300 text-center md:text-left">
          <span className="text-2xl">🍪</span>
          <p>
            Ky uebsajt përdor "cookies" për t'ju ofruar një përvojë më të mirë lundrimi. 
            Duke vazhduar, ju pranoni përdorimin e tyre sipas 
            <Link href="/privatesia" className="text-orange-500 hover:text-orange-400 font-medium ml-1 underline underline-offset-4">
              Politikës së Privatësisë
            </Link>.
          </p>
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <button 
            onClick={acceptCookies}
            className="flex-1 md:flex-none bg-orange-500 hover:bg-orange-600 text-white px-8 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-orange-500/20 active:scale-95"
          >
            Pranoj
          </button>
        </div>
      </div>
    </div>
  );
}