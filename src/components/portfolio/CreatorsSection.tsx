import Reveal from './Reveal'
import { creatorsList } from '../../data/portfolio'
import { useT } from '../../i18n/LocaleContext'

export default function CreatorsSection() {
  const t = useT()

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <div className="shell relative space-y-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <Reveal as="h2" className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
            {t.creators.title}
          </Reveal>
          <Reveal delay={80} as="span" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            {t.creators.eyebrow}
          </Reveal>
        </div>

        {/* Marquee container with edge fade masks */}
        <Reveal delay={120}>
          <div className="relative w-full overflow-hidden bg-card/60 border border-border/80 rounded-2xl py-4 backdrop-blur-sm shadow-inner">
            {/* Left & Right Edge Fade Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

            {/* Continuous Scrolling Row */}
            <div dir="ltr" className="flex items-center gap-8 whitespace-nowrap animate-marquee">
              {[...creatorsList, ...creatorsList, ...creatorsList].map((creator, index) => (
                <div
                  key={`${creator.name}-${index}`}
                  className="flex items-center gap-2.5 text-sm md:text-base font-semibold text-foreground/90 shrink-0 px-2 py-1 rounded-full bg-background/50 border border-border/40"
                >
                  <span>{creator.name}</span>
                  <span className={`w-2 h-2 rounded-full ${creator.color} shadow-sm`} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
