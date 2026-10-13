import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import {
  Search,
  FileText,
  Users,
  MailCheck,
  PartyPopper,
  Download,
  BookOpenCheck,
  Phone,
  Send,
  Calendar,
  Sun,
  IndianRupee,
  Banknote,
  CreditCard,
  Wallet,
  ChevronRight,
  GraduationCap,
} from 'lucide-react'
import HeroCarousel from '@/components/HeroCarousel'
import Breadcrumb from '@/components/Breadcrumb'
import SectionHeading from '@/components/SectionHeading'
import FAQAccordion from '@/components/FAQAccordion'
import Button from '@/components/Button'
import schoolData from '@/data/school.data'
import faqs from '@/data/faqs.data'
import academics from '@/data/academics.data'
import type { FAQItem } from '@/types/school'

const cinematic: [number, number, number, number] = [0.22, 1, 0.36, 1]

const img = (prompt: string, size = 'landscape_16_9') =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`

const admissionHeroSlide = {
  id: 'adm-h1',
  title: 'Admissions 2026-27 Open',
  subtitle: 'Pre-Primary to Class X · Limited seats',
  tagline: 'Apply now · Kopargaon',
  image: img(
    'Cinematic 16:9 editorial banner, close-up of a young student in school uniform holding a book with folded hands, warm morning classroom light, bokeh of chalkboard behind, no logos, peaceful and hopeful tone, Indian school admissions season, Maharashtra rural aesthetic',
  ),
  ctaLabel: 'Begin your journey',
  ctaHref: '#register',
}

const subNavItems = [
  { id: 'process', label: 'Process', href: '#process' },
  { id: 'eligibility', label: 'Eligibility', href: '#eligibility' },
  { id: 'fee', label: 'Fee', href: '#fee' },
  { id: 'handbook', label: 'Handbook', href: '#handbook' },
  { id: 'faqs', label: 'FAQs', href: '#faqs' },
  { id: 'session', label: 'Session Info', href: '#session' },
  { id: 'register', label: 'Register', href: '#register' },
]

const processSteps = [
  {
    id: 'step1',
    step: 1,
    title: 'Inquiry & Prospectus',
    description:
      'Register your interest by visiting our Contact page, calling the admission desk, or dropping by the campus in-person between 9 am–1 pm on working days. Collect our printed prospectus and take a guided walk around the Sanjivani campus.',
    icon: Search,
    cta: 'Start inquiry',
    ctaHref: '/contact',
  },
  {
    id: 'step2',
    step: 2,
    title: 'Documentation & Form Fill-up',
    description:
      'Submit the completed registration form along with the required documents: child birth certificate / Aadhaar, parent Aadhaar, previous-year TC (Class I onwards), past marksheet, 4 passport photos, residence proof, and caste certificate (if applicable).',
    icon: FileText,
    cta: 'Download form',
    ctaHref: '#handbook',
  },
  {
    id: 'step3',
    step: 3,
    title: 'Interaction / Diagnostic Assessment',
    description:
      'Pre-Primary children meet our teachers for a gentle informal interaction. Classes I–VIII take a brief diagnostic assessment in English, Maths and first language — purely to understand support needs. Class IX–X require a minimum 60% prior record and TC.',
    icon: Users,
    cta: 'Wing-wise rules',
    ctaHref: '#eligibility',
  },
  {
    id: 'step4',
    step: 4,
    title: 'Offer Letter & Fee Payment',
    description:
      'Selected candidates receive a formal offer letter by post and email within 7 working days. Secure the seat by paying the first instalment within the due date via UPI / NEFT, Cheque / DD, or cash at the counter. Three convenient instalments in June, October and February.',
    icon: MailCheck,
    cta: 'Fee modes',
    ctaHref: '#fee',
  },
  {
    id: 'step5',
    step: 5,
    title: 'Welcome & Orientation Day',
    description:
      'Every new family is invited to a dedicated orientation day the week before school opens. Meet the class teacher, collect books and uniform, tour the labs and library, listen to the Principal, and share a welcome chai with the Sanjivani parent fraternity.',
    icon: PartyPopper,
    cta: 'Session calendar',
    ctaHref: '#session',
  },
]

const publicHolidays = [
  { id: 'ph1', date: '26 Jan', name: 'Republic Day' },
  { id: 'ph2', date: 'Feb', name: 'Maha Shivaratri' },
  { id: 'ph3', date: 'Mar', name: 'Holi / Gudi Padwa' },
  { id: 'ph4', date: 'Apr', name: 'Ram Navami' },
  { id: 'ph5', date: '1 May', name: 'Maharashtra Day' },
  { id: 'ph6', date: 'Jun', name: 'Gurupournima' },
  { id: 'ph7', date: '15 Aug', name: 'Independence Day' },
  { id: 'ph8', date: 'Sep', name: 'Ganesh Chaturthi' },
  { id: 'ph9', date: '2 Oct', name: 'Gandhi Jayanti' },
  { id: 'ph10', date: 'Oct', name: 'Dasara / Vijayadashami' },
  { id: 'ph11', date: 'Nov', name: 'Diwali recess (5 days)' },
  { id: 'ph12', date: '25 Dec', name: 'Christmas' },
]

const CINEMATIC_EASING: [number, number, number, number] = [0.22, 1, 0.36, 1]

function Counter({ value, suffix = '', label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(eased * value))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <div className="flex flex-col items-center text-center">
      <span ref={ref} className="font-serif text-5xl md:text-6xl text-terracotta leading-none">
        {display}
        {suffix}
      </span>
      <span className="mt-3 text-[11px] tracking-editorial uppercase text-charcoal-soft/75 text-center max-w-[140px]">
        {label}
      </span>
    </div>
  )
}

function Admission() {
  const docsFaq = (faqs as FAQItem[]).find((f) => f.id === 'faq2')
  const docsList = docsFaq
    ? docsFaq.answer
        .split(/\(\d+\)/)
        .map((s) => s.trim())
        .filter(Boolean)
        .map((s, i) => ({ id: `d${i}`, text: s.replace(/^\.\s*/, '').trim() }))
    : []

  const wingKeys = ['pre-primary', 'primary', 'middle', 'senior'] as const
  const wingAgeMap: Record<string, { minAge: string; apply: string }> = {
    'pre-primary': { minAge: 'Nursery 3+ · Jr KG 4+ · Sr KG 5+ yrs (Jun 1)', apply: '/contact' },
    primary: { minAge: 'Class I 6+ yrs · Class V 10+ yrs (Jun 1)', apply: '/contact' },
    middle: { minAge: 'Class VI 11+ yrs · Class VIII 13+ yrs (Jun 1)', apply: '/contact' },
    senior: { minAge: 'Class IX 14+ yrs · Class X 15+ yrs (Jun 1)', apply: '/contact' },
  }

  return (
    <div className="bg-ivory">
      {/* 1 Hero */}
      <HeroCarousel slides={[admissionHeroSlide]} intervalMs={99999999} />

      {/* 2 Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Admission', href: '/admission' },
        ]}
      />

      {/* 3 Sticky side sub-navigation + content wrapper */}
      <div className="relative">
        {/* Mobile top stacked nav */}
        <div className="lg:hidden sticky top-14 z-30 bg-ivory/95 backdrop-blur-md border-b border-wheat/50">
          <div className="container-editorial py-4 overflow-x-auto -mx-5 px-5">
            <nav className="flex items-center gap-2 md:gap-3 min-w-max">
              {subNavItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="shrink-0 chip hover:border-terracotta hover:text-terracotta transition-colors duration-300 ease-cinematic"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="container-editorial py-12 lg:py-20 grid grid-cols-12 gap-8 lg:gap-12">
          {/* Desktop sticky left column */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <div className="bg-cream border border-wheat/60 p-6 shadow-soft">
                <p className="text-[10px] tracking-editorial uppercase text-terracotta mb-4">
                  On this page
                </p>
                <nav className="flex flex-col">
                  {subNavItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      className="group flex items-center justify-between py-2.5 border-b border-wheat/40 last:border-b-0 text-sm text-charcoal-soft hover:text-forest transition-colors duration-300 ease-cinematic"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-wheat group-hover:bg-terracotta transition-colors duration-300 ease-cinematic" />
                        {item.label}
                      </span>
                      <ChevronRight
                        size={14}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-cinematic"
                      />
                    </a>
                  ))}
                </nav>
                <div className="mt-6 pt-5 border-t border-wheat/60 space-y-2">
                  <p className="text-[10px] tracking-editorial uppercase text-charcoal-soft/60">
                    Admission desk
                  </p>
                  <a
                    href={`tel:${schoolData.phones.admission?.replace(/\s+/g, '') ?? ''}`}
                    className="block text-sm text-terracotta hover:text-forest transition-colors"
                  >
                    {schoolData.phones.admission}
                  </a>
                  <a
                    href={`mailto:${schoolData.emails.admission ?? ''}`}
                    className="block text-xs text-charcoal-soft/80 hover:text-forest transition-colors break-all"
                  >
                    {schoolData.emails.admission}
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content column */}
          <div className="col-span-12 lg:col-span-9 space-y-24 lg:space-y-32">
            {/* 4 Admission Process */}
            <section id="process" className="scroll-mt-24">
              <SectionHeading
                eyebrow="Step by step"
                title="Admission Process"
                accentIndex={1}
                decoratedUnderline
                subtitle="A calm, transparent, five-step journey — no rush, no surprises. We take every family through each stage personally, and the admission desk is always one phone call away."
              />

              {/* 5-step counter strip */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: CINEMATIC_EASING }}
                className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-8 py-10 bg-cream border-y border-wheat/60 -mx-5 px-5 sm:-mx-8 sm:px-8 lg:-mx-0 lg:px-0 lg:border lg:rounded-sm lg:shadow-soft"
              >
                <Counter value={1} label="Inquiry & Prospectus" />
                <Counter value={2} label="Docs & Form" />
                <Counter value={3} label="Interaction / Assessment" />
                <Counter value={4} label="Offer & Fee" />
                <Counter value={5} label="Welcome Day" />
              </motion.div>

              {/* Timeline */}
              <div className="mt-20 relative">
                <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-wheat/80 hidden md:block" />
                <div className="space-y-12 md:space-y-16">
                  {processSteps.map((step, idx) => {
                    const Icon = step.icon
                    const isRight = idx % 2 === 1
                    return (
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.7, delay: idx * 0.08, ease: cinematic }}
                        className={`relative md:grid md:grid-cols-2 md:gap-12 items-start ${
                          isRight ? 'md:[&>*:first-child]:order-2' : ''
                        }`}
                      >
                        {/* Mobile marker */}
                        <div className="md:hidden flex items-center gap-4 mb-4">
                          <div className="relative z-10 w-11 h-11 rounded-full bg-terracotta text-ivory flex items-center justify-center shadow-soft">
                            <Icon size={20} strokeWidth={1.8} />
                          </div>
                          <p className="text-[11px] tracking-editorial uppercase text-terracotta font-semibold">
                            Step {step.step}
                          </p>
                        </div>

                        {/* Content side */}
                        <div
                          className={`md:pl-0 md:pb-2 ${
                            isRight ? 'md:pl-14 md:text-left' : 'md:pr-14 md:text-right'
                          }`}
                        >
                          <div
                            className={`hidden md:flex items-center gap-3 mb-4 ${
                              isRight ? '' : 'md:justify-end'
                            }`}
                          >
                            <p className="text-[11px] tracking-editorial uppercase text-terracotta font-semibold">
                              Step {step.step}
                            </p>
                          </div>
                          <h3 className="font-serif text-2xl md:text-3xl text-charcoal leading-snug">
                            {step.title}
                          </h3>
                          <p className="mt-4 text-[15px] leading-relaxed text-charcoal-soft/90">
                            {step.description}
                          </p>
                          {step.step === 2 && docsList.length > 0 && (
                            <ul
                              className={`mt-5 space-y-2 text-sm text-charcoal-soft md:max-w-md ${
                                isRight ? '' : 'md:ml-auto'
                              }`}
                            >
                              {docsList.map((d) => (
                                <li key={d.id} className="flex items-start gap-2">
                                  <ChevronRight
                                    size={14}
                                    className="mt-1 text-terracotta shrink-0"
                                  />
                                  <span>{d.text}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          <div
                            className={`mt-6 ${
                              isRight ? '' : 'md:flex md:justify-end'
                            }`}
                          >
                            <Link
                              to={step.ctaHref}
                              className="btn-ghost !text-xs"
                            >
                              {step.cta}
                              <ChevronRight size={14} />
                            </Link>
                          </div>
                        </div>

                        {/* Icon side */}
                        <div
                          className={`hidden md:flex ${
                            isRight
                              ? 'justify-end pr-14 relative'
                              : 'justify-start pl-14 relative'
                          }`}
                        >
                          {/* Timeline dot */}
                          <div className="absolute top-3 md:left-1/2 md:-translate-x-1/2">
                            <div className="relative flex items-center justify-center">
                              <div className="absolute w-6 h-6 rounded-full bg-terracotta/20 animate-ping" />
                              <div className="relative z-10 w-11 h-11 rounded-full bg-terracotta text-ivory flex items-center justify-center shadow-soft border-[3px] border-ivory">
                                <Icon size={20} strokeWidth={1.8} />
                              </div>
                            </div>
                          </div>
                          {/* Decorative card */}
                          <div
                            className={`bg-cream border border-wheat/60 p-8 w-full max-w-xs h-[180px] flex items-center justify-center relative overflow-hidden rounded-sm ${
                              isRight ? '' : 'order-2'
                            }`}
                          >
                            <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-wheat/30 blur-2xl" />
                            <div className="absolute -left-6 -bottom-6 w-24 h-24 rounded-full bg-terracotta/10 blur-2xl" />
                            <div className="relative text-center">
                              <div className="inline-flex w-14 h-14 rounded-full bg-ivory border border-wheat items-center justify-center mb-3">
                                <span className="font-serif text-3xl text-forest italic">
                                  {step.step}
                                </span>
                              </div>
                              <p className="font-serif text-sm text-charcoal-soft italic">
                                {step.step === 1 && 'Say hello — we are waiting'}
                                {step.step === 2 && 'Bring the paperwork'}
                                {step.step === 3 && 'Meet the teachers'}
                                {step.step === 4 && 'Secure the seat'}
                                {step.step === 5 && 'Welcome to the family'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </section>

            {/* 5 Eligibility & Age Criteria */}
            <section id="eligibility" className="scroll-mt-24">
              <SectionHeading
                eyebrow="Wing-wise criteria"
                title="Eligibility & Age Criteria"
                accentIndex={-2}
                decoratedUnderline
                subtitle="Age calculated as on June 1 of the academic year 2026–27. Age-proof document (Aadhaar / birth certificate) is required at verification for every child."
              />

              <div className="mt-12 overflow-x-auto border border-wheat/60 shadow-soft bg-ivory rounded-sm">
                <table className="w-full min-w-[720px] border-collapse">
                  <thead>
                    <tr className="bg-forest text-ivory">
                      <th className="text-left px-5 py-4 text-[11px] tracking-editorial uppercase font-medium w-[18%]">
                        Wing
                      </th>
                      <th className="text-left px-5 py-4 text-[11px] tracking-editorial uppercase font-medium w-[20%]">
                        Grades
                      </th>
                      <th className="text-left px-5 py-4 text-[11px] tracking-editorial uppercase font-medium w-[28%]">
                        Minimum Age (Jun 1, 2026)
                      </th>
                      <th className="text-left px-5 py-4 text-[11px] tracking-editorial uppercase font-medium w-[20%]">
                        Key Documents
                      </th>
                      <th className="text-right px-5 py-4 text-[11px] tracking-editorial uppercase font-medium w-[14%]">
                        Apply
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {wingKeys.map((key, idx) => {
                      const wing = academics.wings[key]
                      const meta = wingAgeMap[key]
                      return (
                        <tr
                          key={key}
                          className={`border-b border-wheat/50 last:border-b-0 ${
                            idx % 2 === 1 ? 'bg-cream/70' : 'bg-ivory'
                          } hover:bg-wheat/20 transition-colors duration-300 ease-cinematic`}
                        >
                          <td className="px-5 py-5">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-wheat/50 flex items-center justify-center text-forest">
                                <GraduationCap size={18} strokeWidth={1.8} />
                              </div>
                              <div>
                                <p className="font-serif text-lg text-charcoal leading-tight">
                                  {wing.name}
                                </p>
                                <p className="text-[10px] tracking-editorial uppercase text-terracotta mt-0.5">
                                  {wing.ageRange}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 font-serifAlt text-base text-charcoal-soft italic">
                            {wing.grades}
                          </td>
                          <td className="px-5 py-5 text-sm text-charcoal-soft leading-relaxed">
                            {meta.minAge}
                          </td>
                          <td className="px-5 py-5">
                            <ul className="space-y-1.5 text-xs text-charcoal-soft">
                              <li className="flex items-start gap-1.5">
                                <span className="mt-1 w-1 h-1 rounded-full bg-terracotta shrink-0" />
                                Birth cert. / Aadhaar
                              </li>
                              <li className="flex items-start gap-1.5">
                                <span className="mt-1 w-1 h-1 rounded-full bg-terracotta shrink-0" />
                                TC (Class I+)
                              </li>
                              <li className="flex items-start gap-1.5">
                                <span className="mt-1 w-1 h-1 rounded-full bg-terracotta shrink-0" />
                                Previous marksheet
                              </li>
                            </ul>
                          </td>
                          <td className="px-5 py-5 text-right">
                            <Link to={meta.apply} className="btn-secondary !py-2 !px-4 !text-[10px]">
                              Apply
                              <ChevronRight size={12} />
                            </Link>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>

              <p className="mt-5 text-xs text-charcoal-soft/70 italic">
                For reserved-category candidates applying under Government of Maharashtra norms,
                please carry the original caste / validity certificate along with a self-attested
                photocopy. Age relaxations apply as per government rules.
              </p>
            </section>

            {/* 6 Fee Structure */}
            <section id="fee" className="scroll-mt-24">
              <SectionHeading
                eyebrow="Tuition & Charges"
                title="Fee Structure"
                accentIndex={0}
                decoratedUnderline
                subtitle="A transparent, three-instalment plan aligned with the agricultural income cycles of our parent community. Full printed schedule with wing-wise breakup is provided with the prospectus."
              />

              {/* Disclaimer banner */}
              <div className="mt-12 bg-gradient-to-r from-terracotta/10 via-wheat/40 to-forest/10 border border-terracotta/30 p-6 md:p-8 rounded-sm">
                <div className="flex flex-col md:flex-row md:items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-terracotta/15 border border-terracotta/40 flex items-center justify-center text-terracotta shrink-0">
                    <IndianRupee size={22} strokeWidth={1.8} />
                  </div>
                  <div className="flex-1">
                    <p className="font-serif text-xl text-charcoal leading-snug">
                      Fee structure is available on personal enquiry at the admission desk or by
                      calling {schoolData.phones.primary}.
                    </p>
                    <p className="mt-2 text-sm text-charcoal-soft/85 leading-relaxed">
                      A detailed prospectus with fee schedule will be emailed on request.
                      Pay in 3 instalments — June · October · February.
                    </p>
                  </div>
                </div>
              </div>

              {/* Breakdown table */}
              <div className="mt-10 overflow-x-auto border border-wheat/60 shadow-soft bg-ivory rounded-sm">
                <table className="w-full min-w-[640px] border-collapse">
                  <thead>
                    <tr className="bg-ivory-deep border-b border-wheat/70">
                      <th className="text-left px-5 py-4 text-[11px] tracking-editorial uppercase text-forest font-semibold">
                        Wing-wise Breakdown
                      </th>
                      <th className="text-right px-5 py-4 text-[11px] tracking-editorial uppercase text-forest font-semibold">
                        Tuition (annual)
                      </th>
                      <th className="text-right px-5 py-4 text-[11px] tracking-editorial uppercase text-forest font-semibold">
                        Transport (optional)
                      </th>
                      <th className="text-right px-5 py-4 text-[11px] tracking-editorial uppercase text-forest font-semibold">
                        Misc (books / uniform / labs)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {wingKeys.map((key, idx) => {
                      const wing = academics.wings[key]
                      return (
                        <tr
                          key={key}
                          className={`border-b border-wheat/40 last:border-b-0 ${
                            idx % 2 === 1 ? 'bg-cream/50' : ''
                          }`}
                        >
                          <td className="px-5 py-4">
                            <p className="font-serif text-base text-charcoal">{wing.name}</p>
                            <p className="text-[11px] tracking-editorial uppercase text-charcoal-soft/60 mt-0.5">
                              {wing.grades}
                            </p>
                          </td>
                          <td className="px-5 py-4 text-right font-serif text-lg text-charcoal">
                            —
                          </td>
                          <td className="px-5 py-4 text-right font-serif text-lg text-charcoal">
                            —
                          </td>
                          <td className="px-5 py-4 text-right font-serif text-lg text-charcoal">
                            —
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>

              {/* Payment modes */}
              <div className="mt-10 grid md:grid-cols-3 gap-5">
                {[
                  {
                    icon: Wallet,
                    title: 'UPI / NEFT',
                    subtitle: 'Digital bank transfer',
                    desc:
                      'Pay directly to the Sanjivani Education Trust account. UPI QR displayed at the admission desk. NEFT beneficiary details shared in the offer letter email.',
                  },
                  {
                    icon: CreditCard,
                    title: 'Cheque / DD',
                    subtitle: 'Crossed account-payee only',
                    desc:
                      'Draw in favour of "SANJIVANI EDUCATION, AGRICULTURAL AND RURAL DEVELOPMENT TRUST", payable at Kopargaon. Please write the child\u2019s full name & class on the back.',
                  },
                  {
                    icon: Banknote,
                    title: 'Cash at Counter',
                    subtitle: 'Working days · 9 am – 1 pm',
                    desc:
                      'Pay in person at the administrative office counter. A machine-printed receipt with a hologram stamp is issued immediately — please preserve all three instalment receipts.',
                  },
                ].map((m, idx) => {
                  const Icon = m.icon
                  return (
                    <motion.div
                      key={m.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.6, delay: idx * 0.1, ease: cinematic }}
                      className="bg-ivory border border-wheat/60 p-6 card-hover rounded-sm"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-11 h-11 rounded-full bg-forest/10 text-forest flex items-center justify-center">
                          <Icon size={20} strokeWidth={1.8} />
                        </div>
                        <div>
                          <p className="font-serif text-lg text-charcoal leading-tight">
                            {m.title}
                          </p>
                          <p className="text-[10px] tracking-editorial uppercase text-terracotta mt-0.5">
                            {m.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-charcoal-soft/90 leading-relaxed">{m.desc}</p>
                    </motion.div>
                  )
                })}
              </div>

              <p className="mt-6 text-xs text-charcoal-soft/70 italic">
                Merit-cum-means scholarships under the Sanjivani Vidyanidhi scheme are available
                for eligible students from Kopargaon taluka rural agricultural families — please
                enquire at the admission desk at the time of form submission.
              </p>
            </section>

            {/* 7 Admission Handbook */}
            <section id="handbook" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: cinematic }}
                className="relative overflow-hidden bg-gradient-to-br from-charcoal via-charcoal-soft to-forest-deep text-ivory p-8 md:p-14 rounded-sm shadow-editorial"
              >
                <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-terracotta/20 blur-3xl" />
                <div className="absolute -bottom-24 -left-16 w-96 h-96 rounded-full bg-forest/30 blur-3xl" />

                <div className="relative grid md:grid-cols-5 gap-10 items-center">
                  <div className="md:col-span-3">
                    <p className="text-[11px] tracking-editorial uppercase text-wheat mb-4">
                      Prospectus & Handbook
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">
                      The Sanjivani <em className="italic text-terracotta-soft">Admission Handbook</em>
                    </h2>
                    <p className="mt-6 text-base md:text-lg text-ivory/85 leading-relaxed max-w-xl font-serifAlt">
                      A 44-page printed guide to our curriculum, campus rules, uniform code,
                      transport routes, parent committee, fee schedule, academic calendar and the
                      complete Sanjivani parent-staff code of conduct — delivered to every
                      registered family by post, and available as a PDF download.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button
                        variant="primary"
                        size="lg"
                        iconLeft={<Download size={16} />}
                        onClick={() => {
                          if (schoolData.phones.admission) {
                            window.location.href = `tel:${schoolData.phones.admission.replace(/\s+/g, '')}`
                          }
                        }}
                        className="!bg-terracotta hover:!bg-terracotta-soft !text-ivory border-0"
                      >
                        Download Handbook PDF
                      </Button>
                      <Button
                        variant="secondary"
                        size="lg"
                        iconLeft={<BookOpenCheck size={16} />}
                        onClick={() => {
                          const email = schoolData.emails.admission ?? ''
                          const subject = encodeURIComponent('Request for printed Admission Handbook')
                          const body = encodeURIComponent(
                            'Respected Admission Team,\n\nI would like to request a printed copy of the Sanjivani Admission Handbook to be sent to my postal address.\n\nParent Name:\nChild Name & Class applied for:\nFull Postal Address:\nContact Number:\n\nThank you.',
                          )
                          window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
                        }}
                      >
                        Request a printed copy
                      </Button>
                    </div>
                    <p className="mt-6 text-xs text-ivory/60">
                      Or call our admission desk directly at{' '}
                      <a
                        href={`tel:${schoolData.phones.admission?.replace(/\s+/g, '') ?? ''}`}
                        className="text-terracotta-soft hover:underline"
                      >
                        {schoolData.phones.admission}
                      </a>{' '}
                      — a team member will be happy to assist.
                    </p>
                  </div>
                  <div className="md:col-span-2 hidden md:flex justify-center">
                    <div className="relative w-full max-w-[280px] aspect-[3/4] bg-ivory/5 border border-ivory/20 rounded-sm shadow-editorial rotate-2 overflow-hidden">
                      <div className="absolute inset-0 p-6 flex flex-col">
                        <div className="flex items-center gap-2 mb-8">
                          <div className="w-8 h-8 rounded-sm bg-ivory/15 flex items-center justify-center font-serif italic text-ivory">
                            S
                          </div>
                          <span className="text-[10px] tracking-editorial uppercase text-wheat">
                            Sanjivani · Est. 1978
                          </span>
                        </div>
                        <p className="font-serif text-3xl leading-tight text-ivory">
                          Admission
                          <br />
                          <em className="italic text-terracotta-soft">Handbook</em>
                          <br />
                          2026–27
                        </p>
                        <div className="mt-8 space-y-3">
                          {['Curriculum', 'Campus Rules', 'Fee Schedule', 'Calendar', 'Parent Code'].map(
                            (l) => (
                              <div
                                key={l}
                                className="flex items-center gap-2 text-xs text-ivory/70"
                              >
                                <span className="w-12 h-px bg-ivory/30" />
                                <span>{l}</span>
                              </div>
                            ),
                          )}
                        </div>
                        <div className="mt-auto flex items-center justify-between text-[10px] tracking-editorial uppercase text-ivory/40">
                          <span>44 pages</span>
                          <span>English / Marathi</span>
                        </div>
                      </div>
                      <div className="absolute top-6 right-6 w-16 h-16 rounded-full border border-terracotta-soft/40 rotate-12 flex items-center justify-center">
                        <span className="text-[8px] tracking-editorial uppercase text-terracotta-soft text-center leading-tight">
                          SEMS
                          <br />
                          2026-27
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* 8 FAQs */}
            <section id="faqs" className="scroll-mt-24">
              <div className="flex flex-col items-center text-center">
                <SectionHeading
                  eyebrow="Questions we hear often"
                  title="Frequently Asked Questions"
                  accentIndex={-1}
                  subtitle="Everything a new family wants to know — about admissions, academics, campus life, safety, transport and mid-day meals. Grouped by topic for easy reading."
                  align="center"
                  decoratedUnderline
                />
              </div>
              <div className="mt-14">
                <FAQAccordion items={faqs as FAQItem[]} defaultOpenId="faq1" />
              </div>
            </section>

            {/* 9 Session Info & Academic Calendar */}
            <section id="session" className="scroll-mt-24">
              <SectionHeading
                eyebrow="Dates & Calendar"
                title="Session Info & Academic Calendar"
                accentIndex={-2}
                decoratedUnderline
                subtitle="Three terms, mid-June through the first week of April — aligned with the Maharashtra State Board calendar and the rhythms of Kopargaon taluka."
              />

              <div className="mt-12 grid md:grid-cols-5 gap-6 md:gap-8">
                {/* Academic Year card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: cinematic }}
                  className="md:col-span-3 bg-gradient-to-br from-forest to-forest-deep text-ivory p-8 md:p-10 rounded-sm shadow-editorial overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-wheat/10 blur-3xl" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-ivory/10 border border-ivory/20 flex items-center justify-center">
                        <Calendar size={22} strokeWidth={1.8} />
                      </div>
                      <div>
                        <p className="text-[11px] tracking-editorial uppercase text-wheat">
                          Session 2026–27
                        </p>
                        <h3 className="font-serif text-2xl text-ivory leading-tight">
                          Academic Year Timeline
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-5 mt-6">
                      {[
                        { label: 'School Reopens', value: 'Mid June, 2026', note: 'Orientation week for new families' },
                        { label: 'Term I', value: 'Jun – Sep 2026', note: 'Unit test · 1st Parent-Teacher Meet' },
                        { label: 'Diwali Recess', value: 'Oct – Nov 2026', note: 'Term II begins post-recess' },
                        { label: 'Term II', value: 'Nov – Feb 2027', note: 'Half-yearly exams · Annual Sports Day' },
                        { label: 'Final Exams', value: 'Mar 2027', note: 'Board exams Class X in Mar–Apr' },
                        { label: 'Academic Year Closes', value: '1st week Apr 2027', note: 'Prize Distribution · Summer vacation' },
                      ].map((item, idx) => (
                        <div
                          key={item.label}
                          className={`grid grid-cols-12 gap-4 items-start pb-5 ${
                            idx !== 5 ? 'border-b border-ivory/10' : ''
                          }`}
                        >
                          <div className="col-span-4 md:col-span-3">
                            <p className="text-[10px] tracking-editorial uppercase text-terracotta-soft">
                              {item.label}
                            </p>
                          </div>
                          <div className="col-span-8 md:col-span-5">
                            <p className="font-serif text-lg text-ivory leading-tight">
                              {item.value}
                            </p>
                          </div>
                          <div className="col-span-12 md:col-span-4">
                            <p className="text-sm text-ivory/70 italic font-serifAlt leading-snug">
                              {item.note}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-ivory/15 flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-ivory/80">
                      <span className="w-2 h-2 rounded-full bg-terracotta-soft shrink-0 animate-pulse" />
                      <p>
                        School hours · Pre-Primary 8.30–12.30 · Primary 8.15–1.45 · Middle &amp;
                        Senior 8.00–2.30 pm
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Public Holidays card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: cinematic }}
                  className="md:col-span-2 bg-ivory border border-wheat/60 p-8 rounded-sm shadow-soft"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta">
                      <Sun size={18} strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-editorial uppercase text-terracotta">
                        Tentative list
                      </p>
                      <h3 className="font-serif text-xl text-charcoal leading-tight">
                        Public Holidays
                      </h3>
                    </div>
                  </div>

                  <ul className="space-y-3 max-h-[540px] overflow-y-auto pr-2 -mr-2">
                    {publicHolidays.map((h, idx) => (
                      <li
                        key={h.id}
                        className={`flex items-center justify-between py-2.5 ${
                          idx !== publicHolidays.length - 1 ? 'border-b border-wheat/40' : ''
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="w-1 h-1 rounded-full bg-forest shrink-0" />
                          <span className="text-sm text-charcoal leading-tight">{h.name}</span>
                        </div>
                        <span className="text-[11px] tracking-editorial uppercase text-terracotta font-semibold shrink-0 ml-3">
                          {h.date}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-5 border-t border-wheat/60">
                    <p className="text-xs text-charcoal-soft/80 italic leading-relaxed">
                      Full printed calendar issued on the first day of school to every student —
                      including exam schedules, PTM dates, club activities, Seva drives and
                      cultural-function timings.
                    </p>
                  </div>
                </motion.div>
              </div>

              <p className="mt-6 text-xs text-charcoal-soft/70 italic">
                Note: Dates are tentative and subject to final approval by the Maharashtra State
                Board / school management. Any updates will be communicated by SMS, class WhatsApp
                group and the school notice board.
              </p>
            </section>

            {/* 10 Enquire & Register */}
            <section id="register" className="scroll-mt-24 pb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: cinematic }}
                className="relative overflow-hidden rounded-sm"
              >
                <div className="absolute inset-0">
                  <img
                    src={img(
                      'Cinematic wide editorial, welcome banner of Indian school entrance gate with marigold garlands, children walking in with parents, warm morning sunlight, terracotta and forest tones, no logos, 16:9, Maharashtra rural school atmosphere',
                    )}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-charcoal/80 to-forest-deep/85" />
                </div>

                <div className="relative py-16 md:py-24 px-6 md:px-14 text-center text-ivory">
                  <p className="text-[11px] tracking-editorial uppercase text-wheat mb-4">
                    Ready to start the journey
                  </p>
                  <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-3xl mx-auto">
                    Enquire &amp; <em className="italic text-terracotta-soft">Register</em> Today
                  </h2>
                  <p className="mt-6 text-base md:text-lg text-ivory/85 leading-relaxed max-w-2xl mx-auto font-serifAlt">
                    Limited seats across every wing for the 2026–27 academic year. Reach out to our
                    admission team today — we reply to every inquiry within one working day.
                  </p>

                  <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5">
                    <Link
                      to="/contact"
                      className="btn-primary !bg-terracotta hover:!bg-terracotta-soft !text-ivory !px-8 !py-4 !text-base w-full sm:w-auto justify-center"
                    >
                      <Send size={18} />
                      Start Enquiry
                      <ChevronRight size={16} />
                    </Link>
                    <a
                      href={`tel:${schoolData.phones.admission?.replace(/\s+/g, '') ?? ''}`}
                      className="btn-secondary !border-ivory/60 !text-ivory hover:!bg-ivory hover:!text-forest !px-8 !py-4 !text-base w-full sm:w-auto justify-center"
                    >
                      <Phone size={18} />
                      Call Admission Desk
                    </a>
                  </div>

                  <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <a
                      href={`tel:${schoolData.phones.primary.replace(/\s+/g, '')}`}
                      className="group bg-ivory/5 border border-ivory/15 backdrop-blur-sm p-5 rounded-sm hover:bg-ivory/10 hover:border-ivory/30 transition-all duration-450 ease-cinematic text-left"
                    >
                      <p className="text-[10px] tracking-editorial uppercase text-wheat mb-2">
                        Primary
                      </p>
                      <p className="font-serif text-xl text-ivory leading-tight group-hover:text-terracotta-soft transition-colors">
                        {schoolData.phones.primary}
                      </p>
                      <p className="text-xs text-ivory/60 mt-1">
                        General &amp; administration enquiries
                      </p>
                    </a>
                    <a
                      href={`tel:${schoolData.phones.admission?.replace(/\s+/g, '') ?? ''}`}
                      className="group bg-ivory/5 border border-ivory/15 backdrop-blur-sm p-5 rounded-sm hover:bg-ivory/10 hover:border-ivory/30 transition-all duration-450 ease-cinematic text-left"
                    >
                      <p className="text-[10px] tracking-editorial uppercase text-wheat mb-2">
                        Admission Desk
                      </p>
                      <p className="font-serif text-xl text-ivory leading-tight group-hover:text-terracotta-soft transition-colors">
                        {schoolData.phones.admission}
                      </p>
                      <p className="text-xs text-ivory/60 mt-1">
                        Forms, prospectus, seat status
                      </p>
                    </a>
                    <a
                      href={`mailto:${schoolData.emails.admission ?? ''}`}
                      className="group bg-ivory/5 border border-ivory/15 backdrop-blur-sm p-5 rounded-sm hover:bg-ivory/10 hover:border-ivory/30 transition-all duration-450 ease-cinematic text-left sm:col-span-2 md:col-span-1"
                    >
                      <p className="text-[10px] tracking-editorial uppercase text-wheat mb-2">
                        Email
                      </p>
                      <p className="font-serif text-lg text-ivory leading-tight group-hover:text-terracotta-soft transition-colors break-all">
                        {schoolData.emails.admission}
                      </p>
                      <p className="text-xs text-ivory/60 mt-1">
                        Handbook, documents, appointments
                      </p>
                    </a>
                  </div>

                  <p className="mt-10 text-[11px] tracking-editorial uppercase text-ivory/50">
                    Sanjivani English Medium School · Kopargaon · Maharashtra · Est. 1978
                  </p>
                </div>
              </motion.div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admission
