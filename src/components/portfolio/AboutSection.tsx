import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { skills } from '../../data/portfolio'
import { useT } from '../../i18n/LocaleContext'

export default function AboutSection() {
  const t = useT()

  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-36">
      <div className="aurora aurora-a -end-32 top-24 size-[26rem]" />

      <div className="shell relative">
        <SectionHeading number={5} eyebrow={t.sections.about.eyebrow} title={t.sections.about.title} />

        <div className="grid items-center gap-10 md:grid-cols-[1fr_1.3fr] md:gap-16">
          <Reveal className="group relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-md border border-border bg-card ring-glow">
            <img
              src="assets/me.png"
              alt={t.about.name}
              className="absolute inset-0 size-full scale-110 object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.16]"
            />
            <div className="card-veil absolute inset-0 opacity-80 transition-opacity duration-700 group-hover:opacity-50" />
            <span className="pointer-events-none absolute -end-8 -top-8 size-28 rounded-full bg-primary/25 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
            <p className="absolute bottom-4 start-4 font-mono text-[10px] tracking-[0.25em] text-primary">
              {t.about.location}
            </p>
          </Reveal>

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

            <Reveal as="div" delay={140} className="mt-8 flex gap-10">
              <div>
                <p dir="ltr" className="text-end font-display text-4xl font-extrabold text-primary md:text-5xl">
                  +2
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{t.about.expLabel}</p>
              </div>
              <div>
                <p dir="ltr" className="text-end font-display text-4xl font-extrabold text-primary md:text-5xl">
                  +20
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{t.about.projectsLabel}</p>
              </div>
            </Reveal>

            <ul className="mt-10 flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Reveal
                  key={skill}
                  as="li"
                  delay={index * 50}
                  className="rounded-full border border-border px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  {t.skills[skill]}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
