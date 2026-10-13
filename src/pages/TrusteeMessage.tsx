import { Link } from 'react-router-dom'
import { ArrowRight, Scroll } from 'lucide-react'
import HeroCarousel from '@/components/HeroCarousel'
import Breadcrumb from '@/components/Breadcrumb'
import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/Button'
import type { HeroSlide, BreadcrumbItem } from '@/types/school'
import schoolData from '@/data/school.data'
import team from '@/data/team.data'

const trustee = team.find((m) => m.id === 'tm0')!

const heroSlides: HeroSlide[] = [
  {
    id: 'tm-h1',
    title: "Managing Trustee's Message",
    subtitle: 'A letter from Hon. Mrs. Renukatai Vivekbhaiya Kolhe Ma\u2019am.',
    tagline: `${schoolData.shortName} \u00b7 A Message from the Mentor`,
    image: schoolData.heroSlides[5].image,
  },
]

const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: "Managing Trustee's Message", href: '/trustee-message' },
]

export default function TrusteeMessage() {
  const paragraphs = trustee.messageBody?.split('\n\n') ?? []
  const signatureLines = trustee.messageSignature?.split('\n') ?? []

  return (
    <div className="bg-ivory min-h-screen">
      <HeroCarousel slides={heroSlides} />
      <Breadcrumb items={breadcrumbItems} />

      {/* Portrait + Long-form Message */}
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
                    src={trustee.portrait}
                    alt={trustee.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="mt-6">
                  {trustee.qualifications && (
                    <div className="flex items-center gap-2 mb-3">
                      <span className="chip">
                        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-terracotta animate-pulse" />
                        {trustee.qualifications}
                      </span>
                    </div>
                  )}
                  <h3 className="font-serif text-2xl text-charcoal leading-tight">
                    {trustee.name}
                  </h3>
                  <p className="mt-1 text-base font-medium text-terracotta">{trustee.role}</p>
                </figcaption>
              </figure>

              <aside className="mt-10 p-6 bg-cream border-l-4 border-terracotta">
                <p className="font-serifAlt text-xl italic leading-[1.6] text-charcoal">
                  &ldquo;{trustee.messageTagline ?? trustee.quote}&rdquo;
                </p>
              </aside>
            </div>

            <div className="md:col-span-7">
              <SectionHeading
                eyebrow="From the Managing Trustee's Desk"
                title="Dear Parents, Students, Teachers, and Well-Wishers,"
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

      {/* Leadership link strip */}
      <section className="py-16 bg-cream border-t border-wheat/40">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Scroll className="w-5 h-5 text-terracotta" strokeWidth={1.6} />
              <p className="font-serif text-xl text-charcoal">
                Read a message from our Principal, too.
              </p>
            </div>
            <Link to="/principal-message" className="shrink-0">
              <Button variant="primary" size="md" iconRight={<ArrowRight size={14} />}>
                Principal's Message
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
