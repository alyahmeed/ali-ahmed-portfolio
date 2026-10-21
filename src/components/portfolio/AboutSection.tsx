import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { skills } from '../../data/portfolio'
import { useT } from '../../i18n/LocaleContext'

export default function AboutSection() {
  const t = useT()

  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-36">
      <div className="aurora aurora-a -end-32 top-24 h-[14rem] w-[36rem]" />

      <div className="shell relative">
        <SectionHeading number={3} eyebrow={t.sections.about.eyebrow} title={t.sections.about.title} />

        <div className="grid gap-10 md:grid-cols-[1.35fr_1fr] md:gap-16">
          <div>
            <Reveal as="p" className="text-2xl font-bold leading-relaxed md:text-3xl">
              {t.about.name}{' '}
              <span className="text-muted-foreground">— {t.about.role}</span>
            </Reveal>
            <Reveal
              as="p"
              delay={80}
              className="mt-5 max-w-xl leading-loose text-muted-foreground md:text-lg"
            >
              {t.about.bio}
            </Reveal>

            <ul className="mt-10 flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Reveal
                  key={skill}
                  as="li"
                  delay={index * 50}
                  className="glass-pill rounded-full px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  {t.skills[skill]}
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Stats card */}
          <Reveal delay={140} className="h-fit">
            <div className="glass-strong relative overflow-hidden rounded-md p-7 md:p-9">
              <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,hsl(var(--primary)/0.16),transparent_60%)]" />

              <div className="relative grid grid-cols-2 gap-6">
                <div>
                  <p dir="ltr" className="text-end font-display text-5xl font-extrabold text-primary md:text-6xl">
                    +4
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{t.about.expLabel}</p>
                </div>
                <div>
                  <p dir="ltr" className="text-end font-display text-5xl font-extrabold text-primary md:text-6xl">
                    +100
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{t.about.projectsLabel}</p>
                </div>
              </div>

              <div className="relative mt-8 border-t border-border pt-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                  {t.about.location}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
