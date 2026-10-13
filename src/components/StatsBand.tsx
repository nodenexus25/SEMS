import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import type { StatsItem, StatsTab } from '@/types/school'

export interface StatsBandProps {
  tabs: StatsTab[]
}

const cinematic: [number, number, number, number] = [0.22, 1, 0.36, 1]

function useCountUp(
  target: number,
  start: boolean,
  durationMs = 1800,
): number {
  const [value, setValue] = useState(0)
  const rafRef = useRef<number | null>(null)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!start || startedRef.current) return
    startedRef.current = true

    const startTime = performance.now()
    const easeOutExpo = (t: number) =>
      t === 1 ? 1 : 1 - Math.pow(2, -10 * t)

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      const eased = easeOutExpo(progress)
      setValue(Math.round(eased * target))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [target, start, durationMs])

  return value
}

function CountUpValue({ item, animate }: { item: StatsItem; animate: boolean }) {
  const displayValue = useCountUp(item.value, animate)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.5, ease: cinematic }}
      className="flex flex-col items-center text-center px-2"
    >
      <div className="font-serif text-4xl md:text-5xl lg:text-6xl leading-none text-forest-deep mb-2">
        {item.prefix}
        {displayValue}
        <span className="text-terracotta">{item.suffix ?? ''}</span>
      </div>
      <div className="text-[11px] md:text-xs uppercase tracking-editorial text-charcoal-soft/70 font-medium leading-snug max-w-[140px]">
        {item.label}
      </div>
    </motion.div>
  )
}

export default function StatsBand({ tabs }: StatsBandProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const inView = useInView(containerRef, { once: true, amount: 0.3 })
  const [tabAnimKey, setTabAnimKey] = useState(0)

  const safeIndex = Math.min(
    Math.max(selectedIndex, 0),
    Math.max(tabs.length - 1, 0),
  )
  const activeTab = tabs[safeIndex]

  useEffect(() => {
    setTabAnimKey((k) => k + 1)
  }, [safeIndex])

  if (tabs.length === 0 || !activeTab) return null

  return (
    <div
      ref={containerRef}
      className="w-full bg-gradient-to-b from-ivory-deep via-wheat/40 to-ivory border-y border-wheat/60 py-14 md:py-20"
    >
      <div className="container-editorial">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-14">
          {tabs.map((tab, i) => {
            const isActive = i === safeIndex
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedIndex(i)}
                className={`relative px-5 md:px-7 py-2.5 md:py-3 text-xs md:text-sm uppercase tracking-editorial font-semibold transition-all duration-450 ease-cinematic ${
                  isActive
                    ? 'bg-forest text-ivory shadow-editorial'
                    : 'bg-ivory text-charcoal-soft/70 border border-wheat hover:text-charcoal hover:border-sage-light'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab.id}-${tabAnimKey}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: cinematic }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 md:gap-y-12 gap-x-4 md:gap-x-6"
          >
            {activeTab.items.map((item) => (
              <CountUpValue
                key={`${item.id}-${tabAnimKey}`}
                item={item}
                animate={inView}
              />
            ))}
            {Array.from({
              length: Math.max(0, 6 - activeTab.items.length),
            }).map((_, emptyIdx) => (
              <div key={`empty-${emptyIdx}`} className="hidden lg:block" />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
