import type { SchoolInfo } from '@/types/school'

const img = (prompt: string, size = 'landscape_16_9') =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`

export const schoolData: SchoolInfo = {
  name: 'Sanjivani English Medium School',
  shortName: 'SEMS',
  tagline: 'Rooted in heritage · Rising with tomorrow',
  trust: 'Sanjivani Education, Agricultural and Rural Development Trust',
  establishedYear: 1978,
  address: {
    line1: 'Sanjivani Campus, Near Godavari Ghat',
    city: 'Kopargaon',
    state: 'Maharashtra',
    country: 'India',
    pin: '423601',
    landmark: 'On the historic banks of the Godavari',
  },
  phones: {
    primary: '+91 74229 00900',
    admission: '+91 74229 00901',
  },
  emails: {
    primary: 'mysemschool@gmail.com',
    admission: 'admission.sems@gmail.com',
  },
  socials: [
    {
      id: 'fb',
      platform: 'facebook',
      label: 'Facebook · Sanjivani English Medium School',
      href: 'https://www.facebook.com/sanjivanienglishschool',
    },
    {
      id: 'yt',
      platform: 'youtube',
      label: 'YouTube · Sanjivani English Medium School',
      href: 'https://www.youtube.com/@sanjivanienglishschool',
    },
    {
      id: 'ig',
      platform: 'instagram',
      label: 'Instagram · @sanjivanienglishschool',
      href: 'https://www.instagram.com/sanjivanienglishschool/',
    },
    {
      id: 'li',
      platform: 'linkedin',
      label: 'LinkedIn · Sanjivani English Medium School',
      href: 'https://www.linkedin.com/company/sanjivani-english-medium-school/',
    },
  ],
  affiliation: {
    board: 'Maharashtra State Board of Secondary and Higher Secondary Education',
    note: 'Affiliation details pending final confirmation from school management',
  },
  website: 'https://www.mysemschool.com',
  heroSlides: [
    {
      id: 'h1',
      title: 'Forty-seven years of light.',
      subtitle: 'One campus. One family. One promise.',
      tagline: 'Est. 1978 · Kopargaon',
      image: img(
        'Editorial wide hero banner of a heritage Indian school campus at sunrise, red terracotta rooftops, warm ivory buildings, banyan trees, students in uniform walking across a courtyard, cinematic warm morning light, no text overlaid, 16:9 aspect ratio, Maharashtra rural school aesthetic',
      ),
      ctaLabel: 'Discover Sanjivani',
      ctaHref: '/about',
    },
    {
      id: 'h2',
      title: 'Where rigour meets rhythm.',
      subtitle: 'Academics · Culture · Sport · Community',
      tagline: 'A holistic K–10 education',
      image: img(
        'Cinematic banner of an Indian school classroom, students of mixed ages raising hands eagerly, teacher guiding, sunlight through jalousie windows, warm cream walls, wood and terracotta accents, no logos, editorial shot, 16:9, Kopargaon Maharashtra rural school vibe',
      ),
      ctaLabel: 'Explore academics',
      ctaHref: '/academics',
    },
    {
      id: 'h3',
      title: 'Toppers we cheer for.',
      subtitle: 'Class X Felicitation Ceremony · 2026',
      tagline: 'Class X Toppers Felicitation Ceremony 2026',
      image: img(
        'Editorial wide banner of school felicitation ceremony, Indian students receiving medals on stage, proud parents in audience, marigold garlands, warm stage lighting, terracotta and forest decor, no legible faces or logos, cinematic shot, 16:9',
      ),
      ctaLabel: 'Read about the event',
      ctaHref: '/happenings',
    },
    {
      id: 'h4',
      title: 'Playgrounds of promise.',
      subtitle: 'Kabaddi · Kho-kho · Athletics · Cricket',
      tagline: 'Sports @ Sanjivani',
      image: img(
        'Wide cinematic banner of rural Indian school sports ground, green field, students running, kho-kho match in progress, monsoon golden hour light, distant banyan and mango trees, no text, 16:9, Maharashtra countryside school athletics',
      ),
      ctaLabel: 'See co-curricular',
      ctaHref: '/academics#co-curricular',
    },
    {
      id: 'h5',
      title: 'On the banks of the Godavari.',
      subtitle: 'A campus with a river and a legacy.',
      tagline: 'Kopargaon · Godavari Ghat',
      image: img(
        'Cinematic 16:9 hero banner of a riverbank school, wide Godavari river at golden hour, ancient stone ghats, school buildings in distance, warm amber light, no text, no faces, editorial photography style, Maharashtra river belt',
      ),
      ctaLabel: 'Our campus story',
      ctaHref: '/about',
    },
    {
      id: 'h6',
      title: 'Gurupournima · A heritage of reverence.',
      subtitle: 'Where the teacher is still the first lamp.',
      tagline: 'Traditions we live by',
      image: img(
        'Editorial wide banner of Indian school cultural celebration, diya lamps, flower petals rangoli, students in traditional attire, teachers being honoured, warm ambient light, terracotta, forest and ivory palette, 16:9, no logos',
      ),
      ctaLabel: 'All happenings',
      ctaHref: '/happenings',
    },
    {
      id: 'h7',
      title: 'Admissions 2026–27 · Open.',
      subtitle: 'Pre-Primary to Class X · Limited seats.',
      tagline: 'Apply now',
      image: img(
        'Cinematic 16:9 editorial banner, close-up of a young student in school uniform holding a book with folded hands, warm morning classroom light, bokeh of chalkboard behind, no logos, peaceful and hopeful tone, Indian school admissions season',
      ),
      ctaLabel: 'Admission process',
      ctaHref: '/admission',
    },
  ],
  vision:
    'To be India\u2019s most trusted bridge between rural roots and global opportunity — empowering young minds from Kopargaon taluka and beyond with character, competence and compassion.',
  mission:
    'Habituate excellence through a balanced curriculum, dedicated mentorship, and deep roots in Maharashtra\u2019s agro-cultural ethos. We teach the child, not just the subject.',
  emblemStory:
    'The Sanjivani emblem carries five elements: the lamp (vidya), the banyan (roots), the open palm (service), the wave (Godavari), and the farmer\u2019s horizon (the Sanjivani agricultural heritage). Together they remind every child that learning begins at home and ends in service.',
  coreValues: [
    {
      id: 'cv1',
      title: 'Respect',
      description: 'For elders, for teachers, for the land, and for every voice in the classroom.',
      iconName: 'HeartHandshake',
    },
    {
      id: 'cv2',
      title: 'Honesty',
      description: 'A copybook clean, a word kept, a mind unafraid to say "I don\u2019t know yet."',
      iconName: 'BadgeCheck',
    },
    {
      id: 'cv3',
      title: 'Compassion',
      description: 'The first bench shares with the last. Everyone eats. Everyone is seen.',
      iconName: 'HandHeart',
    },
    {
      id: 'cv4',
      title: 'Fairness',
      description: 'One rule for the topper and the slow learner. Opportunity is blind to privilege.',
      iconName: 'Scale',
    },
    {
      id: 'cv5',
      title: 'Responsibility',
      description: 'Your notebook, your uniform, your bench — and your village, one day.',
      iconName: 'ShieldCheck',
    },
  ],
  assertions: [
    {
      id: 'a1',
      title: 'Vision',
      description:
        'To be India\u2019s most trusted rural-urban bridge school, empowering young minds with character, competence and compassion.',
      iconName: 'Compass',
      exploreHref: '/about',
      image: img('Editorial square icon composition, brass compass on old book, warm ivory background, soft shadow', 'square'),
    },
    {
      id: 'a2',
      title: 'Mission',
      description:
        'Habituate excellence through a balanced curriculum, dedicated mentorship, and deep roots in Maharashtra\u2019s agro-cultural ethos.',
      iconName: 'Target',
      exploreHref: '/about',
      image: img('Wooden archery target with one arrow at centre, warm sunlight, editorial still life', 'square'),
    },
    {
      id: 'a3',
      title: 'Core Values',
      description:
        'Respect · Honesty · Compassion · Fairness · Responsibility — anchored in Trust and Excellence.',
      iconName: 'Gem',
      exploreHref: '/about',
      image: img('Five polished coloured river stones arranged in a flower, ivory cloth background, editorial still, Maharashtra river stone aesthetic', 'square'),
    },
    {
      id: 'a4',
      title: 'Our Emblem',
      description:
        'Lamp · Banyan · Palm · Wave · Horizon — five symbols, one promise: Sanjivani lights lamps, not just fills slates.',
      iconName: 'Flame',
      exploreHref: '/about#emblem',
      image: img('Clay diya lamp glowing at dusk, marigold petals around it, editorial warm still life photo', 'square'),
    },
  ],
  statsTabs: [
    {
      id: 't1',
      label: 'Legacy',
      items: [
        { id: 's1', value: 47, suffix: '+', label: 'Years · Est. 1978' },
        { id: 's2', value: 5000, suffix: '+', label: 'Alumni worldwide' },
        { id: 's3', value: 120, suffix: '+', label: 'Faculty & staff' },
        { id: 's4', value: 96, suffix: '%', label: 'Parent retention' },
        { id: 's5', value: 42, suffix: '+', label: 'Villages served' },
        { id: 's6', value: 10, suffix: '', label: 'K–10 grades' },
      ],
    },
    {
      id: 't2',
      label: 'Academics',
      items: [
        { id: 's1', value: 98, suffix: '%', label: 'Class X pass rate 2025' },
        { id: 's2', value: 26, suffix: '', label: 'District merit ranks · 5 yr' },
        { id: 's3', value: 1, suffix: ':14', label: 'Teacher : student ratio' },
        { id: 's4', value: 8, suffix: '', label: 'Labs & libraries' },
        { id: 's5', value: 3, suffix: '', label: 'Language streams' },
        { id: 's6', value: 94, suffix: '%', label: 'Attendance · avg 2025' },
      ],
    },
    {
      id: 't3',
      label: 'Beyond Books',
      items: [
        { id: 's1', value: 32, suffix: '+', label: 'Annual events & haats' },
        { id: 's2', value: 14, suffix: '', label: 'Sports disciplines' },
        { id: 's3', value: 9, suffix: '', label: 'Clubs & societies' },
        { id: 's4', value: 2500, suffix: '+', label: 'Trees on campus' },
        { id: 's5', value: 600, suffix: '+', label: 'NCC & Scout cadets' },
        { id: 's6', value: 18, suffix: '', label: 'Community seva drives /yr' },
      ],
    },
  ],
  exploreTiles: [
    { id: 'e1', eyebrow: 'Philosophy', title: 'Ye School Sochta Hai', description: 'The ideas that shape every classroom.', iconName: 'Lightbulb', href: '/about#philosophy', image: img('Open notebook with handwritten thoughts in Marathi and English, chai cup, pen, editorial still, warm ivory background', 'portrait_4_3') },
    { id: 'e2', eyebrow: 'Co-curricular', title: 'Sports & Athletics', description: 'Kho-kho, kabaddi, cricket, track.', iconName: 'Medal', href: '/academics#co-curricular', image: img('Rural Indian school kho-kho match in action, students in uniform, green field, afternoon light, editorial sports photo', 'portrait_4_3') },
    { id: 'e3', eyebrow: 'Exchange', title: 'Internationalism', description: 'Pen-pals, GK clubs, Model UN.', iconName: 'Globe2', href: '/about#international', image: img('Globe, world map pinned with flags, notebook, editorial desk composition', 'portrait_4_3') },
    { id: 'e4', eyebrow: 'Seva', title: 'Godavari Harit Sena', description: 'Our river & farm stewardship club.', iconName: 'Trees', href: '/academics#co-curricular', image: img('Group of uniformed students planting saplings on a riverbank, monsoon sky, editorial documentary photo', 'portrait_4_3') },
    { id: 'e5', eyebrow: 'Cadets', title: 'NCC & Scouts', description: 'Discipline, parade, community camps.', iconName: 'Flag', href: '/academics#co-curricular', image: img('School NCC cadets in khaki uniform standing in formation, Indian tricolour flag, winter morning light, editorial', 'portrait_4_3') },
    { id: 'e6', eyebrow: 'Middle Wing', title: 'Classes VI–VIII', description: 'The bridge years — curiosity takes flight.', iconName: 'Layers', href: '/academics/middle', image: img('Middle school Indian students in science lab doing chemistry experiment, goggles, colourful chemicals, editorial classroom photo', 'portrait_4_3') },
    { id: 'e7', eyebrow: 'Faculty', title: 'Gurus @ Sanjivani', description: 'The teachers who stay for decades.', iconName: 'Users', href: '/principal-message#team', image: img('Group portrait of Indian school teachers in staff room, warm smiles, books, cups of chai, editorial group photo', 'portrait_4_3') },
    { id: 'e8', eyebrow: 'Results', title: 'Board & Merit', description: 'Class X toppers · District ranks.', iconName: 'Award', href: '/achievements#results', image: img('Close up of an Indian school merit certificate, gold medal, marigold garland, editorial still life, warm lighting', 'portrait_4_3') },
    { id: 'e9', eyebrow: 'Pre-Primary', title: 'Little Gurus', description: 'Play, rhyme, wonder — Nursery to UKG.', iconName: 'Baby', href: '/academics/pre-primary', image: img('Indian nursery classroom, tiny chairs, toys, crayon drawings on wall, morning light, editorial warm photo, no faces', 'portrait_4_3') },
    { id: 'e10', eyebrow: 'Primary Wing', title: 'Classes I–V', description: 'Foundations of language, number, care.', iconName: 'BookOpen', href: '/academics/primary', image: img('Primary students with hands raised in reading circle, teacher sitting with them on carpet, editorial classroom photo, warm', 'portrait_4_3') },
    { id: 'e11', eyebrow: 'Alumni', title: 'Success Trails', description: 'Where Sanjivanis go, and who they become.', iconName: 'Sparkles', href: '/achievements#alumni', image: img('Editorial collage of Indian young professionals, doctors, engineers, farmers, teachers, soft warm tones, no IDs', 'portrait_4_3') },
    { id: 'e12', eyebrow: 'Senior Wing', title: 'Classes IX & X', description: 'The board-facing years · rigour + heart.', iconName: 'GraduationCap', href: '/academics/senior', image: img('Senior Indian school students studying together in library, textbooks, afternoon sunlight through windows, editorial scene', 'portrait_4_3') },
  ],
  partners: [
    { id: 'p1', name: 'Sanjivani Group of Institutions', logo: img('Minimal institutional logo wordmark, serif S monogram, forest on ivory, vector style', 'square') },
    { id: 'p2', name: 'Sanjivani Sahakari Bank', logo: img('Cooperative bank style logo, wheat sheaf + rupee, terracotta on ivory, vector flat', 'square') },
    { id: 'p3', name: 'Godavari Ghat Sansthan', logo: img('River wave + temple ghat silhouette logo, forest green vector, minimal', 'square') },
    { id: 'p4', name: 'Kopargaon Municipal Council', logo: img('Municipal council logo, circular wheat wreath + Ashoka-inspired, forest on ivory, vector', 'square') },
    { id: 'p5', name: 'Maharashtra Rajya Shikshan Parishad', logo: img('Education council minimal logo, open book and lamp, terracotta, flat vector', 'square') },
    { id: 'p6', name: 'NCC Directorate · Maharashtra', logo: img('NCC inspired torch wreath monochrome logo, charcoal vector, flat', 'square') },
    { id: 'p7', name: 'The Bharat Scouts & Guides', logo: img('Scouts fleur de lis minimal logo, forest green, flat vector style', 'square') },
    { id: 'p8', name: 'Akhil Maharashtra Krishi Parishad', logo: img('Agricultural parishad logo, wheat + tractor + sun, terracotta, flat vector', 'square') },
    { id: 'p9', name: 'Kopargaon Taluka Cricket Association', logo: img('Cricket bat and ball circular logo, forest on ivory, minimal vector', 'square') },
    { id: 'p10', name: 'Rotary Club · Kopargaon', logo: img('Rotary wheel minimal monochrome logo, terracotta vector', 'square') },
    { id: 'p11', name: 'Lions Club · Kopargaon Godavari', logo: img('Lions club style minimal lion silhouette logo, charcoal vector', 'square') },
    { id: 'p12', name: 'IIT Bombay · Inspire Program', logo: img('IIT-style torch + gear minimal logo, forest vector, flat', 'square') },
    { id: 'p13', name: 'SBI Youth for India', logo: img('Youth for India lamp logo, terracotta, flat vector', 'square') },
    { id: 'p14', name: 'State Institute of Educational Technology', logo: img('SIET style education TV tower + book logo, charcoal vector', 'square') },
  ],
  quickLinkGroups: [
    {
      id: 'ql1',
      title: 'About',
      links: [
        { id: 'q11', label: 'Who We Are', href: '/about' },
        { id: 'q12', label: 'School Emblem', href: '/about#emblem' },
        { id: 'q13', label: 'Our Philosophy', href: '/about#philosophy' },
        { id: 'q14', label: 'Leadership Board', href: '/about#leadership' },
        { id: 'q15', label: "Principal's Message", href: '/principal-message' },
        { id: 'q16', label: 'Our Campuses', href: '/about#campuses' },
      ],
    },
    {
      id: 'ql2',
      title: 'School',
      links: [
        { id: 'q21', label: 'Pre-Primary Wing', href: '/academics/pre-primary' },
        { id: 'q22', label: 'Primary Wing', href: '/academics/primary' },
        { id: 'q23', label: 'Middle Wing', href: '/academics/middle' },
        { id: 'q24', label: 'Senior Wing', href: '/academics/senior' },
        { id: 'q25', label: 'The Team', href: '/principal-message#team' },
        { id: 'q26', label: 'Happenings', href: '/happenings' },
      ],
    },
    {
      id: 'ql3',
      title: 'Noteworthy',
      links: [
        { id: 'q31', label: 'Glory Galore', href: '/achievements' },
        { id: 'q32', label: 'Success Trails', href: '/achievements#alumni' },
        { id: 'q33', label: 'Trusted Voices', href: '/achievements#voices' },
        { id: 'q34', label: 'School Results', href: '/achievements#results' },
      ],
    },
    {
      id: 'ql4',
      title: 'Admission',
      links: [
        { id: 'q41', label: 'Admission Process', href: '/admission' },
        { id: 'q42', label: 'Fee Structure', href: '/admission#fee' },
        { id: 'q43', label: 'Registration', href: '/contact' },
        { id: 'q44', label: 'Admission Handbook', href: '/admission#handbook' },
        { id: 'q45', label: 'FAQs', href: '/admission#faqs' },
        { id: 'q46', label: 'Session Info', href: '/admission#session' },
      ],
    },
    {
      id: 'ql5',
      title: 'More',
      links: [
        { id: 'q51', label: 'Co-curricular', href: '/academics#co-curricular' },
        { id: 'q52', label: 'Gallery', href: '/gallery' },
        { id: 'q53', label: 'Contact', href: '/contact' },
        { id: 'q54', label: 'Transfer Certificate', href: '/contact' },
        { id: 'q55', label: 'Work With Us', href: '/contact#careers' },
      ],
    },
  ],
}

export default schoolData
