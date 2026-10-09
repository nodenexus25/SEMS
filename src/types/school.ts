export type WingKey = 'pre-primary' | 'primary' | 'middle' | 'senior'

export interface HeroSlide {
  id: string
  title: string
  subtitle: string
  tagline?: string
  image: string
  ctaLabel?: string
  ctaHref?: string
}

export interface CoreValue {
  id: string
  title: string
  description: string
  iconName: string
}

export interface AssertionItem {
  id: string
  title: string
  description: string
  iconName: string
  exploreHref?: string
  image?: string
}

export interface StatsTab {
  id: string
  label: string
  items: StatsItem[]
}

export interface StatsItem {
  id: string
  value: number
  suffix?: string
  prefix?: string
  label: string
}

export interface ExploreTile {
  id: string
  title: string
  eyebrow?: string
  description: string
  iconName: string
  href: string
  image: string
}

export interface PartnerItem {
  id: string
  name: string
  logo: string
  category?: string
}

export interface QuickLinkGroup {
  id: string
  title: string
  links: QuickLink[]
}

export interface QuickLink {
  id: string
  label: string
  href: string
}

export interface SocialLink {
  id: string
  platform: 'facebook' | 'youtube' | 'instagram' | 'linkedin'
  label: string
  href: string
}

export interface SchoolInfo {
  name: string
  shortName: string
  tagline: string
  trust: string
  establishedYear: number
  address: {
    line1: string
    city: string
    state: string
    country: string
    pin?: string
    landmark?: string
  }
  phones: {
    primary: string
    admission?: string
  }
  emails: {
    primary: string
    admission?: string
  }
  socials: SocialLink[]
  affiliation: {
    board: string
    number?: string
    code?: string
    note: string
  }
  website: string
  heroSlides: HeroSlide[]
  vision: string
  mission: string
  emblemStory: string
  coreValues: CoreValue[]
  assertions: AssertionItem[]
  statsTabs: StatsTab[]
  exploreTiles: ExploreTile[]
  partners: PartnerItem[]
  quickLinkGroups: QuickLinkGroup[]
}

export interface EventItem {
  id: string
  title: string
  category: 'Academic' | 'Cultural' | 'Sports' | 'Celebration'
  date: string
  monthShort: string
  dayNum: string
  excerpt: string
  description: string
  featured?: boolean
  thumbnail: string
  gallery: string[]
  location?: string
}

export interface AccoladeItem {
  id: string
  title: string
  category: 'Academic' | 'Sports' | 'Cultural' | 'Co-curricular'
  year: string
  description: string
  recipient?: string
  image: string
}

export interface AlumniItem {
  id: string
  name: string
  batch: string
  role: string
  current: string
  quote: string
  portrait: string
}

export interface TestimonialItem {
  id: string
  name: string
  relation: string
  location: string
  quote: string
  rating: 1 | 2 | 3 | 4 | 5
  avatar: string
}

export interface TopperItem {
  id: string
  year: string
  rank: string
  name: string
  percentage: string
  streamOrGrade: string
  photo: string
  featured?: boolean
}

export interface TeamMember {
  id: string
  name: string
  role: string
  wing: 'Leadership' | WingKey
  subject?: string
  qualifications?: string
  quote: string
  portrait: string
  sort: number
}

export interface FAQItem {
  id: string
  question: string
  answer: string
  group: 'Admission' | 'Academics' | 'General' | 'Facilities' | 'Safety'
  sort: number
}

export interface WingHighlight {
  id: string
  title: string
  description: string
  iconName: string
}

export interface WingCurriculumItem {
  id: string
  subject: string
  description: string
}

export interface WingInfo {
  key: WingKey
  name: string
  tagline: string
  grades: string
  ageRange: string
  heroImage: string
  pedagogy: string
  curriculumSummary: string
  highlights: WingHighlight[]
  subjects: WingCurriculumItem[]
  facilities: string[]
  gallery: string[]
}

export interface AcademicsData {
  wings: Record<WingKey, WingInfo>
  teachingApproach: { title: string; description: string; iconName: string }[]
  facilities: { name: string; description: string; iconName: string }[]
}

export interface BreadcrumbItem {
  label: string
  href: string
}
