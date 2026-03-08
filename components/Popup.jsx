"use client";

import { useState, useEffect } from "react";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHoliday, setActiveHoliday] = useState(null);

  // Kalendari Zyrtar Shqiptar (Fikse çdo vit)
  const holidays = {
    "01-01": { icon: "🎆", title: "Gëzuar Vitin e Ri!", message: "Stafi i Kreshniku Transport ju uron një vit të mbarë, me shëndet, suksese dhe rrugë të hapura!" },
    "01-02": { icon: "🎆", title: "Gëzuar Vitin e Ri!", message: "Stafi i Kreshniku Transport ju uron një vit të mbarë, me shëndet, suksese dhe rrugë të hapura!" },
    "03-07": { icon: "📖", title: "Gëzuar 7 Marsin!", message: "Gëzuar Ditën e Mësuesit! Mirënjohje për të gjithë ata që përhapin dritën e dijes." },
    "03-08": { icon: "💐", title: "Gëzuar 8 Marsin!", message: "Gëzuar Ditën e Nënës dhe të Gruas! Respekt, dashuri dhe mirënjohje pafund për ju." },
    "03-14": { icon: "🌸", title: "Gëzuar Ditën e Verës!", message: "Kreshniku Transport ju uron një pranverë të bukur dhe plot mbarësi për ju dhe familjet tuaja!" },
    "03-22": { icon: "🌿", title: "Gëzuar Nevruzin!", message: "Gëzuar Festën e Sulltan Nevruzit! Shëndet, paqe dhe begati në vatrat tuaja." },
    "05-01": { icon: "🛠️", title: "Gëzuar 1 Majin!", message: "Gëzuar Ditën Ndërkombëtare të Punëtorëve nga i gjithë stafi ynë!" },
    "09-05": { icon: "🕊️", title: "Dita e Nënë Terezës", message: "Sot kujtojmë me krenari humanisten tonë të madhe, Shën Terezën. Paqe dhe dashuri për të gjithë!" },
    "11-28": { icon: "🦅", title: "Gëzuar Pavarësinë!", message: "Gëzuar Festën e Flamurit! Gëzuar 28 Nëntorin të gjithë shqiptarëve kudo që ndodhen." },
    "11-29": { icon: "🇦🇱", title: "Gëzuar Ditën e Çlirimit!", message: "Kreshniku Transport ju uron Gëzuar 29 Nëntorin! Nderim atyre që sollën lirinë." },
    "12-08": { icon: "✌️", title: "Dita e Rinisë", message: "Gëzuar Ditën Kombëtare të Rinisë! Rinia është e ardhmja dhe forca lëvizëse e kombit." },
    "12-25": { icon: "🎄", title: "Gëzuar Krishtlindjet!", message: "Paqja dhe gëzimi qofshin me ju në këtë ditë të shenjtë të Krishtlindjeve!" },
    
    // Festat e lëvizshme fetare (Këto janë datat për vitin 2026, mund t'i ndryshosh vitin tjetër)
    "03-20": { icon: "🌙", title: "Gëzuar Fitër Bajramin!", message: "Stafi ynë ju uron Gëzuar Fitër Bajramin! Paqja dhe mëshira e Zotit qofshin mbi ju." },
    "04-05": { icon: "🥚", title: "Gëzuar Pashkët!", message: "Gëzuar Pashkët Katolike! Dritë, mbarësi dhe gëzim në familjet tuaja." },
    "04-12": { icon: "🥚", title: "Gëzuar Pashkët!", message: "Gëzuar Pashkët Ortodokse! Dritë, mbarësi dhe gëzim në familjet tuaja." },
    "05-27": { icon: "🕋", title: "Gëzuar Kurban Bajramin!", message: "Gëzuar Kurban Bajramin! Zoti ju pranoftë lutjet dhe sakrificat tuaja." }
  };

  useEffect(() => {
    // Merr datën e sotme dhe e kthen në formatin "MM-DD"
    const today = new Date();
    const currentMonth = String(today.getMonth() + 1).padStart(2, '0');
    const currentDay = String(today.getDate()).padStart(2, '0');
    const dateString = `${currentMonth}-${currentDay}`;

    // Kontrollon nëse sot ka ndonjë festë
    if (holidays[dateString]) {
      setActiveHoliday(holidays[dateString]);
      
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen || !activeHoliday) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer" 
        onClick={() => setIsOpen(false)}
      ></div>
      
      <div className="relative bg-[#0f172a] border border-orange-500/30 rounded-3xl shadow-2xl p-8 max-w-md w-full text-center transform transition-all animate-fade-in-up">
        
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="text-5xl mb-4 animate-bounce">{activeHoliday.icon}</div>
        <h3 className="text-2xl font-bold text-white mb-3">{activeHoliday.title}</h3>
        <p className="text-gray-400 mb-8 leading-relaxed">
          {activeHoliday.message}
        </p>
        
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