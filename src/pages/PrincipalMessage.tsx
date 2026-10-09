import { Link } from 'react-router-dom'
import { BookOpenCheck, HeartHandshake, Sparkles, Scroll, ArrowRight } from 'lucide-react'
import HeroCarousel from '@/components/HeroCarousel'
import Breadcrumb from '@/components/Breadcrumb'
import SectionHeading from '@/components/SectionHeading'
import CardGrid from '@/components/CardGrid'
import Button from '@/components/Button'
import type { HeroSlide, BreadcrumbItem } from '@/types/school'
import schoolData from '@/data/school.data'
import team from '@/data/team.data'

const img = (prompt: string, size = 'landscape_4_3') =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`

const principal = team[0]
const leadershipTeam = team.filter((m) => m.wing === 'Leadership')

const heroSlides: HeroSlide[] = [
  {
    id: 'pm-h1',
    title: "Principal's Message",
    subtitle: 'A letter from Dr. (Smt.) Vasundhara K. Patil — twenty-ninth year at Sanjivani.',
    tagline: `${schoolData.shortName} · A Message from the Desk`,
    image: schoolData.heroSlides[5].image,
  },
]

const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: "Principal's Message", href: '/principal-message' },
]

const credoList = [
  'I will greet every child by their name before I greet their notebook.',
  'I will remember that Class V&apos;s slow learner is someone&apos;s entire universe — and treat them accordingly.',
  'I will teach the Marathi abhang before I teach the English essay. Both are literature.',
  'I will not use the cane. I will use the word. If the word fails, I will use a longer, kinder one.',
  'I will ensure the last bench eats his midday meal before the first bench begins her lesson.',
  'I will remember that this school belongs to the Kopargaon farmer who sold three acres to build the first classroom.',
  'I will walk the Godavari ghat with my students at least once every term. A river teaches what a textbook cannot.',
  'I will read at least one poem aloud in the morning assembly — every single day, without exception.',
  'I will answer every parent&apos;s letter myself. A school that does not reply is a school that does not care.',
  'When a child leaves Sanjivani, she must carry home with her one thing: the certainty that she is loved.',
]

export default function PrincipalMessage() {
  return (
    <div className="bg-ivory min-h-screen">
      <HeroCarousel slides={heroSlides} />
      <Breadcrumb items={breadcrumbItems} />

      {/* Principal's Portrait + Long-form Message */}
      <section className="py-24">
        <div className="container-editorial max-w-5xl">
          {/* Portrait + quote opener */}
          <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="md:col-span-5 md:sticky md:top-28">
              <figure className="relative">
                <div className="aspect-[4/5] overflow-hidden bg-cream border border-wheat/50" style={{ boxShadow: '0 20px 50px -20px rgba(31, 41, 36, 0.22)' }}>
                  <img
                    src={principal.portrait}
                    alt={principal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="mt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="chip">
                      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-terracotta animate-pulse" />
                      {principal.qualifications}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal leading-tight">
                    {principal.name}
                  </h3>
                  <p className="mt-1 text-base font-medium text-terracotta">{principal.role}</p>
                  <p className="mt-3 text-xs tracking-editorial uppercase text-sage">
                    · Twenty-ninth academic year at Sanjivani
                  </p>
                </figcaption>
              </figure>

              <aside className="mt-10 p-6 bg-cream border-l-4 border-terracotta">
                <p className="font-serifAlt text-xl italic leading-[1.6] text-charcoal">
                  &ldquo;{principal.quote}&rdquo;
                </p>
              </aside>
            </div>

            <div className="md:col-span-7">
              <SectionHeading
                eyebrow="From the Principal's Desk"
                title="Dear Parent, Grandparent, and Friend of Sanjivani,"
                accentIndex={5}
                decoratedUnderline
              />

              <div className="mt-10 space-y-7 font-serifAlt text-lg md:text-xl leading-[1.85] text-charcoal/90">
                <p className="first-letter:float-left first-letter:mr-2.5 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.85] first-letter:text-terracotta first-letter:font-bold">
                  When I first walked through these gates in 1997 as a young English teacher of
                  twenty-eight, the school had eight hundred and twelve children and one very
                  old banyan tree. Today, nearly twenty-nine years later, we are a family of
                  nearly three thousand — but the banyan tree is still there, and I still
                  measure every decision I make by one single question: <em className="font-serif text-forest italic">would
                  the child I was, the daughter of a school-teacher mother in a small village of
                  Satara district, approve of this?</em>
                </p>

                <p>
                  Let me take you back further, to <span className="text-terracotta font-semibold">1978</span>,
                  the year this school was born. The Sanjivani Trust had already been working
                  for sixteen years with Kopargaon&apos;s cotton and sugarcane farmers —
                  organising seed banks, cooperative credit societies, and small health camps
                  on the banks of the Godavari. Then one rainy July, as the story is told, a
                  group of farm workers came to the Trust office with a single, quiet request:{' '}
                  <em className="font-serif italic text-forest">&ldquo;Our fields are good. But our children need something that the
                  monsoon cannot wash away. Will you build us a school?&rdquo;</em>
                </p>

                <p>
                  That something <strong>cannot be washed away</strong> — that phrase has
                  stayed with me for three decades. It is what I write inside the front cover
                  of every new teacher&apos;s diary on their first day at Sanjivani. A
                  mathematics formula can be forgotten. A date in history can be misremembered.
                  But what a child learns about <em className="font-serif italic text-forest">being seen</em> — about
                  having a teacher who remembers their father&apos;s name, who notices when
                  their uniform is torn, who stays back after school because they could not
                  afford the tuition — that is something no flood, no drought, no passing of
                  the years can ever truly take from them.
                </p>

                <p>
                  Ours is, first and last, a <strong>Marathi-mana school with an English
                  medium</strong>. The Godavari is the first river our students learn about in
                  geography. Sant Tukaram and Sant Eknath are the first poets they memorise in
                  the prayer hall. Our science labs may have microscopes and our computer
                  centres may teach HTML — but no child leaves Class V here without knowing
                  how to plant a sapling on the ghat and recite the school&apos;s own{' '}
                  <em className="font-serif italic">Godavari stotra</em> written by our first
                  Marathi teacher, the late Shri. Govindrao Kulkarni, in 1982. The rural child
                  of Kopargaon need not become someone else to become someone great.
                </p>

                <p>
                  To the parent reading this, hesitant perhaps about fees, anxious about
                  whether your child will &ldquo;fit in&rdquo; — let me say simply: please walk
                  into my office on any Wednesday between 11 am and 1 pm. No appointment
                  needed. Bring your child. Bring their report card, if they have one. If they
                  don&apos;t, that is all right too. We will sit together, we will drink a cup
                  of tea, and we will talk — not about what your child <em>cannot</em> do, but
                  about what the river, the land, and their own two hands have already taught
                  them that no city school ever could.
                </p>

                <p className="pt-6 border-t border-wheat/50">
                  With folded hands and the banyan tree&apos;s blessing,
                  <br />
                  <span className="font-serif text-2xl text-forest mt-4 block">
                    Dr. (Smt.) Vasundhara K. Patil
                  </span>
                  <span className="text-base text-charcoal-soft/70 mt-1 block tracking-editorial uppercase text-xs">
                    Principal · {schoolData.shortName} · Est. 1978
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's 10-Point Credo */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #B6583C 1.2px, transparent 1.2px), radial-gradient(circle at 80% 60%, #2F5233 1px, transparent 1px)', backgroundSize: '40px 40px, 56px 56px' }} />

        <div className="container-editorial max-w-5xl relative">
          <SectionHeading
            eyebrow="The Principal's Pact"
            title="The Ten-Point Credo"
            accentIndex={2}
            decoratedUnderline
            align="center"
            subtitle="Ten promises I make to every child who enters Sanjivani. Ten promises I ask every teacher, every staff member, and every trustee of this school to keep beside me — every single day."
          />

          <div className="mt-16 grid md:grid-cols-2 gap-x-10 gap-y-6">
            {credoList.map((item, i) => (
              <div
                key={i}
                className="flex gap-5 p-5 bg-ivory border border-wheat/50 card-hover group"
                style={{ boxShadow: '0 1px 2px rgba(31, 41, 36, 0.05)' }}
              >
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center font-serif text-xl font-bold group-hover:bg-terracotta group-hover:text-ivory transition-colors duration-450 ease-cinematic">
                    {i + 1}
                  </div>
                  {i < credoList.length - 1 && (
                    <div className="w-px flex-1 mt-2 bg-gradient-to-b from-terracotta/40 to-transparent" />
                  )}
                </div>
                <p className="flex-1 text-base md:text-lg leading-[1.75] text-charcoal/90 pt-1 font-serifAlt">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 max-w-2xl mx-auto text-center p-8 bg-ivory border-l-4 border-r-4 border-terracotta/60">
            <Scroll className="w-6 h-6 text-terracotta mx-auto mb-4" strokeWidth={1.6} />
            <p className="font-serifAlt text-xl leading-[1.7] text-charcoal italic">
              &ldquo;A contract is only as strong as the person who signs it. I sign this
              credo every morning before the children arrive. If ever I fail to keep a single
              clause, I expect the first person to tell me to be a child of Class IV.&rdquo;
            </p>
            <p className="mt-5 text-xs tracking-editorial uppercase text-sage">
              — Dr. V. K. Patil, Principal&apos;s Diary · 12 June 2023
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Leadership Strip + CTA to Academics */}
      <section id="team" className="py-24 scroll-mt-20">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
            <SectionHeading
              eyebrow="The Core Team"
              title="Meet the Leadership"
              accentIndex={2}
              decoratedUnderline
              subtitle="Between the Principal, the Vice Principal, the Academic Coordinator and our Administrative Head rests the day-to-day care of 2,800+ Sanjivani children — every notebook, every fever, every small victory, every small fear."
            />
            <Link to="/academics" className="shrink-0">
              <Button variant="secondary" size="md" iconRight={<ArrowRight size={14} />}>
                Explore Academics
              </Button>
            </Link>
          </div>

          <CardGrid variant="team" items={leadershipTeam} />

          {/* Bottom editorial CTA strip */}
          <div className="mt-20 grid md:grid-cols-2 gap-8 bg-charcoal text-ivory overflow-hidden" style={{ boxShadow: '0 20px 50px -20px rgba(31, 41, 36, 0.3)' }}>
            <div className="p-10 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-[11px] tracking-editorial uppercase text-wheat mb-5">
                <HeartHandshake size={14} />
                <span>A Partnership between Home & School</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl leading-[1.1]">
                Curriculum is important. But the <em className="italic text-terracotta-soft not-italic">child</em> is everything.
              </h3>
              <p className="mt-6 text-sm md:text-base leading-[1.8] text-ivory/75">
                Walk through any of our four wings — from the play pens of Nursery to the
                focused silence of the Class X library — and you will see the same thing: a
                teacher who knows the name of every child&apos;s grandmother. That is the
                Sanjivani we intend to keep — for forty-seven years more, and beyond.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/academics/pre-primary">
                  <Button variant="primary" size="md" className="!bg-terracotta !text-ivory hover:!bg-terracotta-soft">
                    <Sparkles size={14} />
                    Pre-Primary Wing
                  </Button>
                </Link>
                <Link to="/academics/senior">
                  <Button variant="ghost" size="md" className="!text-ivory/85 hover:!text-ivory !border-wheat/40 hover:!border-wheat">
                    <BookOpenCheck size={14} />
                    Senior Wing · IX & X
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative min-h-[300px] md:min-h-0">
              <img
                src={img('Editorial wide photo — Indian school staff room corridor at golden hour, teachers walking together chatting, warm cream walls, bulletin boards with children drawings, terracotta tiled floor, soft warm afternoon light, no faces clearly visible or logos, Maharashtra rural school Sanjivani aesthetic', 'landscape_16_9')}
                alt="The corridors of Sanjivani at afternoon bell"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 via-charcoal/10 to-transparent md:bg-gradient-to-l md:from-transparent md:via-transparent md:to-charcoal/70" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
