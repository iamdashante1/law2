import { Briefcase, Scale, Shield } from 'lucide-react'

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20">
      <div className="container">
        <h2 className="font-display text-2xl sm:text-4xl">Services</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">Practical, business‑minded legal solutions delivered with responsiveness and clarity.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-brand-100 flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-brand-700" />
            </div>
            <h3 className="mt-4 font-medium text-slate-900">Business & Contracts</h3>
            <p className="mt-1 text-sm text-slate-600">Entity setup, commercial agreements, and ongoing advisory.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-brand-100 flex items-center justify-center">
              <Scale className="h-5 w-5 text-brand-700" />
            </div>
            <h3 className="mt-4 font-medium text-slate-900">Disputes & Litigation</h3>
            <p className="mt-1 text-sm text-slate-600">Early case assessment, negotiation, and courtroom advocacy.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-brand-100 flex items-center justify-center">
              <Shield className="h-5 w-5 text-brand-700" />
            </div>
            <h3 className="mt-4 font-medium text-slate-900">Risk & Compliance</h3>
            <p className="mt-1 text-sm text-slate-600">Policy design, regulatory guidance, and internal investigations.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

