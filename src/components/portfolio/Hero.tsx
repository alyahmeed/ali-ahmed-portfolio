import Reveal from './Reveal'
import { heroMarqueeRows } from '../../data/portfolio'
import { useT } from '../../i18n/LocaleContext'

export default function Hero() {
  const t = useT()

  return (
    <section
      id="top"
      className="relative flex min-h-svh items-end overflow-hidden pb-14 pt-24 md:pb-20 md:pt-28"
    >
      {/* soft aurora colour blobs */}
      <div className="aurora aurora-a -start-24 top-10 h-[16rem] w-[44rem]" />
      <div className="aurora aurora-b -end-32 top-1/3 h-[18rem] w-[40rem]" />
      <div className="aurora aurora-c bottom-0 start-1/3 h-[14rem] w-[38rem]" />

      {/* Background ambient marquee for cinematic depth */}
      <div
        className="absolute inset-[-10%] flex -rotate-6 flex-col justify-center gap-4 pointer-events-none"
        style={{ opacity: 0.28 }}
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
                  className="h-32 w-auto shrink-0 rounded-md object-cover md:h-48"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="hero-veil pointer-events-none absolute inset-0" />

      <div className="shell relative w-full space-y-6">
        {/* Status Indicators Top Bar */}
        <Reveal className="flex flex-wrap items-center justify-between gap-3 text-[11px] uppercase tracking-wider text-muted-foreground">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-medium backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse glow-green" />
            <span>{t.hero.statusAvailable}</span>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            {t.hero.locationYear}
          </div>
        </Reveal>

        <div className="grid items-center gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:gap-14">
          {/* Main Info Column */}
          <div className="space-y-6">
            <Reveal delay={80}>
              <h1 className="text-[2.65rem] md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.08] flex flex-wrap items-center gap-x-3">
                <span>{t.hero.firstName}</span>
                {/* Inline Avatar with Speech Bubble */}
                <span className="relative inline-flex items-center justify-center my-1 align-middle">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-[10px] font-hand font-semibold tracking-wide text-white px-2.5 py-0.5 rounded-full shadow-lg whitespace-nowrap border border-blue-400/40 pointer-events-none z-10">
                    {t.hero.bubble}
                  </span>
                  <img
                    alt={t.hero.photoLabel}
                    src="assets/me.jpg"
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-brand-coral glow-avatar"
                  />
                </span>
                <span>{t.hero.lastName}</span>
              </h1>

              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground/90 mt-3 flex flex-wrap items-baseline gap-x-2">
                <span>{t.hero.roleMain}</span>
                <span className="text-brand-coral font-accent italic text-2xl md:text-3xl font-normal">
                  {t.hero.roleAmp}
                </span>
                <span className="relative inline-block border-b-2 border-brand-accent pb-0.5 text-foreground">
                  {t.hero.roleVideo}
                </span>
              </h2>

              <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground max-w-xl">
                {t.hero.bioStitch}
              </p>
            </Reveal>

            {/* Stats Grid */}
            <Reveal delay={160} className="grid grid-cols-2 gap-3 pt-1 max-w-md">
              <div className="glass rounded-2xl p-4 border border-border/80">
                <div className="text-2xl md:text-3xl font-black text-foreground flex items-baseline gap-1">
                  <span>{t.hero.statYearsNum}</span>
                  <span className="text-brand-coral font-bold text-xl">+</span>
                </div>
                <div className="text-xs text-muted-foreground mt-0.5 font-medium leading-tight">
                  {t.hero.statYearsLabel}
                </div>
              </div>

              <div className="glass rounded-2xl p-4 border border-border/80">
                <div className="text-2xl md:text-3xl font-black text-foreground flex items-baseline gap-1">
                  <span>{t.hero.statTripleNum}</span>
                </div>
                <div className="text-xs text-muted-foreground mt-0.5 font-medium leading-tight">
                  {t.hero.statTripleLabel}
                </div>
              </div>
            </Reveal>

            {/* Daily Toolkit & AI Badges */}
            <Reveal delay={240} className="space-y-3 pt-1">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>{t.hero.toolkitDaily}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full bg-card border border-border text-foreground font-medium">
                    <span className="w-4 h-4 rounded bg-purple-950 text-[9px] text-purple-400 font-bold flex items-center justify-center">
                      Pr
                    </span>
                    Premiere Pro
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full bg-card border border-border text-foreground font-medium">
                    <span className="w-4 h-4 rounded bg-blue-950 text-[9px] text-blue-400 font-bold flex items-center justify-center">
                      Ps
                    </span>
                    Photoshop
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full bg-card border border-border text-foreground font-medium">
                    <span className="w-4 h-4 rounded bg-amber-950 text-[9px] text-amber-500 font-bold flex items-center justify-center">
                      Ai
                    </span>
                    Illustrator
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full bg-card border border-border text-foreground font-medium">
                    <span className="w-4 h-4 rounded bg-pink-950 text-[9px] text-pink-400 font-bold flex items-center justify-center">
                      Id
                    </span>
                    InDesign
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full bg-purple-950/40 border border-purple-800/40 text-purple-300 font-medium">
                    <span className="w-4 h-4 rounded bg-purple-800/60 text-[8px] text-white font-bold flex items-center justify-center">
                      AI
                    </span>
                    AI Tools
                  </span>
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1.5">
                  — {t.hero.toolkitAi}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Claude', 'ChatGPT', 'Flow', 'Magnific', 'Lovart', 'Higgsfield', 'Krea'].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-0.5 rounded-md bg-card/60 border border-border text-[11px] text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {tool}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </Reveal>

            {/* Hero CTA Action Buttons */}
            <Reveal delay={320} className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background font-bold text-sm py-3 px-6 rounded-full hover:opacity-90 transition-all active:scale-[0.98] shadow-lg"
              >
                <span>{t.hero.ctaWork}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-4 animate-bounce"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-foreground font-semibold text-sm py-3 px-6 rounded-full border border-border hover:bg-card/50 transition-colors active:scale-[0.98]"
              >
                <span>{t.hero.ctaStart}</span>
              </a>
            </Reveal>
          </div>

          {/* Right Column: Cinematic Camera Viewfinder Showcase Frame */}
          <Reveal delay={200} className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-emerald-500/20 bg-card/90 p-4 md:p-6 viewfinder-grid shadow-2xl backdrop-blur-md">
              {/* Camera Viewfinder HUD Header */}
              <div className="flex items-center justify-between font-mono text-[11px] text-emerald-400 mb-6 px-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                  <span className="tracking-wider text-red-500 font-bold">{t.hero.viewfinderRec}</span>
                </div>
                <div className="tracking-widest font-semibold">{t.hero.viewfinderTime}</div>
                <div className="text-[10px] text-muted-foreground hidden sm:block">4K 60FPS</div>
              </div>

              {/* Photo Stack / Key Visual Polaroid Preview */}
              <div className="relative w-full aspect-[4/3] flex items-center justify-center py-4">
                {/* Rotated back polaroid (left) */}
                <div className="absolute w-44 md:w-52 aspect-[4/5] bg-card border border-border p-2 rounded-lg shadow-xl transform -rotate-12 -translate-x-12 translate-y-2 opacity-65 transition-transform duration-500 hover:-rotate-6">
                  <img
                    alt="Collateral project sample"
                    src="assets/book-majalis-front.jpg"
                    className="w-full h-full object-cover rounded"
                  />
                </div>

                {/* Rotated back polaroid (right) */}
                <div className="absolute w-44 md:w-52 aspect-[4/5] bg-card border border-border p-2 rounded-lg shadow-xl transform rotate-12 translate-x-12 translate-y-3 opacity-75 transition-transform duration-500 hover:rotate-6">
                  <img
                    alt="Poster project sample"
                    src="assets/poster-ashad-alnas-balaa.jpg"
                    className="w-full h-full object-cover rounded"
                  />
                </div>

                {/* Primary Featured Polaroid (Center) */}
                <div className="relative z-10 w-52 md:w-60 bg-card border-2 border-primary/40 p-2.5 pb-4 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="aspect-square overflow-hidden rounded-lg mb-2 relative bg-background">
                    <img
                      alt="Featured Key Visual"
                      src="assets/social-ferdaws-jummah.jpg"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-blue-900/90 text-[9px] text-blue-200 font-mono px-2 py-0.5 rounded backdrop-blur-sm border border-blue-400/30">
                      {t.hero.keyVisual}
                    </div>
                  </div>
                  <div className="text-center font-mono text-[11px] tracking-wider text-foreground font-bold uppercase">
                    {t.hero.socialVisual}
                  </div>
                </div>
              </div>

              {/* Viewfinder corner brackets for cinematic look */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-emerald-500/50 pointer-events-none" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-emerald-500/50 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-emerald-500/50 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-emerald-500/50 pointer-events-none" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
