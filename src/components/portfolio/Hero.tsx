import Reveal from './Reveal'
import { heroMarqueeRows } from '../../data/portfolio'

const titleRows = [
  [
    { text: 'معرض', accent: false },
    { text: 'أعمال', accent: false },
  ],
  [
    { text: 'علي', accent: true },
    { text: 'أحمد', accent: true },
  ],
]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-end overflow-hidden pb-14 pt-28 md:pb-20"
    >
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
        <Reveal className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
          <span className="h-px w-10 bg-primary" />
          <span>
            Selected Works <span dir="ltr">— 2026</span>
          </span>
        </Reveal>

        <h1 className="font-display text-[clamp(3.5rem,13vw,11rem)] font-extrabold leading-[1.15] tracking-tight">
          {titleRows.map((row, rowIndex) => (
            <span key={rowIndex} className="flex flex-wrap gap-x-[0.25em]">
              {row.map((word, wordIndex) => (
                <Reveal
                  key={word.text}
                  as="span"
                  className="inline-block"
                  delay={120 * (rowIndex * 2 + wordIndex)}
                >
                  <span className={word.accent ? 'inline-block text-primary' : 'inline-block'}>
                    {word.text}
                  </span>
                </Reveal>
              ))}
            </span>
          ))}
        </h1>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 md:mt-20">
          <Reveal as="p" delay={480} className="max-w-md text-base text-muted-foreground md:text-lg">
            تصميم طباعي · سوشيال ميديا · مونتاج فيديو
          </Reveal>
          <Reveal as="div" delay={560} className="flex gap-3">
            <a
              href="#design"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              التصميم
            </a>
            <a
              href="#video"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-foreground"
            >
              الفيديو
            </a>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="h-10 w-px bg-foreground/40" />
      </div>
    </section>
  )
}
