export default function Routes() {
  return (
    <section id="rruget" className="py-24 px-6 md:px-10 bg-[#0b132b] relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Rrugët e <span className="text-orange-500">Transportit</span>
          </h2>
          <p className="text-gray-400 text-lg">Mbulojmë çdo qytet me rrjetin tonë të specializuar, derë më derë.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Karta 1: AL -> UK */}
          <div className="bg-[#1e293b]/40 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/5 hover:border-orange-500/50 hover:shadow-[0_10px_30px_rgba(249,115,22,0.15)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
            {/* Dekorimi me ndriçim portokalli në sfond */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors"></div>
            
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="flex items-center gap-3">
                <span className="text-4xl shadow-sm rounded-md">🇦🇱</span>
                <span className="text-white font-black text-xl tracking-wider">ALB</span>
              </div>
              
              {/* Vija lidhëse e animuar */}
              <div className="flex-1 mx-6 flex items-center justify-center relative">
                <div className="w-full h-[2px] border-t-2 border-dashed border-gray-600 group-hover:border-orange-500 transition-colors duration-300"></div>
                <svg className="w-8 h-8 text-gray-500 group-hover:text-orange-500 absolute transition-colors duration-300 bg-[#151c2c] px-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-white font-black text-xl tracking-wider">UK</span>
                <span className="text-4xl shadow-sm rounded-md">🇬🇧</span>
              </div>
            </div>

            <h3 className="text-2xl font-black text-white mb-3 relative z-10">Shqipëri <span className="text-orange-500 mx-1">➔</span> Angli</h3>
            <p className="text-gray-400 leading-relaxed relative z-10">
              Transport i rregullt çdo javë. Grumbullim në të gjitha qytetet kryesore të Shqipërisë dhe dorëzim i sigurt në çdo adresë në Angli.
            </p>
          </div>

          {/* Karta 2: UK -> AL */}
          <div className="bg-[#1e293b]/40 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/5 hover:border-blue-500/50 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
            {/* Dekorimi me ndriçim blu në sfond */}
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors"></div>
            
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="flex items-center gap-3">
                <span className="text-4xl shadow-sm rounded-md">🇬🇧</span>
                <span className="text-white font-black text-xl tracking-wider">UK</span>
              </div>
              
              {/* Vija lidhëse e animuar */}
              <div className="flex-1 mx-6 flex items-center justify-center relative">
                <div className="w-full h-[2px] border-t-2 border-dashed border-gray-600 group-hover:border-blue-500 transition-colors duration-300"></div>
                <svg className="w-8 h-8 text-gray-500 group-hover:text-blue-500 absolute transition-colors duration-300 bg-[#151c2c] px-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-white font-black text-xl tracking-wider">ALB</span>
                <span className="text-4xl shadow-sm rounded-md">🇦🇱</span>
              </div>
            </div>

            <h3 className="text-2xl font-black text-white mb-3 relative z-10">Angli <span className="text-blue-500 mx-1">➔</span> Shqipëri</h3>
            <p className="text-gray-400 leading-relaxed relative z-10">
              Nisje e garantuar çdo fundjavë nga Londra. Shërbim i besueshëm dhe dorëzim i shpejtë derë më derë kudo në Shqipëri.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}