import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-brand-50/60">
      <div className="container py-8 sm:py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-lg mb-3 text-slate-900">Crownstone Lawyers</h3>
          <p className="text-slate-600 text-sm">Clear guidance and practical advocacy for businesses and individuals.</p>
        </div>
        <div>
          <h4 className="font-medium mb-3 text-slate-900">Contact</h4>
          <ul className="space-y-2 text-slate-700 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-700" /> (555) 123-4567</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand-700" /> info@yourfirm.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-700" /> 100 Main St, Suite 200, Anytown</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3 text-slate-900">Hours</h4>
          <p className="text-slate-700 text-sm">Mon–Fri 9:00–17:00</p>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-white/60">
        <div className="container py-3 sm:py-4 pb-[env(safe-area-inset-bottom)] text-xs text-slate-600">&copy; {new Date().getFullYear()} Crownstone Lawyers. All rights reserved.</div>
     </div>
    </footer>
  )
}
