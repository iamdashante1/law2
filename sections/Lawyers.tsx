const stats = [
  { label: 'Years advising founders', value: '12' },
  { label: 'Matters per year', value: '30' },
  { label: 'Languages', value: '3' },
]

const clients = [
  'Seed to Series C teams scaling internationally',
  'Creative studios needing retained counsel',
  'Family offices navigating private investments',
]

const promises = [
  'Every matter begins with a working session to understand the people involved.',
  'Communication stays direct—my phone, my inbox, no handlers.',
  'Preparation is visible: written briefs, timelines, and risk flags before we move.',
]

export default function Lawyers() {
  return (
    <section id="lawyers" className="w-full mt-20">
      <div className="w-full">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-12 md:px-12 lg:flex-row">
          <div className="flex-1 space-y-6 text-left">
            <p className="text-xs capitalize text-smoke">About</p>
            <h2 className="font-display text-4xl leading-tight">A solo practice built to sit inside your team.</h2>
            <p>
              I spent a decade inside big-law litigation groups before choosing a smaller practice on purpose. Clients work directly with me,
              getting courtroom instincts plus the speed of an embedded operator.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="card bg-white text-center">
                  <p className="text-3xl font-display">{stat.value}</p>
                  <p className="mt-2 text-xs capitalize text-smoke">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="space-y-2 text-sm text-smoke">
              <p>Fordham Law, J.D. · Columbia University, B.A. Political Science</p>
              <p>Admissions: New York, New Jersey · NYC Bar Startup & Emerging Companies Committee</p>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div className="card bg-white space-y-4">
              <p className="text-xs capitalize text-smoke">Who I sit with</p>
              <ul className="space-y-3 text-sm">
                {clients.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card bg-white space-y-4">
              <p className="text-xs capitalize text-smoke">What to expect</p>
              <ul className="space-y-3 text-sm">
                {promises.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card bg-white space-y-2">
              <p className="text-xs capitalize text-smoke">Direct line</p>
              <p className="text-lg font-display text-charcoal">+1 (347) 555-0144</p>
              <p className="text-smoke">No assistants—just me.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
