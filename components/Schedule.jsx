export default function Schedule() {
  return (
    <section id="orari" className="relative py-24 px-6 md:px-10 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594191375939-2a9f939e8020?auto=format&fit=crop&w=1974')" }}>
      {/* Sfondi i errët mbi foto */}
      <div className="absolute inset-0 bg-slate-950/90"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Kalendari i <span className="text-orange-500">Nisjeve</span>
          </h2>
          <p className="text-gray-400 text-lg">Orari zyrtar i grumbullimit dhe nisjeve për çdo destinacion.</p>
        </div>

        {/* =========================================
            1. PAMJA PËR CELULAR (Karta Vertikale) 
            Kjo shfaqet vetëm në ekrane të vogla!
        =========================================== */}
        <div className="block md:hidden space-y-8">
          
          {/* Karta Mobile 1: AL -> UK */}
          <div className="bg-[#0f172a]/90 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="bg-orange-500/5 p-5 border-b border-orange-500/20 text-center">
              <span className="bg-orange-500/20 text-orange-500 font-bold px-3 py-1.5 rounded text-sm border border-orange-500/20 shadow-sm inline-block mb-2">
                SHQIPËRI ➔ ANGLI
              </span>
              <div className="text-xs text-gray-500 uppercase tracking-widest">Çdo Javë</div>
            </div>
            
            <div className="p-5 space-y-4">
              {/* Rreshti 1 */}
              <div className="flex flex-col border-b border-white/5 pb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white font-medium text-sm">E Hënë - E Mërkurë</span>
                  <span className="text-orange-400 font-mono text-sm font-medium">10:00 - 19:00</span>
                </div>
                <div className="text-gray-400 text-sm">📍 Kukës</div>
              </div>
              
              {/* Rreshti 2 */}
              <div className="flex flex-col border-b border-white/5 pb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white font-medium text-sm">E Martë - E Enjte</span>
                  <span className="text-orange-400 font-mono text-sm font-medium">Deri 11:00 (Të enjten)</span>
                </div>
                <div className="text-gray-400 text-sm">📍 Tiranë</div>
              </div>

              {/* Rreshti 3 */}
              <div className="flex flex-col pb-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white font-medium text-sm">E Enjte</span>
                  <span className="text-orange-400 font-mono text-sm font-medium">08:00 - 10:00</span>
                </div>
                <div className="text-gray-400 text-sm leading-relaxed">📍 Shkodër, Lezhë, Laç, Milot, Fushë-Krujë</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold p-4 text-center text-sm tracking-wide shadow-lg">
              🚚 NISJA: E ENJTE ORA 12:00
            </div>
          </div>

          {/* Karta Mobile 2: UK -> AL */}
          <div className="bg-[#0f172a]/90 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="bg-blue-500/5 p-5 border-b border-blue-500/20 text-center">
              <span className="bg-blue-500/20 text-blue-500 font-bold px-3 py-1.5 rounded text-sm border border-blue-500/20 shadow-sm inline-block mb-2">
                ANGLI ➔ SHQIPËRI
              </span>
              <div className="text-xs text-gray-500 uppercase tracking-widest">Çdo Fundjavë</div>
            </div>
            
            <div className="p-5 space-y-4">
              {/* Rreshti 1 */}
              <div className="flex flex-col border-b border-white/5 pb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white font-medium text-sm">E Premte</span>
                  <span className="text-blue-400 font-mono text-sm font-medium">06:00 - 09:00</span>
                </div>
                <div className="text-gray-400 text-sm">📍 Wood Green (N22 8JX)</div>
              </div>
              
              {/* Rreshti 2 */}
              <div className="flex flex-col pb-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white font-medium text-sm">E Shtunë</span>
                  <span className="text-blue-400 font-mono text-sm font-medium">06:00 - 09:00</span>
                </div>
                <div className="text-gray-400 text-sm">📍 Colindale (NW9 5QY)</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white font-bold p-4 text-center text-sm tracking-wide shadow-lg border-b-0">
              📦 DORËZIMI: BRENDA 3-4 DITËVE DERË MË DERË
            </div>
          </div>

        </div>


        {/* =========================================
            2. PAMJA PËR DESKTOP (Tabela e Plotë)
            Kjo fshihet në celular dhe shfaqet në PC!
        =========================================== */}
        <div className="hidden md:block bg-[#0f172a]/90 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[850px]">
              
              {/* Koka e Tabelës */}
              <thead>
                <tr className="bg-[#1e293b] text-gray-300 text-sm uppercase tracking-wider border-b border-white/10">
                  <th className="py-5 px-6 font-semibold w-1/4">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Drejtimi
                    </div>
                  </th>
                  <th className="py-5 px-6 font-semibold w-1/4">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      Ditët e Javës
                    </div>
                  </th>
                  <th className="py-5 px-6 font-semibold w-1/4">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      Qyteti / Adresa
                    </div>
                  </th>
                  <th className="py-5 px-6 font-semibold w-1/4">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Orari i Grumbullimit
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/5 text-gray-300 bg-[#0f172a]/40">
                
                {/* ---------- GRUPI 1: SHQIPËRI -> ANGLI ---------- */}
                <tr className="hover:bg-white/5 transition-colors">
                  <td rowSpan={3} className="py-4 px-6 border-r border-white/5 align-top pt-8 bg-orange-500/5">
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                      <span className="bg-orange-500/20 text-orange-500 font-bold px-3 py-1.5 rounded text-sm w-max border border-orange-500/20 shadow-sm">
                        SHQIPËRI ➔ ANGLI
                      </span>
                      <span className="text-xs text-gray-500 uppercase tracking-widest mt-2">Çdo Javë</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-medium text-white border-l-2 border-transparent hover:border-orange-500">E Hënë - E Mërkurë</td>
                  <td className="py-4 px-6">Kukës</td>
                  <td className="py-4 px-6 font-mono text-orange-400 font-medium">10:00 - 19:00</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-medium text-white border-l-2 border-transparent hover:border-orange-500">E Martë - E Enjte</td>
                  <td className="py-4 px-6">Tiranë</td>
                  <td className="py-4 px-6 font-mono text-orange-400 font-medium">Deri të enjten 13:00</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-medium text-white border-l-2 border-transparent hover:border-orange-500">E Enjte</td>
                  <td className="py-4 px-6">Shkodër, Lezhë, Laç, Milot, Fushë-Krujë</td>
                  <td className="py-4 px-6 font-mono text-orange-400 font-medium">08:00 - 10:00</td>
                </tr>
                <tr className="bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold shadow-lg">
                  <td colSpan={4} className="py-4 px-6 text-center tracking-widest text-sm md:text-base">
                    🚚 NISJA QENDRORE: E ENJTE ORA 12:00
                  </td>
                </tr>

                {/* ---------- GRUPI 2: ANGLI -> SHQIPËRI ---------- */}
                <tr className="hover:bg-white/5 transition-colors">
                  <td rowSpan={2} className="py-4 px-6 border-r border-white/5 align-top pt-8 bg-blue-500/5">
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                      <span className="bg-blue-500/20 text-blue-500 font-bold px-3 py-1.5 rounded text-sm w-max border border-blue-500/20 shadow-sm">
                        ANGLI ➔ SHQIPËRI
                      </span>
                      <span className="text-xs text-gray-500 uppercase tracking-widest mt-2">Çdo Fundjavë</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-medium text-white border-l-2 border-transparent hover:border-blue-500">E Premte</td>
                  <td className="py-4 px-6">Wood Green <span className="text-gray-500 text-sm ml-1">(N22 8JX)</span></td>
                  <td className="py-4 px-6 font-mono text-blue-400 font-medium">06:00 - 09:00</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-medium text-white border-l-2 border-transparent hover:border-blue-500">E Shtunë</td>
                  <td className="py-4 px-6">Colindale <span className="text-gray-500 text-sm ml-1">(NW9 5QY)</span></td>
                  <td className="py-4 px-6 font-mono text-blue-400 font-medium">06:00 - 09:00</td>
                </tr>
                <tr className="bg-gradient-to-r from-blue-700 to-blue-600 text-white font-bold shadow-lg border-b-0">
                  <td colSpan={4} className="py-4 px-6 text-center tracking-widest text-sm md:text-base">
                    📦 DORËZIMI: BRENDA 3-4 DITËVE DERË MË DERË NË TË GJITHË SHQIPËRINË
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}