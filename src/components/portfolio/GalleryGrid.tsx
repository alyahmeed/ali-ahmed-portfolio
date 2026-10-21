import { useState } from 'react'
import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'
import Reveal from './Reveal'

export type GalleryItem = {
  id: number
  title: string
  client: string
  image: string
}

type GalleryGridProps = {
  items: GalleryItem[]
  /** How many tiles are visible before the "+N" tile. */
  preview?: number
  /** Extra class for the grid container. */
  className?: string
  tileClassName?: string
  showAllLabel: string
  showLessLabel: string
  moreLabel: string
  renderTile?: (item: GalleryItem, index: number) => ReactNode
}

/**
 * A tidy preview grid: shows `preview` tiles and overlays the last one with a
 * "+N" badge. Clicking it expands the full set in place.
 */
export default function GalleryGrid({
  items,
  preview = 4,
  className,
  tileClassName,
  showAllLabel,
  showLessLabel,
  moreLabel,
  renderTile,
}: GalleryGridProps) {
  const [expanded, setExpanded] = useState(false)

  if (!items.length) return null

  const hidden = Math.max(items.length - preview, 0)
  const visible = expanded ? items : items.slice(0, preview)

  return (
    <div className={className}>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {visible.map((item, index) => {
          const isLastPreview = !expanded && index === visible.length - 1 && hidden > 0
          return (
            <Reveal
              key={item.id}
              delay={Math.min(index, 6) * 60}
              className={cn('group relative', tileClassName)}
            >
              {renderTile ? (
                renderTile(item, index)
              ) : (
                <button type="button" className="block w-full overflow-hidden rounded-md bg-card text-start">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-auto w-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                  />
                </button>
              )}

              {isLastPreview && (
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  aria-label={`${showAllLabel} (${hidden} ${moreLabel})`}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-1 rounded-md bg-background/70 backdrop-blur-sm transition-colors duration-500 hover:bg-background/55"
                >
                  <span className="font-display text-3xl font-extrabold text-primary md:text-4xl">
                    +{hidden}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {showAllLabel}
                  </span>
                </button>
              )}
            </Reveal>
          )
        })}
      </div>

      {expanded && hidden > 0 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded(false)}
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            {showLessLabel}
          </button>
        </div>
      )}
    </div>
  )
}
