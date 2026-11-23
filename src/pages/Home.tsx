import SiteHeader from '../components/portfolio/SiteHeader'
import ScrollProgress from '../components/portfolio/ScrollProgress'
import Hero from '../components/portfolio/Hero'
import WorkShelvesSection from '../components/portfolio/WorkShelvesSection'
import DesignSection from '../components/portfolio/DesignSection'
import VideoSection from '../components/portfolio/VideoSection'
import BrandsSection from '../components/portfolio/BrandsSection'
import CreatorsSection from '../components/portfolio/CreatorsSection'
import AboutSection from '../components/portfolio/AboutSection'
import ContactSection from '../components/portfolio/ContactSection'
import SiteFooter from '../components/portfolio/SiteFooter'

export default function Home() {
  return (
    <div className="grain relative min-h-screen overflow-x-clip">
      <ScrollProgress />
      <SiteHeader />
      <main>
        <Hero />
        <WorkShelvesSection />
        <DesignSection />
        <VideoSection />
        <BrandsSection />
        <CreatorsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
