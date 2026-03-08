export default function Footer() {
  return (
    <footer className="bg-[#060912] pt-16 border-t border-white/5 mt-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 pb-12">
        
        {/* Kolona 1: Branding me Logo */}
        <div>
          <img src="/logo1.svg" alt="Kreshniku Logo" className="h-28 md:h-36 w-auto mb-6" />
          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
            Partneri juaj i besuar për çdo dërgesë drejt Anglisë. Eksperiencë, Siguri dhe Shpejtësi që nga viti 2004.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/people/Kreshnikutransport/100063949727095/" target="_blank" rel="noreferrer" className="w-9 h-9 bg-white/5 rounded-md flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
            </a>
            <a href="https://www.instagram.com/kreshniku.transport/" target="_blank" rel="noreferrer" className="w-9 h-9 bg-white/5 rounded-md flex items-center justify-center text-white hover:bg-pink-600 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>

        {/* Kolona 2: Navigimi */}
        <div>
          <h4 className="text-white font-bold text-base mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-6 after:h-0.5 after:bg-orange-500">
            Navigimi
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#home" className="hover:text-orange-500 transition-colors">Ballina</a></li>
            <li><a href="#orari" className="hover:text-orange-500 transition-colors">Oraret e Nisjeve</a></li>
            <li><a href="#kontakt" className="hover:text-orange-500 transition-colors">Kontaktet</a></li>
          </ul>
        </div>

        {/* Kolona 3: Orari */}
        <div>
          <h4 className="text-white font-bold text-base mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-6 after:h-0.5 after:bg-orange-500">
            Orari i Zyrave
          </h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              E Hënë - E Premte: 09:00 - 19:00
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              E Shtunë: 09:00 - 14:00
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-black/40 py-5 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center text-[13px] text-gray-500">
          <p>© 2026 Kreshniku Transport. Të gjitha të drejtat e rezervuara.</p>
          <p className="mt-2 md:mt-0">Developed by <span className="text-orange-500 font-bold tracking-wide">VizualX studio</span></p>
        </div>
      </div>
    </footer>
  );
}