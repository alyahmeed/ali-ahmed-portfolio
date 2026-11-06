import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { teachers } from '../../data/portfolio'
import { useT } from '../../i18n/LocaleContext'

function TeacherCard({ name, note, image }: { name: string; note?: string; image?: string }) {
  const t = useT()

  return (
    <>
      {image ? (
        <img
          src={image}
          alt={name}
          width={80}
          height={80}
          loading="lazy"
          className="mb-5 size-16 rounded-full border border-border object-cover md:size-20"
        />
      ) : (
        <span
          aria-hidden="true"
          className="mb-5 flex size-12 items-center justify-center rounded-full border border-primary/40 font-display text-lg font-bold text-primary md:size-14 md:text-xl"
        >
          {name.trim().charAt(0)}
        </span>
      )}

      <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.25em] text-primary">
        {t.teachers.role}
      </p>
      <p className="mt-2 text-xl font-bold leading-snug md:text-2xl">{name}</p>
      {note && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{note}</p>}
    </>
  )
}

export default function TeachersSection() {
  const t = useT()

  return (
    <section id="teachers" className="relative overflow-hidden py-24 md:py-36">
      <div className="aurora aurora-c -start-32 top-16 h-[15rem] w-[36rem]" />

      <div className="shell relative">
        <SectionHeading number={4} eyebrow={t.sections.teachers.eyebrow} title={t.sections.teachers.title} />

        <Reveal as="p" className="mb-10 max-w-2xl leading-loose text-muted-foreground md:text-lg">
          {t.teachers.intro}
        </Reveal>

        {teachers.length > 0 ? (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teachers.map((teacher, index) => (
              <Reveal
                key={teacher.id}
                as="li"
                delay={index * 60}
                className="glass group relative overflow-hidden rounded-md p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary"
              >
                <TeacherCard name={teacher.name} note={teacher.note} image={teacher.image} />
              </Reveal>
            ))}
          </ul>
        ) : (
          <Reveal
            as="div"
            className="glass flex flex-col items-start gap-5 rounded-md border-dashed p-7 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.25em] text-primary">
                {t.teachers.role}
              </p>
              <p className="mt-2 text-lg font-bold">{t.teachers.empty}</p>
            </div>
            <span className="rounded-full border border-border px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              {t.video.soon}
            </span>
          </Reveal>
        )}
      </div>
    </section>
  )
}
