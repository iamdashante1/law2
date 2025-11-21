'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import AnimatedButton from '@/components/AnimatedButton'

const navItems = [
  { href: '#practice', label: 'Expertise' },
  { href: '#services', label: 'Process' },
  { href: '#lawyers', label: 'About' },
  { href: '#testimonials', label: 'Clients' },
]

export default function Navbar() {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 z-50 w-full transition-all ${solid ? 'bg-cream/95 shadow-lg backdrop-blur' : 'bg-transparent shadow-none'}`}>
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-4 px-6 py-4 text-charcoal md:px-10">
        <Link href="#" className="font-display text-lg">
          Adrian Vega Counsel
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 text-sm font-sans font-medium capitalize text-smoke md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-charcoal">
              {item.label}
            </Link>
          ))}
        </nav>

        <AnimatedButton href="#contact" variant="primary" className="ml-auto md:ml-6">
          Schedule a call
        </AnimatedButton>
      </div>
    </header>
  )
}
