'use client'
import { motion } from 'framer-motion'
import AnimatedButton from '@/components/AnimatedButton'

const MotionDiv = motion.div as any

const stats = [
  { label: 'Years in practice', value: '12' },
  { label: 'Founder clients', value: '140+' },
  { label: 'Average response', value: '< 2 hrs' },
]

export default function Hero() {
  return (
    <section className="w-full bg-white py-32 text-charcoal">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-6 text-center md:px-12">
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 max-w-6xl"
        >
          <p className="font-display text-sm text-smoke">Independent litigation & advisory practice</p>
          <h1 className="font-display text-4xl leading-tight sm:text-5xl">
            Deliberate legal guidance for people building something new.
          </h1>
          <p className="text-base text-smoke">
            I partner with founders, creatives, and emerging fund managers to solve disputes quietly, negotiate better outcomes, and set up structures
            that keep decisions simple.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <AnimatedButton
            variant="primary"
            onClick={() => {
              const el = document.querySelector('#contact')
              if (el instanceof HTMLElement) {
                el.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Book a consultation
          </AnimatedButton>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="w-full max-w-6xl px-4 md:px-0"
        >
          <div className="w-full bg-white p-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="card bg-cream">
                  <span className="text-3xl font-semibold text-charcoal">{stat.value}</span>
                  <p className="mt-3 text-xs capitalize text-smoke">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="w-full max-w-5xl px-6 md:px-0"
        >
          <p className="text-base font-display leading-relaxed text-smoke">
            �?oClients hire me when they need a single point of accountability�?"someone who understands the stakes, simplifies the room, and moves the
            matter forward without theatrics.�??
          </p>
        </MotionDiv>
      </div>
    </section>
  )
}

