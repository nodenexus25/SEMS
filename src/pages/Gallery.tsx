import { useState, useMemo, useCallback, useEffect } from 'react'
import { AnimatePresence, motion, useMotionValue, useTransform } from 'framer-motion'
import type { PanInfo } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import HeroCarousel from '@/components/HeroCarousel'
import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import type { HeroSlide, BreadcrumbItem } from '@/types/school'
import events from '@/data/events.data'
import academics from '@/data/academics.data'
import team from '@/data/team.data'
import schoolData from '@/data/school.data'

type CategoryKey = 'all' | 'campus' | 'events' | 'classroom' | 'sports' | 'cultural'

interface GalleryThumbnail {
  id: string
  src: string
  title: string
  category: Exclude<CategoryKey, 'all'>
}

const img = (prompt: string, size = 'portrait_4_3') =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`

const galleryHero: HeroSlide[] = [
  {
    id: 'gallery-hero',
    tagline: 'Photo Gallery · Kopargaon',
    title: 'Campus in Frames.',
    subtitle: 'Forty-seven years of learning, laughter, and life — captured across corridors, courts, and celebrations.',
    image: img(
      'Editorial wide hero banner of an Indian school campus collage, banyan trees, terracotta rooftops, students laughing in courtyard, sports ground, river Godavari at golden hour edge of frame, warm cinematic light, 16:9, no text, Maharashtra rural school aesthetic',
      'landscape_16_9',
    ),
  },
]

const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Gallery', href: '/gallery' },
]

const categoryChips: { key: CategoryKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'campus', label: 'Campus' },
  { key: 'events', label: 'Events' },
  { key: 'classroom', label: 'Classroom' },
  { key: 'sports', label: 'Sports' },
  { key: 'cultural', label: 'Cultural' },
]

function buildGallery(): GalleryThumbnail[] {
  const items: GalleryThumbnail[] = []

  const eventsImgs: GalleryThumbnail[] = []
  events.slice(0, 6).forEach((ev) => {
    ev.gallery.slice(0, 2).forEach((g, gi) => {
      if (eventsImgs.length < 6) {
        eventsImgs.push({
          id: `ev-${ev.id}-${gi}`,
          src: g,
          title: `${ev.title} · Frame ${gi + 1}`,
          category: 'events',
        })
      }
    })
  })
  while (eventsImgs.length < 6) {
    const idx = eventsImgs.length
    eventsImgs.push({
      id: `ev-fill-${idx}`,
      src: img(`Indian school event celebration, marigolds, students, editorial frame ${idx + 1}`),
      title: `Campus celebration · Frame ${idx + 1}`,
      category: 'events',
    })
  }
  items.push(...eventsImgs.slice(0, 6))

  const campusPrompts = [
    'Heritage Indian school campus entrance gate, terracotta arch, banyan tree, morning light, editorial photo',
    'School emblem close up, brass lamp of learning, carved wood plaque, warm ivory background, still life',
    'Central courtyard of a rural Indian school, banyan tree, stone benches, students walking, soft sunlight',
    'School library interior, wooden shelves, tall windows, reading corner, warm afternoon light, editorial',
    'Saraswati Sabhagriha school auditorium, stage, curtains, empty seats, warm overhead lights, editorial',
    'Godavari riverbank near school campus, ancient stone ghat steps, temple silhouette at golden hour, wide landscape',
  ]
  for (let i = 0; i < 6; i++) {
    items.push({
      id: `campus-${i}`,
      src: img(campusPrompts[i]),
      title: `Campus · ${['Gateway', 'Emblem', 'Courtyard', 'Library', 'Auditorium', 'River Ghat'][i]}`,
      category: 'campus',
    })
  }

  const wings = ['pre-primary', 'primary', 'middle', 'senior'] as const
  const classroomImgs: GalleryThumbnail[] = []
  wings.forEach((w) => {
    academics.wings[w].gallery.slice(0, 2).forEach((g, gi) => {
      if (classroomImgs.length < 6) {
        classroomImgs.push({
          id: `cls-${w}-${gi}`,
          src: g,
          title: `${academics.wings[w].name} · Frame ${gi + 1}`,
          category: 'classroom',
        })
      }
    })
  })
  const subjectPrompts = [
    'Indian primary math classroom, fractions taught with laddoos, teacher writing on blackboard, warm light',
    'Middle school science lab, students with microscope, glass beakers, chemistry colours, editorial',
    'Senior wing library study room, Class X students at tables, textbooks open, soft library lighting',
  ]
  for (let i = 0; classroomImgs.length < 6; i++) {
    classroomImgs.push({
      id: `cls-sub-${i}`,
      src: img(subjectPrompts[i]),
      title: `Classroom · Subject ${i + 1}`,
      category: 'classroom',
    })
  }
  items.push(...classroomImgs.slice(0, 6))

  const realSports: GalleryThumbnail[] = [
    { id: 'sports-real-1', src: '/1000327181.jpg', title: 'Inter-House Volleyball Match', category: 'sports' },
    { id: 'sports-real-2', src: '/home-hero-1.jpg', title: 'Inter-House Sports Gathering', category: 'sports' },
    { id: 'sports-real-3', src: '/home-hero-2.jpg', title: 'Sports Day Prize Distribution', category: 'sports' },
    { id: 'sports-real-4', src: '/1000327184.jpg', title: 'Sports Meet Inauguration', category: 'sports' },
  ]
  items.push(...realSports)
  const sportsPrompts = [
    'Rural Indian school kho-kho match in progress, girls team in uniform, green field, afternoon sun, editorial sports photo',
    'School athletics sprint race, boys running on cinder track, spectators cheering, winter morning light, documentary',
  ]
  for (let i = 0; i < sportsPrompts.length; i++) {
    items.push({
      id: `sports-${i}`,
      src: img(sportsPrompts[i]),
      title: `Sports · ${['Kho-Kho', 'Athletics'][i]}`,
      category: 'sports',
    })
  }

  const culturalPrompts = [
    'Lavani dance performance by Indian school girls, nine-yard sarees, traditional jewellery, stage, warm lights, editorial',
    'Qawwali musical evening at school open air theatre, boys with harmonium and tabla, diyas, dusk sky, cultural',
    'Students performing traditional Lezim dance, colourful costumes, wooden lezims in hand, school annual day stage',
    'Marathi Powada recitation on stage, student in traditional attire, mic, school cultural function, editorial',
    'Ganesh Utsav eco-friendly clay idol decoration, flower petals rangoli, diyas, school corridor, warm ambience',
    'Gurupournima classical Bharatanatyam dance, student in costume, mudra pose, stage lights, cultural event',
  ]
  for (let i = 0; i < 6; i++) {
    items.push({
      id: `cultural-${i}`,
      src: img(culturalPrompts[i]),
      title: `Cultural · ${['Lavani', 'Qawwali', 'Lezim', 'Powada', 'Ganesh Utsav', 'Bharatanatyam'][i]}`,
      category: 'cultural',
    })
  }

  const extra: GalleryThumbnail[] = [
    {
      id: 'events-real-investiture',
      src: '/1000327224.jpg',
      title: 'Investiture Ceremony',
      category: 'events',
    },
    {
      id: 'campus-real-office',
      src: '/1000327223.jpg',
      title: 'School Office · Admission Desk',
      category: 'campus',
    },
  ]
  team.slice(0, 4).forEach((m) => {
    extra.push({
      id: `team-${m.id}`,
      src: m.portrait,
      title: m.name,
      category: 'campus',
    })
  })
  for (let i = 0; i < 2; i++) {
    const ev = events[(i + 6) % events.length]
    extra.push({
      id: `ev-extra-${i}`,
      src: ev.thumbnail,
      title: ev.title,
      category: ev.category === 'Sports' ? 'sports' : ev.category === 'Cultural' ? 'cultural' : 'events',
    })
  }
  items.push(...extra)

  return items
}

const cinematic: [number, number, number, number] = [0.22, 1, 0.36, 1]

function Lightbox({
  items,
  startIndex,
  onClose,
}: {
  items: GalleryThumbnail[]
  startIndex: number
  onClose: () => void
}) {
  const [index, setIndex] = useState(startIndex)
  const total = items.length

  const x = useMotionValue(0)
  const backgroundOpacity = useTransform(x, [-150, 0, 150], [0.6, 1, 0.6])
  const scale = useTransform(x, [-150, 0, 150], [0.9, 1, 0.9])

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total)
    x.set(0)
  }, [total, x])

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % total)
    x.set(0)
  }, [total, x])

  const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 100
    if (info.offset.x > threshold) {
      prev()
    } else if (info.offset.x < -threshold) {
      next()
    } else {
      x.set(0)
    }
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  const current = items[index]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: cinematic }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/80 backdrop-blur-sm p-4 md:p-8"
        onClick={onClose}
        style={{ opacity: backgroundOpacity }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 rounded-full bg-ivory/10 backdrop-blur text-ivory hover:bg-ivory/20 border border-ivory/20 flex items-center justify-center transition-all z-10"
        >
          <X size={22} strokeWidth={1.8} />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            prev()
          }}
          aria-label="Previous image"
          className="hidden md:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-ivory/10 backdrop-blur text-ivory hover:bg-ivory/20 border border-ivory/20 items-center justify-center transition-all z-10"
        >
          <ChevronLeft size={24} strokeWidth={1.8} />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            next()
          }}
          aria-label="Next image"
          className="hidden md:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-ivory/10 backdrop-blur text-ivory hover:bg-ivory/20 border border-ivory/20 items-center justify-center transition-all z-10"
        >
          <ChevronRight size={24} strokeWidth={1.8} />
        </button>

        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
          style={{ x, scale }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-5xl max-h-[90vh] flex flex-col"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: cinematic }}
              className="flex flex-col items-center"
            >
              <div className="relative w-full bg-charcoal rounded-sm overflow-hidden shadow-editorial">
                <img
                  src={current.src}
                  alt={current.title}
                  className="w-full max-h-[72vh] object-contain bg-charcoal/60"
                  draggable={false}
                  decoding="async"
                />
              </div>
              <div className="mt-5 text-center max-w-2xl">
                <p className="text-[10px] tracking-editorial uppercase text-wheat/80 mb-2">
                  {current.category.charAt(0).toUpperCase() + current.category.slice(1)} · {index + 1} / {total}
                </p>
                <h3 className="font-serif text-xl md:text-2xl text-ivory leading-snug">
                  {current.title}
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Gallery() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const allItems = useMemo(() => buildGallery(), [])

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return allItems
    return allItems.filter((it) => it.category === activeCategory)
  }, [allItems, activeCategory])

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => setLightboxIndex(null)

  return (
    <div className="min-h-screen bg-ivory">
      <HeroCarousel slides={galleryHero} intervalMs={0} />

      <Breadcrumb items={breadcrumbItems} />

      <section className="py-16 md:py-20 bg-ivory">
        <div className="container-editorial">
          <div className="flex flex-col gap-6 mb-12 md:mb-16">
            <div className="flex flex-wrap gap-3">
              {categoryChips.map((chip) => {
                const isActive = activeCategory === chip.key
                return (
                  <button
                    key={chip.key}
                    type="button"
                    onClick={() => setActiveCategory(chip.key)}
                    className={`px-5 py-2.5 text-xs tracking-editorial uppercase rounded-full border transition-all duration-300 ease-cinematic ${
                      isActive
                        ? 'bg-forest text-ivory border-forest shadow-soft'
                        : 'bg-ivory text-charcoal-soft border-wheat hover:border-forest/40 hover:text-forest'
                    }`}
                  >
                    {chip.label}
                  </button>
                )
              })}
            </div>
            <p className="text-sm text-charcoal-soft/70 italic font-serifAlt">
              Showing {filteredItems.length} of {allItems.length} photographs from the {schoolData.shortName} archives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.figure
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: cinematic, delay: Math.min(idx * 25, 300) }}
                  onClick={() => openLightbox(idx)}
                  className="group relative aspect-[4/3] bg-sage-light/30 overflow-hidden border border-wheat/50 cursor-pointer rounded-sm"
                  style={{ boxShadow: '0 1px 3px rgba(23, 54, 83, 0.08)' }}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[700ms] ease-cinematic group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-450 ease-cinematic" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-450 ease-cinematic">
                    <p className="text-[10px] tracking-editorial uppercase text-wheat/90 mb-1.5">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </p>
                    <figcaption className="font-serif text-base md:text-lg text-ivory leading-snug">
                      {item.title}
                    </figcaption>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-ivory/0 group-hover:bg-ivory/90 backdrop-blur-sm text-ivory group-hover:text-forest flex items-center justify-center transition-all duration-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                      <path d="M11 8v6" />
                      <path d="M8 11h6" />
                    </svg>
                  </div>
                </motion.figure>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-cream border-t border-wheat/40">
        <div className="container-editorial flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-editorial uppercase text-terracotta mb-3">
              Visit {schoolData.shortName}
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-charcoal leading-[1.1] mb-4">
              Every photograph tells a story. Come write yours with us.
            </h3>
            <p className="text-base text-charcoal-soft/85 leading-relaxed">
              Walk the banyan-lined corridors, sit in on a class, meet the teachers, and stand
              where generations of Sanjivanis have stood — on the banks of the Godavari, under
              the same open sky.
            </p>
          </div>
          <Button
            variant="primary"
            size="lg"
            iconLeft={<MapPin size={18} strokeWidth={1.8} />}
            onClick={() => navigate('/contact#map')}
          >
            Book a tour of the campus
          </Button>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          startIndex={lightboxIndex}
          onClose={closeLightbox}
        />
      )}
    </div>
  )
}
