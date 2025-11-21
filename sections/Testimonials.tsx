const testimonials = [
  {
    quote:
      'Adrian walked me through a founder dispute with total calm. Agreements were clear, fair, and we wrapped everything inside a month.',
    author: 'Co-founder, Series A SaaS',
  },
  {
    quote: 'He feels like an operator first and a lawyer second. Notes were concise and decisions happened faster.',
    author: 'Managing Director, Creative Studio',
  },
  {
    quote: 'No heavy-handed theatrics—just thoughtful preparation and decisive advocacy when we needed it.',
    author: 'Principal, Emerging Fund',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-white mt-20 py-10">
      <div className="w-full">
        <div className="mx-auto w-full max-w-7xl space-y-8 px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="text-xs capitalize text-smoke">Clients</p>
            <h2 className="mt-3 font-display text-4xl leading-tight">Quiet feedback from the people I serve.</h2>
            <p className="mt-4 text-smoke">Most of my work is referral-based. Here is what returning clients note most often.</p>
          </div>

          <div className="w-full bg-white p-8">
            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map((item, idx) => (
                <figure key={item.author} className={`${idx === 0 ? 'card-accent' : 'card'} bg-cream space-y-3`}>
                  <blockquote className="text-lg leading-relaxed text-charcoal">“{item.quote}”</blockquote>
                  <figcaption className="text-sm capitalize text-smoke">{item.author}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
