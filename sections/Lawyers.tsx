import Image from 'next/image'

type Lawyer = { name: string; role: string; img: string }
const lawyers: Lawyer[] = [
  { name: 'Jordan Blake', role: 'Managing Partner', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Ava Thompson', role: 'Litigation Counsel', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Michael Chen', role: 'Corporate Associate', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop' },
]

export default function Lawyers() {
  return (
    <section id="lawyers" className="py-16 md:py-20">
      <div className="container">
        <h2 className="font-display text-2xl sm:text-4xl">Our Lawyers</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">Experienced advocates committed to practical strategy and clear communication.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lawyers.map((l) => (
            <div key={l.name} className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
              <div className="aspect-[4/5] relative">
                <Image src={l.img} alt={`${l.name}, ${l.role}`} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
              </div>
              <div className="p-4">
                <div className="font-medium text-slate-900">{l.name}</div>
                <div className="text-sm text-slate-600">{l.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
