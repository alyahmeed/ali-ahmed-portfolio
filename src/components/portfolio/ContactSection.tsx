import Reveal from './Reveal'
import { contactCards } from '../../data/portfolio'
import { useT } from '../../i18n/LocaleContext'

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
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
  const t = useT()

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-36">
      <div className="aurora aurora-b -start-24 bottom-0 h-[15rem] w-[34rem]" />

      <div className="shell relative">
        <Reveal as="p" className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">
          04 <span dir="ltr">— {t.sections.contact.eyebrow}</span>
        </Reveal>

        <Reveal
          as="a"
          href="https://wa.me/201153349092"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between gap-6 border-b border-border pb-8"
        >
          <span className="font-display text-[clamp(2.5rem,8vw,6.5rem)] font-extrabold leading-[1.2] tracking-tight transition-colors duration-500 group-hover:text-primary">
            {t.contact.cta}
          </span>
          <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-500 group-hover:rotate-45 group-hover:border-primary group-hover:grad-brand group-hover:text-primary-foreground md:size-20">
            <ArrowIcon />
          </span>
        </Reveal>

        {/* Quick WhatsApp / Direct Connect Card matching Stitch */}
        <Reveal delay={40}>
          <a
            href="https://wa.me/201153349092"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 md:p-5 rounded-2xl bg-card border border-border hover:border-emerald-500/60 transition-all duration-300 shadow-md group my-6 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.12c-1.49 0-2.95-.4-4.22-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.18 8.18 0 0 1-1.26-4.34c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4a8.16 8.16 0 0 1 2.4 5.8c0 4.52-3.68 8.21-8.2 8.21zm4.49-6.14c-.25-.12-1.47-.72-1.7-.8-.23-.09-.39-.12-.56.12-.17.25-.64.8-.79.97-.15.17-.29.2-.54.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.72 4.31 3.81.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z"/>
                </svg>
              </div>
              <div>
                <div className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider">
                  {t.contact.whatsappDirect}
                </div>
                <div className="text-base font-bold text-foreground tracking-wide" dir="ltr">
                  {t.contact.whatsappNumber}
                </div>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:border-emerald-500/50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 rtl:-scale-x-100">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
              </svg>
            </div>
          </a>
        </Reveal>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {contactCards.map((card, index) => (
            <Reveal
              key={card.key}
              as="a"
              delay={index * 80}
              href={card.href}
              target="_blank"
              rel="noreferrer"
              className="group glass rounded-md p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary"
            >
              <p className="text-sm text-muted-foreground">{t.contact[card.key]}</p>
              <p
                dir="ltr"
                className="mt-1 text-end text-base font-semibold transition-colors group-hover:text-primary md:text-lg"
              >
                {card.value}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
