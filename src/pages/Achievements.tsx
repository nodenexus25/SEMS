import { useMemo, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Award, ChevronRight, Trophy, Calendar, MapPin, GraduationCap, Quote } from 'lucide-react'
import HeroCarousel from '@/components/HeroCarousel'
import Breadcrumb from '@/components/Breadcrumb'
import SectionHeading from '@/components/SectionHeading'
import { AccoladeCard } from '@/components/CardGrid'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import Button from '@/components/Button'
import { accolades, alumni, testimonials, toppers } from '@/data/achievements.data'
import events from '@/data/events.data'
import type { HeroSlide, BreadcrumbItem, AccoladeItem } from '@/types/school'

const cinematic: [number, number, number, number] = [0.22, 1, 0.36, 1]

const filterCategories = ['All', 'Academic', 'Sports', 'Cultural', 'Co-curricular'] as const
type FilterCategory = (typeof filterCategories)[number]

const heroSlide: HeroSlide = {
  id: 'hero-achievements',
  tagline: 'Glory · Legacy · Pride',
  title: 'Achievements that echo through corridors.',
  subtitle:
    'From taluka ranks to national podiums — every medal, every certificate, every story that makes Sanjivani what it is.',
  image: '/1000327218.jpg',
  ctaLabel: 'Meet our toppers',
  ctaHref: '#results',
}

const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Achievements', href: '/achievements' },
]

const segmentTabs = [
  { id: 'accolades', label: 'Accolades' },
  { id: 'alumni', label: 'Success Trails' },
  { id: 'voices', label: 'Trusted Voices' },
  { id: 'results', label: 'School Results' },
]

function filterAccolades(items: AccoladeItem[], filter: FilterCategory): AccoladeItem[] {
  if (filter === 'All') return items
  return items.filter((a) => a.category === filter)
}

