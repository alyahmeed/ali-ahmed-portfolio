import { useMemo, useState } from 'react'
import { cn } from '../../lib/utils'
import GalleryGrid from './GalleryGrid'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { useT } from '../../i18n/LocaleContext'
import { projects } from '../../data/portfolio'
import type { Category } from '../../data/portfolio'

/**
 * Section 01 — every design project lives here: print collateral and social
 * media campaigns, each with its own filter row and grid.
 */
export default function DesignSection() {
  const t = useT()
  const [printFilter, setPrintFilter] = useState('all')
  const [socialFilter, setSocialFilter] = useState('all')

  const blocks: {
    id: Category
    title: string
    filters: { id: string; label: string }[]
    filter: string
    setFilter: (value: string) => void
  }[] = [
    {
      id: 'social',
      title: t.sections.social.title,
      filters: [
        { id: 'all', label: t.filters.social.all },
        { id: 'posts', label: t.filters.social.posts },
        { id: 'campaigns', label: t.filters.social.campaigns },
        { id: 'contests', label: t.filters.social.contests },
      ],
      filter: socialFilter,
      setFilter: setSocialFilter,
    },
    {
      id: 'print',
      title: t.sections.print.title,
      filters: [
        { id: 'all', label: t.filters.print.all },
        { id: 'books', label: t.filters.print.books },
        { id: 'covers', label: t.filters.print.covers },
      ],
      filter: printFilter,
      setFilter: setPrintFilter,
    },
  ]

  const itemsFor = useMemo(
    () => (category: Category, filter: string) => {
      const inCategory = projects.filter((project) => project.category === category)
      const filtered = filter === 'all' ? inCategory : inCategory.filter((p) => p.tags.includes(filter))
      return filtered.map((project) => ({
        id: project.id,
        title: t.projects[project.id as keyof typeof t.projects]?.title ?? project.title,
        client: t.projects[project.id as keyof typeof t.projects]?.client ?? project.client,
        image: project.image,
      }))
    },
    [t],
  )

  return (
    <section id="design" className="relative overflow-hidden py-24 md:py-36">
      <div className="shell relative">
        <SectionHeading number={1} eyebrow={t.sections.design.eyebrow} title={t.sections.design.title} />

        {blocks.map((block) => {
          const items = itemsFor(block.id, block.filter)
          const count = projects.filter((project) => project.category === block.id).length

          return (
            <div key={block.id} className="mb-16 last:mb-0 md:mb-24">
              {/* Block title */}
              <Reveal className="mb-6 flex items-baseline gap-4">
                <h3 className="font-display text-2xl font-extrabold md:text-3xl">
                  <span className="text-gradient">{block.title}</span>
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {String(count).padStart(2, '0')}
                </span>
                <span className="gold-line h-px flex-1" />
              </Reveal>

              {/* Filters */}
              <Reveal delay={60} className="mb-8 flex flex-wrap gap-1">
                {block.filters.map((item) => {
                  const active = block.filter === item.id
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => block.setFilter(item.id)}
                      className={cn(
                        'relative rounded-full px-5 py-2.5 text-sm transition-all duration-300',
                        active
                          ? 'text-primary-foreground'
                          : 'text-muted-foreground hover:border-primary/60 hover:text-foreground',
                      )}
                    >
                      {active && (
                        <span className="absolute inset-0 rounded-full grad-brand shadow-[0_8px_24px_-10px_hsl(var(--primary)/0.8)]" />
                      )}
                      <span className="relative">{item.label}</span>
                    </button>
                  )
                })}
              </Reveal>

              <GalleryGrid
                key={`${block.id}-${block.filter}`}
                items={items}
                preview={4}
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
            </div>
          )
        })}
      </div>
    </section>
  )
}
