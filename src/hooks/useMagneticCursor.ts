import { useEffect, useRef, useState } from 'react'

type MagnetTarget = HTMLElement | null

export default function useMagneticCursor(
  strength = 0.32,
  ease: readonly [number, number, number, number] = [0.22, 1, 0.36, 1] as const,
) {
  const ref = useRef<MagnetTarget>(null)
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handleMove = (e: Event) => {
      const me = e as MouseEvent
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = (me.clientX - cx) * strength
      const dy = (me.clientY - cy) * strength
      setOffset({ x: dx, y: dy })
    }
    const reset = () => {
      setOffset({ x: 0, y: 0 })
      setIsHover(false)
    }
    const enter = () => setIsHover(true)
    el.addEventListener('mousemove', handleMove as EventListener)
    el.addEventListener('mouseenter', enter)
    el.addEventListener('mouseleave', reset)
    return () => {
      el.removeEventListener('mousemove', handleMove as EventListener)
      el.removeEventListener('mouseenter', enter)
      el.removeEventListener('mouseleave', reset)
    }
  }, [strength])

  const easeStr = ease.join(',')
  const motionProps = {
    style: {
      transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${isHover ? 1.03 : 1})`,
      transition: `transform 450ms cubic-bezier(${easeStr})`,
    },
  }
  return { ref, motionProps, isHover }
}
