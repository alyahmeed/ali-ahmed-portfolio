import type { CSSProperties } from 'react'
import { cn } from '../../lib/utils'

type AmbientOrbProps = {
  /** Colour family of the glow. */
  variant?: 'a' | 'b' | 'c'
  /** How strongly the orb follows the pointer. */
  strength?: number
  /** Parallax depth against the page scroll. */
  depth?: number
  className?: string
}

export default function AmbientOrb({
  variant = 'a',
  strength = 1,
  depth = 0.05,
  className,
}: AmbientOrbProps) {
  const style = {
    '--orb-strength': strength,
    '--orb-depth': depth,
  } as CSSProperties

  return (
    <div className={cn('aurora', `aurora-${variant}`, className)} style={style} aria-hidden="true">
      <span className="aurora-blob" />
    </div>
  )
}
