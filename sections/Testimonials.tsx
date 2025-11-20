export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-20 bg-white">
      <div className="container">
        <h2 className="font-display text-2xl sm:text-4xl">What Clients Say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[`Clear, actionable guidance from day one.`, `A steady hand in a tough dispute—great outcome.`, `Responsive, thoughtful, and efficient.`].map((q, i) => (
            <figure key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <blockquote className="text-slate-800">“{q}”</blockquote>
              <figcaption className="mt-3 text-sm text-slate-600">— Client</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

