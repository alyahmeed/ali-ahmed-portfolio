import SiteHeader from '../components/portfolio/SiteHeader'
import ScrollProgress from '../components/portfolio/ScrollProgress'
import Hero from '../components/portfolio/Hero'
import ProjectGallery from '../components/portfolio/ProjectGallery'
import VideoSection from '../components/portfolio/VideoSection'
import ReelsSection from '../components/portfolio/ReelsSection'
import AboutSection from '../components/portfolio/AboutSection'
import ContactSection from '../components/portfolio/ContactSection'
import SiteFooter from '../components/portfolio/SiteFooter'
import { useT } from '../i18n/LocaleContext'

export default function Home() {
  const t = useT()

  return (
    <div className="grain relative min-h-screen overflow-x-clip">
      <ScrollProgress />
      <SiteHeader />
      <main>
        <Hero />
        <ProjectGallery
          number={1}
          category="social"
          eyebrow={t.sections.social.eyebrow}
          title={t.sections.social.title}
        />
        <ProjectGallery
          number={2}
          category="print"
          eyebrow={t.sections.print.eyebrow}
          title={t.sections.print.title}
        />
        <VideoSection />
        <ReelsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
