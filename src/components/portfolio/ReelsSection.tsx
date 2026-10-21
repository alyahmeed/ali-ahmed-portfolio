import { useState } from 'react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { reelSlots } from '../../data/portfolio'
import { useT } from '../../i18n/LocaleContext'

export default function ReelsSection() {
  const t = useT()
  const [expanded, setExpanded] = useState(false)

  const items = reelSlots.map((slot, index) => ({
    id: index + 1,
    title: slot.title,
    client: slot.kind,
    image: slot.poster,
  }))

  const visible = expanded ? items : items.slice(0, 4)
  const hidden = items.length - 4

  return (
    <section id="reels" className="relative overflow-hidden py-24 md:py-36">
      <div className="aurora aurora-c -end-40 top-10 size-[28rem]" />

      <div className="shell relative">
        <SectionHeading number={4} eyebrow={t.sections.reels.eyebrow} title={t.sections.reels.title} />

        <Reveal className="mb-12 max-w-xl">
          <p className="leading-loose text-muted-foreground md:text-lg">{t.reels.body}</p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {visible.map((item, index) => {
            const isLastPreview = !expanded && index === visible.length - 1 && hidden > 0
            return (
              <Reveal
                key={item.id}
                delay={Math.min(index, 6) * 70}
                className="group relative aspect-[9/16] overflow-hidden rounded-md border border-border bg-card ring-glow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
                />
                <div className="card-veil absolute inset-0" />

                <span className="absolute start-4 top-4 rounded-full border border-primary/50 bg-background/50 px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-primary backdrop-blur-sm">
                  9:16
                </span>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-mono text-[10px] tracking-[0.25em] text-primary">{item.client}</p>
                  <h3 className="mt-1 text-sm font-bold leading-snug md:text-base">{item.title}</h3>
                </div>

                {isLastPreview && (
                  <button
                    type="button"
                    onClick={() => setExpanded(true)}
                    aria-label={`${t.gallery.showAll} (${hidden} ${t.gallery.more})`}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-1 bg-background/70 backdrop-blur-sm transition-colors duration-500 hover:bg-background/55"
                  >
                    <span className="font-display text-3xl font-extrabold text-primary md:text-4xl">
                      +{hidden}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      {t.gallery.showAll}
                    </span>
                  </button>
                )}
              </Reveal>
            )
          })}
        </div>

        {expanded && hidden > 0 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              {t.gallery.showLess}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
