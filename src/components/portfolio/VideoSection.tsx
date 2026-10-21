import AmbientOrb from './AmbientOrb'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { reelSlots, videoSlots } from '../../data/portfolio'
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

/**
 * Section 02 — video editing only. The slots are empty frosted frames that
 * light up as soon as the Google Drive links are dropped in.
 */
export default function VideoSection() {
  const t = useT()

  return (
    <section id="video" className="relative overflow-hidden py-24 md:py-36">
      <AmbientOrb variant="b" className="-start-28 top-1/4 size-[24rem]" strength={1.2} depth={0.08} />

      <div className="shell relative">
        <SectionHeading number={2} eyebrow={t.sections.video.eyebrow} title={t.sections.video.title} />

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
                  className="glass-pill rounded-full px-4 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Showreel placeholder */}
          <div className="glass-strong group relative flex aspect-video flex-col items-center justify-center gap-4 overflow-hidden rounded-md text-center">
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,hsl(var(--primary)/0.18),transparent_65%)]" />
            <span className="relative flex size-16 items-center justify-center">
              <span className="absolute inset-0 rounded-full border border-primary/60 animate-float-ring" />
              <span className="absolute inset-0 rounded-full border border-primary/60 animate-float-ring [animation-delay:1.2s]" />
              <span className="relative flex size-12 items-center justify-center rounded-full grad-brand text-primary-foreground shadow-[0_12px_36px_-12px_hsl(var(--primary)/0.9)] transition-transform duration-500 group-hover:scale-110">
                <PlayIcon />
              </span>
            </span>
            <p className="relative font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              {t.video.awaiting}
            </p>
            <p className="relative max-w-xs px-6 text-sm leading-relaxed text-muted-foreground">
              {t.video.awaitingBody}
            </p>
          </div>
        </Reveal>

        {/* Video grid — empty frames ready for the Drive links */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {videoSlots.map((slot, index) => {
            const meta = t.video.slots[slot.key]
            return (
              <Reveal
                key={slot.key}
                as="button"
                type="button"
                disabled
                delay={index * 90}
                className={`group relative flex flex-col items-center justify-center gap-4 overflow-hidden rounded-md glass-strong ring-glow cursor-default ${slot.aspect}`}
              >
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,hsl(var(--primary)/0.12),transparent_60%)]" />

                <span className="relative flex size-14 items-center justify-center">
                  <span className="absolute inset-0 rounded-full border border-primary/50 animate-float-ring" />
                  <span className="absolute inset-0 rounded-full border border-primary/50 animate-float-ring [animation-delay:1.2s]" />
                  <span className="relative flex size-10 items-center justify-center rounded-full grad-brand text-primary-foreground transition-transform duration-500 group-hover:scale-110">
                    <PlayIcon />
                  </span>
                </span>

                <span className="relative px-4 text-center">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                    {meta.kind}
                  </span>
                  <span className="mt-1 block text-sm font-bold md:text-base">{meta.title}</span>
                </span>

                <span className="glass-pill relative rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {t.video.soon}
                </span>
              </Reveal>
            )
          })}
        </div>

        {/* Reels — vertical edits, part of the same video section */}
        <div className="mt-20 md:mt-28">
          <Reveal className="mb-8 max-w-xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              {t.reels.kicker}
            </p>
            <h3 className="mt-3 font-display text-2xl font-extrabold md:text-3xl">
              <span className="text-gradient">{t.reels.title}</span>
            </h3>
            <p className="mt-3 leading-loose text-muted-foreground">{t.reels.body}</p>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {reelSlots.map((slot, index) => {
              const meta = t.reels.slots[slot.key]
              return (
                <Reveal
                  key={slot.key}
                  delay={index * 70}
                  className="group relative flex aspect-[9/16] flex-col items-center justify-center gap-3 overflow-hidden rounded-md glass-strong ring-glow"
                >
                  <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,hsl(var(--primary)/0.14),transparent_62%)]" />

                  <span className="glass-pill absolute start-4 top-4 rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-primary">
                    9:16
                  </span>

                  <span className="relative flex size-12 items-center justify-center">
                    <span className="absolute inset-0 rounded-full border border-primary/50 animate-float-ring" />
                    <span className="relative flex size-9 items-center justify-center rounded-full grad-brand text-primary-foreground transition-transform duration-500 group-hover:scale-110">
                      <PlayIcon />
                    </span>
                  </span>

                  <span className="relative px-4 text-center">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                      {meta.kind}
                    </span>
                    <span className="mt-1 block text-sm font-bold">{meta.title}</span>
                  </span>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
