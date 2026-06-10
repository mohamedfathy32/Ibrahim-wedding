import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import CountdownSection from '../components/CountdownSection'
import StorySection from '../components/StorySection'
import DetailsSection from '../components/DetailsSection'
import LocationSection from '../components/LocationSection'
import ScheduleSection from '../components/ScheduleSection'
import GallerySection from '../components/GallerySection'
import WishesSection from '../components/WishesSection'
import Footer from '../components/Footer'
import ConfettiEffect from '../components/ConfettiEffect'

export default function Home() {
  return (
    <div className="min-h-screen">
      <ConfettiEffect />
      <Navbar />
      <HeroSection />
      <CountdownSection />
      <StorySection />
      <DetailsSection />
      <LocationSection />
      <ScheduleSection />
      <GallerySection />
      <WishesSection />
      <Footer />
    </div>
  )
}
