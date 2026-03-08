export default function Process() {
  return (
    <section id="procesi" className="py-24 px-6 md:px-10 bg-[#0b132b]">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Procesi i <span className="text-orange-500">Transportit</span>
          </h2>
          <p className="text-gray-400 text-lg">Nga dera juaj në destinacion me 3 hapa të thjeshtë e të sigurt.</p>
        </div>

        {/* Struktura e Linjës së Kohës */}
        <div className="grid md:grid-cols-3 gap-10 relative">
          
          {/* Vija lidhëse në sfond (Shfaqet vetëm në Desktop) */}
          <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-1 bg-white/5 z-0"></div>

          {/* Hapi 1 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-[#1e293b] rounded-full border-4 border-[#0b132b] shadow-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
              <span className="text-2xl font-black text-white">1</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Grumbullimi</h3>
            <p className="text-gray-400 leading-relaxed px-4">
              Marrim mallrat në çdo qytet të Shqipërisë dhe Anglisë. Shkojmë direkt në adresën apo shtëpinë tuaj.
            </p>
          </div>

          {/* Hapi 2 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-[#1e293b] rounded-full border-4 border-[#0b132b] shadow-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
              <span className="text-2xl font-black text-white">2</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Transporti</h3>
            <p className="text-gray-400 leading-relaxed px-4">
              Furgonët tanë Sprinter nisen në orare fikse dhe transportojnë dërgesat tuaja me siguri maksimale.
            </p>
          </div>

          {/* Hapi 3 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-[#1e293b] rounded-full border-4 border-[#0b132b] shadow-xl flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
              <span className="text-2xl font-black text-white">3</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Dorëzimi</h3>
            <p className="text-gray-400 leading-relaxed px-4">
              Dorëzim i shpejtë në derën e marrësit brenda 3-4 ditëve, duke siguruar që çdo pako mbërrin e paprekur.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}