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
          ? 'border-b border-border bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65'
          : 'bg-transparent',
      )}
    >
      <div className="shell flex h-16 items-center justify-between gap-4">
        <a href="#top" className="group flex items-baseline gap-2">
          <span className="font-display text-lg font-bold tracking-tight transition-colors group-hover:text-primary">
            {t.header.brand}
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:inline">
            {t.header.brandSuffix}
          </span>
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
          {/* Language toggle */}
          <button
            type="button"
            onClick={toggleLocale}
            aria-label={t.common.language}
            title={t.common.language}
            className="group flex h-9 items-center gap-1.5 rounded-full border border-border px-3 text-xs font-semibold transition-all duration-300 hover:border-primary hover:text-primary"
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
            className="flex size-9 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-primary hover:text-primary"
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
            className="flex size-9 items-center justify-center rounded-full border border-border md:hidden"
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
          'overflow-hidden border-border bg-background/95 backdrop-blur-xl transition-all duration-500 md:hidden',
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
