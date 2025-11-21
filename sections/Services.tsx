const steps = [
  {
    title: 'Listen',
    description:
      'Every engagement begins with a working session. We define what “resolved” looks like and what needs protecting as we move.',
    accent: true,
  },
  {
    title: 'Clarify',
    description: 'Expect direct memos, timelines, and check-ins. You always know the next decision and who owns it.',
  },
  {
    title: 'Resolve',
    description:
      'Negotiation, filings, or trial prep—whatever the venue requires, we stay lean and coordinate with your existing operators.',
  },
]

export default function Services() {
  return (
    <section id="services" className="w-full bg-white mt-20 py-10">
      <div className="w-full">
        <div className="mx-auto w-full max-w-7xl space-y-10 px-6 md:px-10">
          <div className="max-w-4xl space-y-4">
            <p className="text-xs capitalize text-smoke">Process</p>
            <h2 className="font-display text-4xl leading-tight">Simple structure, no theatrics.</h2>
            <p className="text-smoke">
              You work directly with me. No endless forwarding chains, no surprise teams. We keep documents lightweight and
              hold each other accountable to timelines.
            </p>
          </div>

          <div className="w-full bg-white p-8">
            <div className="grid gap-5 md:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step.title} className={`${step.accent ? 'card-accent' : 'card'} bg-cream`}>
                  <p className="text-xs capitalize text-smoke">Step {String(index + 1).padStart(2, '0')}</p>
                  <h3 className="mt-3 font-display text-2xl">{step.title}</h3>
                  <p className="mt-3 text-sm">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="card bg-cream text-sm mt-6">
              <p className="text-xs capitalize text-smoke">Cadence</p>
              <p className="mt-3">
                Weekly standing calls when matters are active, plus same-day replies on anything urgent. Expect drafts directly in your inbox or shared
                doc—no portals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
