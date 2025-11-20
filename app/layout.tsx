import type { Metadata } from 'next'
import './globals.css'
import { Merriweather, Source_Sans_3 } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-source-sans' })
const merriweather = Merriweather({ subsets: ['latin'], weight: ['300','400','700'], variable: '--font-merriweather' })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Crownstone Lawyers | Counsel & Advocacy',
    template: '%s | Crownstone Lawyers',
  },
  description: 'Clear guidance. Practical strategy. Results that matter.',
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Crownstone Lawyers',
    title: 'Crownstone Lawyers | Counsel & Advocacy',
    description: 'Clear guidance. Practical strategy. Results that matter.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crownstone Lawyers | Counsel & Advocacy',
    description: 'Clear guidance. Practical strategy. Results that matter.',
  },
  icons: { icon: '/icon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${merriweather.variable}`}>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
