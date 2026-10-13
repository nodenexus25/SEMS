import { Link } from 'react-router-dom'
import { ChevronRight, GraduationCap, TreePine, Building2, Award, Users, MapPin, Layers } from 'lucide-react'
import HeroCarousel from '@/components/HeroCarousel'
import Breadcrumb from '@/components/Breadcrumb'
import SectionHeading from '@/components/SectionHeading'
import CardGrid from '@/components/CardGrid'
import Button from '@/components/Button'
import type { HeroSlide, BreadcrumbItem, AssertionItem } from '@/types/school'
import schoolData from '@/data/school.data'
import team from '@/data/team.data'
import achievements from '@/data/achievements.data'

const img = (prompt: string, size = 'landscape_4_3') =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`

const heroSlides: HeroSlide[] = [
  {
    id: 'about-h1',
    title: 'Who We Are',
    subtitle: `Forty-seven years on the banks of the Godavari — one family, one promise.`,
    tagline: `${schoolData.shortName} · Est. ${schoolData.establishedYear}`,
    image: schoolData.heroSlides[0].image,
  },
]

const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
]

const assertionItems: AssertionItem[] = [
  {
    id: 'about-a1',
    title: 'Our Vision',
    description: schoolData.vision,
    iconName: 'Compass',
    image: img('Editorial still life — brass compass resting on an old leather-bound geography textbook, warm ivory background, soft morning window light, Maharashtra study room aesthetic', 'square'),
  },
  {
    id: 'about-a2',
    title: 'Our Mission',
    description: schoolData.mission,
    iconName: 'Target',
    image: img('Wooden archery target with one arrow at the exact centre, sunlight filtering through a classroom window, warm editorial still life, Kopargaon rural school vibe', 'square'),
  },
  {
    id: 'about-a3',
    title: schoolData.coreValues[0].title,
    description: schoolData.coreValues[0].description,
    iconName: schoolData.coreValues[0].iconName,
    image: img('An Indian child greeting her elderly teacher with folded hands, warm veranda light, terracotta tiles, editorial candid school moment', 'square'),
  },
  {
    id: 'about-a4',
    title: schoolData.coreValues[1].title,
    description: schoolData.coreValues[1].description,
    iconName: schoolData.coreValues[1].iconName,
    image: img('A small hand returning a dropped wallet to a school peon, corridor floor, warm editorial candid story photo, no faces', 'square'),
  },
  {
    id: 'about-a5',
    title: schoolData.coreValues[2].title,
    description: schoolData.coreValues[2].description,
    iconName: schoolData.coreValues[2].iconName,
    image: img('A school girl sharing her tiffin box with another child on a school veranda step, warm afternoon light, editorial candid rural India photo', 'square'),
  },
]

const leadershipTeam = team.filter((m) => m.wing === 'Leadership')

const timeline = [
  {
    id: 'tl1',
    year: '1962',
    title: 'Sanjivani Group Founded',
    description:
      'The Sanjivani Education, Agricultural and Rural Development Trust was registered by a small group of Kopargaon farmers and teachers — with one single purpose: the child of the farm labourer must sit on the same bench as the child of the landlord.',
    icon: TreePine,
  },
  {
    id: 'tl2',
    year: '1978',
    title: 'The School Opens Its Doors',
    description:
      'With three rented rooms, six teachers and forty-two barefoot children, Sanjivani English Medium School was formally established. The first bell rang beneath a banyan tree that still stands on campus today.',
    icon: GraduationCap,
  },
  {
    id: 'tl3',
    year: '2026',
    title: 'Forty-Seven Years & 5,000+ Alumni',
    description:
      'Today, Sanjivani educates children from forty-two surrounding villages. Our alumni include doctors, engineers, teachers, farmers, civil servants and entrepreneurs across India and the world — every one of them rooted in Kopargaon.',
    icon: Award,
  },
]

const groupSchools = [
  {
    id: 'gs1',
    name: 'Sanjivani Vidya Mandir',
    tagline: 'Marathi Medium · K–10',
    location: 'Kopargaon Main Campus',
    founded: '1962',
  },
  {
    id: 'gs2',
    name: 'Sanjivani Junior College',
    tagline: 'Science & Commerce · XI–XII',
    location: 'Sanjivani Nagar, Kopargaon',
    founded: '1989',
  },
  {
    id: 'gs3',
    name: 'Sanjivani D.Ed. College',
    tagline: 'Teacher Training Institute',
    location: 'Godavari Campus, Kopargaon',
    founded: '2001',
  },
]

export default function About() {
  return (
    <div className="bg-ivory min-h-screen">
      <HeroCarousel slides={heroSlides} />
      <Breadcrumb items={breadcrumbItems} />

      {/* Who We Are — Editorial Narrative */}
      <section className="py-24">
        <div className="container-editorial">
          <SectionHeading
            eyebrow={`Est. ${schoolData.establishedYear} · ${schoolData.address.city}`}
            title="Who We Are"
            accentIndex={2}
            decoratedUnderline
            subtitle={`${schoolData.name} was born on the banks of the Godavari, inside a Trust that was born on the farms of Kopargaon. This is the story of how one village decided to educate its own — and never looked back.`}
          />

          {/* Block 1: Text on left, image on right */}
          <div className="mt-16 grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="md:col-span-7 space-y-7">
              <p className="font-serifAlt text-xl md:text-2xl leading-[1.7] text-charcoal">
                In the year <span className="text-terracotta font-semibold">1978</span>, on a
                small patch of land donated by the Sanjivani Education, Agricultural and Rural
                Development Trust, a handful of Kopargaon teachers opened the doors of what was
                then only the second English-medium school in the taluka. The first Class I
                register still sits in the principal&apos;s office — forty-two names, most of
                them children of farm labourers, cotton growers and small shopkeepers from the
                surrounding twenty-three villages.
              </p>
              <p className="text-base md:text-lg leading-[1.85] text-charcoal-soft/85">
                The river Godavari flows a short walk from the eastern gate — and her presence
                has shaped every aspect of life at {schoolData.shortName}. Our students learn
                to read on her banks, our laboratories draw water from her aquifers, and every
                year our Class VII students walk the five kilometres to the old ghat for the
                annual <em className="font-serif text-forest">Godavari Harit Seva</em> drive.
                A child of this school does not merely <em>live near</em> a river. She inherits
                a relationship with one.
              </p>
            </div>
            <div className="md:col-span-5">
              <figure className="relative">
                <div className="aspect-[4/5] overflow-hidden bg-cream border border-wheat/50" style={{ boxShadow: '0 20px 50px -20px rgba(31, 41, 36, 0.2)' }}>
                  <img
                    src={img('Editorial vertical portrait — the old banyan tree in an Indian rural school courtyard, children sitting beneath it reading books, warm dappled afternoon light, terracotta rooftops peeking through leaves, Kopargaon Maharashtra school aesthetic, no text or logos', 'portrait_4_3')}
                    alt="The original banyan courtyard at Sanjivani"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-4 text-xs tracking-editorial uppercase text-sage">
                  · The banyan courtyard — where the first 1978 classes were held
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Block 2: Image on left, text on right */}
          <div className="mt-24 md:mt-32 grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="md:col-span-5 md:order-1">
              <figure className="relative">
                <div className="aspect-[4/5] overflow-hidden bg-cream border border-wheat/50" style={{ boxShadow: '0 20px 50px -20px rgba(31, 41, 36, 0.2)' }}>
                  <img
                    src={img('Editorial vertical photo — wide view of rural Maharashtra Godavari riverbank at golden hour, stone ghat steps, school children in uniform collecting plastic waste for cleanliness drive, ancient banyan trees, warm amber light, no logos, documentary style', 'portrait_4_3')}
                    alt="Godavari Harit Seva on the banks of the river"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-4 text-xs tracking-editorial uppercase text-sage">
                  · Godavari Harit Sena — annual river stewardship drive since 2003
                </figcaption>
              </figure>
            </div>
            <div className="md:col-span-7 md:order-2 space-y-7">
              <p className="font-serifAlt text-xl md:text-2xl leading-[1.7] text-charcoal">
                The {schoolData.trust} itself predates the school by sixteen years — founded in{' '}
                <span className="text-terracotta font-semibold">1962</span> to support
                marginal cotton farmers through cooperative credit and seed banks. When the
                Trust turned its attention to education, it did not build a school for the
                town&apos;s elite. It built a school for those families who were already its
                first and oldest concern: the parents who could not, in those years, afford
                the bus fare to the nearest high school in Ahmednagar.
              </p>
              <p className="text-base md:text-lg leading-[1.85] text-charcoal-soft/85">
                That founding compromise — <em className="font-serif text-forest">excellence
                without exclusion</em> — remains written above the main gate today in both
                Marathi and English. It is why, nearly five decades later, 62% of our student
                body still receives full or partial fee assistance from the Trust, and why the
                seat at the front-left corner of every classroom is always reserved for the
                student whose family income is the smallest. The Godavari does not turn away
                any small stream that flows into her. Neither do we.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision — Full Statement */}
      <section id="vision" className="py-24 bg-cream scroll-mt-20">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="The Vision"
            title="A Promise to Every Child"
            accentIndex={0}
            decoratedUnderline
            align="center"
          />

          {/* Pull-quote tagline */}
          <div className="mt-14 flex justify-center">
            <blockquote className="max-w-3xl text-center">
              <p className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.35] text-charcoal">
                <span className="text-terracotta">&ldquo;</span>
                There is a bright child in every child.
                <span className="text-terracotta">&rdquo;</span>
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-terracotta/40" />
                <span className="text-[10px] tracking-editorial uppercase text-sage font-medium">
                  {schoolData.shortName} · Kopargaon
                </span>
                <span className="h-px w-12 bg-terracotta/40" />
              </div>
            </blockquote>
          </div>

          {/* Full vision text */}
          <div className="mt-16 max-w-3xl mx-auto space-y-6">
            {schoolData.visionFull.split('\n\n').map((para, i, arr) => {
              const isBrandLine = i === arr.length - 1
              if (isBrandLine) {
                return (
                  <p
                    key={i}
                    className="pt-6 mt-4 border-t border-wheat/60 text-center font-serifAlt text-lg md:text-xl leading-[1.7] text-forest-deep"
                  >
                    {para}
                  </p>
                )
              }
              return (
                <p
                  key={i}
                  className="text-base md:text-[1.05rem] leading-[1.9] text-charcoal-soft/90"
                >
                  {para}
                </p>
              )
            })}
          </div>
        </div>
      </section>

      {/* Vision / Mission / Core Values — Assertion Cards */}
      <section className="py-24 bg-cream">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="The Pillars"
            title="Vision, Mission & Core Values"
            accentIndex={3}
            decoratedUnderline
            align="center"
            subtitle="Five words written on every classroom wall. Five promises spoken by every teacher at the morning assembly — and every child, by Class III, can recite them by heart."
          />
          <div className="mt-16">
            <CardGrid variant="assertion" items={assertionItems} />
          </div>
        </div>
      </section>

      {/* Our Mission — Full Statement with Commitments */}
      <section id="mission" className="py-24 scroll-mt-20">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Our Mission"
            title="Empowering Every Child"
            accentIndex={1}
            decoratedUnderline
            align="center"
          />

          {/* Mission tagline */}
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="font-serif text-2xl md:text-3xl leading-[1.45] text-charcoal">
              &ldquo;{schoolData.mission}&rdquo;
            </p>
          </div>

          {/* Mission intro */}
          <div className="mt-12 max-w-3xl mx-auto space-y-6">
            {schoolData.missionIntro.split('\n\n').map((para, i) => (
              <p
                key={i}
                className="text-base md:text-[1.05rem] leading-[1.9] text-charcoal-soft/90"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Nine Mission Commitments */}
          <div className="mt-16">
            <p className="text-center text-[11px] tracking-editorial uppercase text-terracotta font-medium mb-10">
              Our Mission Commitments
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {schoolData.missionCommitments.map((c, i) => (
                <article
                  key={c.id}
                  className="bg-ivory border border-wheat/60 p-7 card-hover group"
                  style={{ boxShadow: '0 1px 2px rgba(31, 41, 36, 0.06)' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center font-serif text-base font-bold group-hover:bg-terracotta group-hover:text-ivory transition-colors duration-450 ease-cinematic">
                      {i + 1}
                    </div>
                    <h4 className="font-serif text-lg text-charcoal leading-tight">
                      {c.title}
                    </h4>
                  </div>
                  <p className="text-sm leading-[1.8] text-charcoal-soft/80">
                    {c.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Our Promise */}
          <div className="mt-16 max-w-3xl mx-auto bg-cream border-l-4 border-r-4 border-terracotta/50 p-8 md:p-10 text-center">
            <p className="text-[11px] tracking-editorial uppercase text-terracotta font-medium mb-5">
              Our Promise
            </p>
            <div className="space-y-4">
              {schoolData.missionPromise.split('\n\n').map((para, i) => (
                <p
                  key={i}
                  className={
                    i === schoolData.missionPromise.split('\n\n').length - 1
                      ? 'font-serifAlt text-lg md:text-xl leading-[1.7] text-forest-deep'
                      : 'text-base md:text-[1.05rem] leading-[1.85] text-charcoal/90'
                  }
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* School Emblem */}
      <section id="emblem" className="py-24 scroll-mt-20">
        <div className="container-editorial grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="md:col-span-5">
            <div className="aspect-square w-full max-w-md mx-auto bg-cream border border-wheat/60 flex items-center justify-center relative overflow-hidden" style={{ boxShadow: '0 20px 50px -20px rgba(31, 41, 36, 0.2)' }}>
              <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="w-[85%] h-[85%]">
                <defs>
                  <circle id="emblem-circle" cx="150" cy="150" r="140" />
                  <linearGradient id="horizon-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F8F7F2" />
                    <stop offset="100%" stopColor="#E4D9B8" />
                  </linearGradient>
                  <linearGradient id="lamp-flame" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#B6583C" />
                    <stop offset="100%" stopColor="#D48871" />
                  </linearGradient>
                </defs>

                <clipPath id="emblem-clip">
                  <use href="#emblem-circle" />
                </clipPath>

                <circle cx="150" cy="150" r="140" fill="url(#horizon-grad)" />

                {/* Horizon line (farmer's horizon) */}
                <g clipPath="url(#emblem-clip)">
                  <line x1="10" y1="195" x2="290" y2="195" stroke="#7A8B6F" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.6" />
                  <line x1="10" y1="205" x2="290" y2="205" stroke="#B6583C" strokeWidth="1" opacity="0.4" />
                </g>

                {/* Godavari wave */}
                <g clipPath="url(#emblem-clip)" fill="none" stroke="#4A7B55" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M 10 225 Q 45 215, 80 225 T 150 225 T 220 225 T 290 225" />
                  <path d="M 10 238 Q 45 228, 80 238 T 150 238 T 220 238 T 290 238" opacity="0.6" />
                  <path d="M 10 250 Q 45 242, 80 250 T 150 250 T 220 250 T 290 250" opacity="0.35" />
                </g>

                {/* Banyan tree */}
                <g clipPath="url(#emblem-clip)" transform="translate(62, 120)">
                  <path d="M 0 75 Q -2 55, 3 40 L -6 75 Z" fill="#2F5233" opacity="0.85" />
                  <path d="M 14 75 Q 12 58, 14 42 L 22 75 Z" fill="#2F5233" opacity="0.7" />
                  <ellipse cx="8" cy="30" rx="26" ry="18" fill="#4A7B55" />
                  <ellipse cx="-8" cy="22" rx="16" ry="12" fill="#2F5233" />
                  <ellipse cx="24" cy="20" rx="14" ry="10" fill="#2F5233" opacity="0.85" />
                  <ellipse cx="10" cy="14" rx="12" ry="8" fill="#4A7B55" opacity="0.8" />
                  <line x1="-4" y1="40" x2="-10" y2="72" stroke="#213B25" strokeWidth="1.2" opacity="0.4" />
                  <line x1="18" y1="42" x2="26" y2="72" stroke="#213B25" strokeWidth="1.2" opacity="0.4" />
                </g>

                {/* Palm (open palm - service) */}
                <g clipPath="url(#emblem-clip)" transform="translate(198, 135)">
                  <path
                    d="M 25 70 Q 5 65, -2 35 Q 0 18, 10 15 Q 12 28, 14 35 Q 14 10, 25 8 Q 30 28, 30 35 Q 33 10, 43 12 Q 47 28, 45 38 Q 55 20, 62 28 Q 60 50, 50 62 Q 40 72, 25 70 Z"
                    fill="#B6583C"
                    opacity="0.82"
                  />
                  <path d="M 18 58 Q 30 62, 42 58" fill="none" stroke="#F8F7F2" strokeWidth="1.2" opacity="0.55" />
                  <path d="M 22 48 L 26 52" stroke="#F8F7F2" strokeWidth="0.8" opacity="0.4" />
                  <path d="M 34 49 L 38 53" stroke="#F8F7F2" strokeWidth="0.8" opacity="0.4" />
                </g>

                {/* Lamp (vidya) — central */}
                <g clipPath="url(#emblem-clip)" transform="translate(150, 90)">
                  <path d="M 0 -35 Q 10 -22, 8 -8 Q 18 -4, 18 6 L -18 6 Q -18 -4, -8 -8 Q -10 -22, 0 -35 Z" fill="url(#lamp-flame)" />
                  <path d="M -2 -10 Q 0 -28, 3 -10 Q 2 -4, -2 -4 Z" fill="#F8F7F2" opacity="0.7" />
                  <rect x="-20" y="6" width="40" height="6" rx="1.5" fill="#2F5233" />
                  <rect x="-12" y="12" width="24" height="4" rx="1" fill="#B6583C" />
                  <path d="M -6 16 L 6 16 L 4 26 L -4 26 Z" fill="#213B25" />
                  <ellipse cx="0" cy="28" rx="14" ry="3" fill="#1F2924" opacity="0.75" />
                </g>

                {/* Outer ring */}
                <circle cx="150" cy="150" r="136" fill="none" stroke="#2F5233" strokeWidth="2" opacity="0.7" />
                <circle cx="150" cy="150" r="130" fill="none" stroke="#B6583C" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.5" />

                {/* Top text arc — SEMS monogram */}
                <g fontFamily="'Playfair Display', Georgia, serif" fontWeight="600" fill="#1F2924">
                  <text x="150" y="72" textAnchor="middle" fontSize="14" letterSpacing="4" fill="#2F5233">
                    · SANJIVANI ·
                  </text>
                  <text x="150" y="282" textAnchor="middle" fontSize="11" letterSpacing="3" fill="#B6583C" opacity="0.85">
                    EST. 1978
                  </text>
                  <text x="150" y="60" textAnchor="middle" fontSize="7" letterSpacing="2.4" fill="#7A8B6F" opacity="0.9">
                    ◦ VIDYA · DANAM · SEVA ◦
                  </text>
                </g>

                {/* Bottom monogram S */}
                <circle cx="150" cy="262" r="10" fill="#2F5233" />
                <text x="150" y="266.5" textAnchor="middle" fill="#F8F7F2" fontFamily="'Playfair Display', Georgia, serif" fontStyle="italic" fontSize="13" fontWeight="700">S</text>
              </svg>
            </div>
          </div>

          <div className="md:col-span-7">
            <SectionHeading
              eyebrow="The Emblem"
              title="Five Symbols. One Promise."
              accentIndex={1}
              decoratedUnderline
              subtitle={schoolData.emblemStory}
            />
            <dl className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-6">
              {[
                { sym: 'Lamp', name: 'Vidya · Knowledge', desc: 'A flame lit by the teacher is passed, never extinguished.' },
                { sym: 'Banyan', name: 'Roots · Continuity', desc: 'A single tree whose shade has sheltered five decades of children.' },
                { sym: 'Palm', name: 'Seva · Service', desc: 'Open palm, open door — the first duty of an education is to give.' },
                { sym: 'Wave', name: 'Godavari · Flow', desc: 'The river that bears our boats, our festivals, and our responsibility.' },
                { sym: 'Horizon', name: 'Krushi · Land', desc: 'The far horizon of our farming fathers — the Sanjivani Trust origin.' },
              ].map((row) => (
                <div key={row.sym} className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-sm bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0 mt-0.5 font-serif font-bold text-sm">
                    {row.sym[0]}
                  </div>
                  <div>
                    <dt className="font-serif text-lg text-charcoal leading-tight">{row.name}</dt>
                    <dd className="mt-1 text-sm text-charcoal-soft/80 leading-relaxed">{row.desc}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Heritage Timeline */}
      <section id="philosophy" className="py-24 bg-cream scroll-mt-20">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="A Heritage in Three Chapters"
            accentIndex={4}
            decoratedUnderline
            align="center"
            subtitle="Every Sanjivani child is taught the school&apos;s own origin story in Class V. It is not a history lesson. It is a promise — that ordinary people, working together, can change a village forever."
          />

          <div className="mt-20 relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-terracotta/30 md:-translate-x-px" />

            <ol className="space-y-16 md:space-y-24">
              {timeline.map((step, i) => {
                const IconCmp = step.icon
                const isLeft = i % 2 === 0
                return (
                  <li key={step.id} className="relative md:grid md:grid-cols-2 md:gap-12">
                    <div
                      className={`absolute left-4 md:left-1/2 w-10 h-10 -translate-x-5 rounded-full bg-ivory border-2 border-terracotta flex items-center justify-center text-terracotta shadow-soft z-10`}
                    >
                      <IconCmp size={18} strokeWidth={2} />
                    </div>

                    <div className={`pl-20 md:pl-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'}`}>
                      <span className="chip">
                        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-terracotta" />
                        Year · {step.year}
                      </span>
                      <h3 className="mt-5 font-serif text-3xl text-charcoal leading-tight">
                        {step.title}
                      </h3>
                      <p className="mt-4 text-base leading-[1.8] text-charcoal-soft/85 max-w-lg md:ml-auto">
                        {step.description}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Leadership Board */}
      <section id="leadership" className="py-24 scroll-mt-20">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="The Governing Body"
            title="Leadership Board"
            accentIndex={0}
            decoratedUnderline
            subtitle="Four people between whom rests the safety, the learning and the future of every child on this campus. Between them they share ninety-two years of service to this single school."
          />
          <div className="mt-16">
            <CardGrid variant="team" items={leadershipTeam} />
          </div>
        </div>
      </section>

      {/* Campuses & Group */}
      <section id="campuses" className="py-24 bg-cream scroll-mt-20">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="The Wider Family"
            title="Our Campuses & Group"
            accentIndex={3}
            decoratedUnderline
            subtitle={`${schoolData.name} is one of four institutions run by the Sanjivani Trust within a one-kilometre radius of the Kopargaon ghat. A child may begin her journey in our nursery and end it as a trained teacher in our D.Ed. college — without ever leaving the family.`}
          />

          <div className="mt-16 grid md:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Map */}
            <div className="md:col-span-7">
              <div className="relative aspect-[16/10] bg-ivory border border-wheat/60 overflow-hidden" style={{ boxShadow: '0 20px 50px -20px rgba(31, 41, 36, 0.2)' }}>
                <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <rect width="800" height="500" fill="#FBF9F4" />

                  {/* Terrain patches */}
                  <path d="M 0 380 Q 150 340, 320 360 T 620 350 T 800 370 L 800 500 L 0 500 Z" fill="#E4D9B8" opacity="0.55" />
                  <path d="M 0 420 Q 180 395, 380 405 T 700 400 T 800 410 L 800 500 L 0 500 Z" fill="#B8C2AE" opacity="0.4" />

                  {/* Godavari river */}
                  <path
                    d="M -20 260 Q 120 240, 230 268 T 420 265 Q 520 270, 610 248 T 820 260"
                    fill="none"
                    stroke="#4A7B55"
                    strokeWidth="28"
                    strokeLinecap="round"
                    opacity="0.28"
                  />
                  <path
                    d="M -20 260 Q 120 240, 230 268 T 420 265 Q 520 270, 610 248 T 820 260"
                    fill="none"
                    stroke="#7A8B6F"
                    strokeWidth="10"
                    strokeLinecap="round"
                    opacity="0.45"
                  />

                  {/* Roads */}
                  <path d="M 50 480 L 760 40" stroke="#2E3B34" strokeWidth="1" strokeDasharray="5 6" opacity="0.18" />
                  <path d="M 760 460 L 80 100" stroke="#2E3B34" strokeWidth="1" strokeDasharray="5 6" opacity="0.14" />

                  {/* Village patches */}
                  {[[120, 180, 80], [260, 380, 60], [620, 120, 90], [560, 420, 70], [60, 320, 50]].map(([cx, cy, r], i) => (
                    <g key={i}>
                      <circle cx={cx} cy={cy} r={r} fill="#B8C2AE" opacity="0.3" />
                      <circle cx={cx - r * 0.25} cy={cy - r * 0.2} r="4" fill="#7A8B6F" opacity="0.5" />
                      <circle cx={cx + r * 0.3} cy={cy + r * 0.15} r="3" fill="#7A8B6F" opacity="0.5" />
                    </g>
                  ))}

                  {/* Kopargaon Pin */}
                  <g transform="translate(400, 230)">
                    <circle r="26" fill="#B6583C" opacity="0.18">
                      <animate attributeName="r" values="22;34;22" dur="2.6s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.22;0;0.22" dur="2.6s" repeatCount="indefinite" />
                    </circle>
                    <circle r="14" fill="#F8F7F2" stroke="#B6583C" strokeWidth="2" />
                    <path
                      d="M 0 -36 C -12 -52, -34 -42, -34 -24 C -34 -6, 0 18, 0 18 C 0 18, 34 -6, 34 -24 C 34 -42, 12 -52, 0 -36 Z"
                      fill="#B6583C"
                      stroke="#213B25"
                      strokeWidth="1.2"
                    />
                    <circle cy="-26" r="6" fill="#F8F7F2" />
                    <text y="-22" textAnchor="middle" fontFamily="'Playfair Display', Georgia, serif" fontSize="9" fontWeight="700" fill="#2F5233" fontStyle="italic">S</text>
                  </g>

                  {/* Labels */}
                  <g fontFamily="'Inter', sans-serif" fill="#1F2924">
                    <text x="400" y="300" textAnchor="middle" fontSize="15" fontWeight="600" fill="#B6583C">
                      Kopargaon
                    </text>
                    <text x="400" y="318" textAnchor="middle" fontSize="10" letterSpacing="2" fill="#7A8B6F" opacity="0.95">
                      · GODAVARI GHAT · MAIN CAMPUS ·
                    </text>
                    <text x="80" y="248" fontSize="11" letterSpacing="1.5" fill="#4A7B55" opacity="0.85">
                      Godavari River
                    </text>
                    <g>
                      <line x1="600" y1="230" x2="520" y2="230" stroke="#1F2924" strokeWidth="0.6" opacity="0.3" />
                      <text x="604" y="234" fontSize="10" letterSpacing="1.4" fill="#7A8B6F" opacity="0.95">
                        AHMEDNAGAR ← 78 KM
                      </text>
                    </g>
                    <g>
                      <line x1="200" y1="230" x2="280" y2="230" stroke="#1F2924" strokeWidth="0.6" opacity="0.3" />
                      <text x="76" y="234" fontSize="10" letterSpacing="1.4" fill="#7A8B6F" opacity="0.95" textAnchor="start">
                        NASHIK → 92 KM
                      </text>
                    </g>
                  </g>

                  {/* Frame */}
                  <rect x="0.5" y="0.5" width="799" height="499" fill="none" stroke="#2F5233" strokeWidth="0.6" opacity="0.3" />
                  <rect x="14" y="14" width="772" height="472" fill="none" stroke="#E4D9B8" strokeWidth="0.8" opacity="0.7" />
                </svg>
              </div>
              <p className="mt-4 text-xs tracking-editorial uppercase text-sage flex items-center gap-2">
                <MapPin size={13} /> · {schoolData.address.line1}, {schoolData.address.landmark}
              </p>
            </div>

            {/* Group Schools 3-card grid */}
            <div className="md:col-span-5 space-y-5">
              <p className="text-[11px] tracking-editorial uppercase text-terracotta font-medium">
                Sister Institutions · Sanjivani Trust
              </p>
              <div className="space-y-5">
                {groupSchools.map((gs) => (
                  <article
                    key={gs.id}
                    className="bg-ivory border border-wheat/60 p-6 card-hover"
                    style={{ boxShadow: '0 1px 2px rgba(31, 41, 36, 0.06)' }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-sm bg-forest/10 text-forest flex items-center justify-center shrink-0">
                        <Building2 size={20} strokeWidth={1.7} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <h4 className="font-serif text-xl text-charcoal leading-tight">{gs.name}</h4>
                          <span className="shrink-0 text-[10px] tracking-editorial uppercase text-terracotta font-semibold">
                            Est. {gs.founded}
                          </span>
                        </div>
                        <p className="mt-1.5 text-sm font-medium text-sage">{gs.tagline}</p>
                        <p className="mt-2 text-xs text-charcoal-soft/70 flex items-center gap-1.5">
                          <MapPin size={11} /> {gs.location}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <div className="pt-2 flex items-center gap-2 text-xs tracking-editorial uppercase text-sage">
                <Layers size={12} />
                <span>4 institutions · 1 Trust · 1 family</span>
              </div>
            </div>
          </div>

          {/* CTA strip */}
          <div className="mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-forest text-ivory p-8 md:p-10 border border-forest-deep" style={{ boxShadow: '0 20px 50px -20px rgba(47, 82, 51, 0.35)' }}>
            <div>
              <p className="font-serif text-2xl md:text-3xl leading-tight">
                Want to walk the campus with us?
              </p>
              <p className="mt-2 text-sm text-ivory/75">
                Book a guided tour with our Academic Coordinator — any weekday between 9 am and 2 pm.
              </p>
            </div>
            <div className="flex gap-3">
              <Link to="/contact">
                <Button variant="secondary" size="md" className="!border-ivory !text-ivory hover:!bg-ivory hover:!text-forest">
                  Book a tour
                  <ChevronRight size={14} />
                </Button>
              </Link>
              <Link to="/principal-message">
                <Button variant="ghost" size="md" className="!text-ivory/80 hover:!text-ivory hover:!border-ivory/60">
                  <Users size={14} />
                  Meet the Principal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials strip from achievements */}
      <section className="py-20 border-t border-wheat/40">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow="Trusted Voices"
              title="What Our Community Says"
              accentIndex={2}
              decoratedUnderline
              subtitle="Three voices from 5,000+ alumni, parents and grandparents — our most honest report card."
            />
            <Link
              to="/achievements#voices"
              className="shrink-0 inline-flex items-center gap-2 text-sm font-medium text-terracotta hover:text-forest transition-colors duration-300 ease-cinematic"
            >
              Read all testimonials <ChevronRight size={15} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.testimonials.slice(0, 3).map((t) => (
              <article
                key={t.id}
                className="bg-cream border border-wheat/50 p-7 flex flex-col card-hover"
              >
                <p className="font-serifAlt text-xl leading-[1.6] text-charcoal min-h-[130px]">
                  <span className="text-terracotta text-4xl font-serif leading-none -ml-1 mr-2 float-left mt-1">&ldquo;</span>
                  {t.quote}
                </p>
                <footer className="mt-6 pt-5 border-t border-wheat/50 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden border border-wheat shrink-0">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-charcoal leading-tight">{t.name}</p>
                    <p className="mt-0.5 text-xs text-sage truncate">{t.relation}</p>
                    <p className="text-[10px] tracking-editorial uppercase text-charcoal-soft/60 mt-0.5">{t.location}</p>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
