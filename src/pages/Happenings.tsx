import { useEffect, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarDays, MapPin, X, ArrowLeft, ChevronRight } from 'lucide-react'
import type { EventItem } from '@/types/school'
import events from '@/data/events.data'
import HeroCarousel from '@/components/HeroCarousel'
import Breadcrumb from '@/components/Breadcrumb'
import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/Button'

const categories = ['All', 'Academic', 'Cultural', 'Sports', 'Celebration'] as const
type Category = (typeof categories)[number]

const img = (prompt: string, size = 'landscape_16_9') =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`

const heroSlides = [
  {
    id: 'happenings-hero',
    title: 'Where campus comes alive',
    subtitle:
      'From the quiet pride of a felicitation to the thunderous roar of Khel Mahotsav — every week at Sanjivani is a chapter in the life of our campus.',
    tagline: 'Happenings · 2025–26',
    image: img(
      'Editorial wide shot of Indian rural school campus courtyard, students in uniform sitting under banyan tree, morning sunlight filtering, marigold decorations, cultural campus atmosphere, no logos, documentary photography style',
      'landscape_16_9',
    ),
  },
]

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Happenings', href: '/happenings' },
]

const categoryChipBg: Record<EventItem['category'], string> = {
  Academic: 'bg-forest/90 text-ivory',
  Cultural: 'bg-terracotta/90 text-ivory',
  Sports: 'bg-sage text-ivory',
  Celebration: 'bg-wheat text-charcoal',
}

const categoryChipLight: Record<EventItem['category'], string> = {
  Academic: 'bg-forest/10 text-forest border-forest/20',
  Cultural: 'bg-terracotta/10 text-terracotta border-terracotta/20',
  Sports: 'bg-sage/15 text-forest-deep border-sage/30',
  Celebration: 'bg-wheat/40 text-charcoal border-wheat',
}

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
}

const cardItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Happenings() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null)

  useEffect(() => {
    document.title = 'Sanjivani · Happenings'
  }, [])

  const featured = events.find((e) => e.featured === true)

  const filtered = activeCategory === 'All'
    ? events.filter((e) => !e.featured)
    : events.filter((e) => !e.featured && e.category === activeCategory)

  return (
    <div className="min-h-screen bg-ivory">
      <HeroCarousel slides={heroSlides} />
      <Breadcrumb items={breadcrumbItems} />

      {featured && (
        <section className="py-16 md:py-20 bg-cream border-b border-wheat/30">
          <div className="container-editorial">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-10"
            >
              <SectionHeading
                eyebrow="Featured · This season"
                title="A day of garlands, medals & goosebumps"
                accentIndex={4}
                subtitle="Our flagship featured moment of the term, pinned here for you — the Class X toppers of 2026 took centrestage."
                decoratedUnderline
              />
            </motion.div>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-2 gap-0 bg-ivory border border-wheat/50 shadow-editorial overflow-hidden"
            >
              <div className="relative h-64 md:h-full min-h-[360px] overflow-hidden">
                <img
                  src={featured.thumbnail}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal/10 via-transparent to-transparent" />
              </div>

              <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className={`inline-flex items-center px-3 py-1.5 text-[11px] tracking-editorial uppercase font-medium border rounded-sm ${categoryChipLight[featured.category]}`}>
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] tracking-editorial uppercase text-charcoal-soft/70">
                    <CalendarDays size={13} />
                    {featured.monthShort} · {featured.dayNum}
                  </span>
                </div>

                <h2 className="font-serif text-3xl md:text-4xl leading-[1.12] text-charcoal mb-5">
                  {featured.title}
                </h2>

                <p className="text-base md:text-lg text-charcoal-soft/85 leading-relaxed font-serifAlt mb-8">
                  {featured.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    variant="primary"
                    size="md"
                    iconRight={<ChevronRight size={16} />}
                    onClick={() => setSelectedEvent(featured)}
                  >
                    View Details
                  </Button>
                  {featured.location && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-charcoal-soft/60">
                      <MapPin size={13} />
                      {featured.location}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      <section className="py-16 md:py-20 bg-ivory">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <SectionHeading
                eyebrow="All Happenings"
                title="Every story from our campus"
                accentIndex={3}
                decoratedUnderline
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Event categories"
            >
              {categories.map((cat) => {
                const isActive = activeCategory === cat
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 md:px-5 py-2 rounded-full text-xs font-medium tracking-editorial uppercase transition-all duration-450 ease-cinematic border ${
                      isActive
                        ? 'bg-forest text-ivory border-forest shadow-soft'
                        : 'bg-ivory text-charcoal-soft/80 border-wheat/70 hover:border-forest-mist hover:text-forest'
                    }`}
                  >
                    {cat}
                  </button>
                )
              })}
            </motion.div>
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeCategory}
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filtered.map((event) => (
                <motion.article
                  key={event.id}
                  layoutId={`event-card-${event.id}`}
                  variants={cardItem}
                  onClick={() => setSelectedEvent(event)}
                  className="group cursor-pointer bg-ivory border border-wheat/40 overflow-hidden card-hover"
                >
                  <div className="relative overflow-hidden">
                    <div className="h-56 md:h-60 overflow-hidden bg-charcoal/5">
                      <img
                        src={event.thumbnail}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105"
                      />
                    </div>

                    <span className={`absolute top-3 right-3 px-2.5 py-1 text-[10px] tracking-editorial uppercase font-medium ${categoryChipBg[event.category]}`}>
                      {event.category}
                    </span>

                    <div className="absolute -bottom-5 left-4 z-10 flex flex-col items-center justify-center w-14 h-16 bg-terracotta text-ivory shadow-editorial">
                      <span className="text-[10px] tracking-editorial uppercase font-semibold leading-none">
                        {event.monthShort}
                      </span>
                      <span className="font-serif text-2xl leading-none mt-1">
                        {event.dayNum}
                      </span>
                    </div>
                  </div>

                  <div className="pt-10 pb-6 px-5 md:px-6">
                    <h3 className="font-serif text-xl leading-snug text-charcoal mb-3 group-hover:text-terracotta transition-colors duration-450 ease-cinematic">
                      {event.title}
                    </h3>

                    <p className="text-sm text-charcoal-soft/75 leading-relaxed line-clamp-2 mb-4">
                      {event.excerpt}
                    </p>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedEvent(event)
                      }}
                      className="inline-flex items-center gap-1.5 text-xs tracking-editorial uppercase text-forest font-semibold border-b border-forest/40 pb-0.5 hover:border-terracotta hover:text-terracotta transition-colors duration-300 ease-cinematic"
                    >
                      View Details
                      <ChevronRight size={13} />
                    </button>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-16 pt-10 border-t border-wheat/40 text-center">
            <Button variant="ghost" size="md" disabled>
              Load earlier events
            </Button>
            <p className="mt-4 text-xs text-charcoal-soft/55 tracking-wide">
              Archives for 2025 and earlier are offline for digitization · check back soon
            </p>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedEvent && (
          <ModalDialog onClose={() => setSelectedEvent(null)}>
            <EventDetailModalContent
              event={selectedEvent}
              onBack={() => setSelectedEvent(null)}
            />
          </ModalDialog>
        )}
      </AnimatePresence>
    </div>
  )
}

