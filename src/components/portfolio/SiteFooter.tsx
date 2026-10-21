import Reveal from './Reveal'
import { socials } from '../../data/portfolio'
import { useT } from '../../i18n/LocaleContext'

export default function SiteFooter() {
  const t = useT()

  return (
    <footer className="glass-strong border-t border-border">
      <div className="shell flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <Reveal as="p" className="text-sm text-muted-foreground">
          {t.footer.rights} <span dir="ltr">— {t.footer.year}</span>
        </Reveal>
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
      </div>
    </footer>
  )
}
