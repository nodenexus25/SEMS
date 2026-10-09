import type { JSX, ReactNode } from 'react'
import { createElement, useRef } from 'react'
import { useInView } from 'framer-motion'
import { useEffect, useState } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: keyof JSX.IntrinsicElements
  blur?: number
}

export default function Reveal({
  children,
  delay = 0,
  y = 22,
  className = '',
  as = 'div',
  blur = 5,
}: RevealProps) {
  const sentinelRef = useRef<HTMLSpanElement | null>(null)
  const rootRef = useRef<HTMLDivElement | HTMLSpanElement | HTMLElement | null>(null)
  const inView = useInView(sentinelRef, { once: true, amount: 0.18 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const el = rootRef.current as HTMLElement | null
    if (!el || !mounted) return
    if (inView) {
      el.style.transform = 'translate3d(0,0,0)'
      el.style.opacity = '1'
      el.style.filter = `blur(0px)`
    } else {
      el.style.transform = `translate3d(0, ${y}px, 0)`
      el.style.opacity = '0'
      el.style.filter = `blur(${blur}px)`
    }
  }, [inView, y, blur, mounted])

  return createElement(
    as,
    {
      ref: rootRef,
      className,
      style: {
        willChange: 'transform, opacity, filter',
        transition: `transform 850ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, opacity 850ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, filter 850ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      },
    },
    <>
      <span ref={sentinelRef} />
      {children}
    </>,
  )
}
