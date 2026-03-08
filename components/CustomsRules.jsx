export default function CustomsRules() {
  return (
    <section id="rregullorja" className="py-24 px-6 md:px-10 bg-[#060912] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Dogana dhe <span className="text-red-500">Rregullorja</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Për të garantuar një udhëtim të sigurt dhe pa vonesa për të gjithë, ju lutemi të respektoni rregullat doganore për përmbajtjen e pakove.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          
          {/* Kolona e Mallrave të Ndaluara (Merr 3 kolona hapësirë) */}
          <div className="md:col-span-3 bg-[#1e293b]/40 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-red-500/20 relative overflow-hidden group">
            {/* Ndriçimi në sfond */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl transition-colors group-hover:bg-red-500/10"></div>
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-12 h-12 bg-red-500/10 flex items-center justify-center rounded-xl text-red-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Rreptësisht të Ndaluara</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 relative z-10">
              <div className="flex items-start gap-3">
                <span className="text-red-500 mt-0.5">✖</span>
                <span className="text-gray-300 text-sm md:text-base">Armë, municione dhe lëndë shpërthyese</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500 mt-0.5">✖</span>
                <span className="text-gray-300 text-sm md:text-base">Lëndë narkotike dhe medikamente pa recetë</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500 mt-0.5">✖</span>
                <span className="text-gray-300 text-sm md:text-base">Cigare, duhan dhe pije alkoolike</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500 mt-0.5">✖</span>
                <span className="text-gray-300 text-sm md:text-base">Mish, bulmet dhe ushqime që prishen lehtë</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500 mt-0.5">✖</span>
                <span className="text-gray-300 text-sm md:text-base">Para në dorë (Cash) dhe bizhuteri me vlerë</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500 mt-0.5">✖</span>
                <span className="text-gray-300 text-sm md:text-base">Materiale toksike ose të rrezikshme</span>
              </div>
            </div>
          </div>

          {/* Kolona e Përgjegjësisë (Merr 2 kolona hapësirë) */}
          <div className="md:col-span-2 bg-gradient-to-br from-red-500/10 to-[#1e293b]/40 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-red-500/30 relative overflow-hidden">
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 bg-orange-500/20 flex items-center justify-center rounded-xl text-orange-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Përgjegjësia Ligjore</h3>
            </div>

            <div className="space-y-4 relative z-10">
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Çdo dërgesë i nënshtrohet <strong>kontrollit rigoroz doganor me skaner</strong> në pikat kufitare.
              </p>
              
              <div className="bg-red-500/20 border-l-4 border-red-500 p-4 rounded-r-lg mt-4">
                <p className="text-red-200 text-sm md:text-base font-medium leading-relaxed">
                  ⚠️ Klienti mban përgjegjësi të plotë ligjore dhe penale. Në rast të gjetjes së sendeve të paligjshme, pakoja konfiskohet, autoritetet njoftohen menjëherë, dhe Kreshniku Transport nuk mban asnjë përgjegjësi financiare apo ligjore.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}