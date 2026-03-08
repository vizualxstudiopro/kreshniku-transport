export default function About() {
  return (
    <section id="rreth" className="py-20 px-6 md:px-10 bg-[#0b132b]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Kolona e Tekstit */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Rreth <span className="text-orange-500">Nesh</span>
          </h2>
          
          <p className="text-gray-400 leading-relaxed text-lg">
            <strong>Kreshniku Transport</strong> është një kompani profesionale që ofron shërbime transporti për mallra midis Shqipërisë dhe Anglisë, si dhe në drejtim të kundërt.
          </p>
          
          <p className="text-gray-400 leading-relaxed text-lg">
            Garantojmë transport të sigurt, të shpejtë dhe të besueshëm duke u përshtatur me nevojat e çdo klienti. Eksperienca jonë prej vitesh në këtë treg na bën partnerin ideal për dërgesat tuaja.
          </p>
          
          {/* Statistikat e Shpejta */}
          <div className="flex gap-8 pt-4">
            <div className="border-l-2 border-orange-500 pl-4">
              <h4 className="text-white font-black text-3xl mb-1">20+</h4>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Vite Eksperiencë</p>
            </div>
            <div className="border-l-2 border-orange-500 pl-4">
              <h4 className="text-white font-black text-3xl mb-1">100%</h4>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Të Sigurta</p>
            </div>
          </div>
        </div>

        {/* Kolona e Imazhit me Efekt Ndriçimi */}
        <div className="relative mt-10 md:mt-0">
          <div className="absolute inset-0 bg-orange-500/20 blur-[50px] rounded-full"></div>
          <img 
            src="/images/generated-image-1.png" 
            alt="Furgoni Kreshniku Transport" 
            className="relative z-10 rounded-2xl shadow-2xl border border-white/10 w-full object-cover h-[350px] md:h-[450px]"
          />
        </div>

      </div>
    </section>
  );
}