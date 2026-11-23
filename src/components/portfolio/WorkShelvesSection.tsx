import Reveal from './Reveal'
import { useT } from '../../i18n/LocaleContext'

export default function WorkShelvesSection() {
  const t = useT()

  return (
    <section id="work" className="relative py-16 md:py-24 overflow-hidden">
      <div className="shell relative space-y-8">
        <div>
          <Reveal as="p" className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold">
            {t.shelves.eyebrow}
          </Reveal>
          <Reveal delay={80} as="h2" className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mt-2">
            {t.shelves.titleMain}{' '}
            <span className="font-accent italic font-normal text-brand-coral text-4xl md:text-6xl">
              {t.shelves.titleAccent}
            </span>{' '}
            {t.shelves.titleEnd}
          </Reveal>
          <Reveal delay={120} as="p" className="text-muted-foreground text-sm md:text-base mt-2 max-w-2xl">
            {t.shelves.subtitle}
          </Reveal>
        </div>

        {/* Shelves Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Shelf 1: Video Editing */}
          <Reveal delay={100}>
            <article className="group bg-card/80 border border-border/80 rounded-2xl p-4 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 shadow-lg h-full">
              <a href="#video" className="block relative w-full aspect-video bg-background rounded-xl overflow-hidden mb-4 border border-border">
                <img
                  alt="Video editing showcase preview"
                  src="assets/social-ferdaws-intaziru.jpg"
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/30 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-zinc-950 flex items-center justify-center shadow-xl transition-transform group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </a>

              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    <a href="#video">{t.shelves.videoTitle}</a>
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mt-0.5">
                    {t.shelves.videoMeta}
                  </p>
                </div>
                <a
                  href="#video"
                  aria-label={t.shelves.videoTitle}
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:border-primary transition-colors shrink-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 rtl:-scale-x-100">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </article>
          </Reveal>

          {/* Shelf 2: Social Media */}
          <Reveal delay={180}>
            <article className="group bg-card/80 border border-border/80 rounded-2xl p-4 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 shadow-lg h-full">
              <a href="#design" className="block relative w-full aspect-video bg-background rounded-xl overflow-hidden mb-4 border border-border">
                <img
                  alt="Social media showcase preview"
                  src="assets/social-ferdaws-lamasat.jpg"
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-full bg-background/80 backdrop-blur-md border border-border text-[10px] text-foreground font-mono">
                  {t.shelves.socialBadge}
                </div>
              </a>

              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    <a href="#design">{t.shelves.socialTitle}</a>
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mt-0.5">
                    {t.shelves.socialMeta}
                  </p>
                </div>
                <a
                  href="#design"
                  aria-label={t.shelves.socialTitle}
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:border-primary transition-colors shrink-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 rtl:-scale-x-100">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </article>
          </Reveal>

          {/* Shelf 3: Thumbnails & Print */}
          <Reveal delay={260} className="sm:col-span-2 lg:col-span-1">
            <article className="group bg-card/80 border border-border/80 rounded-2xl p-4 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 shadow-lg h-full">
              <a href="#design" className="block relative w-full aspect-video bg-background rounded-xl overflow-hidden mb-4 border border-border">
                <img
                  alt="Thumbnails and print preview"
                  src="assets/book-nabd-front.jpg"
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-red-600 text-white font-bold text-[10px] flex items-center gap-1 shadow-md">
                  <span>▶</span> {t.shelves.thumbBadge}
                </div>
              </a>

              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    <a href="#design">{t.shelves.thumbTitle}</a>
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mt-0.5">
                    {t.shelves.thumbMeta}
                  </p>
                </div>
                <a
                  href="#design"
                  aria-label={t.shelves.thumbTitle}
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:border-primary transition-colors shrink-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 rtl:-scale-x-100">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
