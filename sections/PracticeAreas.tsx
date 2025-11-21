type Area = { title: string; description: string; accent?: boolean }

const areas: Area[] = [
  { title: 'Founder disputes', description: 'Shareholder resolutions, exit plans, and board intervention when communication breaks down.', accent: true },
  { title: 'Commercial litigation', description: 'Quiet management of contract, IP, and vendor disputes before they escalate.' },
  { title: 'Private client matters', description: 'Structuring, trusts, and bespoke agreements for emerging wealth and family offices.' },
  { title: 'Creative studio advisory', description: 'Retained counsel for production houses and agencies needing fast, practical answers.' },
  { title: 'Fund & SPV launches', description: 'Formation and deal process for managers raising their first vehicle.' },
  { title: 'Dispute prevention', description: 'Templates, playbooks, and negotiation prep that keep issues from becoming lawsuits.', accent: true },
]

export default function PracticeAreas() {
  return (
    <section id="practice" className="w-full mt-20">
      <div className="w-full">
        <div className="mx-auto w-full max-w-7xl space-y-10 px-6 md:px-10">
          <div className="max-w-4xl space-y-4">
            <p className="text-xs capitalize text-smoke">Focus</p>
            <h2 className="font-display text-4xl leading-tight">Matters I handle most often.</h2>
            <p className="text-smoke">
              Clarity over theatrics. Every engagement begins with understanding how the dispute or decision affects the rest of your work.
            </p>
          </div>

          <div className="w-full">
            <div className="grid gap-5 md:grid-cols-3">
              {areas.map((area) => (
                <div key={area.title} className="rounded-2xl bg-white px-5 py-5 text-[#1b1a18]">
                  <p className="text-xs capitalize text-smoke">{area.title}</p>
                  <p className="mt-3 text-sm">{area.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
