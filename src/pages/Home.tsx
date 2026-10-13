import { motion, useInView } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useRef, type ReactNode } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  Calendar,
  HandHeart,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  Scale,
  UserPlus,
  Award,
  Users,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import schoolData from '@/data/school.data'
import { events } from '@/data/events.data'
import achievements from '@/data/achievements.data'
import { team } from '@/data/team.data'
import HeroCarousel from '@/components/HeroCarousel'
import SectionHeading from '@/components/SectionHeading'
import CardGrid from '@/components/CardGrid'
import StatsBand from '@/components/StatsBand'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import Button from '@/components/Button'

void team

const cinematic: [number, number, number, number] = [0.22, 1, 0.36, 1]

interface SectionWrapProps {
  children: ReactNode
  delay?: number
  className?: string
}

function SectionWrap({ children, delay = 0, className = '' }: SectionWrapProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.12 })

  return (
    <motion.section
      ref={ref as never}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.45, ease: cinematic, delay }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

const pillarIconMap: Record<string, LucideIcon> = {
  HeartHandshake,
  BadgeCheck,
  HandHeart,
  Scale,
}

const pillarBgClasses = [
  'bg-ivory-deep',
  'bg-cream',
  'bg-wheat/40',
  'bg-ivory',
]

function EventCard({
  event,
  label,
  eyebrow,
  delay,
  icon: Icon,
  onClick,
}: {
  event: (typeof events)[number]
  label: string
  eyebrow: string
  delay: number
  icon: LucideIcon
  onClick?: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.45, ease: cinematic, delay }}
      onClick={onClick}
      className="group bg-ivory border border-wheat/60 overflow-hidden cursor-pointer"
      style={{ boxShadow: '0 1px 2px rgba(31, 41, 36, 0.06)' }}
    >
      <div className="relative h-[320px] overflow-hidden bg-forest/5">
        <img
          src={event.thumbnail}
          alt={event.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-600 ease-cinematic group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-terracotta text-ivory px-3 py-1 text-[11px] tracking-editorial uppercase font-medium">
            {event.category}
          </span>
          <span className="bg-charcoal/85 text-ivory px-3 py-1 text-[11px] tracking-editorial uppercase font-medium">
            {eyebrow}
          </span>
        </div>
        <div className="absolute top-4 right-4 w-14 h-14 bg-ivory flex flex-col items-center justify-center shadow-editorial">
          <span className="font-serif text-xl leading-none text-terracotta">
            {event.dayNum}
          </span>
          <span className="text-[10px] tracking-editorial uppercase text-charcoal-soft font-semibold mt-0.5">
            {event.monthShort}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-2 text-ivory/80 text-xs mb-2">
            <Icon size={14} />
            <span>{label}</span>
            <span className="mx-2">·</span>
            <MapPin size={14} />
            <span>{event.location}</span>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl leading-tight text-ivory">
            {event.title}
          </h3>
        </div>
      </div>
      <div className="p-6 flex flex-col gap-4">
        <p className="text-base leading-relaxed text-charcoal-soft/85">
          {event.excerpt}
        </p>
        <div className="flex items-center gap-2 text-terracotta text-sm font-medium">
          <span>Read the full story</span>
          <motion.span
            className="inline-block"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
          >
            →
          </motion.span>
        </div>
      </div>
    </motion.article>
  )
}

