import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { videoSlots } from '../../data/portfolio'
import { useT } from '../../i18n/LocaleContext'

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="size-5 fill-current"
    >
      <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
    </svg>
  )
}

export default function VideoSection() {
  const t = useT()

  return (
    <section id="video" className="relative overflow-hidden py-24 md:py-36">
      <div className="aurora aurora-b -start-40 top-1/4 size-[30rem]" />

      <div className="shell relative">
        <SectionHeading number={3} eyebrow={t.sections.video.eyebrow} title={t.sections.video.title} />

        {/* Intro / promo panel */}
        <Reveal className="mb-14 grid items-center gap-8 md:grid-cols-[1.1fr_1fr] md:gap-14">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              {t.video.promoKicker}
            </p>
            <h3 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
              <span className="text-gradient">{t.video.promoTitle}</span>
            </h3>
            <p className="mt-5 max-w-lg leading-loose text-muted-foreground md:text-lg">
              {t.video.promoBody}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {['Premiere Pro', 'After Effects', 'Photoshop', 'Illustrator'].map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-md border border-border">
            <img
              src="assets/poster-ashad-alnas-balaa.jpg"
              alt={t.video.showcase}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-105"
            />
            <div className="card-veil absolute inset-0" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="relative flex size-20 items-center justify-center">
                <span className="absolute inset-0 rounded-full border border-primary animate-float-ring" />
                <span className="absolute inset-0 rounded-full border border-primary animate-float-ring [animation-delay:1.2s]" />
                <span className="relative flex size-16 items-center justify-center rounded-full grad-brand text-primary-foreground shadow-[0_12px_36px_-12px_hsl(var(--primary)/0.9)]">
                  <PlayIcon />
                </span>
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-mono text-[10px] tracking-[0.25em] text-primary">
                {t.video.showcase}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{t.video.showcaseBody}</p>
            </div>
          </div>
        </Reveal>

        {/* Video grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {videoSlots.map((slot, index) => (
            <Reveal
              key={slot.title + index}
              as="button"
              type="button"
              disabled
              delay={index * 90}
              className={`group relative overflow-hidden rounded-md border border-border bg-card text-start ${slot.aspect} cursor-default ring-glow`}
            >
              <img
                src={slot.poster}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 size-full object-cover opacity-60 transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:opacity-75"
              />
              <div className="card-veil absolute inset-0" />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="relative flex size-14 items-center justify-center">
                  <span className="absolute inset-0 rounded-full border border-primary animate-float-ring" />
                  <span className="absolute inset-0 rounded-full border border-primary animate-float-ring [animation-delay:1.2s]" />
                  <span className="relative flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 group-hover:scale-110">
                    <PlayIcon />
                  </span>
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.25em] text-primary">{slot.kind}</p>
                  <h3 className="mt-1 text-base font-bold md:text-lg">{slot.title}</h3>
                </div>
                <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
                  {t.video.soon}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
