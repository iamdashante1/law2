const navColumns = [
  {
    title: 'Expertise',
    items: ['Founder disputes', 'Commercial litigation', 'Private client matters', 'Creative studios'],
  },
  {
    title: 'Engagement',
    items: ['Process', 'Cadence', 'FAQ', 'Newsletter'],
  },
  {
    title: 'Offices',
    items: ['New York', 'Remote / GMT-4', 'By appointment only'],
  },
]

export default function Footer() {
  return (
    <footer className="mt-20 bg-white text-sm text-smoke">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-12 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <p className="text-[11px] capitalize">Adrian Vega - Attorney at Law</p>
            <h3 className="font-display text-3xl text-charcoal">Independent litigation and advisory for builders and families.</h3>
            <p>
              I work directly with founders, studios, and family offices to manage disputes, negotiate better outcomes, and design simple structures.
            </p>
            <div className="flex flex-wrap gap-6 text-xs capitalize">
              <span>+1 (347) 555-0144</span>
              <span>avega@briefstudio.com</span>
              <span>New York · Remote</span>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {navColumns.map((column) => (
              <div key={column.title} className="space-y-3">
                <p className="text-xs capitalize text-smoke">{column.title}</p>
                <ul className="space-y-2 text-sm">
                  {column.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-charcoal/10 pt-6 text-xs capitalize md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Adrian Vega PLLC · All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#practice">Expertise</a>
            <a href="#services">Process</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
