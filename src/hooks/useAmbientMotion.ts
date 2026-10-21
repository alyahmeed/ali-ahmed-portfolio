import { useEffect } from 'react'

/**
 * Drives the ambient glass orbs: they drift with the pointer (hover) and
 * travel with the page (scroll parallax). The values are written to the
 * document root as CSS custom properties so the motion stays on the GPU.
 */
export function useAmbientMotion() {
  useEffect(() => {
    const root = document.documentElement

    let scrollTarget = window.scrollY
    let scrollCurrent = scrollTarget
    let pointerTargetX = 0
    let pointerTargetY = 0
    let pointerCurrentX = 0
    let pointerCurrentY = 0
    let frame = 0
    let running = true

    const onScroll = () => {
      scrollTarget = window.scrollY
    }

    const onPointerMove = (event: PointerEvent) => {
      pointerTargetX = event.clientX / window.innerWidth - 0.5
      pointerTargetY = event.clientY / window.innerHeight - 0.5
    }

    const tick = () => {
      if (!running) return
      scrollCurrent += (scrollTarget - scrollCurrent) * 0.12
      pointerCurrentX += (pointerTargetX - pointerCurrentX) * 0.06
      pointerCurrentY += (pointerTargetY - pointerCurrentY) * 0.06

      root.style.setProperty('--scroll-y', `${scrollCurrent.toFixed(1)}px`)
      root.style.setProperty('--px', pointerCurrentX.toFixed(4))
      root.style.setProperty('--py', pointerCurrentY.toFixed(4))

      frame = requestAnimationFrame(tick)
    }

    const onVisibility = () => {
      if (document.hidden) {
        running = false
        cancelAnimationFrame(frame)
      } else if (!running) {
        running = true
        frame = requestAnimationFrame(tick)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    document.addEventListener('visibilitychange', onVisibility)
    frame = requestAnimationFrame(tick)

    return () => {
      running = false
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])
}
