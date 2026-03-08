export default function Gallery() {
  const photos = [
    { src: "/images/generated-image-1.png", alt: "Transporti Kreshniku", span: "md:col-span-2" },
    { src: "/images/generated-image-1 (1).png", alt: "Moment Pune", span: "" },
    { src: "/images/generated-image-1 (2).png", alt: "Paketimi", span: "" },
    { src: "/images/generated-image-1 (3).png", alt: "Rrugëtimi", span: "" },
    { src: "/images/generated-image-1 (4).png", alt: "Flota Kreshniku", span: "" },
    { src: "/images/generated-image-1 (5).png", alt: "Nisja", span: "md:col-span-2" },
    { src: "/images/generated-image-1 (6).png", alt: "Furgoni Sprinter", span: "" },
    { src: "/images/generated-image-1 (7).png", alt: "Siguria në rrugë", span: "md:col-span-2" },
    { src: "/images/generated-image-1 (8).png", alt: "Dorëzimi në destinacion", span: "" },
  ];

  return (
    <section id="galeria" className="py-24 px-6 md:px-10 bg-[#060912]">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Galeria <span className="text-orange-500">Jonë</span>
          </h2>
          <p className="text-gray-400 text-lg">Flota jonë, puna në terren dhe momentet e rrugëtimit drejt Anglisë.</p>
        </div>

        {/* Grid-i dinamik i fotove */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className={`overflow-hidden rounded-2xl group relative cursor-pointer shadow-lg ${photo.span}`}>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-64 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}