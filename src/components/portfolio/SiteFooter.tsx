import Reveal from './Reveal'
import { socials } from '../../data/portfolio'

export default function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="shell flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <Reveal as="p" className="text-sm text-muted-foreground">
          علي أحمد <span dir="ltr">— 2026</span>
        </Reveal>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {socials.map((social, index) => (
            <Reveal
              key={social.label}
              as="a"
              delay={index * 60}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {social.label}
            </Reveal>
          ))}
        </nav>
      </div>
    </footer>
  )
}
