import { useEffect, useState } from 'react'
import { cn } from '../../lib/utils'
import { navLinks } from '../../data/portfolio'
import { useLocale } from '../../i18n/LocaleContext'
import { useTheme } from '../../theme/ThemeContext'

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      className="size-4"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      className="size-4"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z" />
    </svg>
  )
}

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t, locale, toggleLocale } = useLocale()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [locale])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-500',
        scrolled
          ? 'glass-strong border-b border-border'
          : 'bg-transparent',
      )}
    >
      <div className="shell flex h-16 items-center justify-between gap-4">
        <a href="#top" className="group flex items-center gap-2.5">
          <div aria-hidden="true" className="flex items-center gap-1">
            <span className="w-1.5 h-4 bg-brand-coral rounded-full"></span>
            <span className="w-1.5 h-6 bg-brand-cyan rounded-full"></span>
            <span className="w-1.5 h-5 bg-brand-accent rounded-full"></span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-lg font-bold tracking-tight transition-colors group-hover:text-primary">
              {t.header.brand}
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:inline">
              {t.header.brandSuffix}
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-1 text-sm md:flex">
          {navLinks.map((link, index) => (
            <a
              key={`${link.href}-${index}`}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              {t.header[link.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Quick Action Button matching Stitch */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border border-border bg-card/80 text-foreground hover:border-primary hover:text-primary transition-all active:scale-95 shadow-sm"
          >
            <span>{t.header.letsTalk}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-3 text-muted-foreground rtl:-scale-x-100"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          {/* Language toggle */}
          <button
            type="button"
            onClick={toggleLocale}
            aria-label={t.common.language}
            title={t.common.language}
            className="glass-pill flex h-9 items-center gap-1.5 rounded-full px-3 text-xs font-semibold transition-all duration-300 hover:border-primary hover:text-primary"
          >
            <GlobeIcon />
            <span className="font-mono tracking-widest">{locale === 'en' ? 'EN' : 'ع'}</span>
          </button>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t.common.theme}
            title={`${t.common.theme}: ${theme === 'dark' ? t.common.dark : t.common.light}`}
            className="glass-pill flex size-9 items-center justify-center rounded-full transition-all duration-300 hover:border-primary hover:text-primary"
          >
            <span
              className={cn(
                'transition-transform duration-500',
                theme === 'dark' ? 'rotate-0' : 'rotate-180',
              )}
            >
              {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
            </span>
          </button>

          <a
            href="#contact"
            className="btn-gradient hidden rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground md:inline-block"
          >
            {t.header.contact}
          </a>

          {/* Mobile menu */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.header.menu}
            aria-expanded={open}
            className="glass-pill flex size-9 items-center justify-center rounded-full md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={cn(
                  'absolute inset-x-0 top-0 h-px bg-current transition-transform duration-300',
                  open && 'translate-y-[5px] rotate-45',
                )}
              />
              <span
                className={cn(
                  'absolute inset-x-0 top-[5px] h-px bg-current transition-opacity duration-300',
                  open && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'absolute inset-x-0 top-[10px] h-px bg-current transition-transform duration-300',
                  open && '-translate-y-[5px] -rotate-45',
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          'overflow-hidden border-border glass-strong transition-all duration-500 md:hidden',
          open ? 'max-h-96 border-b' : 'max-h-0',
        )}
      >
        <nav className="shell flex flex-col gap-1 py-4">
          {navLinks.map((link, index) => (
            <a
              key={`${link.href}-${index}`}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              {t.header[link.key]}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-gradient mt-2 rounded-full px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            {t.header.contact}
          </a>
        </nav>
      </div>
    </header>
  )
}
