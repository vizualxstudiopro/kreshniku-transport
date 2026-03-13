export default function Contact() {
  return (
    <section id="kontakt" className="py-24 px-6 md:px-10 bg-[#0a0f1c]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Qendra e <span className="text-orange-500">Komunikimit</span>
          </h2>
          <p className="text-gray-400 text-lg">Na kontaktoni direkt për rezervime dhe pyetje.</p>
        </div>

        <div className="bg-slate-900/50 border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl">
          <div className="space-y-6">
            
            {/* Zyra Shqipëri - Numri 1 */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors border border-white/5 gap-6">
              <div className="flex flex-col">
                <span className="bg-orange-500/20 text-orange-500 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider w-fit mb-2">
                  ALBANIA 1
                </span>
                <h3 className="text-white font-semibold text-lg">Zyra Qendrore</h3>
              </div>
              <div className="text-white font-mono text-xl md:text-2xl font-bold tracking-wider">
                +355 68 64 22 652
              </div>
              <div className="flex gap-3 w-full md:w-auto justify-end">
                <a href="tel:+355686422652" className="w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white text-xl transition-all shadow-lg hover:scale-110">📞</a>
                <a href="https://wa.me/355686422652" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center text-white text-xl transition-all shadow-lg hover:scale-110">💬</a>
              </div>
            </div>

            {/* Zyra Shqipëri - Numri 2 */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors border border-white/5 gap-6">
              <div className="flex flex-col">
                <span className="bg-orange-500/20 text-orange-500 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider w-fit mb-2">
                  ALBANIA 2
                </span>
                <h3 className="text-white font-semibold text-lg">Zyra Qendrore</h3>
              </div>
              <div className="text-white font-mono text-xl md:text-2xl font-bold tracking-wider">
                +355 69 54 57 266
              </div>
              <div className="flex gap-3 w-full md:w-auto justify-end">
                <a href="tel:+355695457266" className="w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white text-xl transition-all shadow-lg hover:scale-110">📞</a>
                <a href="https://wa.me/355695457266" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center text-white text-xl transition-all shadow-lg hover:scale-110">💬</a>
              </div>
            </div>

            {/* Zyra Londër */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors border border-white/5 gap-6">
              <div className="flex flex-col">
                <span className="bg-blue-500/20 text-blue-500 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider w-fit mb-2">
                  UK LONDON
                </span>
                <h3 className="text-white font-semibold text-lg">Zyra Londër</h3>
              </div>
              <div className="text-white font-mono text-xl md:text-2xl font-bold tracking-wider">
                +44 79 31 12 42 57
              </div>
              <div className="flex gap-3 w-full md:w-auto justify-end">
                <a href="tel:+447931124257" className="w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white text-xl transition-all shadow-lg hover:scale-110">📞</a>
                <a href="https://wa.me/447931124257" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center text-white text-xl transition-all shadow-lg hover:scale-110">💬</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}