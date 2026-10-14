import { Link, useParams } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import academics, { type WingKey } from '@/data/academics.data'
import { team } from '@/data/team.data'
import HeroCarousel from '@/components/HeroCarousel'
import Breadcrumb from '@/components/Breadcrumb'
import SectionHeading from '@/components/SectionHeading'
import CardGrid from '@/components/CardGrid'
import Button from '@/components/Button'
import type { AssertionItem } from '@/types/school'

const facilityIcons: Record<string, LucideIcon> = {
  lab: Sparkles,
  library: Sparkles,
  art: Sparkles,
  music: Sparkles,
  computer: Sparkles,
  play: Sparkles,
  garden: Sparkles,
  medical: Sparkles,
  auditorium: Sparkles,
  default: Sparkles,
}

function WingNotFound() {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center py-32">
      <div className="container-editorial text-center">
        <p className="text-[11px] tracking-editorial uppercase text-terracotta mb-4">
          404 · Wing not found
        </p>
        <h1 className="font-serif text-5xl md:text-6xl text-charcoal leading-[1.08]">
          This wing of Sanjivani doesn&apos;t exist — yet.
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-charcoal-soft/80 leading-relaxed">
          The wing you&apos;re looking for may have been renamed, or the path is slightly
          different. Head back to the Academics landing to explore our four actual wings.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/academics">
            <Button variant="primary" iconRight={<ArrowRight size={16} />}>
              Back to Academics
            </Button>
          </Link>
          <Link to="/">
            <Button variant="secondary">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function WingPage() {
  const { wing } = useParams<{ wing: WingKey }>()
  const wingKey = wing as WingKey
  const validWingKeys = Object.keys(academics.wings) as WingKey[]
  const isValidWing = wingKey && validWingKeys.includes(wingKey)

  if (!isValidWing) {
    return <WingNotFound />
  }

  const data = academics.wings[wingKey]

  const highlightsItems: AssertionItem[] = data.highlights.map((h) => ({
    id: h.id,
    title: h.title,
    description: h.description,
    iconName: h.iconName,
  }))

  const wingTeam = team
    .filter((m) => m.wing === wingKey)
    .sort((a, b) => a.sort - b.sort)
    .slice(0, 5)

  return (
    <div className="min-h-screen bg-ivory">
      {/* (1) Wing hero */}
      <HeroCarousel
        slides={[
          {
            id: `${data.key}-hero`,
            title: data.name,
            subtitle: data.tagline,
            tagline: `${data.grades} · ${data.ageRange}`,
            image: data.heroImage,
            ctaLabel: 'Book a Visit',
            ctaHref: '/contact',
          },
        ]}
      />

      {/* (2) Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academics' },
          { label: data.name, href: `/academics/${data.key}` },
        ]}
      />

      {/* (3) Wing summary + pedagogy long paragraph */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="text-[11px] tracking-editorial uppercase text-terracotta mb-4">
                {data.key.charAt(0).toUpperCase() + data.key.slice(1)} wing
              </p>
              <h1 className="font-serif text-4xl md:text-5xl text-charcoal leading-[1.08] decorated-heading">
                {data.name}
              </h1>
              <p className="mt-6 font-serifAlt text-xl text-charcoal-soft/90 leading-relaxed italic">
                {data.tagline}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="chip !bg-ivory">
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-forest" />
                  {data.grades}
                </span>
                <span className="chip !bg-ivory">
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-terracotta" />
                  {data.ageRange}
                </span>
              </div>

              <div className="mt-10 p-6 bg-ivory border border-wheat/60">
                <p className="text-[11px] tracking-editorial uppercase text-sage mb-3">
                  At a glance · Curriculum
                </p>
                <p className="text-sm leading-relaxed text-charcoal-soft/85">
                  {data.curriculumSummary}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-[11px] tracking-editorial uppercase text-forest mb-4">
                Our pedagogy
              </p>
              <div className="font-serifAlt text-lg md:text-xl text-charcoal-soft/90 leading-[1.85] space-y-5">
                {data.pedagogy.split(/(?<=[.!?])\s+/).map((sentence, i) => (
                  <p key={i}>{sentence}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* (4) Curriculum Highlights */}
      <section className="py-20 md:py-28 bg-ivory relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,rgba(47,82,51,0.10),transparent_60%)]" />
        <div className="container-editorial relative">
          <SectionHeading
            eyebrow="Highlights"
            title="What makes this wing different"
            accentIndex={3}
            subtitle="Six things we do differently in this wing — small promises that add up to a very different school experience for the child."
            decoratedUnderline
          />
          <div className="mt-14">
            <CardGrid variant="assertion" items={highlightsItems} />
          </div>
        </div>
      </section>

      {/* (5) Subject List */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Subjects offered"
            title="What your child will learn"
            accentIndex={2}
            subtitle={`The full ${data.key} wing subject list, aligned to Maharashtra State Board with Sanjivani's enrichment add-ons.`}
            align="center"
            decoratedUnderline
          />
          <div className="mt-14 overflow-hidden border border-wheat/60 bg-ivory">
            <div className="hidden md:grid grid-cols-12 bg-forest/5 border-b border-wheat/60">
              <div className="col-span-2 px-6 py-4 text-[11px] tracking-editorial uppercase text-sage font-semibold">
                #
              </div>
              <div className="col-span-3 px-6 py-4 text-[11px] tracking-editorial uppercase text-sage font-semibold">
                Subject
              </div>
              <div className="col-span-7 px-6 py-4 text-[11px] tracking-editorial uppercase text-sage font-semibold">
                What it covers
              </div>
            </div>
            {data.subjects.map((s, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div
                  key={s.id}
                  className={`grid grid-cols-1 md:grid-cols-12 border-b border-wheat/40 last:border-b-0 transition-colors duration-300 ease-cinematic hover:bg-ivory-deep/70 ${
                    isEven ? 'bg-cream/60' : ''
                  }`}
                >
                  <div className="md:col-span-2 px-6 py-5 md:py-6 flex md:block items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-forest/10 text-forest flex items-center justify-center font-serif text-sm shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="md:mt-3 md:block">
                      <span className="md:hidden text-[10px] tracking-editorial uppercase text-sage">
                        Subject
                      </span>
                      <h4 className="font-serif text-lg md:text-base text-charcoal md:mt-2">
                        {s.subject}
                      </h4>
                    </div>
                  </div>
                  <div className="hidden md:block md:col-span-3 px-6 py-6 border-l border-wheat/30">
                    <h4 className="font-serif text-lg text-charcoal">{s.subject}</h4>
                  </div>
                  <div className="md:col-span-7 px-6 pb-5 md:py-6 md:pl-0 md:border-l md:border-wheat/30">
                    <span className="md:hidden text-[10px] tracking-editorial uppercase text-sage block mb-2">
                      What it covers
                    </span>
                    <p className="text-sm leading-relaxed text-charcoal-soft/85">
                      {s.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* (6) Pedagogy expanded editorial block with image on right */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <SectionHeading
                eyebrow="Pedagogy in practice"
                title="The Sanjivani way — from the first bell to the last"
                accentIndex={2}
              />
              <div className="mt-8 space-y-5">
                {[
                  `Morning assembly is ten minutes of silence, one prayer, one song, one news item, and one thought for the day — shared by the children, not read out by a teacher.`,
                  `Every class has a 20-minute "free reading" slot, with no textbook and no questions to answer. Children read whatever they borrow from the library — Amar Chitra Katha, poetry, detective novels, old newspapers.`,
                  `Homework is capped. ${
                    data.key === 'pre-primary'
                      ? 'There is no written homework in the Pre-Primary wing at all — what comes home is a story to tell, a rhyme to sing, or a leaf to bring back tomorrow.'
                      : data.key === 'primary'
                        ? 'In the Primary wing, homework is never more than 30 minutes a day, and never over a weekend or festival day.'
                        : data.key === 'middle'
                          ? 'In the Middle wing, homework never exceeds 60 minutes a day. Sundays are reserved for the family, the farm, and play.'
                          : 'In the Senior wing, even in board year, we cap homework + revision at 2 hours. A child who has slept well outperforms one who has studied late.'
                  }`,
                  `Every Friday ends with a "value story". Not a lecture. A story — from the Panchatantra, from Sant Tukaram, from a grandparent the children invite.`,
                ].map((paragraph, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="shrink-0 mt-1 text-terracotta">
                      <CheckCircle2 size={18} strokeWidth={1.8} />
                    </div>
                    <p className="font-serifAlt text-lg leading-relaxed text-charcoal-soft/90">
                      {paragraph}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-terracotta/40" />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-forest/40" />
                <img
                  src={data.gallery[0]}
                  alt={`${data.name} pedagogy in action`}
                  className="w-full h-[480px] object-cover shadow-editorial"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* (7) Facilities Gallery strip with wing.facilities as badges/icons */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-cream to-ivory-deep border-y border-wheat/60">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Facilities · this wing"
            title="Built for the child, not the visitor"
            accentIndex={3}
            subtitle={`The classrooms, labs, gardens and nooks that make the ${data.name} feel like a second home.`}
            align="center"
            decoratedUnderline
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.facilities.map((f, idx) => {
              const Icon = facilityIcons.default
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 bg-ivory border border-wheat/60 p-5 card-hover"
                >
                  <div className="w-11 h-11 rounded-lg bg-forest/10 text-forest flex items-center justify-center shrink-0">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-sm leading-relaxed text-charcoal-soft/90 font-serifAlt">
                      {f}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* (8) Gallery horizontal strip 6 images */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Photo essay"
            title="Six frames from this wing"
            accentIndex={2}
            subtitle="A day in the life — captured across ordinary school days that quietly become the memories of a lifetime."
            decoratedUnderline
          />
        </div>
        <div className="mt-14 overflow-x-auto overflow-y-hidden">
          <div className="flex gap-4 px-5 sm:px-8 lg:px-12 pb-4" style={{ minWidth: 'max-content' }}>
            {data.gallery.map((src, idx) => (
              <figure
                key={idx}
                className="w-[300px] md:w-[380px] shrink-0 group overflow-hidden border border-wheat/60 bg-cream"
              >
                <div className="relative h-[240px] md:h-[300px] overflow-hidden">
                  <img
                    src={src}
                    alt={`${data.name} gallery frame ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-600 ease-cinematic group-hover:scale-105"
                  />
                </div>
                <figcaption className="px-4 py-3 flex items-center justify-between">
                  <span className="text-[11px] tracking-editorial uppercase text-sage">
                    Frame {String(idx + 1).padStart(2, '0')} · {data.key}
                  </span>
                  <span className="text-xs text-terracotta font-medium">
                    Editorial
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* (9) Teachers Spotlight */}
      {wingTeam.length > 0 && (
        <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
          <div className="absolute inset-0 opacity-50 bg-[radial-gradient(ellipse_at_bottom_left,rgba(182,88,60,0.10),transparent_60%)]" />
          <div className="container-editorial relative">
            <SectionHeading
              eyebrow="Faculty"
              title="Teachers of the wing"
              accentIndex={1}
              subtitle={`${wingTeam.length} gurus who walk the ${data.name} corridors every morning — most of them with Sanjivani for a decade or more.`}
              decoratedUnderline
            />
            <div className="mt-14">
              <CardGrid variant="team" items={wingTeam} />
            </div>
          </div>
        </section>
      )}

      {/* (10) Book a Visit button CTA */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-forest-deep via-forest to-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,rgba(182,88,60,0.25),transparent_55%)]" />
        <div className="container-editorial relative text-center max-w-3xl mx-auto">
          <p className="text-[11px] tracking-editorial uppercase text-terracotta-soft mb-4">
            Come see the {data.name} for yourself
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ivory leading-[1.08]">
            The best classroom explanation is still a classroom visit.
          </h2>
          <p className="mt-6 text-lg text-ivory/80 font-serifAlt leading-relaxed">
            Spend a morning with us. Sit in on a lesson. Say hello to the teachers. Drink a
            cup of chai from the staff room. You&apos;ll know within ten minutes whether
            Sanjivani is the right school for your child.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button
                variant="primary"
                size="lg"
                className="!bg-terracotta hover:!bg-terracotta-soft"
                iconRight={<ArrowRight size={16} />}
              >
                Book a Visit
              </Button>
            </Link>
            <Link to="/academics">
              <Button variant="secondary" size="lg" className="!border-ivory !text-ivory hover:!bg-ivory hover:!text-forest">
                Back to all wings
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WingPage
