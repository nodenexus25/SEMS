import type { AcademicsData, WingKey } from '@/types/school'

const img = (prompt: string, size = 'landscape_16_9') =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`

const galleryFor = (p: string, n = 6) =>
  Array.from({ length: n }, (_, i) => img(`${p}, editorial frame ${i + 1}`, 'portrait_4_3'))

// Content placeholder — to be finalized by school management
const wings: AcademicsData['wings'] = {
  'pre-primary': {
    key: 'pre-primary',
    name: 'Pre-Primary Wing',
    tagline: 'Where every step is a story, and every story ends in a rhyme.',
    grades: 'Nursery · Jr. KG · Sr. KG',
    ageRange: '3 to 6 years',
    heroImage: img(
      'Indian nursery classroom hero banner, tiny colourful chairs, lots of toys, wall drawings of flowers and animals, morning sunlight coming through window, 16:9, warm editorial aesthetic, no faces or logos',
    ),
    pedagogy:
      'The Pre-Primary Wing at Sanjivani follows a play-based pedagogy rooted in Maria Montessori, Tagore\u2019s Shantiniketan, and Maharashtra\u2019s own Balbharati tradition. There are no "lessons" here. There are only stories, songs, rhymes, colours, shapes, a handful of grains to count, a little bit of soil to plant, and a whole lot of love. The daily schedule is built around the child\u2019s natural attention span — 15 minutes of a rhyme, then 15 minutes running around the garden, then 10 minutes of sitting together for a story, then a glass of milk and a nap.',
    curriculumSummary:
      'Language readiness (English, Marathi, oral Hindi), number readiness up to 20, environmental awareness (plants, animals, water, air), EVS-based life skills, motor skills, arts & craft, value stories, daily free play, weekly farm walk, monthly riddle-rhyme day, and a "bring your grandparent to school" Friday every four weeks.',
    highlights: [
      { id: 'pph1', title: 'Free Play & Sand Pit', description: 'Two dedicated outdoor sand pits, indoor building block corner, soft toys library.', iconName: 'Blocks' },
      { id: 'pph2', title: 'Rhyme & Story Time', description: 'Narrated in English, Marathi and Hindi every single day. Audio library of 400+ stories.', iconName: 'BookA' },
      { id: 'pph3', title: 'Nutri-Break', description: 'Warm flavoured milk + sprouted grains every morning; seasonal fruit every afternoon.', iconName: 'Apple' },
      { id: 'pph4', title: 'Mother Teacher Ratio', description: '1:10 in Nursery; 1:14 in Jr/Sr KG. Plus one full-time aaya per class.', iconName: 'UsersRound' },
      { id: 'pph5', title: 'Weekly Farm Visit', description: 'Walking to the school farm to plant marigolds, water mint, feed the goats.', iconName: 'Trees' },
      { id: 'pph6', title: 'Readiness for Class I', description: 'A structured readiness checklist over the last 3 months of Sr. KG.', iconName: 'ClipboardCheck' },
    ],
    subjects: [
      { id: 'pps1', subject: 'Oral English', description: 'Conversation, picture reading, rhymes, small stories.' },
      { id: 'pps2', subject: 'Boli Marathi', description: 'Marathi rhymes, daily vocabulary, conversational phrases.' },
      { id: 'pps3', subject: 'Hindi Bhasha', description: 'Barahkhadi introduction, common words, festival songs.' },
      { id: 'pps4', subject: 'Number Sense', description: '1–20, shapes, colours, big/small, heavy/light, counting with seeds and flowers.' },
      { id: 'pps5', subject: 'Environmental Studies', description: 'My family, my village, plants and animals, festivals of Maharashtra.' },
      { id: 'pps6', subject: 'Art & Craft', description: 'Finger painting, clay, vegetable printing, paper folding, origami.' },
      { id: 'pps7', subject: 'Music & Movement', description: 'Action songs, nursery rhymes with instruments, free dance, Lezim for Sr. KG.' },
    ],
    facilities: [
      'Three bright, well-ventilated classrooms opening into the nursery garden',
      'Dedicated sand play area and two jungle gyms',
      'Indoor soft-toy library & puzzle corner',
      'Separate child-friendly washbasins and toilets with aaya support',
      'First-aid medical room within 20 metres of the wing',
      'Monthly "Pani-Puri Party" or "Gola Day" for the little ones on non-academic Wednesdays',
    ],
    gallery: galleryFor('Indian nursery classroom children drawings toys play area'),
  },
  'primary': {
    key: 'primary',
    name: 'Primary Wing',
    tagline: 'Foundations of language, number, care — and friendships that last a lifetime.',
    grades: 'Classes I to V',
    ageRange: '6 to 11 years',
    heroImage: img(
      'Indian primary school classroom hero banner, children in uniform sitting cross-legged on mats in a reading circle, teacher sitting with them, books open, warm morning light, charts on wall, editorial 16:9, no IDs',
    ),
    pedagogy:
      'The Primary Wing converts the oral curiosity of the Nursery years into the first tools of learning — reading, writing, arithmetic. We still believe children learn more through their hands than through their eyes, which is why every lesson in the Primary Wing has a "doing" component: geometry is taught with bangles and sticks, fractions with laddoos and puranpolis, EVS with walks to the riverbank, grammar through the children\u2019s own sentences about their homes. Homework does not exceed 30 minutes a day at any level. Our favourite time of the week is the "Question Box Monday" — where every child drops a question into the wooden box, and the whole class hunts for the answer together.',
    curriculumSummary:
      'Full Balbharati curriculum aligned to Maharashtra State Board with enrichment add-ons: phonics-based English reading, Vedic math mental-arithmetic programme, daily 15-min Marathi & English story aloud, weekly drawing-craft, mandatory library borrowing of one book a week, Gardening Club (Class IV–V) and Bal Sanskar values classes on Fridays.',
    highlights: [
      { id: 'prh1', title: 'Phonics & Reading', description: 'Jolly Phonics programme in Class I. Every Class II child can read a simple story by end of year.', iconName: 'BookOpenText' },
      { id: 'prh2', title: 'Vedic Math Club', description: 'After-school mental arithmetic club for Classes III–V. They love it, parents love it more.', iconName: 'Calculator' },
      { id: 'prh3', title: 'Library Day', description: 'Wednesday afternoon = library day. 30 min silent reading + 15 min "I read you a story".', iconName: 'Library' },
      { id: 'prh4', title: 'Gardening Class', description: 'Class IV–V each has a 10-foot vegetable patch. Last year Class V grew 82 kg of leafy greens.', iconName: 'Sprout' },
      { id: 'prh5', title: 'Bal Sanskar', description: 'Weekly moral education class: stories from the Ramayan, Mahabharata, Sant Tukaram, Meerabai.', iconName: 'HeartHandshake' },
      { id: 'prh6', title: 'Class Pet Rotation', description: 'Each class takes care of a class pet for one term (rabbit, parrot, lovebirds, guinea pigs).', iconName: 'Cat' },
    ],
    subjects: [
      { id: 'prs1', subject: 'English', description: 'Balbharati English textbook, grammar, comprehension, creative writing, phonics, dictation.' },
      { id: 'prs2', subject: 'Marathi', description: 'First language: textbook, reading comprehension, letter writing, essay, oral recitation, poems.' },
      { id: 'prs3', subject: 'Hindi', description: 'Reading, writing, varnamala mastery, barahkhadi, small essays, conversation.' },
      { id: 'prs4', subject: 'Mathematics', description: 'Numbers, operations, fractions, measurements, geometry, word problems, mental math.' },
      { id: 'prs5', subject: 'EVS / Science', description: 'My body, my family, our village, plants and animals, air water soil, festivals, health.' },
      { id: 'prs6', subject: 'Social Studies', description: 'Introduction to history, geography of Maharashtra, our country, the National Flag & symbols.' },
      { id: 'prs7', subject: 'Drawing & Craft', description: 'Free hand, still life, paper folding, origami, mask making, best out of waste.' },
      { id: 'prs8', subject: 'Computer', description: 'Introduction to parts of computer, mouse, keyboard, MS Paint, typing tutor.' },
    ],
    facilities: [
      '20 classrooms with fans, lights, display boards and charts for every subject',
      'Primary Library: 4,500+ children\u2019s books in Marathi, English and Hindi',
      'Primary Art & Craft Studio, dedicated music room with harmonium, tabla and dholki',
      'Two computer labs, 30 nodes each, shared with Middle Wing',
      'Secure covered courtyard play area for the rainy season',
      'Balvatika (children\u2019s garden) with 60+ medicinal plants, all labelled with Marathi & English names',
    ],
    gallery: galleryFor('Indian primary students reading library gardening painting classroom'),
  },
  'middle': {
    key: 'middle',
    name: 'Middle Wing',
    tagline: 'The bridge years — when curiosity takes its first independent breath.',
    grades: 'Classes VI to VIII',
    ageRange: '11 to 14 years',
    heroImage: img(
      'Indian middle school science lab hero banner, students in lab coats performing a chemistry experiment with colourful chemicals, teacher observing, afternoon sunlight through lab windows, editorial 16:9, no school logos',
    ),
    pedagogy:
      'The Middle Wing is where Sanjivani gently increases the weight of learning — and adds the first big wind of responsibility. Classes VI–VIII form the bridge between the protected Primary Wing and the board-facing Senior Wing. The emphasis is on the 4 Cs: Critical thinking, Communication, Collaboration, and Community. Every student is part of one house (Red, Blue, Green, Yellow), one club, and one seva project per year. By Class VIII every child has stood on stage, written a poem for the school magazine, planted a tree, and visited at least three taluka villages on a project.',
    curriculumSummary:
      'Full Maharashtra State Board middle-school curriculum plus: a graded Integrated Science programme (Phy/Chem/Bio from Class VII), weekly general knowledge & current-affairs classes, full library & research sessions on a bi-monthly project, and mandatory Art / Music / Theatre / Sanskrit optional fourth-language choices from Class VI onwards.',
    highlights: [
      { id: 'mdh1', title: 'Project Based Learning', description: 'One 4-week interdisciplinary project per term. Past themes: "Our Taluka", "Rivers of Maharashtra", "A Farmer\u2019s Year".', iconName: 'Layers3' },
      { id: 'mdh2', title: 'Integrated STEM Lab', description: 'Dedicated physics, chemistry, biology labs. Classes VI & VII get a "lab day" every Wednesday.', iconName: 'FlaskConical' },
      { id: 'mdh3', title: '4th Language Option', description: 'Class VI onwards choose one: Sanskrit, Marathi Literature, Hindi Literature, or Basic Agricultural Science.', iconName: 'Languages' },
      { id: 'mdh4', title: 'Clubs & Societies', description: 'Debate, Eco, Science, History, Drama, Photography, Readers\u2019 — 9 clubs, all student-led with one staff mentor.', iconName: 'Palette' },
      { id: 'mdh5', title: 'House System', description: '4 houses (Red / Blue / Green / Yellow). Weekly inter-house competitions carry academic weight.', iconName: 'Flag' },
      { id: 'mdh6', title: 'Seva Shibir', description: 'Every Class VIII batch spends one Saturday at the old-age home or the village anganwadi.', iconName: 'HandHelping' },
    ],
    subjects: [
      { id: 'mds1', subject: 'English (IIL)', description: 'Literature, grammar, creative writing, public speaking, drama, newspaper reading.' },
      { id: 'mds2', subject: 'Marathi (FL)', description: 'Textbook, Sahitya Sanchay, vyakaran, essay, letter, chhand kavita abhangwani.' },
      { id: 'mds3', subject: 'Hindi (FL)', description: 'Textbook, vyakaran, rachnatmak lekhan, balgeet, mukhpath.' },
      { id: 'mds4', subject: 'Mathematics', description: 'Numbers & algebra, geometry, mensuration, statistics & data, graphs, probability intro.' },
      { id: 'mds5', subject: 'Science (Integrated)', description: 'Separate Physics, Chemistry, Biology teachers from Class VII. Full practical records.' },
      { id: 'mds6', subject: 'History & Civics', description: 'Ancient & medieval India, Maharashtra under the Marathas, Mughals, Freedom struggle, Constitution of India.' },
      { id: 'mds7', subject: 'Geography', description: 'Physical geography, Maharashtra geography, India, mapping skills, weather & climate, agriculture.' },
      { id: 'mds8', subject: 'Computer & IT', description: 'MS Office (Word, Excel, PPT), HTML & CSS basics, Internet, Cyber Safety awareness classes.' },
    ],
    facilities: [
      'Dedicated full-size labs: Physics, Chemistry, Biology, Language Lab',
      'Advanced Mathematics & Computer Labs, separate from the Primary wing',
      'Full library extension with 9,000+ books, plus 6 magazines and 4 newspapers in 3 languages',
      'Open air amphitheatre for inter-house cultural programmes',
      'Middle Wing Art Studio and 300-seater Saraswati Sabhagriha auditorium',
      'Full 4-acre athletics ground plus kho-kho, kabaddi, volleyball, throwball, and badminton courts',
    ],
    gallery: galleryFor('Indian middle school lab library debate club sports ground'),
  },
  'senior': {
    key: 'senior',
    name: 'Senior Wing',
    tagline: 'The board-facing years — rigour without losing heart.',
    grades: 'Classes IX & X',
    ageRange: '14 to 16 years',
    heroImage: img(
      'Indian senior school library hero banner, Class X students studying quietly at tables with textbooks and coffee mugs, library shelves all around, warm soft library lighting, editorial 16:9, no IDs',
    ),
    pedagogy:
      'The Senior Wing at Sanjivani is run with one non-negotiable rule — "the child comes before the percentage". We have produced district toppers, but we have never done so at the cost of a child\u2019s sleep or a child\u2019s smile. Class IX builds the base with concept-by-concept mastery; Class X adds rigour with weekly revisions, mock boards in October and February, and one-on-one counselling sessions for every single child. We also take our senior students seriously as citizens: Class X runs the junior wing\u2019s reading buddy programme, mentors Class IV students in mathematics, and manages the Bal Mela end-to-end every December.',
    curriculumSummary:
      'Complete Maharashtra State Board SSC curriculum for Classes IX & X, with 5+ dedicated mock papers per subject, chapter-wise revision tests, and a 4-month crash/revision schedule starting in December. Extra doubt-solving classes run six days a week from 4–6 pm in the board year, free of cost for every student.',
    highlights: [
      { id: 'snh1', title: 'Board Coaching Cell', description: 'Free after-school doubt solving for Class X, 6 days a week. All teachers stay back — no private tuitions needed.', iconName: 'GraduationCap' },
      { id: 'snh2', title: 'Mock Board Exams', description: 'Two full mock board cycles (October & February) evaluated by external teachers, same seating plan.', iconName: 'ScrollText' },
      { id: 'snh3', title: 'Reading Buddies', description: 'Each Class X student is a reading buddy for a Class II child. Academic + life lessons, both directions.', iconName: 'UsersRound' },
      { id: 'snh4', title: 'Career Counselling', description: 'Invited alumni panels + certified counsellor — 3 individual sessions every student per year.', iconName: 'Briefcase' },
      { id: 'snh5', title: 'Personality & Soft Skills', description: 'Every Friday 4th period: interview skills, CV writing, group discussion, spoken English.', iconName: 'MessageSquare' },
      { id: 'snh6', title: 'Class X Felicitation', description: 'Annual Class X Toppers Felicitation Ceremony every September, with alumni as Chief Guests.', iconName: 'Award' },
    ],
    subjects: [
      { id: 'sns1', subject: 'English (SL)', description: 'SSC English Second Language curriculum, detailed literature & grammar, targeted writing skills.' },
      { id: 'sns2', subject: 'Marathi (FL)', description: 'First Language Marathi, full Sanchay & Sahityavibhag, vyakaran, rachana, vangmay deep study.' },
      { id: 'sns3', subject: 'Hindi / Composite', description: 'Hindi Third Language or Composite Sanskrit/Hindi as per student choice in Class IX.' },
      { id: 'sns4', subject: 'Algebra & Geometry', description: 'Full SSC syllabus, separate teachers, weekly 10-mark revision tests from Class IX.' },
      { id: 'sns5', subject: 'Science & Technology', description: 'Paper I (Physics + Chemistry), Paper II (Biology + Environmental Science). Full practical files.' },
      { id: 'sns6', subject: 'History & Political Science', description: 'Ancient to modern India, world history, post-independence India, Constitution, Political Science SSC.' },
      { id: 'sns7', subject: 'Geography & Economics', description: 'Physical + human geography of India & Maharashtra, Economic Development basics, mapping, project work.' },
      { id: 'sns8', subject: 'Information Technology', description: 'SSC IT vocational paper: MS Office, HTML, CSS, RDBMS, e-governance, cyber law basics.' },
    ],
    facilities: [
      'Dedicated 24/7 Senior Wing study hall with silent reading & Wi-Fi',
      'Full-fledged Science Practical labs with 1:2 student-instrument ratio',
      'Mathematics Lab with all SSC prescribed apparatus: 3D geometry, mensuration, trigonometry kit',
      'Counsellor\u2019s Room with a full-time student counsellor available 10 am to 4 pm',
      'Senior wing computer lab: 40 latest laptops for IT practical papers',
      'Well-lit evening study area for students who wish to stay back after classes 4–7 pm',
    ],
    gallery: galleryFor('Indian senior students studying library science practicals counselling classroom'),
  },
}

const teachingApproach: AcademicsData['teachingApproach'] = [
  { title: 'Bloom\u2019s Taxonomy Aligned', description: 'Every lesson plan is written against Remember–Understand–Apply–Analyze–Evaluate–Create. No classroom stops at "Remember".', iconName: 'Brain' },
  { title: 'Small, Mixed-Ability Groups', description: 'Class size capped at 34. Every class is split into 4 colour groups for group work. Peer teaching is a weekly ritual.', iconName: 'Users2' },
  { title: 'No Rote Culture', description: 'Science through practicals, Geography through maps & field visits, History through village elders & buildings.', iconName: 'Compass' },
  { title: '100% Marathi Roots, English Wings', description: 'English fluency yes, mother tongue never. Every student writes their own diary in Marathi every Sunday.', iconName: 'Languages' },
  { title: 'Remedial + Accelerated Both', description: 'Two parallel after-school support cells: Remedial for children who need catching up, Accelerated for gifted kids.', iconName: 'Gauge' },
  { title: 'Teachers as Researchers', description: 'Every teacher does one action-research project a year on a child or a technique. Sanjivani has 14 published papers in Marathi shikshan journals.', iconName: 'GraduationCap' },
]

const facilities: AcademicsData['facilities'] = [
  { name: 'STEM Block', description: 'Physics, Chemistry, Biology, Language, Mathematics, and two Computer labs, all air-conditioned.', iconName: 'Building2' },
  { name: 'Libraries — Two Wings', description: 'Primary Library (4,500+) & Main Library (14,000+ books) with 3-language magazines & newspapers.', iconName: 'Library' },
  { name: 'Arts & Cultural Block', description: 'Art studio, music room, dance hall, 300-seat Saraswati Sabhagriha auditorium with projector.', iconName: 'Palette' },
  { name: 'Play & Athletics', description: '4-acre cinder athletics track, kho-kho & kabaddi courts, cricket pitch, volleyball, throwball, badminton.', iconName: 'Trophy' },
  { name: 'Open Air Theatre', description: 'Seats 700 for Annual Day, Prize Distribution, Dasara Sangeet Sandhya and other events.', iconName: 'Drama' },
  { name: 'Medical & Well-Being', description: 'Nurse-on-duty 8 am to 4 pm, 6-bed medical room, full-time student counsellor, ambulance on call.', iconName: 'HeartPulse' },
  { name: 'Mid-Day Meal Kitchen', description: 'Trust-run Annapurna kitchen, 400+ meals cooked fresh on campus daily by our own 3 cooks.', iconName: 'Soup' },
  { name: 'Balvatika & Farm', description: 'Children\u2019s garden, 2-acre learning farm, 2500+ trees, rainwater harvesting ponds.', iconName: 'Trees' },
  { name: 'Secure Campus', description: 'Boundary wall, 44 CCTVs, women-only lady attendants for Pre-Primary, all staff police verified.', iconName: 'Shield' },
]

const academics: AcademicsData = { wings, teachingApproach, facilities }
export type { WingKey }
export default academics
