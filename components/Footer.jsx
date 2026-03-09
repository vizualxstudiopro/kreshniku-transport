export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Informacioni i Biznesit */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white tracking-tight">KRESHNIKU <span className="text-orange-500">TRANSPORT</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lidhja juaj e sigurt dhe e shpejtë midis Shqipërisë dhe Anglisë. Transportojmë pakot dhe vlerat tuaja me korrektësi maksimale.
            </p>
            {/* Statusi i Regjistrimit me Tik Verifikimi */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-green-500 font-medium text-sm">
                <span className="bg-green-500/10 p-1 rounded-full text-[10px]">✓</span>
                <span>Biznes i Verifikuar</span>
              </div>
              <a 
                href="https://find-and-update.company-information.service.gov.uk/company/15111779" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 text-xs transition-colors flex flex-col"
              >
                <span>KRESHNIKU TRANSPORT LTD</span>
                <span className="font-mono mt-0.5">Company No: 15111779 (UK)</span>
              </a>
            </div>
          </div>

          {/* 2. Pikat Fizike (Grumbullimi) */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest">Pikat Fizike</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">📍 Tiranë</li>
              <li className="flex items-center gap-2">📍 Kukës</li>
              <li className="flex items-center gap-2">📍 Shkodër</li>
              <li className="flex items-center gap-2 border-t border-white/5 pt-2">📍 Wood Green (N22 8JX)</li>
              <li className="flex items-center gap-2">📍 Colindale (NW9 5QY)</li>
            </ul>
          </div>

          {/* 3. Zonat në Tranzit */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest">Gjatë Udhëtimit</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>• Lezhë</li>
              <li>• Laç</li>
              <li>• Milot</li>
              <li>• Fushë-Krujë</li>
            </ul>
          </div>

          {/* 4. Kontakti */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest">Na Kontaktoni</h4>
            <div className="space-y-4">
              <a href="tel:+447931124257" className="flex items-center gap-3 text-gray-400 hover:text-orange-500 transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-orange-500/20">📞</div>
                <span className="font-mono text-sm">+44 79 31 12 42 57</span>
              </a>
              <div className="flex gap-4 pt-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-orange-500/20 cursor-pointer transition-colors text-white text-xl">📸</div>
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-500/20 cursor-pointer transition-colors text-white text-xl">📘</div>
              </div>
            </div>
          </div>
        </div>

        {/* Shiriti i Fundit */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 Kreshniku Transport LTD. Të gjitha të drejtat të rezervuara.
          </p>
          <div className="flex gap-6">
            <span className="text-gray-500 text-xs hover:text-gray-400 cursor-pointer">Termat dhe Kushtet</span>
            <span className="text-gray-500 text-xs hover:text-gray-400 cursor-pointer">Privatësia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}