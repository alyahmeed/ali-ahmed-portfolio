import { createElement, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

type RevealProps = {
  as?: keyof JSX.IntrinsicElements
  children?: ReactNode
  className?: string
  delay?: number
  distance?: number
  once?: boolean
} & Record<string, unknown>

export default function Reveal({
  as = 'div',
  children,
  className,
  delay = 0,
  distance = 24,
  once = true,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) observer.disconnect()
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  return createElement(
    as,
    {
      ...rest,
      ref: ref as never,
      style: {
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : `translateY(${distance}px)`,
        ...(rest.style as object),
      },
      className: cn(
        'transition-all duration-700 ease-out motion-reduce:transition-none',
        className,
      ),
    },
    children,
  )
}
