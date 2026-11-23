import Reveal from './Reveal'
import { useT } from '../../i18n/LocaleContext'

export default function BrandsSection() {
  const t = useT()

  return (
    <section id="clients" className="relative py-14 md:py-20 overflow-hidden">
      <div className="shell relative space-y-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border/60 pb-4">
          <Reveal as="h2" className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            {t.brands.titleMain}{' '}
            <span className="font-accent italic text-brand-blue text-3xl md:text-4xl font-normal">
              {t.brands.titleAccent}
            </span>
          </Reveal>
          <Reveal delay={80} as="span" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            {t.brands.eyebrow}
          </Reveal>
        </div>

        {/* Selected Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {/* Brand 1: Red Bull style */}
          <Reveal delay={60}>
            <div className="h-20 rounded-2xl bg-card border border-border/80 flex items-center justify-center px-4 hover:border-brand-coral/50 transition-all duration-300 shadow-sm group">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-400 group-hover:scale-110 transition-transform" />
                <span className="text-base font-extrabold text-brand-coral italic tracking-wider">
                  Red Bull
                </span>
              </div>
            </div>
          </Reveal>

          {/* Brand 2: Creative Studio Shapes */}
          <Reveal delay={120}>
            <div className="h-20 rounded-2xl bg-purple-900/60 border border-purple-700/50 flex items-center justify-center px-4 shadow-lg shadow-purple-950/30 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-2 text-white">
                <span className="text-xl">✦</span>
                <span className="text-sm font-bold tracking-wide">Creative Studio</span>
              </div>
            </div>
          </Reveal>

          {/* Brand 3: Studio Cube */}
          <Reveal delay={180}>
            <div className="h-20 rounded-2xl bg-card border border-border/80 flex items-center justify-center px-4 hover:border-primary/50 transition-all duration-300 shadow-sm group">
              <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                <span className="text-lg">⬡</span>
                <span className="text-sm font-semibold tracking-wide">Studio Cube</span>
              </div>
            </div>
          </Reveal>

          {/* Brand 4: Vision X */}
          <Reveal delay={240}>
            <div className="h-20 rounded-2xl bg-[#0e3b75] border border-blue-500/40 flex flex-col items-center justify-center px-4 shadow-md hover:scale-[1.02] transition-transform duration-300">
              <span className="text-base font-black text-white tracking-tighter italic">VX</span>
              <span className="text-[9px] font-mono uppercase tracking-widest text-blue-200">Vision X</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
