import type { Metadata } from 'next'
import './globals.css'
import { Fraunces, Manrope } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-sans' })
const fraunces = Fraunces({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-display' })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Adrian Vega Counsel',
    template: '%s | Adrian Vega Counsel',
  },
  description: 'Independent litigation and advisory practice for founders, creatives, and emerging funds.',
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Adrian Vega Counsel',
    title: 'Adrian Vega Counsel',
    description: 'Independent litigation and advisory practice for founders, creatives, and emerging funds.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adrian Vega Counsel',
    description: 'Independent litigation and advisory practice for founders, creatives, and emerging funds.',
  },
  icons: { icon: '/icon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-cream text-charcoal antialiased">
        <Navbar />
        <main className="pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
