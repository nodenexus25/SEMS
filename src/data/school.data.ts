import type { SchoolInfo } from '@/types/school'

const img = (prompt: string, size = 'landscape_16_9') =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`

export const schoolData: SchoolInfo = {
  name: 'Sanjivani English Medium School',
  shortName: 'SEMS',
  tagline: 'There is a bright child in every child.',
  trust: 'Sanjivani Education, Agricultural and Rural Development Trust',
  establishedYear: 1978,
  address: {
    line1: 'Sanjivani Campus, Sahajanandnagar',
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
    'At Sanjivani English Medium School, we envision an educational environment where every child is inspired to discover their potential, nurture their talents, develop strong values, and emerge as a confident, compassionate, responsible, and successful global citizen.',
  visionFull:
    'At Sanjivani English Medium School, we envision an educational environment where every child is inspired to discover their potential, nurture their talents, develop strong values, and emerge as a confident, compassionate, responsible, and successful global citizen.\n\nWe believe that education is not merely the acquisition of knowledge but a lifelong journey of discovery, character building, creativity, and transformation. Our vision is to provide quality education at affordable fees, ensuring that every child receives equal opportunities to learn, grow, dream, and achieve, irrespective of their background.\n\nGuided by the educational vision and legacy of Late Hon. Shankarraoji Kolhe Saheb, and under the valuable guidance and mentorship of Hon. Mrs. Renukatai Vivekbhaiya Kolhe Ma\u2019am, we strive to create a learning community that combines academic excellence with moral values, discipline, innovation, sportsmanship, and social responsibility.\n\nWe aspire to be recognised as one of the leading educational institutions in Ahilyanagar district, setting high standards in teaching, learning, student development, and institutional excellence. Through modern teaching methodologies, technology-enabled classrooms, experiential learning, sports, cultural activities, and opportunities for creative expression, we endeavour to make learning meaningful, joyful, and future-oriented.\n\nAt Sanjivani, every child is valued as a unique individual. We seek to identify each learner\u2019s strengths, support individual learning needs, encourage curiosity, and develop essential life skills such as critical thinking, communication, collaboration, leadership, and problem-solving. We aim to create an atmosphere where students feel safe, respected, motivated, and empowered to express themselves freely and pursue their aspirations with confidence.\n\nWe believe that true education develops not only intelligent minds but also kind hearts and responsible citizens. Therefore, we emphasise honesty, integrity, respect, empathy, environmental awareness, patriotism, and respect for diversity. We encourage our students to become individuals who contribute positively to their families, society, nation, and the world.\n\nOur commitment extends beyond classrooms. We seek to build a strong partnership among the school, parents, teachers, and the community, recognising that the holistic development of every child is a shared responsibility. By continuously improving our educational practices and embracing new opportunities, we aspire to prepare our learners for the challenges and possibilities of an ever-changing world.\n\nOur ultimate vision is to ignite young minds, inspire lifelong learning, empower every child, and transform dreams into achievements.\n\nAt Sanjivani English Medium School, we do not simply educate students for examinations; we prepare them for life. We nurture potential, build character, create opportunities, and empower every child to become the best version of themselves.\n\nSanjivani English Medium School \u2014 Nurturing Potential, Inspiring Excellence, Transforming Lives.',
  mission:
    'Empowering Every Child with Knowledge, Values, Skills, and Confidence to Succeed in Life.',
  missionIntro:
    'At Sanjivani English Medium School, our mission is to provide quality, inclusive, and affordable education that nurtures the intellectual, physical, emotional, social, and moral development of every child. We are committed to creating a safe, supportive, stimulating, and child-centred learning environment where every learner is encouraged to explore, question, innovate, and achieve their fullest potential.\n\nInspired by the educational vision and legacy of Late Hon. Shankarraoji Kolhe Saheb, and guided by the valuable mentorship of Hon. Mrs. Renukatai Vivekbhaiya Kolhe Ma\u2019am, we strive to make meaningful education accessible to all and to develop individuals who are academically competent, ethically grounded, socially responsible, and prepared for the challenges of the future.',
  missionCommitments: [
    {
      id: 'mc1',
      title: 'Academic Excellence',
      description:
        'To deliver strong academic foundations through effective teaching methodologies, conceptual understanding, experiential learning, and continuous assessment, enabling students to achieve excellence in academics and competitive examinations.',
    },
    {
      id: 'mc2',
      title: 'Holistic Child Development',
      description:
        'To nurture every dimension of a child\u2019s personality by providing balanced opportunities in academics, sports, arts, cultural activities, leadership, communication, and creative expression.',
    },
    {
      id: 'mc3',
      title: 'Inclusive and Affordable Education',
      description:
        'To ensure that every child receives opportunities to learn, grow, and succeed by maintaining a commitment to quality education at affordable fees, while respecting individual abilities, interests, backgrounds, and learning needs.',
    },
    {
      id: 'mc4',
      title: 'Character Building and Values',
      description:
        'To instil honesty, integrity, discipline, empathy, respect, responsibility, patriotism, and compassion, shaping students into individuals who make ethical decisions and contribute positively to society.',
    },
    {
      id: 'mc5',
      title: 'Innovation and Future Readiness',
      description:
        'To integrate appropriate technology, digital literacy, critical thinking, problem-solving, collaboration, and creativity into learning, preparing students to adapt confidently to a rapidly changing world.',
    },
    {
      id: 'mc6',
      title: 'Sportsmanship and Healthy Living',
      description:
        'To encourage physical fitness, teamwork, perseverance, resilience, and a spirit of fair play through sports, yoga, physical education, and other health-promoting activities.',
    },
    {
      id: 'mc7',
      title: 'Environmental and Social Responsibility',
      description:
        'To develop awareness of environmental conservation, sustainable living, community welfare, and respect for cultural diversity, encouraging students to become responsible citizens of India and the world.',
    },
    {
      id: 'mc8',
      title: 'Partnership with Parents and Community',
      description:
        'To strengthen cooperation among teachers, parents, school management, and the community, recognising that the success and well-being of every child depend on shared commitment and collective effort.',
    },
    {
      id: 'mc9',
      title: 'Empowering Teachers and Continuous Improvement',
      description:
        'To promote professional growth, collaborative teaching, reflective practices, and continuous improvement, ensuring that our educators remain dedicated mentors who inspire, guide, and support every learner.',
    },
  ],
  missionPromise:
    'At Sanjivani English Medium School, we are committed to recognising the potential within every child, providing opportunities for individual growth, celebrating every achievement, and supporting every learner in overcoming challenges.\n\nWe strive to ensure that every student leaves our institution not only with knowledge and qualifications but also with confidence, compassion, integrity, resilience, and the determination to make a meaningful difference in the world.\n\nOur mission is to educate minds, nurture hearts, build character, and empower futures \u2014 because every child deserves the opportunity to shine.',
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
      label: 'Our Strength',
      items: [
        { id: 's1', value: 1000, suffix: '+', label: 'Students · Nursery to Class X' },
        { id: 's2', value: 40, suffix: '', label: 'Teaching Staff' },
        { id: 's3', value: 2, suffix: '', label: 'Office Staff' },
        { id: 's4', value: 24, suffix: '', label: 'Support & Transport Team' },
        { id: 's5', value: 13, suffix: '', label: 'Campus Facilities' },
        { id: 's6', value: 100, suffix: '%', label: 'SSC Pass Rate · 2025 & 2026' },
      ],
    },
    {
      id: 't2',
      label: 'Academic Excellence',
      items: [
        { id: 's1', value: 100, suffix: '%', label: 'SSC Pass Rate · March 2025' },
        { id: 's2', value: 100, suffix: '%', label: 'SSC Pass Rate · May 2026' },
        { id: 's3', value: 228, suffix: '', label: 'Olympiad Participants' },
        { id: 's4', value: 41, suffix: '', label: 'Olympiad Medals · G 15 · S 13 · B 13' },
        { id: 's5', value: 8, suffix: '', label: 'Academic Approach Pillars' },
        { id: 's6', value: 4, suffix: '', label: 'Wings · Pre-Primary to Senior' },
      ],
    },
    {
      id: 't3',
      label: 'Sports & Beyond',
      items: [
        { id: 's1', value: 3, suffix: '', label: 'State Tchoukball Players' },
        { id: 's2', value: 9, suffix: '', label: 'Division-Level Fencers' },
        { id: 's3', value: 1, suffix: '', label: 'National Jump Rope Champion' },
        { id: 's4', value: 1, suffix: '', label: 'District Chess Player · U-14' },
        { id: 's5', value: 1, suffix: '', label: 'Annual Concert · Ecoria 2025–26' },
        { id: 's6', value: 6, suffix: '+', label: 'Co-curricular Activities' },
      ],
    },
  ],
  exploreTiles: [
    { id: 'e1', eyebrow: 'Philosophy', title: 'Ye School Sochta Hai', description: 'The ideas that shape every classroom.', iconName: 'Lightbulb', href: '/about#philosophy', image: img('Open notebook with handwritten thoughts in Marathi and English, chai cup, pen, editorial still, warm ivory background', 'portrait_4_3') },
    { id: 'e2', eyebrow: 'Co-curricular', title: 'Sports & Athletics', description: 'Kho-kho, kabaddi, cricket, track.', iconName: 'Medal', href: '/academics#co-curricular', image: img('Rural Indian school kho-kho match in action, students in uniform, green field, afternoon light, editorial sports photo', 'portrait_4_3') },
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
        { id: 'q11a', label: 'Our Vision', href: '/about#vision' },
        { id: 'q11b', label: 'Our Mission', href: '/about#mission' },
        { id: 'q12', label: 'School Emblem', href: '/about#emblem' },
        { id: 'q13', label: 'Our Philosophy', href: '/about#philosophy' },
        { id: 'q14', label: 'Leadership Board', href: '/about#leadership' },
        { id: 'q14a', label: "Managing Trustee's Message", href: '/trustee-message' },
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