export default function Home() {
  const navigate = useNavigate()
  const pillars = schoolData.coreValues.slice(0, 4)
  const accoladesSample = achievements.accolades.slice(0, 12)
  const recentEvents = [...events]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 2)

  return (
    <div className="min-h-screen bg-ivory">
      <SectionWrap delay={0}>
        <HeroCarousel slides={schoolData.heroSlides} />
      </SectionWrap>

      <SectionWrap delay={0.05} className="py-20 md:py-28 bg-cream">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5 lg:col-start-1">
              <SectionHeading
                eyebrow="Savitribai Phule · A Heritage of Light"
                title="Welcome to Sanjivani — A School Est. 1978"
                accentIndex={-2}
                subtitle={`On the historic banks of the Godavari at Kopargaon, under the ${schoolData.trust}, five decades of teachers, parents and children have built something rare: a school that is proud of its village roots, and unafraid of the world its children will inherit.`}
                decoratedUnderline
              />
              <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-editorial text-charcoal-soft/60">
                <Landmark size={14} className="text-terracotta" />
                <span>
                  {schoolData.address.landmark} · {schoolData.address.city},{' '}
                  {schoolData.address.state}
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <motion.figure
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: cinematic, delay: 0.1 }}
                className="relative bg-ivory border border-wheat/60 p-6 md:p-10 shadow-editorial"
              >
                <div className="absolute -top-4 left-6 md:-top-5 md:left-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-terracotta text-ivory flex items-center justify-center shadow-editorial">
                  <Sparkles size={24} strokeWidth={1.8} />
                </div>
                <blockquote className="font-serifAlt text-2xl md:text-3xl leading-relaxed text-charcoal italic pt-6">
                  <span className="text-terracotta text-5xl leading-none mr-2 align-sub float-left -mt-2">
                    “
                  </span>
                  माझा शिक्षण हा एक दिवा आहे — गावातील प्रत्येक घरात,
                  प्रत्येक बाळाच्या मनात तो दिवा लावणार हा संजीवनी शाळा.
                  <br />
                  <span className="text-charcoal-soft/80 font-serif text-lg md:text-xl not-italic block mt-4">
                    My teaching is a lamp. Sanjivani is the school that takes
                    this lamp to every home, to every child in the village —
                    and lights one more.
                  </span>
                  <span className="text-terracotta text-5xl leading-none ml-2 align-text-top">
                    ”
                  </span>
                </blockquote>
                <figcaption className="mt-8 border-t border-wheat/60 pt-5 flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <p className="font-serif text-lg text-charcoal">
                      In the spirit of Savitribai Phule
                    </p>
                    <p className="text-[11px] uppercase tracking-editorial text-terracotta font-medium mt-1">
                      Krantijyoti · Mother of Indian Education
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-3xl text-forest-deep leading-none">
                      {schoolData.establishedYear}
                    </p>
                    <p className="text-[11px] uppercase tracking-editorial text-sage font-medium mt-2">
                      Year Established · Kopargaon
                    </p>
                  </div>
                </figcaption>
              </motion.figure>
            </div>
          </div>
        </div>
      </SectionWrap>

      <SectionWrap delay={0.08} className="py-20 md:py-28 bg-ivory">
        <div className="container-editorial">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 md:mb-16">
            <SectionHeading
              eyebrow="Our Four Foundations"
              title="Vision · Mission · Values · Emblem Story"
              accentIndex={3}
              subtitle="Four pillars. One promise — Sanjivani lights lamps, not just fills slates."
              decoratedUnderline
            />
            <div className="shrink-0">
              <Link to="/about" className="btn-secondary">
                Explore About Us
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </div>
          </div>

          <CardGrid
            variant="assertion"
            items={schoolData.assertions}
            onItemClick={(item: { exploreHref?: string }) => {
              if (item.exploreHref) navigate(item.exploreHref)
            }}
          />
        </div>
      </SectionWrap>

      <SectionWrap delay={0.06} className="py-20 md:py-28 bg-ivory-deep/60">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <SectionHeading
              eyebrow="Why Sanjivani · Golden Highlights"
              title="Four Pillars We Live By Every Day"
              subtitle="Each value carries a story from a classroom, a corridor, or a riverbank — distilled over forty-seven years into habits every child carries home."
              align="center"
              decoratedUnderline
            />
          </div>

          <div className="grid md:grid-cols-2 gap-0 border border-wheat/60 overflow-hidden shadow-editorial">
            {pillars.map((pillar, idx) => {
              const Icon = pillarIconMap[pillar.iconName] ?? Award
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    ease: cinematic,
                    delay: idx * 0.08,
                  }}
                  className={`${pillarBgClasses[idx % pillarBgClasses.length]} p-8 md:p-10 lg:p-12 border-0 ${
                    idx === 0
                      ? 'md:border-r md:border-b border-wheat/60'
                      : idx === 1
                        ? 'md:border-b border-wheat/60'
                        : idx === 2
                          ? 'md:border-r border-wheat/60'
                          : ''
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-sm bg-terracotta/10 border border-terracotta/20 flex items-center justify-center text-terracotta shrink-0">
                      {Icon && <Icon size={26} strokeWidth={1.8} />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] uppercase tracking-editorial text-sage font-semibold mb-2">
                        Pillar 0{idx + 1}
                      </p>
                      <h3 className="font-serif text-2xl md:text-[28px] leading-tight text-charcoal mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-sm md:text-base leading-relaxed text-charcoal-soft/85">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </SectionWrap>

      <SectionWrap delay={0.05} className="py-20 md:py-28 bg-cream">
        <div className="container-editorial">
          <div className="max-w-3xl mb-12 md:mb-16">
            <SectionHeading
              eyebrow="Explore · 12 Doors into Sanjivani"
              title="Ye School Sochta Hai — A World to Discover"
              accentIndex={3}
              subtitle="From the tiniest Nursery rhyme to the Class X board paper, from kho-kho on the cinder track to saplings on the Godavari ghat — start your Sanjivani journey anywhere."
              decoratedUnderline
            />
          </div>

          <CardGrid
            variant="explore"
            items={schoolData.exploreTiles}
            onItemClick={(item: { href?: string }) => {
              if (item.href) navigate(item.href)
            }}
          />
        </div>
      </SectionWrap>

      <SectionWrap delay={0.05}>
        <div className="container-editorial pt-20 md:pt-28 pb-10 md:pb-14">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
            <SectionHeading
              eyebrow="By the Numbers · A Legacy"
              title="Forty-Seven Years Told in Digits"
              subtitle="Legacy, academics, beyond-books — slide through the story Sanjivani writes every morning with chalk, dust, sweat and song."
              align="center"
              decoratedUnderline
            />
          </div>
        </div>
        <StatsBand tabs={schoolData.statsTabs} />
      </SectionWrap>

      <SectionWrap delay={0.06} className="py-20 md:py-28 bg-ivory">
        <div className="container-editorial">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 md:mb-16">
            <SectionHeading
              eyebrow="Glory Galore · Accolades & Laurels"
              title="A Dozen Recent Reasons We Cheered"
              accentIndex={-2}
              subtitle="From state-level kho-kho trophies to Inspire awards in science, from Lavani gold to the Swachh Vidyalaya certificate — these are just twelve of the laurels our children brought home."
              decoratedUnderline
            />
            <div className="shrink-0 flex items-center gap-3 text-xs uppercase tracking-editorial text-charcoal-soft/60">
              <Award size={14} className="text-terracotta" />
              <span>{achievements.accolades.length} honours on record</span>
            </div>
          </div>

          <CardGrid
            variant="accolade"
            items={accoladesSample}
            onItemClick={() => navigate('/achievements')}
          />

          <div className="mt-12 md:mt-16 flex justify-center">
            <Link to="/achievements" className="btn-primary">
              All Accolades & Laurels
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </SectionWrap>

      <SectionWrap delay={0.05}>
        <TestimonialCarousel items={achievements.testimonials} />
      </SectionWrap>

      <SectionWrap delay={0.06} className="py-20 md:py-28 bg-forest-deep relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(circle_at_15%_30%,#E4D9B8_0%,transparent_55%),radial-gradient(circle_at_85%_70%,#B6583C_0%,transparent_55%)]" />
        <div className="container-editorial relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: cinematic, delay: 0.02 }}
              className="text-xs md:text-sm uppercase tracking-editorial text-terracotta-soft mb-4 font-semibold"
            >
              What&apos;s Next · Your Sanjivani Step
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: cinematic, delay: 0.08 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory leading-[1.05] mb-6"
            >
              A seat in Sanjivani is{' '}
              <em className="italic text-terracotta-soft">waiting</em> for
              your child.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: cinematic, delay: 0.14 }}
              className="text-base md:text-lg text-ivory/80 leading-relaxed max-w-2xl mx-auto mb-10 md:mb-12 font-serifAlt"
            >
              Three easy ways to begin. Ask a question, walk through our
              admission process, or write to us directly — whichever feels
              right, a Sanjivani teacher will reply within one working day.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: cinematic, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                variant="primary"
                size="lg"
                iconLeft={<MessageCircle size={18} strokeWidth={1.9} />}
                iconRight={<ArrowRight size={16} strokeWidth={2} />}
                onClick={() => navigate('/contact')}
                className="shadow-editorial"
              >
                Enquiry
              </Button>
              <Button
                variant="secondary"
                size="lg"
                iconLeft={<UserPlus size={18} strokeWidth={1.9} />}
                onClick={() => navigate('/admission')}
                className="shadow-editorial/40 !border-terracotta-soft !text-terracotta-soft hover:!bg-terracotta hover:!text-ivory hover:!border-terracotta"
              >
                Admissions
              </Button>
              <Button
                variant="primary"
                size="lg"
                iconLeft={<Mail size={18} strokeWidth={1.9} />}
                onClick={() => {
                  window.location.href = `mailto:${schoolData.emails.admission}?subject=Admission%20Registration%20-%20Sanjivani%20English%20Medium%20School`
                }}
                className="!bg-ivory/95 !text-forest-deep hover:!bg-ivory hover:!shadow-editorial !border !border-wheat"
              >
                Register
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: cinematic, delay: 0.35 }}
              className="mt-8 text-[11px] md:text-xs uppercase tracking-editorial text-ivory/50 flex items-center justify-center gap-2 flex-wrap"
            >
              <Mail size={12} />
              {schoolData.emails.admission}
              <span className="mx-1">·</span>
              <Users size={12} />
              Call Admission: {schoolData.phones.admission}
            </motion.p>
          </div>
        </div>
      </SectionWrap>

      <SectionWrap delay={0.06} className="py-20 md:py-28 bg-cream">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <SectionHeading
              eyebrow="Our Ecosystem · Perfect Partners"
              title="Fourteen Institutions That Walk With Us"
              subtitle="From the Sanjivani Group of Institutions to the banks of the Godavari, from NCC Nashik to IIT Bombay Inspire — Kopargaon does not build schools alone. It builds villages that learn together."
              align="center"
              decoratedUnderline
            />
          </div>

          <CardGrid variant="partner" items={schoolData.partners} />
        </div>
      </SectionWrap>

      <SectionWrap delay={0.07} className="py-20 md:py-28 bg-ivory">
        <div className="container-editorial">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 md:mb-16">
            <SectionHeading
              eyebrow="Happenings · Sanjivani Live"
              title="Sanjivani in Action & Milestones & Moments"
              accentIndex={5}
              subtitle="Two recent chapters from our never-ending storybook. One of toppers and medals, one of song, dance and saplings. Click through for the whole album."
              decoratedUnderline
            />
            <div className="shrink-0 flex items-center gap-2 text-xs uppercase tracking-editorial text-charcoal-soft/60">
              <Calendar size={14} className="text-terracotta" />
              <span>{events.length}+ events on the calendar</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {recentEvents.length >= 2 && (
              <>
                <EventCard
                  event={recentEvents[0]}
                  eyebrow="Sanjivani in Action"
                  label="Editorial · Recent"
                  delay={0.04}
                  icon={Award}
                  onClick={() => navigate('/happenings')}
                />
                <EventCard
                  event={recentEvents[1]}
                  eyebrow="Milestones & Moments"
                  label="Memory · Archive"
                  delay={0.1}
                  icon={Calendar}
                  onClick={() => navigate('/happenings')}
                />
              </>
            )}
          </div>

          <div className="mt-12 md:mt-16 flex justify-center">
            <Link to="/happenings" className="btn-primary">
              See All Happenings
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </SectionWrap>
    </div>
  )
}
