import Reveal from './Reveal'
import { contactCards } from '../../data/portfolio'

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6 md:size-8"
    >
      <path d="M7 17V7h10" />
      <path d="M17 17 7 7" />
    </svg>
  )
}

export default function ContactSection() {
  return (
    <section id="contact" className="shell py-24 md:py-36">
      <Reveal as="p" className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">
        04 <span dir="ltr">— Contact</span>
      </Reveal>

      <Reveal as="a" href="https://wa.me/201153349092" target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-6 border-b border-border pb-8">
        <span className="font-display text-[clamp(2.5rem,8vw,6.5rem)] font-extrabold leading-[1.2] tracking-tight transition-colors duration-500 group-hover:text-primary">
          يلا نشتغل سوا
        </span>
        <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-500 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground md:size-20">
          <ArrowIcon />
        </span>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {contactCards.map((card, index) => (
          <Reveal key={card.label} as="a" delay={index * 80} href={card.href} target="_blank" rel="noreferrer" className="group">
            <p className="text-sm text-muted-foreground">{card.label}</p>
            <p dir="ltr" className="mt-1 text-right text-base font-semibold transition-colors group-hover:text-primary md:text-lg">
              {card.value}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
