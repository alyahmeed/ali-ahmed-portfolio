import Reveal from './Reveal'

type SectionHeadingProps = {
  number: number
  eyebrow: string
  title: string
  className?: string
}

export default function SectionHeading({ number, eyebrow, title, className }: SectionHeadingProps) {
  const label = String(number).padStart(2, '0')

  return (
    <div className={className}>
      <div className="relative mb-12 md:mb-16">
        <span className="text-outline pointer-events-none absolute -top-8 end-0 font-display text-[clamp(6rem,18vw,14rem)] font-extrabold leading-none md:-top-16">
          {label}
        </span>
        <div className="relative">
          <Reveal as="p" className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            {label} <span dir="ltr">— {eyebrow}</span>
          </Reveal>
          <span className="block overflow-hidden pb-3 pt-3">
            <Reveal as="h2" className="font-display text-5xl font-extrabold tracking-tight md:text-7xl">
              <span className="text-gradient">{title}</span>
            </Reveal>
          </span>
          <Reveal className="gold-line mt-6 h-px w-full origin-right" />
        </div>
      </div>
    </div>
  )
}
