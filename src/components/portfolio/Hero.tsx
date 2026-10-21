import Reveal from './Reveal'
import { heroMarqueeRows } from '../../data/portfolio'
import { useT } from '../../i18n/LocaleContext'
import { cn } from '../../lib/utils'

export default function Hero() {
  const t = useT()

  return (
    <section
      id="top"
      className="relative flex min-h-svh items-end overflow-hidden pb-14 pt-28 md:pb-20"
    >
      {/* soft colour blobs */}
      <div className="aurora aurora-a -start-24 top-10 h-[16rem] w-[44rem]" />
      <div className="aurora aurora-b -end-32 top-1/3 h-[18rem] w-[40rem]" />
      <div className="aurora aurora-c bottom-0 start-1/3 h-[14rem] w-[38rem]" />

      <div
        className="absolute inset-[-10%] flex -rotate-6 flex-col justify-center gap-4"
        style={{ opacity: 0.45 }}
      >
        {heroMarqueeRows.map((row, rowIndex) => (
          <div key={rowIndex} dir="ltr" className="flex overflow-hidden">
            <div
              className="flex w-max shrink-0 gap-4 animate-marquee"
              style={{
                animationDuration: row.duration,
                ...(row.reverse ? { animationDirection: 'reverse' } : {}),
              }}
            >
              {[...row.images, ...row.images].map((src, index) => (
                <img
                  key={`${src}-${index}`}
                  src={src}
                  alt=""
                  aria-hidden="true"
                  className="h-36 w-auto shrink-0 rounded-md object-cover md:h-52 hoverZoomLink"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="hero-veil pointer-events-none absolute inset-0" />

      <div className="shell relative">
        <div className="grid items-end gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-14">
          <div>
            <Reveal className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-10 bg-primary" />
              <span>{t.hero.eyebrow}</span>
            </Reveal>

            <h1 className="font-display text-[clamp(2.25rem,12.5vw,4.5rem)] font-extrabold leading-[1.12] tracking-tight md:text-[clamp(2.75rem,6.8vw,6.25rem)]">
              {t.hero.titleLines.map((row, rowIndex) => (
                <span key={rowIndex} className="flex flex-wrap items-baseline gap-x-[0.25em]">
                  {row.map((word, wordIndex) => (
                    <Reveal
                      key={`${word.text}-${wordIndex}`}
                      as="span"
                      className="inline-block"
                      delay={120 * (rowIndex * 2 + wordIndex)}
                    >
                      <span
                        className={cn(
                          'inline-block',
                          word.accent ? 'text-gradient-gold' : 'text-gradient',
                          word.font === 'accent' ? 'font-accent font-normal' : 'font-display',
                        )}
                      >
                        {word.text}
                      </span>
                    </Reveal>
                  ))}
                </span>
              ))}
            </h1>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-6 md:mt-14">
              <Reveal as="p" delay={480} className="max-w-md text-base text-muted-foreground md:text-lg">
                {t.hero.tagline}
              </Reveal>
              <Reveal as="div" delay={560} className="flex gap-3">
                <a
                  href="#design"
                  className="btn-gradient rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground"
                >
                  {t.hero.ctaPrimary}
                </a>
                <a
                  href="#video"
                  className="shine glass rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  {t.hero.ctaSecondary}
                </a>
              </Reveal>
            </div>
          </div>

          {/* Portrait — first thing on the page */}
          <Reveal
            as="div"
            delay={120}
            className="order-first md:order-none"
          >
            <div className="group relative mx-auto w-full max-w-[19rem] md:max-w-[22rem]">
              <div className="absolute -inset-3 rounded-[2rem] bg-[radial-gradient(circle_at_50%_30%,hsl(var(--primary)/0.28),transparent_70%)] blur-xl transition-opacity duration-700 group-hover:opacity-80" />

              <div className="glass-strong relative aspect-[4/5] overflow-hidden rounded-[1.75rem] ring-glow">
                <img
                  src="assets/me.png"
                  alt={t.hero.photoLabel}
                  className="absolute inset-0 size-full scale-105 object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.12]"
                />
                <div className="card-veil absolute inset-0 opacity-70 transition-opacity duration-700 group-hover:opacity-40" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="gold-line mb-3 block h-px w-full" />
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                      {t.hero.photoCaption}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      {t.hero.photoBadge}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="h-10 w-px animate-pulse bg-foreground/40" />
      </div>
    </section>
  )
}
