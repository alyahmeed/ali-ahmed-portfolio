import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { skills } from '../../data/portfolio'

export default function AboutSection() {
  return (
    <section id="about" className="shell py-24 md:py-36">
      <SectionHeading number="03" eyebrow="About" title="عنّي" />

      <div className="grid items-center gap-10 md:grid-cols-[1fr_1.3fr] md:gap-16">
        <Reveal className="group relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-md bg-card">
          <img
            src="/assets/ali-ahmed-portrait.jpg"
            alt="علي أحمد عاطف"
            className="absolute inset-0 size-full scale-110 object-cover grayscale transition-[filter] duration-700 group-hover:grayscale-0"
          />
          <div className="card-veil absolute inset-0" />
          <p className="absolute bottom-4 start-4 font-mono text-[10px] tracking-[0.25em] text-primary">
            سوهاج وأسوان، مصر
          </p>
        </Reveal>

        <div>
          <Reveal as="p" className="text-2xl font-bold leading-relaxed md:text-3xl">
            علي أحمد عاطف{' '}
            <span className="text-muted-foreground">— مصمم جرافيك ومونتير</span>
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="mt-5 max-w-xl leading-loose text-muted-foreground md:text-lg"
          >
            بصمم مطبوعات وأغلفة كتب وحملات سوشيال ميديا، وبعمل مونتاج للفيديوهات والريلز. أكتر من سنتين
            مصمم لمؤسستي الفردوس وثواب، و٤ شهور في مكتب إنبوكس للدعاية والإعلان.
          </Reveal>

          <Reveal as="div" delay={140} className="mt-8 flex gap-10">
            <div>
              <p dir="ltr" className="text-end font-display text-4xl font-extrabold text-primary md:text-5xl">
                +2
              </p>
              <p className="mt-1 text-sm text-muted-foreground">سنين خبرة</p>
            </div>
            <div>
              <p dir="ltr" className="text-end font-display text-4xl font-extrabold text-primary md:text-5xl">
                +20
              </p>
              <p className="mt-1 text-sm text-muted-foreground">مشروع حقيقي</p>
            </div>
          </Reveal>

          <ul className="mt-10 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Reveal
                key={skill}
                as="li"
                delay={index * 50}
                className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
              >
                {skill}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
