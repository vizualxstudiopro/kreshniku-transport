export default function Schedule() {
  return (
    <section id="orari" className="relative py-24 px-6 md:px-10 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594191375939-2a9f939e8020?auto=format&fit=crop&w=1974')" }}>
      <div className="absolute inset-0 bg-slate-950/90"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Kalendari i <span className="text-orange-500">Nisjeve</span>
          </h2>
          <p className="text-gray-400 text-lg">Grumbullimi dhe dorëzimi i pakove bëhet <span className="text-white font-bold border-b border-orange-500">vetëm në pikat tona fizike</span>.</p>
        </div>

        {/* =========================================
            1. PAMJA PËR CELULAR (Karta Vertikale)
        =========================================== */}
        <div className="block md:hidden space-y-8">
          
          {/* Karta Mobile 1: AL -> UK */}
          <div className="bg-[#0f172a]/90 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="bg-orange-500/5 p-5 border-b border-orange-500/20 text-center">
              <span className="bg-orange-500/20 text-orange-500 font-bold px-3 py-1.5 rounded text-sm border border-orange-500/20 shadow-sm inline-block mb-2">
                SHQIPËRI ➔ ANGLI
              </span>
            </div>
            
            <div className="p-5 space-y-4">
              <div className="flex flex-col border-b border-white/5 pb-4">
                <span className="text-white font-medium text-sm mb-1">E Hënë - E Mërkurë</span>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">📍 Kukës</span>
                  <span className="text-orange-400 font-mono text-sm font-medium">10:00 - 19:00</span>
                </div>
              </div>
              
              <div className="flex flex-col border-b border-white/5 pb-4">
                <span className="text-white font-medium text-sm mb-1">E Martë - E Mërkurë</span>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">📍 Tiranë</span>
                  <span className="text-orange-400 font-mono text-sm font-medium">09:00 - 19:00</span>
                </div>
              </div>

              <div className="flex flex-col border-b border-white/5 pb-4">
                <span className="text-white font-medium text-sm mb-1">E Enjte</span>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">📍 Tiranë</span>
                  <span className="text-orange-400 font-mono text-sm font-medium">09:00 - 12:00</span>
                </div>
              </div>

              <div className="flex flex-col pb-2">
                <span className="text-white font-medium text-sm mb-1">E Enjte</span>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs pr-4 leading-tight">📍 Shkodër, Lezhë, Laç, Milot, Fushë-Krujë</span>
                  <span className="text-orange-400 font-mono text-sm font-medium whitespace-nowrap">08:00 - 10:00</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold p-4 text-center text-sm tracking-wide shadow-lg">
              🚚 NISJA: E ENJTE ORA 13:00
            </div>
          </div>

          {/* Karta Mobile 2: UK -> AL */}
          <div className="bg-[#0f172a]/90 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="bg-blue-500/5 p-5 border-b border-blue-500/20 text-center">
              <span className="bg-blue-500/20 text-blue-500 font-bold px-3 py-1.5 rounded text-sm border border-blue-500/20 shadow-sm inline-block mb-2">
                ANGLI ➔ SHQIPËRI
              </span>
              <p className="text-gray-400 text-xs mt-2">Pranojmë pako VETËM në këto 2 adresa (Jo derë më derë)</p>
            </div>
            
            <div className="p-5 space-y-4">
              <div className="flex flex-col border-b border-white/5 pb-4">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-white font-medium text-sm">E Premte</span>
                  <span className="text-blue-400 font-mono text-sm font-medium">17:00 - 20:00</span>
                </div>
                <div className="text-gray-400 text-xs">📍 272 High Road, Wood Green, N22 8JX</div>
              </div>
              
              <div className="flex flex-col pb-2">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-white font-medium text-sm">E Shtunë</span>
                  <span className="text-blue-400 font-mono text-sm font-medium">06:00 - 09:00 AM</span>
                </div>
                <div className="text-gray-400 text-xs leading-tight">📍 Colindale, London, NW9 5QY</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white font-bold p-4 text-center text-sm tracking-wide shadow-lg">
              📦 NISJA: E SHTUNË ORA 10:00
            </div>
          </div>

        </div>

        {/* =========================================
            2. PAMJA PËR DESKTOP (Tabela)
        =========================================== */}
        <div className="hidden md:block bg-[#0f172a]/90 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1e293b] text-gray-300 text-sm uppercase tracking-wider border-b border-white/10">
                  <th className="py-5 px-6 font-semibold">Drejtimi</th>
                  <th className="py-5 px-6 font-semibold">Ditët e Javës</th>
                  <th className="py-5 px-6 font-semibold">Qyteti / Adresa</th>
                  <th className="py-5 px-6 font-semibold">Orari</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300 bg-[#0f172a]/40 text-sm">
                
                {/* AL -> UK */}
                <tr className="hover:bg-white/5 transition-colors">
                  <td rowSpan={4} className="py-4 px-6 border-r border-white/5 align-top pt-8 bg-orange-500/5">
                    <span className="bg-orange-500/20 text-orange-500 font-bold px-3 py-1 rounded text-xs border border-orange-500/20">SHQIPËRI ➔ ANGLI</span>
                  </td>
                  <td className="py-4 px-6 font-medium text-white">E Hënë - E Mërkurë</td>
                  <td className="py-4 px-6">Kukës</td>
                  <td className="py-4 px-6 font-mono text-orange-400">10:00 - 19:00</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-medium text-white">E Martë - E Mërkurë</td>
                  <td className="py-4 px-6">Tiranë</td>
                  <td className="py-4 px-6 font-mono text-orange-400">09:00 - 19:00</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-medium text-white">E Enjte</td>
                  <td className="py-4 px-6">Tiranë</td>
                  <td className="py-4 px-6 font-mono text-orange-400">09:00 - 12:00</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-medium text-white">E Enjte</td>
                  <td className="py-4 px-6">Shkodër, Lezhë, Laç, Milot, Fushë-Krujë</td>
                  <td className="py-4 px-6 font-mono text-orange-400">08:00 - 10:00</td>
                </tr>
                <tr className="bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold">
                  <td colSpan={4} className="py-4 px-6 text-center tracking-widest uppercase text-xs">🚚 NISJA DREJT ANGLISË: E ENJTE ORA 13:00</td>
                </tr>

                {/* UK -> AL */}
                <tr className="hover:bg-white/5 transition-colors">
                  <td rowSpan={2} className="py-4 px-6 border-r border-white/5 align-top pt-8 bg-blue-500/5">
                    <div className="flex flex-col gap-2 items-start">
                      <span className="bg-blue-500/20 text-blue-500 font-bold px-3 py-1 rounded text-xs border border-blue-500/20">ANGLI ➔ SHQIPËRI</span>
                      <span className="text-[10px] text-gray-400 leading-tight">(Vetëm në 2 pika fizike. Jo derë më derë)</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-medium text-white">E Premte</td>
                  <td className="py-4 px-6">Wood Green, N22 8JX (272 High Road)</td>
                  <td className="py-4 px-6 font-mono text-blue-400">17:00 - 20:00</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-medium text-white">E Shtunë</td>
                  <td className="py-4 px-6">Colindale, London, NW9 5QY (Grahame Park Way)</td>
                  <td className="py-4 px-6 font-mono text-blue-400">06:00 - 09:00 AM</td>
                </tr>
                <tr className="bg-gradient-to-r from-blue-700 to-blue-600 text-white font-bold">
                  <td colSpan={4} className="py-4 px-6 text-center tracking-widest uppercase text-xs">📦 NISJA DREJT SHQIPËRISË: E SHTUNË ORA 10:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}