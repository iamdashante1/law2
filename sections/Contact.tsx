'use client'
import AnimatedButton from '@/components/AnimatedButton'

const contactCards = [
  {
    title: 'Call',
    detail: '+1 (347) 555-0144',
    description: 'Direct line. If I am in court you will hear back before the end of day.',
    accent: true,
  },
  {
    title: 'Email',
    detail: 'avega@briefstudio.com',
    description: 'Send context, deadlines, or a Dropbox folder—whatever helps me get up to speed.',
  },
  {
    title: 'Meeting',
    detail: 'Remote-first / Manhattan',
    description: 'Video by default; in-person available on Thursdays near Madison Square Park.',
  },
]

const followUp = [
  { label: 'Response window', value: 'Under 1 business day' },
  { label: 'Availability', value: 'Limited to 6 concurrent matters' },
  { label: 'Format', value: 'Short memos, clear next steps, optional Loom recaps' },
]

export default function Contact() {
  return (
    <section id="contact" className="w-full mt-20">
      <div className="w-full">
        <div className="mx-auto w-full max-w-7xl space-y-10 px-6 md:px-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs capitalize text-smoke">Contact</p>
            <h2 className="font-display text-4xl leading-tight">Tell me what needs to move.</h2>
            <p>
              Send a short note outlining the decision or dispute. I will confirm receipt, ask for any missing context, and propose a
              working session if it makes sense for us to connect.
            </p>
          </div>

          <div className="w-full bg-cream">
            <div className="grid gap-5 md:grid-cols-3">
              {contactCards.map((card) => (
                <div key={card.title} className="rounded-2xl bg-white px-5 py-5 text-[#1b1a18]">
                  <p className="text-xs capitalize text-smoke">{card.title}</p>
                  <p className="text-base font-medium text-charcoal">{card.detail}</p>
                  <p className="text-sm">{card.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {followUp.map((item) => (
                <div key={item.label} className="rounded-2xl bg-white px-5 py-5 text-sm text-[#1b1a18]">
                  <p className="text-xs capitalize text-smoke">{item.label}</p>
                  <p className="mt-2 text-base">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <AnimatedButton
            variant="primary"
            className="w-full justify-center md:w-auto"
            onClick={() => {
              window.location.href = 'mailto:avega@briefstudio.com'
            }}
          >
            Email Adrian
          </AnimatedButton>
        </div>
      </div>
    </section>
  )
}
