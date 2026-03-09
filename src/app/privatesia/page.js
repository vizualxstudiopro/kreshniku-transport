export default function Privacy() {
  return (
    <div className="bg-slate-950 text-gray-300 min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-white">Politika e Privatësisë</h1>
        <p>Në Kreshniku Transport LTD, ne vlerësojmë privatësinë tuaj. Ky dokument shpjegon se si ne mbledhim dhe përdorim të dhënat tuaja.</p>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-orange-500">1. Të dhënat që mbledhim</h2>
          <p>Ne mbledhim vetëm informacionin e nevojshëm për transportin: Emër, Mbiemër, Adresë dhe numër telefoni të dërguesit dhe marrësit.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-orange-500">2. Përdorimi i informacionit</h2>
          <p>Të dhënat përdoren ekskluzivisht për dorëzimin e pakove dhe komunikimin me klientin. Ne nuk i shesim apo ndajmë të dhënat tuaja me palë të treta.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-orange-500">3. Siguria</h2>
          <p>Të gjitha të dhënat ruhen në mënyrë të sigurt sipas ligjeve në fuqi në Shqipëri dhe Mbretërinë e Bashkuar (GDPR).</p>
        </section>
      </div>
    </div>
  );
}