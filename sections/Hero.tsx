'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShieldCheck, Phone, ArrowRight } from 'lucide-react'
import AnimatedButton from '@/components/AnimatedButton'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-brand-50" />
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="container relative min-h-[72vh] md:min-h-[78vh] py-20 md:py-28 grid md:grid-cols-2 items-center gap-10">
        {/* Left: Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs text-slate-700"
          >
            <ShieldCheck className="h-4 w-4 text-brand-700" /> Trusted counsel for complex matters
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4 font-display text-3xl sm:text-5xl md:text-6xl tracking-tight"
          >
            Practical Counsel. Clear Strategy.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 max-w-xl sm:max-w-2xl text-slate-600"
          >
            We help you navigate disputes, contracts, and risk with confidence—so you can move forward and focus on what matters most.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4"
          >
            <AnimatedButton href="#contact" variant="accent" className="w-full sm:w-auto">
              <ShieldCheck className="h-5 w-5" /> Book a Consultation
            </AnimatedButton>
            <AnimatedButton href="tel:(555)123-4567" variant="outline" className="w-full sm:w-auto">
              <Phone className="h-5 w-5" /> (555) 123-4567
            </AnimatedButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 text-sm text-slate-600 flex items-center gap-2"
          >
            <span>As featured in</span>
            <span className="tracking-wider">Chambers</span>
            <span className="tracking-wider">Law360</span>
            <span className="tracking-wider">ABA Journal</span>
          </motion.div>
        </div>

        {/* Right: Image card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 aspect-[3/4]">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop"
              alt="Professional lawyer portrait"
              fill
              sizes="(min-width: 1024px) 28rem, (min-width: 640px) 60vw, 90vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:block">
            <a href="#practice" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm text-slate-700 shadow ring-1 ring-slate-200">
              Explore practice areas <ArrowRight className="h-4 w-4 text-brand-700" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
