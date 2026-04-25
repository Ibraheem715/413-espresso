import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Story from '@/components/Story'
import SignatureMenu from '@/components/SignatureMenu'
import Testimonial from '@/components/Testimonial'
import FullMenu from '@/components/FullMenu'
import Visit from '@/components/Visit'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Story />
      <SignatureMenu />
      <Testimonial />
      <FullMenu />
      <Visit />
      <Footer />
    </>
  )
}
