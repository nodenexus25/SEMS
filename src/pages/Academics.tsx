import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  Languages,
  Calculator,
  type LucideIcon,
} from 'lucide-react'
import academics, { type WingKey } from '@/data/academics.data'
import { schoolData } from '@/data/school.data'
import { team } from '@/data/team.data'
import events from '@/data/events.data'
import HeroCarousel from '@/components/HeroCarousel'
import Breadcrumb from '@/components/Breadcrumb'
import SectionHeading from '@/components/SectionHeading'
import CardGrid from '@/components/CardGrid'
import Button from '@/components/Button'
import StatsBand from '@/components/StatsBand'
import type { AssertionItem, ExploreTile } from '@/types/school'

const coCurricularPrograms: ExploreTile[] = [
  {
    id: 'cc1',
    eyebrow: 'Athletics',
    title: 'Sports & Athletics',
    description:
      'Kho-kho, kabaddi, cricket, athletics track, volleyball, throwball and badminton — 14 disciplines with inter-house and taluka-level tournaments.',
    iconName: 'Trophy',
    href: '/academics#co-curricular',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=' +
      encodeURIComponent(
        'Rural Indian school kho-kho match in action, students in uniform, green field, afternoon light, editorial sports photo',
      ) +
      '&image_size=portrait_4_3',
  },
  {
    id: 'cc2',
    eyebrow: 'Cadets',
    title: 'NCC & Scouts',
    description:
      'Discipline, parade, community camps and national-level camps. 600+ cadets over the years have marched on Republic Day.',
    iconName: 'Flag',
    href: '/academics#co-curricular',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=' +
      encodeURIComponent(
        'School NCC cadets in khaki uniform standing in formation, Indian tricolour flag, winter morning light, editorial',
      ) +
      '&image_size=portrait_4_3',
  },
  {
    id: 'cc3',
    eyebrow: 'Stewardship',
    title: 'Eco Club',
    description:
      'Campus gardening, composting, water auditing, bird-watching, and a 60-plant medicinal Balvatika labelled in Marathi and English.',
    iconName: 'Sprout',
    href: '/academics#co-curricular',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=' +
      encodeURIComponent(
        'Uniformed Indian school students planting saplings in the school garden, monsoon sky, editorial documentary photo',
      ) +
      '&image_size=portrait_4_3',
  },
  {
    id: 'cc4',
    eyebrow: 'Seva',
    title: 'Godavari Harit Sena',
    description:
      'River & farm stewardship club. Monthly ghat cleaning drives, 2500+ native trees planted, and the annual river festival.',
    iconName: 'Trees',
    href: '/academics#co-curricular',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=' +
      encodeURIComponent(
        'Group of uniformed students planting saplings on a riverbank, monsoon sky, editorial documentary photo',
      ) +
      '&image_size=portrait_4_3',
  },
  {
    id: 'cc5',
    eyebrow: 'Culture',
    title: 'Arts & Cultural',
    description:
      'Visual arts studio, vocal & instrumental music, classical and folk dance, Marathi theatre, and the annual Dasara Sangeet Sandhya.',
    iconName: 'Palette',
    href: '/academics#co-curricular',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=' +
      encodeURIComponent(
        'Indian school children in colourful traditional costumes performing a folk dance on stage, warm stage lighting, editorial photo',
      ) +
      '&image_size=portrait_4_3',
  },
]

const curriculumPillars: {
  id: string
  title: string
  description: string
  Icon: LucideIcon
}[] = [
  {
    id: 'cp1',
    title: 'Vedic Math & Numeracy',
    description:
      'Mental arithmetic rooted in the 16 Vedic sutras. From Class III onwards children solve 10-digit multiplications in their heads — with a smile, not a frown.',
    Icon: Calculator,
  },
  {
    id: 'cp2',
    title: 'Balbharati Roots',
    description:
      'Maharashtra State Board Balbharati textbooks taught the way they were meant to be — through field visits, village elders, stories, and doing. Every chapter has a "go outside" companion.',
    Icon: BookOpen,
  },
  {
    id: 'cp3',
    title: 'English Communication',
    description:
      'English fluency, yes — but never at the cost of the mother tongue. Phonics in Class I, public speaking in Class VI, drama in Class VIII, elocution in three languages every year.',
    Icon: Languages,
  },
]

