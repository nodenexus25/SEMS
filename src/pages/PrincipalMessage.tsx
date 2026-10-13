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

const principal = team.find((m) => m.id === 'tm1')!
const leadershipTeam = team.filter((m) => m.wing === 'Leadership')

const heroSlides: HeroSlide[] = [
  {
    id: 'pm-h1',
    title: "Principal's Message",
    subtitle: 'A letter from Mr. Mohsin B. Shaikh, Principal, Sanjivani English Medium School.',
    tagline: `${schoolData.shortName} \u00b7 A Message from the Desk`,
    image: schoolData.heroSlides[5].image,
  },
]

const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: "Principal's Message", href: '/principal-message' },
]

export default function PrincipalMessage() {
  const paragraphs = principal.messageBody?.split('\n\n') ?? []
  const signatureLines = principal.messageSignature?.split('\n') ?? []

  return (
    <div className="bg-ivory min-h-screen">
      <HeroCarousel slides={heroSlides} />
      <Breadcrumb items={breadcrumbItems} />

      {/* Principal's Portrait + Long-form Message */}
      <section className="py-24">
        <div className="container-editorial max-w-5xl">
          <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="md:col-span-5 md:sticky md:top-28">
              <figure className="relative">
                <div
                  className="aspect-[4/5] overflow-hidden bg-cream border border-wheat/50"
                  style={{ boxShadow: '0 20px 50px -20px rgba(31, 41, 36, 0.22)' }}
                >
                  <img
                    src={principal.portrait}
                    alt={principal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="mt-6">
                  {principal.qualifications && (
                    <div className="flex items-center gap-2 mb-3">
                      <span className="chip">
                        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-terracotta animate-pulse" />
                        {principal.qualifications}
                      </span>
                    </div>
                  )}
                  <h3 className="font-serif text-2xl text-charcoal leading-tight">
                    {principal.name}
                  </h3>
                  <p className="mt-1 text-base font-medium text-terracotta">{principal.role}</p>
                  <p className="mt-3 text-xs tracking-editorial uppercase text-sage">
                    \u00b7 {schoolData.name}
                  </p>
                </figcaption>
              </figure>

              <aside className="mt-10 p-6 bg-cream border-l-4 border-terracotta">
                <p className="font-serifAlt text-xl italic leading-[1.6] text-charcoal">
                  &ldquo;{principal.messageTagline ?? principal.quote}&rdquo;
                </p>
              </aside>
            </div>

            <div className="md:col-span-7">
              <SectionHeading
                eyebrow="From the Principal's Desk"
                title="Dear Parents, Students, and Well-Wishers,"
                accentIndex={5}
                decoratedUnderline
              />

              <div className="mt-10 space-y-6 text-base md:text-[1.05rem] leading-[1.9] text-charcoal/90">
                {paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? 'first-letter:float-left first-letter:mr-2.5 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.85] first-letter:text-terracotta first-letter:font-bold'
                        : ''
                    }
                  >
                    {para}
                  </p>
                ))}

                <p className="pt-6 border-t border-wheat/50">
                  With best wishes for a successful and enriching educational journey.
                  <br />
                  Warm regards,
                  <br />
                  {signatureLines.map((line, i) => (
                    <span
                      key={i}
                      className={
                        i === 0
                          ? 'font-serif text-2xl text-forest mt-4 block'
                          : 'text-charcoal-soft/70 mt-1 block tracking-editorial uppercase text-xs'
                      }
                    >
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing motto */}
      <section className="py-20 bg-cream border-t border-b border-wheat/40">
        <div className="container-editorial max-w-3xl text-center">
          <Scroll className="w-6 h-6 text-terracotta mx-auto mb-4" strokeWidth={1.6} />
          <p className="font-serif text-2xl md:text-3xl leading-[1.5] text-charcoal italic">
            &ldquo;Nurturing Potential, Inspiring Excellence, Transforming Lives.&rdquo;
          </p>
          <p className="mt-4 text-xs tracking-editorial uppercase text-sage">
            \u2014 {schoolData.shortName} motto
          </p>
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
              subtitle="Between the Managing Trustee, the Principal, the Vice Principal, the Academic Coordinator and our Administrative Head rests the day-to-day care of every Sanjivani child \u2014 every notebook, every fever, every small victory, every small fear."
            />
            <Link to="/academics" className="shrink-0">
              <Button variant="secondary" size="md" iconRight={<ArrowRight size={14} />}>
                Explore Academics
              </Button>
            </Link>
          </div>

          <CardGrid variant="team" items={leadershipTeam} />

          {/* Bottom editorial CTA strip */}
          <div
            className="mt-20 grid md:grid-cols-2 gap-8 bg-charcoal text-ivory overflow-hidden"
            style={{ boxShadow: '0 20px 50px -20px rgba(31, 41, 36, 0.3)' }}
          >
            <div className="p-10 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-[11px] tracking-editorial uppercase text-wheat mb-5">
                <HeartHandshake size={14} />
                <span>A Partnership between Home &amp; School</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl leading-[1.1]">
                Curriculum is important. But the{' '}
                <em className="italic text-terracotta-soft not-italic">child</em> is everything.
              </h3>
              <p className="mt-6 text-sm md:text-base leading-[1.8] text-ivory/75">
                Walk through any of our four wings \u2014 from the play pens of Nursery to the
                focused silence of the Class X library \u2014 and you will see the same thing: a
                teacher who knows the name of every child&apos;s grandmother. That is the
                Sanjivani we intend to keep.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/academics/pre-primary">
                  <Button
                    variant="primary"
                    size="md"
                    className="!bg-terracotta !text-ivory hover:!bg-terracotta-soft"
                  >
                    <Sparkles size={14} />
                    Pre-Primary Wing
                  </Button>
                </Link>
                <Link to="/academics/senior">
                  <Button
                    variant="ghost"
                    size="md"
                    className="!text-ivory/85 hover:!text-ivory !border-wheat/40 hover:!border-wheat"
                  >
                    <BookOpenCheck size={14} />
                    Senior Wing \u00b7 IX &amp; X
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative min-h-[300px] md:min-h-0">
              <img
                src={img(
                  'Editorial wide photo \u2014 Indian school staff room corridor at golden hour, teachers walking together chatting, warm cream walls, bulletin boards with children drawings, terracotta tiled floor, soft warm afternoon light, no faces clearly visible or logos, Maharashtra rural school Sanjivani aesthetic',
                  'landscape_16_9',
                )}
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
