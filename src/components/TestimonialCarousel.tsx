import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import { Star } from 'lucide-react'
import type { TestimonialItem } from '@/types/school'

export interface TestimonialCarouselProps {
  items: TestimonialItem[]
  autoplayMs?: number
}

const cinematic: [number, number, number, number] = [0.22, 1, 0.36, 1]

function RatingStars({ rating }: { rating: 1 | 2 | 3 | 4 | 5 }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={15}
          className={
            n <= rating
              ? 'fill-terracotta text-terracotta'
              : 'text-wheat fill-transparent'
          }
          strokeWidth={1.5}
        />
      ))}
    </div>
  )
}

export default function TestimonialCarousel({
  items,
  autoplayMs = 6000,
}: TestimonialCarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [visibleCount, setVisibleCount] = useState(3)
  const [page, setPage] = useState(0)
  const isDraggingRef = useRef(false)

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth
      if (w < 768) setVisibleCount(1)
      else if (w < 1024) setVisibleCount(2)
      else setVisibleCount(3)
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [])

  const total = items.length
  const pageCount = Math.max(1, Math.ceil(total / visibleCount))
  const clampedPage = Math.min(Math.max(page, 0), pageCount - 1)

  const cardWidth = 100 / visibleCount
  const offsetPerPage = visibleCount * cardWidth
  const targetOffset = -clampedPage * offsetPerPage
  const x = useMotionValue(targetOffset)

  useEffect(() => {
    if (isDraggingRef.current) return
    const controls = animate(x, targetOffset, {
      duration: 0.7,
      ease: cinematic,
    })
    return controls.stop
  }, [targetOffset, x])

  const goTo = useCallback(
    (nextPage: number) => {
      setPage(((nextPage % pageCount) + pageCount) % pageCount)
    },
    [pageCount],
  )

  useEffect(() => {
    if (total <= visibleCount) return
    const id = window.setInterval(() => {
      if (!isDraggingRef.current) {
        setPage((p) => (p + 1) % pageCount)
      }
    }, autoplayMs)
    return () => window.clearInterval(id)
  }, [total, visibleCount, pageCount, autoplayMs])

  const handleDragStart = () => {
    isDraggingRef.current = true
  }

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } },
  ) => {
    isDraggingRef.current = false
    const threshold = 80
    if (info.offset.x < -threshold) goTo(clampedPage + 1)
    else if (info.offset.x > threshold) goTo(clampedPage - 1)
    else animate(x, targetOffset, { duration: 0.35, ease: cinematic })
  }

  if (total === 0) return null

  return (
    <div className="w-full py-14 md:py-20 bg-forest-deep text-ivory relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(circle_at_20%_20%,#B6583C_0%,transparent_60%),radial-gradient(circle_at_80%_80%,#E4D9B8_0%,transparent_60%)]" />
      <div className="relative container-editorial">
        <div className="mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-editorial text-terracotta-soft mb-3 font-semibold">
            Trusted Voices
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory">
            What parents and guardians say.
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              ref={trackRef}
              style={{ x: total > visibleCount ? x : 0 }}
              drag={total > visibleCount ? 'x' : false}
              dragConstraints={trackRef}
              dragElastic={0.12}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              className="flex cursor-grab active:cursor-grabbing select-none"
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  className="shrink-0 px-3 md:px-4"
                  style={{ width: `${cardWidth}%` }}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.45, ease: cinematic }}
                    className="h-full bg-ivory/95 text-charcoal p-6 md:p-7 flex flex-col gap-5 min-h-[380px]"
                    style={{ boxShadow: '0 1px 2px rgba(31,41,36,0.06)' }}
                  >
                    <RatingStars rating={item.rating} />

                    <p className="font-serifAlt text-xl md:text-[22px] leading-relaxed text-charcoal flex-1 italic">
                      <span className="text-terracotta text-3xl leading-none mr-1 align-sub">
                        “
                      </span>
                      {item.quote}
                      <span className="text-terracotta text-3xl leading-none ml-1 align-text-top">
                        ”
                      </span>
                    </p>

                    <div className="flex items-center gap-4 pt-3 border-t border-wheat/60">
                      <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-wheat">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-charcoal text-sm truncate">
                          {item.name}
                        </p>
                        <p className="text-[12px] text-terracotta font-medium truncate">
                          {item.relation}
                        </p>
                        <p className="text-[11px] text-sage truncate">
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {pageCount > 1 && (
            <div className="flex items-center justify-center gap-2 mt-10">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial page ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-450 ease-cinematic ${
                    i === clampedPage
                      ? 'w-10 bg-terracotta'
                      : 'w-2 bg-ivory/30 hover:bg-ivory/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
