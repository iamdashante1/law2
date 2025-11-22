import Hero from '@/sections/Hero'
import Services from '@/sections/Services'
import PracticeAreas from '@/sections/PracticeAreas'
import Lawyers from '@/sections/Lawyers'
import Testimonials from '@/sections/Testimonials'
import Contact from '@/sections/Contact'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <>
      <Hero />
      <PracticeAreas />
      <Services />
      <Lawyers />
      <Testimonials />
      <Contact />
    </>
  )
}
