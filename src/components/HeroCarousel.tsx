import { forwardRef, useCallback, useEffect, useState } from 'react'
import type { Ref } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'
import type { HeroSlide } from '@/types/school'
import useMagneticCursor from '@/hooks/useMagneticCursor'

export interface HeroCarouselProps {
  slides: HeroSlide[]
  intervalMs?: number
  height?: string
}

const cinematic: [number, number, number, number] = [0.22, 1, 0.36, 1]

const WordReveal = forwardRef<
  HTMLSpanElement,
  {
    text: string
    className?: string
    delayBase?: number
    perWord?: number
    keyId: string | number
  }
>(function WordReveal(
  { text, className, delayBase = 0.28, perWord = 55, keyId },
  _ref,
) {
  const words = text.split(/\s+/)
  return (
    <motion.span className={`block ${className ?? ''}`}>
      {words.map((w, i) => (
        <span key={`${keyId}-${i}`} className="word-reveal mr-[0.28em]">
          <motion.span
            key={`${keyId}-${i}-${w}`}
            initial={{ y: '115%', opacity: 0.01 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '35%', opacity: 0 }}
            transition={{
              duration: 0.9,
              delay: delayBase + (i * perWord) / 1000,
              ease: cinematic,
            }}
            className="inline-block"
          >
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
})

export default function HeroCarousel({
  slides,
  intervalMs = 4000,
  height,
}: HeroCarouselProps) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const { ref: prevRef, motionProps: prevMotion } = useMagneticCursor(0.24)
  const { ref: nextRef, motionProps: nextMotion } = useMagneticCursor(0.24)

  const total = slides.length

  const goTo = useCallback(
    (next: number) => {
      if (total === 0) return
      const wrapped = ((next % total) + total) % total
      setIndex(wrapped)
    },
    [total],
  )

  const prev = useCallback(() => goTo(index - 1), [index, goTo])
  const next = useCallback(() => goTo(index + 1), [index, goTo])

  // Preload all hero images into the browser cache so carousel slide changes
  // never abort in-flight image requests (causes net::ERR_ABORTED in console).
  useEffect(() => {
    if (total === 0) return
    slides.forEach((slide) => {
      const preload = new Image()
      preload.src = slide.image
    })
  }, [slides, total])

  useEffect(() => {
    if (paused || total <= 1) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [paused, total, intervalMs])

  if (total === 0) return null

  const current = slides[index]

  return (
    <div
      className={`relative w-full ${
        height ?? 'h-[580px] md:h-[660px] lg:h-[720px]'
      } overflow-hidden bg-charcoal`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 1.01 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.01 }}
          transition={{ duration: 1.1, ease: cinematic }}
          className="absolute inset-0"
        >
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover select-none"
            draggable={false}
            decoding="async"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_20%,rgba(47,82,51,0.3),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_90%,rgba(182,88,60,0.28),transparent_55%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/92 via-charcoal/58 to-charcoal/22" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-charcoal/40" />
          <div className="absolute inset-0 mix-blend-overlay opacity-30 pointer-events-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/><feColorMatrix values=%220 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.16 0%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>')]" />

          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-wheat/50 to-transparent pointer-events-none" />

          <div className="relative z-10 h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col justify-center">
            <div className="max-w-3xl">
              {current.tagline && (
                <motion.div
                  initial={{ y: 16, opacity: 0, filter: 'blur(6px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.65, delay: 0.08, ease: cinematic }}
                  className="mb-6 flex items-center gap-3"
                >
                  <span className="inline-flex items-center gap-2 glass-ivory !bg-ivory/10 !border-wheat/30 px-3 py-1.5 rounded-full text-[10px] tracking-[0.24em] uppercase text-wheat">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta-soft animate-pulse" />
                    {current.tagline}
                  </span>
                  <span className="h-px w-14 bg-wheat/40" />
                </motion.div>
              )}

              <motion.h1
                key={`title-${current.id}`}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                className="font-serif text-[44px] sm:text-5xl md:text-6xl lg:text-[78px] leading-[0.98] tracking-tight text-ivory mb-5 md:mb-7 text-balance"
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  <WordReveal keyId={current.id} text={current.title} />
                </AnimatePresence>
              </motion.h1>

              <motion.div
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.45, ease: cinematic }}
                className="max-w-2xl"
              >
                <p className="text-base md:text-[19px] leading-[1.7] text-ivory/85 mb-9 md:mb-11 font-serifAlt">
                  {current.subtitle}
                </p>
              </motion.div>

              {current.ctaLabel && (
                <motion.div
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6, ease: cinematic }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Link
                    to={current.ctaHref ?? '/'}
                    className="group relative inline-flex items-center gap-2.5 rounded-full bg-terracotta text-ivory px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] shadow-[0_20px_50px_-20px_rgba(182,88,60,0.6)] hover:bg-terracotta-soft transition-all duration-500 ease-cinematic hover:-translate-y-0.5 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(228,217,184,0.25),transparent_60%)]" />
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-cinematic" />
                    <span className="relative flex items-center gap-2.5">
                      {current.ctaLabel}
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-450 ease-cinematic group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                  <span className="text-[10px] tracking-[0.22em] uppercase text-ivory/50">
                    Scroll ↓ to explore
                  </span>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.button
        ref={prevRef as Ref<HTMLButtonElement>}
        style={prevMotion.style}
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-7 top-1/2 -translate-y-1/2 z-20 w-[52px] h-[52px] md:w-14 md:h-14 rounded-full bg-ivory/15 backdrop-blur-md text-ivory hover:bg-ivory/25 border border-ivory/25 flex items-center justify-center hover:text-wheat"
      >
        <ChevronLeft size={22} strokeWidth={1.7} />
      </motion.button>

      <motion.button
        ref={nextRef as Ref<HTMLButtonElement>}
        style={nextMotion.style}
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 md:right-7 top-1/2 -translate-y-1/2 z-20 w-[52px] h-[52px] md:w-14 md:h-14 rounded-full bg-ivory/15 backdrop-blur-md text-ivory hover:bg-ivory/25 border border-ivory/25 flex items-center justify-center hover:text-wheat"
      >
        <ChevronRight size={22} strokeWidth={1.7} />
      </motion.button>

      <div className="absolute bottom-7 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        <span className="text-[10px] tracking-[0.28em] uppercase text-ivory/70 font-mono tabular-nums">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="relative h-[3px] w-24 md:w-28 overflow-hidden rounded-full bg-ivory/18">
          <motion.div
            key={index}
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ duration: intervalMs / 1000, ease: 'linear' }}
            className="absolute inset-y-0 left-0 w-full rounded-full bg-gradient-to-r from-terracotta via-wheat to-ivory"
          />
        </div>
        <span className="text-[10px] tracking-[0.28em] uppercase text-ivory/70 font-mono tabular-nums">
          {String(total).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}
