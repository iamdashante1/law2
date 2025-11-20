export default function PracticeAreas() {
  const areas = ['Employment', 'Commercial', 'Real Estate', 'IP & Tech', 'Compliance', 'Mediation']
  return (
    <section id="practice" className="py-16 md:py-20 bg-brand-50/50">
      <div className="container">
        <h2 className="font-display text-2xl sm:text-4xl">Practice Areas</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">Depth across key domains to meet you where you are.</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {areas.map((a) => (
            <span key={a} className="inline-flex items-center rounded-full border border-brand-200 bg-white px-4 py-1.5 text-sm text-slate-700">
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

