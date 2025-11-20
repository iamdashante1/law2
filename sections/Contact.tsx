import AnimatedButton from '@/components/AnimatedButton'
import { Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-brand-50/60">
      <div className="container max-w-4xl">
        <h2 className="font-display text-2xl sm:text-4xl">Get In Touch</h2>
        <p className="mt-2 text-slate-600">Tell us a bit about your matter and we’ll follow up promptly.</p>

        <form className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="block text-sm text-slate-700">Name</label>
            <input className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-brand-300" placeholder="Your name" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm text-slate-700">Email</label>
            <input type="email" className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-brand-300" placeholder="you@example.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-slate-700">Message</label>
            <textarea className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-brand-300" rows={4} placeholder="How can we help?" />
          </div>
          <div className="sm:col-span-2 flex items-center gap-3">
            <AnimatedButton type="submit" variant="primary"><Mail className="h-4 w-4" /> Send</AnimatedButton>
            <AnimatedButton href="tel:(555)123-4567" variant="outline"><Phone className="h-4 w-4" /> Call (555) 123-4567</AnimatedButton>
          </div>
        </form>
      </div>
    </section>
  )
}