interface ModalDialogProps {
  children: ReactNode
  onClose: () => void
}

function ModalDialog({ children, onClose }: ModalDialogProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-0 md:p-6 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="absolute inset-0 bg-charcoal/75 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      />

      <motion.div
        layout
        role="dialog"
        aria-modal="true"
        className="relative z-10 w-full max-w-5xl bg-ivory shadow-editorial my-0 md:my-8 overflow-hidden"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-ivory/90 backdrop-blur border border-wheat/50 text-charcoal hover:bg-terracotta hover:text-ivory transition-colors duration-300 ease-cinematic"
        >
          <X size={18} strokeWidth={1.8} />
        </button>

        {children}
      </motion.div>
    </motion.div>
  )
}

interface EventDetailModalContentProps {
  event: EventItem
  onBack: () => void
}

function EventDetailModalContent({ event, onBack }: EventDetailModalContentProps) {
  return (
    <div>
      <div className="relative h-64 md:h-96 overflow-hidden bg-charcoal">
        <img
          src={event.thumbnail}
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`inline-flex items-center px-3 py-1.5 text-[11px] tracking-editorial uppercase font-medium rounded-sm ${categoryChipBg[event.category]}`}>
              {event.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[12px] tracking-editorial uppercase text-ivory/90">
              <CalendarDays size={13} />
              {event.date}
            </span>
            {event.location && (
              <span className="inline-flex items-center gap-1.5 text-[12px] tracking-editorial uppercase text-ivory/90">
                <MapPin size={13} />
                {event.location}
              </span>
            )}
          </div>
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.08] text-ivory max-w-3xl">
            {event.title}
          </h2>
        </div>
      </div>

      <div className="p-6 md:p-10 lg:p-14">
        <div className="max-w-3xl mb-10">
          <p className="font-serifAlt text-lg md:text-xl leading-relaxed text-charcoal-soft/90">
            {event.description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
          {event.gallery.slice(0, 4).map((src: string, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/3] overflow-hidden bg-wheat/20 border border-wheat/40"
            >
              <img
                src={src}
                alt={`${event.title} — gallery ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-600 ease-cinematic"
              />
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-wheat/40">
          <Button
            variant="secondary"
            size="md"
            iconLeft={<ArrowLeft size={16} />}
            onClick={onBack}
          >
            Back to events
          </Button>
        </div>
      </div>
    </div>
  )
}
