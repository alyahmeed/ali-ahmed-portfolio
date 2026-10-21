import { cn } from '../../lib/utils'

type ProjectCardProps = {
  image: string
  title: string
  client: string
  index: number
  className?: string
}

export default function ProjectCard({ image, title, client, index, className }: ProjectCardProps) {
  return (
    <button
      type="button"
      className={cn(
        'group relative block w-full overflow-hidden rounded-md bg-card text-start ring-glow',
        'transition-transform duration-500 ease-out hover:-translate-y-1.5',
        className,
      )}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="h-auto w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.07]"
      />
      <div className="card-veil absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* golden corner accent on hover */}
      <span className="pointer-events-none absolute -end-3 -top-3 size-16 rounded-full bg-primary/25 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-0 translate-y-6 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="mb-1 font-mono text-[10px] tracking-[0.25em] text-primary">
          {String(index).padStart(2, '0')}
        </p>
        <h3 className="text-base font-bold leading-snug md:text-lg">{title}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{client}</p>
      </div>
    </button>
  )
}
