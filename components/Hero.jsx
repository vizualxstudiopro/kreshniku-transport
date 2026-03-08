export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-cover bg-center pt-16" style={{ backgroundImage: "url('/images/generated-image-1.png')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/50"></div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-3 block">
          Lider në Logjistikë që nga viti 2004
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
          Transport Profesional <br />
          <span className="text-orange-500">Shqipëri ➔ Angli</span>
        </h1>
        
        <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
          Besueshmëri dhe siguri maksimale për çdo pako dhe mall. Dorëzim i shpejtë derë më derë në çdo qytet.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#orari" className="bg-orange-500 hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 text-white px-6 py-3 rounded-lg font-bold shadow-lg">
            Shiko Oraret
          </a>
          <a href="#kontakt" className="border border-white/40 hover:bg-white hover:text-slate-900 transition-all duration-300 text-white px-6 py-3 rounded-lg font-bold">
            Na Telefononi
          </a>
        </div>
      </div>
    </section>
  );
}