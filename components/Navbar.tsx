'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Scale, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedButton from '@/components/AnimatedButton'

type NavItem = { href: string; label: string }
const navItems: NavItem[] = [
  { href: '#practice', label: 'Practice Areas' },
  { href: '#services', label: 'Services' },
  { href: '#lawyers', label: 'Lawyers' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={false}
      animate={scrolled ? 'scrolled' : 'top'}
      variants={{
        top: { boxShadow: '0 0 0 rgba(0,0,0,0)', backgroundColor: 'rgba(255,255,255,0.9)' },
        scrolled: { boxShadow: '0 6px 24px rgba(15, 23, 42, 0.08)', backgroundColor: 'rgba(255,255,255,0.94)' },
      }}
      className="fixed top-0 z-50 w-full border-b border-slate-200 backdrop-blur"
    >
      <div className="container flex items-center justify-between gap-4 py-3 md:py-4 min-w-0">
        <Link href="#" className="flex items-center gap-2 min-w-0">
          <Scale className="h-7 w-7 text-brand-700" />
          <span className="font-display text-lg md:text-xl truncate">Crownstone Lawyers</span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="px-4 py-2 rounded-full text-sm text-slate-700 hover:bg-slate-100">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden sm:flex items-center">
          <AnimatedButton href="#contact" variant="accent" className="px-4 py-2">
            <Phone className="h-4 w-4" /> Book Consultation
          </AnimatedButton>
        </div>

        {/* Simple mobile CTA */}
        <div className="sm:hidden">
          <AnimatedButton href="#contact" variant="primary" className="px-3 py-2 text-sm">Book</AnimatedButton>
        </div>
      </div>
    </motion.header>
  )
}
