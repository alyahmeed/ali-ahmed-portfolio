import Reveal from './Reveal'
import { socials } from '../../data/portfolio'
import { useT } from '../../i18n/LocaleContext'

export default function SiteFooter() {
  const t = useT()

  return (
    <footer className="glass-strong border-t border-border py-8 md:py-10">
      <div className="shell flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-muted-foreground uppercase">
          <span>© {t.footer.year} {t.footer.rights}</span>
          <span>{t.hero.locationYear}</span>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-border/50 pt-4">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {socials.map((social, index) => (
              <Reveal
                key={social.key}
                as="a"
                delay={index * 60}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {t.socials[social.key]}
              </Reveal>
            ))}
          </nav>

          <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition-colors">
              {t.contact.workArchive}
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
            >
              <span>{t.contact.backToTop}</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                <path fillRule="evenodd" d="M10 17a.75.75 0 0 1-.75-.75V5.612L5.29 9.77a.75.75 0 0 1-1.08-1.04l5.25-5.5a.75.75 0 0 1 1.08 0l5.25 5.5a.75.75 0 1 1-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0 1 10 17Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