function Academics() {
  const navigate = useNavigate()
  const wingKeys = Object.keys(academics.wings) as WingKey[]
  const wingEntries = wingKeys.map((k) => academics.wings[k])

  const wingNavItems: ExploreTile[] = wingEntries.map((wing) => ({
    id: wing.key,
    eyebrow: wing.ageRange,
    title: wing.name,
    description: wing.grades,
    iconName:
      wing.key === 'pre-primary'
        ? 'Baby'
        : wing.key === 'primary'
          ? 'BookOpen'
          : wing.key === 'middle'
            ? 'Layers'
            : 'GraduationCap',
    href: `/academics/${wing.key}`,
    image: wing.heroImage,
  }))

  const teachingApproachItems: AssertionItem[] = academics.teachingApproach.map(
    (t, i) => ({
      id: `ta-${i}`,
      title: t.title,
      description: t.description,
      iconName: t.iconName,
    }),
  )

  const facilitiesItems: AssertionItem[] = academics.facilities.map((f, i) => ({
    id: `fac-${i}`,
    title: f.name,
    description: f.description,
    iconName: f.iconName,
  }))

  const teamLeadPerWing = wingKeys.map((wk) => {
    const membersInWing = team.filter(
      (m) => m.wing === wk,
    )
    return membersInWing.sort((a, b) => a.sort - b.sort)[0]
  }).filter(Boolean)

  const excerptedEvents = events.slice(0, 4)

  return (
    <div className="min-h-screen bg-ivory">
      {/* (1) Hero banner */}
      <HeroCarousel
        slides={[
          {
            id: 'academics-hero',
            title: 'Academics at Sanjivani',
            subtitle: 'Rigour + Heart',
            tagline: `${schoolData.shortName} · K–10 · Kopargaon`,
            image:
              'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=' +
              encodeURIComponent(
                'Editorial wide hero banner of Indian school classroom at golden hour, teacher guiding students, open books, warm ivory walls, wood and terracotta accents, banyan trees visible through windows, cinematic warm light, 16:9 aspect ratio, no text, Kopargaon Maharashtra rural school aesthetic',
              ) +
              '&image_size=landscape_16_9',
            ctaLabel: 'Explore the four wings',
            ctaHref: '#wings',
          },
        ]}
      />

      {/* (2) Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academics' },
        ]}
      />

      {/* (3) Wing Navigator Cards grid */}
      <section id="wings" className="py-20 md:py-28 bg-cream">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Four wings · One family"
            title="Four journeys, one Sanjivani"
            accentIndex={3}
            subtitle="From the first rhyme in Nursery to the last board paper in Class X, every wing at Sanjivani has its own heartbeat, its own rhythm, and its own promise to a child."
            decoratedUnderline
          />
          <div className="mt-14">
            <CardGrid
              variant="explore"
              items={wingNavItems}
              onItemClick={(item: { href?: string }) => {
                if (item.href) navigate(item.href)
              }}
            />
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <StatsBand tabs={schoolData.statsTabs} />

      {/* (4) Curriculum Framework - 3 column pedagogy */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Curriculum framework"
            title="The three pillars of how we teach"
            accentIndex={2}
            subtitle="A curriculum that is firmly Maharashtra State Board, deeply Marathi in its bones, and quietly world-class in its ambition. No rote, no rush, no shortcuts."
            align="center"
            decoratedUnderline
          />
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {curriculumPillars.map((pillar) => {
              const { Icon } = pillar
              return (
                <article
                  key={pillar.id}
                  className="bg-cream border border-wheat/60 p-8 card-hover"
                >
                  <div className="w-14 h-14 rounded-lg bg-forest/10 flex items-center justify-center text-forest mb-6">
                    <Icon size={28} strokeWidth={1.6} />
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal leading-snug mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-charcoal-soft/85">
                    {pillar.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* (5) Teaching Approach */}
      <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_bottom_left,rgba(182,88,60,0.10),transparent_60%)]" />
        <div className="container-editorial relative">
          <SectionHeading
            eyebrow="Teaching approach"
            title="Six promises in every classroom"
            accentIndex={1}
            subtitle="The teacher is not a loudspeaker. The classroom is not a waiting room. These six principles are written into every lesson plan at Sanjivani — and reviewed every term."
            decoratedUnderline
          />
          <div className="mt-14">
            <CardGrid variant="assertion" items={teachingApproachItems} />
          </div>
        </div>
      </section>

      {/* (6) Facilities highlights */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Campus & facilities"
            title="Nine buildings, one living classroom"
            accentIndex={4}
            subtitle="A school is not classrooms alone. It is a lab where a first-timer discovers magnets, a library where a quiet girl discovers Tagore, a ground where a slow runner discovers courage."
            align="center"
            decoratedUnderline
          />
          <div className="mt-14">
            <CardGrid variant="assertion" items={facilitiesItems} />
          </div>
        </div>
      </section>

      {/* (7) Co-curricular */}
      <section id="co-curricular" className="py-20 md:py-28 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(ellipse_at_top_right,rgba(47,82,51,0.12),transparent_60%)]" />
        <div className="container-editorial relative">
          <SectionHeading
            eyebrow="Beyond textbooks"
            title="Co-curricular life at Sanjivani"
            accentIndex={1}
            subtitle="The best lesson a child ever learns is usually not inside a classroom. It is running a losing race, planting a tree that outlives them, or standing on stage in costume and forgetting their lines — and surviving."
            decoratedUnderline
          />
          <div className="mt-14">
            <CardGrid
              variant="explore"
              items={coCurricularPrograms}
              onItemClick={(item: { href?: string }) => {
                if (item.href) navigate(item.href)
              }}
            />
          </div>

          <div className="mt-20">
            <SectionHeading
              eyebrow="Recent happenings"
              title="Stories from beyond the bell"
              accentIndex={3}
              subtitle="A handful of moments from the past few months — captured on campus, on the ghat, on the ground, and on the stage."
            />
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {excerptedEvents.map((ev) => (
                <article
                  key={ev.id}
                  className="bg-ivory border border-wheat/60 overflow-hidden card-hover cursor-pointer group"
                  onClick={() => navigate('/happenings')}
                >
                  <div className="relative h-[180px] overflow-hidden bg-sage-light/20">
                    <img
                      src={ev.thumbnail}
                      alt={ev.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-600 ease-cinematic group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex flex-col items-center bg-terracotta text-ivory px-3 py-1.5 rounded-sm">
                      <span className="text-[10px] tracking-editorial uppercase font-semibold">
                        {ev.monthShort}
                      </span>
                      <span className="font-serif text-xl leading-none">{ev.dayNum}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] tracking-editorial uppercase text-sage font-medium">
                      {ev.category}
                    </span>
                    <h3 className="font-serif text-lg leading-snug text-charcoal mt-2 mb-2 line-clamp-2">
                      {ev.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-charcoal-soft/80 line-clamp-3">
                      {ev.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* (8) Team Spotlight teaser per wing */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Team spotlight"
            title="The people who lead each wing"
            accentIndex={2}
            subtitle="Behind every wing at Sanjivani stands a leader who has chosen the classroom over the conference room, and a child's smile over a career ladder."
            decoratedUnderline
          />
          <div className="mt-14">
            <CardGrid variant="team" items={teamLeadPerWing} />
          </div>
        </div>
      </section>

      {/* (9) CTA */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-forest via-forest-deep to-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_left,rgba(182,88,60,0.28),transparent_55%)]" />
        <div className="container-editorial relative">
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-editorial uppercase text-terracotta-soft mb-4">
              The next step
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory leading-[1.08]">
              Come walk the corridors with us.
            </h2>
            <p className="mt-6 text-lg text-ivory/80 font-serifAlt leading-relaxed max-w-2xl">
              The best way to know Sanjivani is to spend a morning here. Meet the teachers,
              smell the lunch being cooked, listen to the nursery rhymes down the corridor,
              watch the middle wing in the lab. Bring your child, bring your questions.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/admission">
                <Button variant="primary" size="lg" iconRight={<ArrowRight size={16} />}>
                  View Admission
                </Button>
              </Link>
              <Link to="/contact#map">
                <Button variant="secondary" size="lg" className="!border-ivory !text-ivory hover:!bg-ivory hover:!text-forest">
                  Book a Visit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Academics
