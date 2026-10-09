import { useEffect, useRef, useState } from 'react'

export interface ScrollPosition {
  scrollY: number
}

const THROTTLE_MS = 16

export function useScrollPosition(): ScrollPosition {
  const [scrollY, setScrollY] = useState<number>(
    typeof window !== 'undefined' ? window.scrollY : 0,
  )

  const tickingRef = useRef<boolean>(false)

  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    const handleScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          tickingRef.current = false
        })
        tickingRef.current = true
      }
    }

    let lastRun = 0
    const throttledHandler = () => {
      const now = Date.now()
      if (now - lastRun >= THROTTLE_MS) {
        handleScroll()
        lastRun = now
      }
    }

    window.addEventListener('scroll', throttledHandler, { passive: true })

    return () => {
      window.removeEventListener('scroll', throttledHandler)
    }
  }, [])

  return { scrollY }
}

export default useScrollPosition
