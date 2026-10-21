import { useEffect, useState } from 'react'
import { cn } from '../../lib/utils'
import { navLinks } from '../../data/portfolio'

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-colors duration-500',
        scrolled ? 'border-b border-border bg-background/85 backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <div className="shell flex h-16 items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="text-lg font-bold tracking-tight">علي أحمد</span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:inline">
            Portfolio
          </span>
        </a>
        <nav className="flex items-center gap-1 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden rounded-full px-4 py-2 text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ms-2 rounded-full border border-border px-4 py-2 transition-colors hover:border-primary hover:text-primary"
          >
            تواصل
          </a>
        </nav>
      </div>
    </header>
  )
}
