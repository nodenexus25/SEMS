import { useState, useEffect } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Briefcase, ChevronRight, Loader2, CheckCircle2, type LucideIcon } from 'lucide-react'
import HeroCarousel from '@/components/HeroCarousel'
import Breadcrumb from '@/components/Breadcrumb'
import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/Button'
import FAQAccordion from '@/components/FAQAccordion'
import type { HeroSlide, BreadcrumbItem } from '@/types/school'
import schoolData from '@/data/school.data'
import faqs from '@/data/faqs.data'

const img = (prompt: string, size = 'landscape_16_9') =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`

const contactHero: HeroSlide[] = [
  {
    id: 'contact-hero',
    tagline: `${schoolData.shortName} · Kopargaon · Maharashtra`,
    title: `Contact ${schoolData.shortName}.`,
    subtitle: 'Admission desk, campus visits, careers, or a simple hello — we are one call, one email, or one short walk from the Godavari ghat.',
    image: img(
      'Editorial wide hero banner of Indian school campus main entrance gate, terracotta arch, banyan tree, morning sunlight, welcoming stone pathway, warm cinematic light, 16:9, Kopargaon Maharashtra aesthetic, no text overlaid',
      'landscape_16_9',
    ),
  },
]

const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Contact', href: '/contact' },
]

const cinematic: [number, number, number, number] = [0.22, 1, 0.36, 1]

interface FormState {
  name: string
  email: string
  phone: string
  applyingFor: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  applyingFor?: string
  message?: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  applyingFor: '',
  message: '',
}

const APPLYING_OPTIONS = [
  'Pre-Primary',
  'Primary',
  'Middle',
  'Senior',
  'Other',
] as const

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
const PHONE_REGEX = /^\d{10}$/

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim() || values.name.trim().length < 3) {
    errors.name = 'Please enter your full name (minimum 3 characters).'
  }
  if (!values.email.trim() || !EMAIL_REGEX.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.phone.trim() || !PHONE_REGEX.test(values.phone.trim())) {
    errors.phone = 'Phone must be exactly 10 digits (numeric only).'
  }
  if (!values.applyingFor) {
    errors.applyingFor = 'Please select the wing you are applying for.'
  }
  if (!values.message.trim() || values.message.trim().length < 20) {
    errors.message = 'Please tell us a little more (minimum 20 characters).'
  }
  return errors
}

function InfoCard({
  icon: Icon,
  title,
  id,
  children,
}: {
  icon: LucideIcon
  title: string
  id?: string
  children: ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: cinematic }}
      id={id}
      className="bg-ivory border border-wheat/50 p-6 md:p-7 rounded-sm card-hover"
    >
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-full bg-forest/10 text-forest flex items-center justify-center shrink-0">
          <Icon size={20} strokeWidth={1.8} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-serif text-lg text-charcoal leading-snug mb-3">
            {title}
          </h4>
          {children}
        </div>
      </div>
    </motion.div>
  )
}

const fieldLabelBase =
  'block text-[11px] tracking-editorial uppercase text-charcoal-soft mb-2 font-medium'
const fieldInputBase =
  'w-full px-4 py-3.5 text-sm bg-ivory border rounded-sm transition-all duration-300 ease-cinematic focus-visible:outline-none focus:ring-0 placeholder:text-charcoal-soft/40'
const fieldBorderValid = 'border-wheat focus:border-forest/70'
const fieldBorderInvalid = 'border-terracotta/70 focus:border-terracotta'
const errorLabel = 'text-xs text-terracotta mt-2 leading-relaxed'

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    name: false,
    email: false,
    phone: false,
    applyingFor: false,
    message: false,
  })
  const [submitting, setSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (!showSuccess) return
    const t = window.setTimeout(() => setShowSuccess(false), 5000)
    return () => window.clearTimeout(t)
  }, [showSuccess])

  const onChange = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }))
    if (touched[key]) {
      setErrors(validate({ ...form, [key]: value }))
    }
  }

  const onBlur = <K extends keyof FormState>(key: K) => {
    setTouched((t) => ({ ...t, [key]: true }))
    setErrors(validate(form))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const allTouched = { name: true, email: true, phone: true, applyingFor: true, message: true }
    setTouched(allTouched)
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setSubmitting(true)
    window.setTimeout(() => {
      setSubmitting(false)
      setShowSuccess(true)
      setForm(initialForm)
      setTouched({
        name: false,
        email: false,
        phone: false,
        applyingFor: false,
        message: false,
      })
      setErrors({})
    }, 600)
  }

  const generalAndSafetyFaqs = faqs.filter(
    (f) => f.group === 'General' || f.group === 'Safety',
  )

  return (
    <div className="min-h-screen bg-ivory">
      <HeroCarousel slides={contactHero} intervalMs={0} />

      <Breadcrumb items={breadcrumbItems} />

      <section className="py-16 md:py-20 bg-ivory">
        <div className="container-editorial">
          <SectionHeading
            eyebrow={`${schoolData.shortName} · Reach Out`}
            title="Get in touch."
            accentIndex={2}
            subtitle="Whether you are a parent exploring admission, an alumnus dropping a line, or a teacher wanting to join our family — our desk is open Monday to Saturday, 8 am to 4 pm."
            decoratedUnderline
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
            <div className="lg:col-span-2 flex flex-col gap-5">
              <InfoCard icon={MapPin} title="Visit the Campus" id="map">
                <p className="text-sm text-charcoal-soft/85 leading-relaxed whitespace-pre-line">
                  {schoolData.address.line1}
                  {'\n'}
                  {schoolData.address.city}, {schoolData.address.state}
                  {'\n'}
                  {schoolData.address.country} · {schoolData.address.pin}
                </p>
                {schoolData.address.landmark && (
                  <p className="mt-2 text-[12px] italic text-sage font-serifAlt">
                    {schoolData.address.landmark}
                  </p>
                )}
                <div className="mt-5 border border-wheat/50 rounded-sm overflow-hidden bg-cream">
                  <svg
                    viewBox="0 0 600 380"
                    className="w-full h-auto"
                    role="img"
                    aria-label="Map of Kopargaon showing campus location and Godavari river"
                  >
                    <defs>
                      <linearGradient id="landGrad" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#F5F1E8" />
                        <stop offset="100%" stopColor="#EAE3D1" />
                      </linearGradient>
                      <linearGradient id="riverGrad" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#B8D4E8" stopOpacity="0.55" />
                        <stop offset="50%" stopColor="#8FB8D6" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#B8D4E8" stopOpacity="0.55" />
                      </linearGradient>
                      <pattern id="roads" width="34" height="34" patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
                        <path d="M 0 17 L 34 17" stroke="#C9BFA8" strokeWidth="0.6" strokeDasharray="3 4" fill="none" />
                        <path d="M 17 0 L 17 34" stroke="#C9BFA8" strokeWidth="0.6" strokeDasharray="3 4" fill="none" />
                      </pattern>
                    </defs>

                    <rect width="600" height="380" fill="url(#landGrad)" />
                    <rect width="600" height="380" fill="url(#roads)" />

                    <path
                      d="M -10 100 C 80 70, 150 160, 240 145 S 400 110, 490 170 S 610 210, 620 205"
                      fill="none"
                      stroke="url(#riverGrad)"
                      strokeWidth="28"
                      strokeLinecap="round"
                    />
                    <path
                      d="M -10 100 C 80 70, 150 160, 240 145 S 400 110, 490 170 S 610 210, 620 205"
                      fill="none"
                      stroke="#6FA3C8"
                      strokeWidth="1.2"
                      strokeDasharray="4 6"
                      strokeLinecap="round"
                      opacity="0.55"
                    />

                    <g opacity="0.85">
                      <circle cx="90" cy="230" r="22" fill="#D9E2CC" />
                      <circle cx="520" cy="90" r="16" fill="#D9E2CC" />
                      <circle cx="180" cy="310" r="18" fill="#D9E2CC" />
                      <circle cx="440" cy="300" r="20" fill="#D9E2CC" />
                    </g>

                    <g stroke="#C9BFA8" strokeWidth="1" fill="none" opacity="0.75">
                      <line x1="0" y1="245" x2="600" y2="255" />
                      <line x1="300" y1="0" x2="290" y2="380" />
                      <line x1="80" y1="380" x2="180" y2="180" />
                      <line x1="430" y1="380" x2="520" y2="150" />
                      <path d="M 0 330 L 260 290 L 600 340" />
                    </g>

                    <g fontFamily="'Playfair Display', Georgia, serif" fill="#544F43" opacity="0.7">
                      <text x="20" y="32" fontSize="12" fontStyle="italic">Godavari River</text>
                      <text x="380" y="360" fontSize="11" fontStyle="italic" opacity="0.6">
                        Kopargaon · Maharashtra
                      </text>
                      <text x="14" y="250" fontSize="10" opacity="0.55">Shirdi Rd</text>
                      <text x="305" y="18" fontSize="10" opacity="0.55">Nashik Rd</text>
                    </g>

                    <g transform="translate(300, 225)">
                      <circle r="26" fill="#B8533D" opacity="0.15" />
                      <circle r="16" fill="#B8533D" opacity="0.25" />
                      <path
                        d="M 0 -24 C -10 -10, -10 2, 0 10 C 10 2, 10 -10, 0 -24 Z"
                        fill="#B8533D"
                        stroke="#FFF8EC"
                        strokeWidth="1.4"
                      />
                      <circle cy="-13" r="4" fill="#FFF8EC" />
                      <text
                        y="36"
                        textAnchor="middle"
                        fontSize="10"
                        fontFamily="'Inter', sans-serif"
                        fontWeight="600"
                        fill="#7A3E2A"
                        letterSpacing="0.04em"
                      >
                        {schoolData.shortName} CAMPUS
                      </text>
                      <text
                        y="50"
                        textAnchor="middle"
                        fontSize="9"
                        fill="#7A3E2A"
                        opacity="0.85"
                        fontStyle="italic"
                      >
                        Near Godavari Ghat · Kopargaon
                      </text>
                    </g>

                    <g fontFamily="'Inter', sans-serif" fontSize="8" fill="#635C4D" opacity="0.6">
                      <text x="60" y="235">Town centre</text>
                      <text x="485" y="95">Ghat area</text>
                      <text x="145" y="315">Station</text>
                      <text x="420" y="305">Temple qtrs</text>
                    </g>
                  </svg>
                </div>
              </InfoCard>

              <InfoCard icon={Phone} title="Call the School">
                <div className="space-y-2.5">
                  <a
                    href={`tel:${schoolData.phones.primary}`}
                    className="flex items-center gap-3 text-sm text-charcoal font-serifAlt hover:text-terracotta transition-colors duration-300"
                  >
                    <span className="text-terracotta font-semibold shrink-0">·</span>
                    <span>School Office — {schoolData.phones.primary}</span>
                  </a>
                  {schoolData.phones.admission && (
                    <a
                      href={`tel:${schoolData.phones.admission}`}
                      className="flex items-center gap-3 text-sm text-charcoal font-serifAlt hover:text-terracotta transition-colors duration-300"
                    >
                      <span className="text-forest font-semibold shrink-0">·</span>
                      <span>Admission Desk — {schoolData.phones.admission}</span>
                    </a>
                  )}
                </div>
                <p className="mt-3 text-xs text-sage uppercase tracking-editorial">
                  Mon – Sat · 8 am – 4 pm
                </p>
              </InfoCard>

              <InfoCard icon={Mail} title="Email Us">
                <div className="space-y-2.5">
                  <a
                    href={`mailto:${schoolData.emails.primary}`}
                    className="block text-sm text-charcoal font-serifAlt hover:text-terracotta transition-colors duration-300 break-all"
                  >
                    {schoolData.emails.primary}
                  </a>
                  {schoolData.emails.admission && (
                    <a
                      href={`mailto:${schoolData.emails.admission}`}
                      className="block text-sm text-charcoal font-serifAlt hover:text-terracotta transition-colors duration-300 break-all"
                    >
                      {schoolData.emails.admission}
                    </a>
                  )}
                </div>
              </InfoCard>

              <InfoCard icon={Clock} title="Visit Hours & Careers" id="careers">
                <div className="space-y-4">
                  <div>
                    <p className="text-[11px] tracking-editorial uppercase text-sage mb-1.5">
                      Walk-in hours
                    </p>
                    <p className="text-sm text-charcoal-soft/85 leading-relaxed">
                      Monday to Saturday · 8:30 am – 12:30 pm
                      <br />
                      (Afternoon visits by prior appointment only)
                    </p>
                  </div>
                  <div className="pt-3 border-t border-wheat/40">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase size={14} className="text-terracotta" strokeWidth={1.8} />
                      <p className="text-[11px] tracking-editorial uppercase text-terracotta">
                        Work with us
                      </p>
                    </div>
                    <p className="text-sm text-charcoal-soft/85 leading-relaxed">
                      Send your CV to{' '}
                      <a
                        href={`mailto:${schoolData.emails.primary}?subject=Teacher Recruitment 2026-27`}
                        className="text-forest underline decoration-wheat underline-offset-2 hover:text-terracotta transition-colors"
                      >
                        {schoolData.emails.primary}
                      </a>{' '}
                      with subject line{' '}
                      <span className="font-medium text-charcoal italic">
                        &ldquo;Teacher Recruitment 2026–27&rdquo;
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </InfoCard>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, ease: cinematic }}
                className="bg-cream border border-wheat/50 rounded-sm p-6 md:p-10 lg:p-11 relative overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-terracotta/5 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-10 w-60 h-60 rounded-full bg-forest/5 blur-3xl pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="h-px w-8 bg-terracotta/50" />
                    <p className="text-[11px] tracking-editorial uppercase text-terracotta font-medium">
                      Admission Enquiry
                    </p>
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl text-charcoal leading-[1.08] mb-3">
                    Enquire with our <em className="italic text-terracotta">Admissions Team</em>.
                  </h3>
                  <p className="text-sm md:text-base text-charcoal-soft/80 leading-relaxed max-w-xl mb-8">
                    Share a few details and we will call or write back within 48 working hours.
                    Every enquiry is read by a real person — never an inbox auto-reply alone.
                  </p>

                  <AnimatePresence>
                    {showSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -8, height: 0 }}
                        transition={{ duration: 0.35, ease: cinematic }}
                        className="mb-7 overflow-hidden"
                      >
                        <div className="flex items-start gap-3 px-4 py-3.5 rounded-sm border border-forest/30 bg-forest/8">
                          <CheckCircle2 size={19} strokeWidth={2} className="text-forest shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-forest">
                              Enquiry submitted — we will contact you within 48 hours.
                            </p>
                            <p className="text-xs text-charcoal-soft/75 mt-1 font-serifAlt italic">
                              Thank you for reaching out to {schoolData.shortName}. A member of the
                              admission team will be in touch soon.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="md:col-span-2">
                      <label className={fieldLabelBase} htmlFor="name">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="e.g. Anjali Ravindra Deshmukh"
                        value={form.name}
                        onChange={(e) => onChange('name', e.target.value)}
                        onBlur={() => onBlur('name')}
                        className={`${fieldInputBase} ${
                          touched.name && errors.name ? fieldBorderInvalid : fieldBorderValid
                        }`}
                      />
                      {touched.name && errors.name && (
                        <p className={errorLabel}>{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className={fieldLabelBase} htmlFor="email">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="parent@email.com"
                        value={form.email}
                        onChange={(e) => onChange('email', e.target.value)}
                        onBlur={() => onBlur('email')}
                        className={`${fieldInputBase} ${
                          touched.email && errors.email ? fieldBorderInvalid : fieldBorderValid
                        }`}
                      />
                      {touched.email && errors.email && (
                        <p className={errorLabel}>{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className={fieldLabelBase} htmlFor="phone">
                        Phone (10 digits)
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel-national"
                        inputMode="numeric"
                        placeholder="e.g. 9876543210"
                        maxLength={10}
                        value={form.phone}
                        onChange={(e) => {
                          const v = e.target.value.replace(/\D/g, '').slice(0, 10)
                          onChange('phone', v)
                        }}
                        onBlur={() => onBlur('phone')}
                        className={`${fieldInputBase} ${
                          touched.phone && errors.phone ? fieldBorderInvalid : fieldBorderValid
                        }`}
                      />
                      {touched.phone && errors.phone && (
                        <p className={errorLabel}>{errors.phone}</p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className={fieldLabelBase} htmlFor="applyingFor">
                        Applying For
                      </label>
                      <div className="relative">
                        <select
                          id="applyingFor"
                          name="applyingFor"
                          value={form.applyingFor}
                          onChange={(e) => onChange('applyingFor', e.target.value)}
                          onBlur={() => onBlur('applyingFor')}
                          className={`${fieldInputBase} appearance-none pr-10 ${
                            touched.applyingFor && errors.applyingFor
                              ? fieldBorderInvalid
                              : fieldBorderValid
                          }`}
                        >
                          <option value="">Select the wing…</option>
                          {APPLYING_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <ChevronRight
                          size={16}
                          strokeWidth={2}
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 -rotate-90 text-charcoal-soft/50"
                        />
                      </div>
                      {touched.applyingFor && errors.applyingFor && (
                        <p className={errorLabel}>{errors.applyingFor}</p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className={fieldLabelBase} htmlFor="message">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell us about your child — age/grade, your village/town, any specific questions about the curriculum, transport, or admission process…"
                        value={form.message}
                        onChange={(e) => onChange('message', e.target.value)}
                        onBlur={() => onBlur('message')}
                        className={`${fieldInputBase} resize-y min-h-[130px] ${
                          touched.message && errors.message ? fieldBorderInvalid : fieldBorderValid
                        }`}
                      />
                      {touched.message && errors.message ? (
                        <p className={errorLabel}>{errors.message}</p>
                      ) : (
                        <p className="text-[11px] text-charcoal-soft/45 mt-2 font-serifAlt italic">
                          {form.message.length > 0
                            ? `${form.message.length} character${form.message.length === 1 ? '' : 's'}`
                            : 'A short note helps us respond with the right person and information.'}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-2 pt-2">
                      <Button
                        variant="primary"
                        size="lg"
                        type="submit"
                        disabled={submitting}
                        className="w-full md:w-auto min-w-[220px] justify-center disabled:cursor-not-allowed disabled:opacity-70"
                        iconRight={
                          submitting ? (
                            <Loader2 size={17} strokeWidth={2} className="animate-spin" />
                          ) : (
                            <ChevronRight size={17} strokeWidth={2} />
                          )
                        }
                      >
                        {submitting ? 'Sending…' : 'Submit Enquiry'}
                      </Button>
                      <p className="text-[11px] text-charcoal-soft/55 mt-4 leading-relaxed font-serifAlt italic max-w-lg">
                        By submitting this form you agree to be contacted by {schoolData.name} via
                        phone or email regarding your enquiry. We do not share or sell contact
                        information.
                      </p>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-cream border-t border-wheat/40">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Frequently Asked"
            title="Questions we are often asked."
            accentIndex={2}
            subtitle="Before you pick up the phone or step through our gate, a quick read through our most common questions about campus life, safety, and everyday running."
            align="center"
            decoratedUnderline
          />
          <div className="mt-14">
            <FAQAccordion items={generalAndSafetyFaqs} />
          </div>
        </div>
      </section>
    </div>
  )
}