export default function Achievements() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All')
  const [activeTab, setActiveTab] = useState<string>('accolades')

  const filteredAccolades = useMemo(
    () => filterAccolades(accolades, activeFilter),
    [activeFilter],
  )

  const felicitationEvent = useMemo(
    () => events.find((e) => e.title.includes('Toppers Felicitation Ceremony 2026')),
    [],
  )

  const toppers2025 = useMemo(() => toppers.filter((t) => t.year === '2025'), [])
  const toppers2026 = useMemo(() => toppers.filter((t) => t.year === '2026'), [])
  const featuredToppers = useMemo(() => toppers.filter((t) => t.featured === true), [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140
      for (let i = segmentTabs.length - 1; i >= 0; i--) {
        const el = document.getElementById(segmentTabs[i].id)
        if (el && el.offsetTop <= scrollPos) {
          setActiveTab(segmentTabs[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 120
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-ivory">
      <HeroCarousel slides={[heroSlide]} />
      <Breadcrumb items={breadcrumbItems} />

      <nav
        className="sticky top-16 z-40 bg-ivory/95 backdrop-blur-md border-b border-wheat/50"
        aria-label="Achievements sections"
      >
        <div className="container-editorial">
          <div className="flex items-center gap-1 md:gap-2 overflow-x-auto py-3 scrollbar-none">
            {segmentTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => scrollTo(tab.id)}
                className={`relative shrink-0 px-4 md:px-5 py-2 text-xs md:text-sm tracking-editorial uppercase font-medium transition-all duration-450 ease-cinematic ${
                  activeTab === tab.id
                    ? 'text-forest'
                    : 'text-charcoal-soft/60 hover:text-charcoal'
                }`}
              >
                {tab.label}
                <span
                  className={`absolute left-3 right-3 -bottom-[13px] h-[3px] rounded-full transition-all duration-450 ease-cinematic ${
                    activeTab === tab.id ? 'bg-forest scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="accolades" className="py-20 md:py-28 bg-ivory">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: cinematic }}
          >
            <SectionHeading
              eyebrow="Glory Galore"
              title="Accolades & Laurels"
              accentIndex={1}
              decoratedUnderline
              subtitle="From academic Olympiads to kho-kho championships, from Lavani stages to NCC parades — a chronicle of excellence across every field a child can grow in."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: cinematic }}
            className="mt-12 flex flex-wrap items-center gap-2 md:gap-3"
          >
            {filterCategories.map((cat) => {
              const active = activeFilter === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2.5 text-[11px] md:text-xs tracking-editorial uppercase font-medium transition-all duration-450 ease-cinematic border ${
                    active
                      ? 'bg-forest text-ivory border-forest shadow-soft'
                      : 'bg-cream text-charcoal-soft/80 border-wheat/60 hover:border-forest-mist hover:text-forest'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-12"
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeFilter}
                initial="hidden"
                animate="show"
                exit="exit"
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
                  },
                  exit: {
                    transition: { staggerChildren: 0.02, staggerDirection: -1 },
                  },
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredAccolades.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={{
                      hidden: { opacity: 0, y: 18, scale: 0.97 },
                      show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: cinematic } },
                      exit: { opacity: 0, y: -8, transition: { duration: 0.3 } },
                    }}
                  >
                    <AccoladeCard item={item} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section id="alumni" className="py-20 md:py-28 bg-cream">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: cinematic }}
          >
            <SectionHeading
              eyebrow="Success Trails"
              title="Success Trails · Our Alumni"
              accentIndex={-1}
              decoratedUnderline
              subtitle="They first walked these corridors barefoot, with satchels slung over their shoulders and dreams bigger than Kopargaon. Today they carry Sanjivani with them — in hospitals, farms, boardrooms and schools across India."
            />
          </motion.div>

          <div className="mt-16 space-y-14 md:space-y-20">
            {alumni.map((alumnus, idx) => {
              const reversed = idx % 2 === 1
              return (
                <motion.article
                  key={alumnus.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.75, delay: idx * 0.08, ease: cinematic }}
                  className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center ${
                    reversed ? 'md:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div className="md:col-span-5">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-gradient-to-br from-terracotta/20 via-wheat/40 to-forest/20 opacity-80 group-hover:opacity-100 transition-opacity duration-600" />
                      <div className="relative overflow-hidden">
                        <img
                          src={alumnus.portrait}
                          alt={alumnus.name}
                          loading="lazy"
                          className="w-full h-[360px] md:h-[440px] object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-4 left-4 bg-ivory/95 backdrop-blur px-4 py-2">
                          <p className="text-[10px] tracking-editorial uppercase text-terracotta font-semibold">
                            Batch of {alumnus.batch}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-7 relative">
                    <Quote
                      size={56}
                      className="text-wheat absolute -top-2 -left-2 md:-left-4 opacity-70"
                      strokeWidth={1}
                    />
                    <blockquote className="relative z-10 pl-10 md:pl-14">
                      <p className="font-serifAlt italic text-2xl md:text-3xl lg:text-[34px] leading-[1.35] text-charcoal">
                        {alumnus.quote}
                      </p>
                    </blockquote>

                    <div className="mt-10 pl-10 md:pl-14 border-l-2 border-terracotta/50 ml-1">
                      <h3 className="font-serif text-2xl md:text-3xl text-charcoal leading-tight">
                        {alumnus.name}
                      </h3>
                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                        <p className="text-terracotta font-medium text-sm md:text-base">
                          {alumnus.role}
                        </p>
                        <span className="w-1 h-1 rounded-full bg-wheat hidden md:inline-block" />
                        <p className="text-sage text-sm md:text-[15px] font-medium">
                          {alumnus.current}
                        </p>
                      </div>
                      <div className="mt-5 flex items-center gap-2 text-[11px] tracking-editorial uppercase text-charcoal-soft/60">
                        <GraduationCap size={14} className="text-forest-mist" />
                        <span>Sanjivani Alumnus · Class of {alumnus.batch}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="voices" className="bg-forest-deep">
        <TestimonialCarousel items={testimonials} />

        <div className="border-t border-ivory/10 py-8 overflow-hidden bg-forest-deep/90">
          <div className="flex animate-marquee whitespace-nowrap items-center">
            {[...testimonials, ...testimonials].flatMap((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className="flex items-center gap-4 px-6 md:px-10 shrink-0"
              >
                <Quote size={18} className="text-terracotta-soft shrink-0" strokeWidth={1.5} />
                <p className="font-serifAlt italic text-lg md:text-xl text-ivory/80 max-w-[420px] truncate">
                  {t.quote.length > 90 ? `${t.quote.slice(0, 90)}…` : t.quote}
                </p>
                <span className="text-wheat/40">—</span>
                <p className="text-sm text-ivory/60 font-medium shrink-0">{t.name}</p>
                <span className="text-ivory/15 text-3xl font-serif mx-2 md:mx-4">·</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="py-20 md:py-28 bg-ivory">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: cinematic }}
          >
            <SectionHeading
              eyebrow="School Results"
              title="School Results · Class X"
              accentIndex={-1}
              decoratedUnderline
              subtitle="Two consecutive batches of Class X, two stories of grit. Every percentage below carries a story of early mornings, patient teachers, and parents who walked kilometres to drop their children to school."
            />
          </motion.div>

          {felicitationEvent && (
            <motion.a
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: cinematic }}
              href={`/events#${felicitationEvent.id}`}
              className="group mt-14 block overflow-hidden bg-gradient-to-r from-terracotta via-terracotta-soft to-terracotta relative"
              style={{ boxShadow: '0 20px 50px -20px rgba(182,88,60,0.4)' }}
            >
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_0%_50%,#FFFFFF_0%,transparent_55%),radial-gradient(circle_at_100%_50%,#2367A5_0%,transparent_55%)]" />
              <div className="relative py-5 px-6 md:py-6 md:px-10 flex items-center gap-4 md:gap-8 overflow-hidden">
                <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-ivory/20 border border-ivory/30 flex items-center justify-center">
                  <Trophy className="text-ivory" size={26} strokeWidth={1.8} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] md:text-xs tracking-editorial uppercase text-ivory/80 font-semibold flex items-center gap-2 md:gap-3 mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {felicitationEvent.monthShort} {felicitationEvent.dayNum}, 2026
                    </span>
                    <span className="w-1 h-1 rounded-full bg-ivory/40" />
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} />
                      {felicitationEvent.location}
                    </span>
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl lg:text-3xl text-ivory leading-tight flex items-center gap-3 animate-editorial-marquee whitespace-nowrap overflow-hidden">
                    <span className="italic font-serifAlt">#</span>
                    <span>{felicitationEvent.title}</span>
                  </h3>
                </div>
                <div className="hidden md:flex shrink-0 items-center gap-2 text-ivory text-sm font-medium tracking-editorial uppercase">
                  <span>Recap</span>
                  <ChevronRight
                    size={18}
                    className="transition-transform duration-450 ease-cinematic group-hover:translate-x-1"
                  />
                </div>
              </div>
            </motion.a>
          )}

          {featuredToppers.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: cinematic }}
              className="mt-16"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-terracotta" />
                <p className="text-[11px] tracking-editorial uppercase text-terracotta font-semibold">
                  Featured Toppers of 2026
                </p>
                <span className="flex-1 h-px bg-wheat/60" />
              </div>
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {featuredToppers.map((topper, idx) => (
                  <motion.div
                    key={topper.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + idx * 0.1, ease: cinematic }}
                    whileHover={{ y: -6 }}
                    className="relative group bg-ivory border border-wheat/60 overflow-hidden"
                    style={{ boxShadow: '0 1px 2px rgba(31,41,36,0.06)' }}
                  >
                    <div className="absolute top-4 right-4 z-20">
                      <div className="w-12 h-12 rounded-full bg-terracotta text-ivory flex items-center justify-center shadow-editorial">
                        <Trophy size={20} strokeWidth={2} />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 z-20">
                      <div className="bg-forest text-ivory px-3 py-1.5 text-[10px] tracking-editorial uppercase font-semibold">
                        Rank {topper.rank}
                      </div>
                    </div>
                    <div className="relative h-[320px] overflow-hidden bg-sage-light/20">
                      <img
                        src={topper.photo}
                        alt={topper.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/20 to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5 text-ivory">
                        <p className="font-serifAlt italic text-4xl leading-none text-terracotta-soft mb-2">
                          {topper.percentage}
                        </p>
                        <p className="font-serif text-2xl leading-tight">{topper.name}</p>
                        <p className="text-[11px] tracking-editorial uppercase text-ivory/70 mt-1">
                          {topper.streamOrGrade}
                        </p>
                      </div>
                    </div>
                    <div className="p-5 border-t border-wheat/40 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[11px] tracking-editorial uppercase text-sage font-medium">
                        <Award size={14} className="text-terracotta" />
                        {topper.year} Batch
                      </div>
                      <p className="text-xs text-charcoal-soft/70 font-medium">
                        Class X · State Board
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          <div className="mt-16 space-y-12">
            {[
              { year: '2026', items: toppers2026 },
              { year: '2025', items: toppers2025 },
            ].map((batch, batchIdx) => (
              <motion.div
                key={batch.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: batchIdx * 0.1, ease: cinematic }}
              >
                <div className="flex items-baseline gap-4 mb-6 border-b border-wheat/60 pb-4">
                  <h3 className="font-serif text-3xl md:text-4xl text-charcoal">
                    Class X · {batch.year}
                  </h3>
                  <span className="text-xs tracking-editorial uppercase text-terracotta font-semibold">
                    {batch.items.length} rank holders
                  </span>
                </div>

                <div className="overflow-x-auto border border-wheat/60 bg-ivory">
                  <table className="w-full min-w-[720px] border-collapse">
                    <thead>
                      <tr className="bg-cream">
                        <th className="text-left px-5 py-4 text-[10px] tracking-editorial uppercase text-forest font-semibold border-b border-wheat/60 w-[90px]">
                          Rank
                        </th>
                        <th className="text-left px-5 py-4 text-[10px] tracking-editorial uppercase text-forest font-semibold border-b border-wheat/60">
                          Name
                        </th>
                        <th className="text-left px-5 py-4 text-[10px] tracking-editorial uppercase text-forest font-semibold border-b border-wheat/60 w-[110px]">
                          Percentage
                        </th>
                        <th className="text-left px-5 py-4 text-[10px] tracking-editorial uppercase text-forest font-semibold border-b border-wheat/60 w-[200px]">
                          Stream / Grade
                        </th>
                        <th className="text-left px-5 py-4 text-[10px] tracking-editorial uppercase text-forest font-semibold border-b border-wheat/60 w-[110px]">
                          Photo
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {batch.items.map((t, i) => (
                        <motion.tr
                          key={t.id}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.06, ease: cinematic }}
                          className={`border-b border-wheat/40 last:border-b-0 transition-colors duration-300 ${
                            t.featured ? 'bg-terracotta/[0.04]' : 'hover:bg-cream/60'
                          }`}
                        >
                          <td className="px-5 py-4 align-middle">
                            <div className="flex items-center gap-2.5">
                              <span
                                className={`w-8 h-8 flex items-center justify-center text-xs font-bold rounded-full ${
                                  t.rank === '1'
                                    ? 'bg-terracotta text-ivory'
                                    : t.rank === '2'
                                      ? 'bg-forest text-ivory'
                                      : t.rank === '3'
                                        ? 'bg-sage-light text-forest-deep'
                                        : 'bg-wheat/50 text-charcoal-soft'
                                }`}
                              >
                                {t.rank}
                              </span>
                              {t.featured && (
                                <Trophy size={14} className="text-terracotta" strokeWidth={2} />
                              )}
                            </div>
                          </td>
                          <td className="px-5 py-4 align-middle">
                            <p className="font-serif text-lg text-charcoal leading-tight">
                              {t.name}
                            </p>
                          </td>
                          <td className="px-5 py-4 align-middle">
                            <p className="font-serifAlt italic text-2xl text-terracotta leading-none">
                              {t.percentage}
                            </p>
                          </td>
                          <td className="px-5 py-4 align-middle">
                            <p className="text-sm text-charcoal-soft/85">{t.streamOrGrade}</p>
                            <p className="text-[10px] tracking-editorial uppercase text-sage mt-1">
                              {batch.year} · State Board
                            </p>
                          </td>
                          <td className="px-5 py-4 align-middle">
                            <div className="w-14 h-14 rounded overflow-hidden border border-wheat shrink-0">
                              <img
                                src={t.photo}
                                alt={t.name}
                                loading="lazy"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gradient-to-br from-cream via-ivory-deep to-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(circle_at_30%_20%,#2367A5_0%,transparent_55%),radial-gradient(circle_at_70%_80%,#B72D3E_0%,transparent_55%)]" />
        <div className="container-editorial relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: cinematic }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-[11px] tracking-editorial uppercase text-terracotta font-semibold mb-5">
              Begin their story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.08]">
              Every topper was once a <em className="text-forest not-italic">nervous Nursery</em>{' '}
              child holding a parent&apos;s hand.
            </h2>
            <p className="mt-8 text-base md:text-lg text-charcoal-soft/85 leading-relaxed max-w-2xl mx-auto">
              Admission is open for the 2027–28 academic year, from Nursery through Class VIII.
              Come, meet our teachers, walk the corridors, and let your child begin their own
              Sanjivani story.
            </p>
            <div className="mt-12">
              <Link to="/admission">
                <Button variant="primary" size="lg" iconRight={<ChevronRight size={18} />}>
                  Apply for admission
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
