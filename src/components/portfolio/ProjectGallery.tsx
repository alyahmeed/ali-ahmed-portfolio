import { useMemo, useState } from 'react'
import { cn } from '../../lib/utils'
import GalleryGrid from './GalleryGrid'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { useT } from '../../i18n/LocaleContext'
import { projects } from '../../data/portfolio'
import type { Category } from '../../data/portfolio'

type ProjectGalleryProps = {
  number: number
  category: Category
  eyebrow: string
  title: string
  /** How many tiles show before the "+N" overlay. */
  preview?: number
}

export default function ProjectGallery({
  number,
  category,
  eyebrow,
  title,
  preview = 4,
}: ProjectGalleryProps) {
  const t = useT()
  const [filter, setFilter] = useState('all')

  const filters =
    category === 'print'
      ? [
          { id: 'all', label: t.filters.print.all },
          { id: 'books', label: t.filters.print.books },
          { id: 'memos', label: t.filters.print.memos },
          { id: 'covers', label: t.filters.print.covers },
        ]
      : [
          { id: 'all', label: t.filters.social.all },
          { id: 'posts', label: t.filters.social.posts },
          { id: 'campaigns', label: t.filters.social.campaigns },
          { id: 'contests', label: t.filters.social.contests },
        ]

  const visible = useMemo(() => {
    const inCategory = projects.filter((project) => project.category === category)
    if (filter === 'all') return inCategory
    return inCategory.filter((project) => project.tags.includes(filter))
  }, [category, filter])

  const items = visible.map((project) => ({
    id: project.id,
    title: t.projects[project.id as keyof typeof t.projects]?.title ?? project.title,
    client: t.projects[project.id as keyof typeof t.projects]?.client ?? project.client,
    image: project.image,
  }))

  return (
    <section id={category} className="shell py-24 md:py-36">
      <SectionHeading number={number} eyebrow={eyebrow} title={title} />

      <Reveal className="mb-10 flex flex-wrap gap-1">
        {filters.map((item) => {
          const active = filter === item.id
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              className={cn(
                'relative rounded-full px-5 py-2.5 text-sm transition-all duration-300',
                active
                  ? 'text-primary-foreground'
                  : 'text-muted-foreground hover:border-primary/60 hover:text-foreground',
              )}
            >
              {active && (
                <span className="absolute inset-0 rounded-full grad-brand shadow-[0_8px_24px_-10px_hsl(var(--primary)/0.8)]" />
              )}              <span className="relative">{item.label}</span>
            </button>
          )
        })}
      </Reveal>

      <GalleryGrid
        key={`${category}-${filter}`}
        items={items}
        preview={preview}
        showAllLabel={t.gallery.showAll}
        showLessLabel={t.gallery.showLess}
        moreLabel={t.gallery.more}
        renderTile={(item, index) => (
          <ProjectCard
            image={item.image}
            title={item.title}
            client={item.client}
            index={index + 1}
            className="rounded-md"
          />
        )}
      />
    </section>
  )
}
