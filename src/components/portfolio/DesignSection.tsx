import { useMemo, useState } from 'react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { categories, printFilters, projects, socialFilters } from '../../data/portfolio'
import type { Category } from '../../data/portfolio'

export default function DesignSection() {
  const [category, setCategory] = useState<Category>('print')
  const [filter, setFilter] = useState('all')

  const filters = category === 'print' ? printFilters : socialFilters

  const visible = useMemo(() => {
    const inCategory = projects.filter((project) => project.category === category)
    if (filter === 'all') return inCategory
    return inCategory.filter((project) => project.tags.includes(filter))
  }, [category, filter])

  const changeCategory = (next: Category) => {
    setCategory(next)
    setFilter('all')
  }

  return (
    <section id="design" className="shell py-24 md:py-36">
      <SectionHeading number="01" eyebrow="Design" title="التصميم" />

      <Reveal className="mb-10 flex flex-col gap-5">
        <div className="flex w-fit flex-wrap gap-1 rounded-full border border-border p-1">
          {categories.map((item) => {
            const active = category === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => changeCategory(item.id)}
                className={`relative rounded-full px-6 py-3 text-base font-bold transition-colors duration-300 md:text-lg ${
                  active ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {active && <span className="absolute inset-0 rounded-full bg-primary" />}
                <span className="relative">
                  {item.label}
                  <sup className="ms-1 font-mono text-[10px] opacity-70">{item.count}</sup>
                </span>
              </button>
            )
          })}
        </div>

        <div className="flex flex-wrap gap-1 overflow-hidden">
          {filters.map((item) => {
            const active = filter === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                  active ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {active && <span className="absolute inset-0 rounded-full bg-foreground" />}
                <span className="relative">{item.label}</span>
              </button>
            )
          })}
        </div>
      </Reveal>

      <div>
        <div className="columns-1 gap-4 sm:columns-2 md:gap-5">
          {visible.map((project, index) => (
            <Reveal
              key={project.id}
              as="button"
              type="button"
              delay={index * 60}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-md bg-card text-start focus-visible:outline-2 focus-visible:outline-ring md:mb-5"
            >
              <img
                src={project.image}
                alt={project.title}
                width={project.width}
                height={project.height}
                loading="lazy"
                className="h-auto w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
              />
              <div className="card-veil absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-6 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="mb-1 font-mono text-[10px] tracking-[0.25em] text-primary">
                  {String(project.id).padStart(2, '0')}
                </p>
                <h3 className="text-base font-bold leading-snug md:text-lg">{project.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{project.client}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
