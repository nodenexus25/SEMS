import type { EventItem } from '@/types/school'

const img = (prompt: string, size = 'landscape_4_3') =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`

const galleryFor = (p: string, n = 4) =>
  Array.from({ length: n }, (_, i) => img(`${p}, frame ${i + 1} of photo essay`))

export const events: EventItem[] = [
  // Content placeholder — to be finalized by school management
  {
    id: 'ev1',
    title: 'Class X Toppers Felicitation Ceremony · 2026',
    category: 'Celebration',
    date: '2026-09-12',
    monthShort: 'SEP',
    dayNum: '12',
    excerpt:
      'Our 2025–26 Class X toppers were honoured on campus in the presence of parents, trustees, and alumni — a morning of garlands, medals and goosebumps.',
    description:
      'The annual Class X Toppers Felicitation Ceremony for the 2026 academic cohort was held on the 12th of September at the Saraswati Sabhagriha. Shrimati Manisha Tai Pawar, District Education Officer, presided as Chief Guest and awarded gold medals to the top ten rank holders, along with merit certificates from the Sanjivani Education Trust. Our Principal, in her address, reminded the gathering that every topper stood on the shoulders of a family — and that the school owed its results to the parents of Kopargaon taluka who sent their children to us every morning, rain or shine. The cultural half of the programme included a short Marathi play by the senior students titled "Dhag — A School Called Home".',
    featured: true,
    thumbnail: img('Indian school felicitation ceremony, on-stage medal distribution, marigold garlands, parents seated audience, warm stage lighting, editorial documentary photo, no logos', 'landscape_16_9'),
    gallery: galleryFor('Indian school toppers receiving medals on stage, editorial documentary'),
    location: 'Saraswati Sabhagriha · Sanjivani Campus',
  },
  {
    id: 'ev2',
    title: 'Annual Day · Vasundhara — The Earth We Inherit',
    category: 'Cultural',
    date: '2026-02-24',
    monthShort: 'FEB',
    dayNum: '24',
    excerpt: 'A three-hour cultural medley on environment, sung and danced across 14 languages.',
    description:
      'Our 47th Annual Day was dedicated to Mother Earth. 520 students from Nursery to Class X performed dances, skits, songs and a full-length choir on climate action — concluding with a collective planting of 47 native saplings on the campus perimeter by the outgoing Class X.',
    thumbnail: img('Indian school Annual Day function, children in colourful traditional costumes performing a dance on stage, auditorium full of parents, warm stage lights, editorial photo', 'landscape_16_9'),
    gallery: galleryFor('Indian school annual day kids performing dances colourful costumes'),
    location: 'Saraswati Sabhagriha & Open Air Theatre',
  },
  {
    id: 'ev3',
    title: 'Khel Mahotsav · Inter-House Sports Day',
    category: 'Sports',
    date: '2026-01-15',
    monthShort: 'JAN',
    dayNum: '15',
    excerpt: 'Four houses, three days, one heartbeat. Red House lifted the 2026 Khel Mahotsav trophy.',
    description:
      'The three-day Sanjivani Khel Mahotsav concluded on the 15th of January with Red House edging past Green House by a margin of just 14 points. Events ranged from kho-kho and kabaddi — our taluka favourites — to athletics, discus, javelin, table tennis and chess. Our Class VII girl, Gargi M., set a new 100-metre sprint record of 13.7 seconds.',
    thumbnail: img('Rural Indian school sports day, students running on cinder track, kho-kho match, spectators cheering, winter morning sun, editorial documentary photo', 'landscape_16_9'),
    gallery: galleryFor('Indian school sports day kho kho kabaddi running athletics'),
    location: 'Sanjivani Athletics Ground',
  },
  {
    id: 'ev4',
    title: 'Godavari Harit Sena · Riverbank Cleaning Drive',
    category: 'Celebration',
    date: '2026-07-02',
    monthShort: 'JUL',
    dayNum: '02',
    excerpt: 'Nearly 300 students, teachers and villagers cleared 11 gunthas of the nearby ghat.',
    description:
      'On the first Monday after Ashadhi Ekadashi, our Godavari Harit Sena — the river and farm stewardship club — assembled at the Kopargaon ghat at the crack of dawn. Over six hours, with the help of village elders and the municipal council, they removed plastic waste, cleared water hyacinth, and lined the ghat walkway with 150 banyan and peepal saplings donated by the Sanjivani Agricultural Trust.',
    thumbnail: img('Uniformed Indian school students cleaning a river ghat, picking up plastic waste, elderly villagers helping them, river Godavari in background, documentary style editorial photo', 'landscape_16_9'),
    gallery: galleryFor('Indian school river cleaning drive students villagers saplings planting'),
    location: 'Godavari Ghat · Kopargaon',
  },
  {
    id: 'ev5',
    title: 'Aavhan · Inter-School Science Exhibition 2026',
    category: 'Academic',
    date: '2026-08-19',
    monthShort: 'AUG',
    dayNum: '19',
    excerpt: '68 working models, 14 taluka schools, three days of pure curiosity.',
    description:
      'Sanjivani hosted the 12th edition of Aavhan, the Kopargaon taluka inter-school science exhibition. Our own Class IX students walked away with the rolling trophy for their working model of a solar-powered drip-irrigation system — designed for small family farms in the taluka.',
    thumbnail: img('Indian rural school science exhibition, students explaining working science models to judges, charts and circuits on tables, editorial bright photo', 'landscape_16_9'),
    gallery: galleryFor('Indian school science exhibition working models students explaining'),
    location: 'Sanjivani STEM Block',
  },
  {
    id: 'ev6',
    title: 'Ganesh Utsav · Eco-Friendly Bappa',
    category: 'Cultural',
    date: '2025-09-17',
    monthShort: 'SEP',
    dayNum: '17',
    excerpt: 'Every class made its own clay Ganesha, and every idol returned home to the river.',
    description:
      'Our eco-Ganesh campaign reached a new milestone this year — 44 idols, all hand-made from silt dug out of the school pond, all painted with turmeric, kumkum and natural indigo. No plaster of Paris, no chemical paints. After five days of aarti and modak prasad, the little Ganeshas were gently immersed in the campus well in a ceremony led by the smallest Nursery students.',
    thumbnail: img('Indian school children with eco-friendly clay Ganesh idols, turmeric and kumkum paint, classroom decorated with marigolds, warm cultural photo, editorial', 'landscape_16_9'),
    gallery: galleryFor('Eco friendly clay Ganesh idols made by Indian school children'),
    location: 'Across all classrooms + Campus Well',
  },
  {
    id: 'ev7',
    title: 'Dasara Sangeet Sandhya',
    category: 'Cultural',
    date: '2025-10-12',
    monthShort: 'OCT',
    dayNum: '12',
    excerpt: 'An evening of classical Marathi and Hindi bhajans — performed by students, teachers and alumni together.',
    description:
      'The annual Dasara Sangeet Sandhya was held at the open-air theatre. This year\u2019s programme had a special flavour — it was compered by an alumnus from the 1996 batch, now a Mumbai-based playback singer, who returned to Kopargaon just for the evening.',
    thumbnail: img('Indian school open air theatre musical evening at dusk, students singing with harmonium and tabla, diyas and fairy lights, audience seated on floor, editorial', 'landscape_16_9'),
    gallery: galleryFor('Dasara Sangeet Sandhya Indian school music evening harmonium tabla'),
    location: 'Sanjivani Open Air Theatre',
  },
  {
    id: 'ev8',
    title: 'Gurupournima · The Guru Pujan',
    category: 'Celebration',
    date: '2025-07-21',
    monthShort: 'JUL',
    dayNum: '21',
    excerpt: 'Every student of every class brought one flower for every teacher.',
    description:
      'On the full moon of Ashadha, the entire school assembled in the central courtyard. One by one, students from Nursery up to Class X offered flowers, tilak and hand-written letters to teachers, peons, gardeners, didis and the drivers of our three school buses — because everyone who helps a child learn is a guru.',
    thumbnail: img('Gurupournima ceremony in an Indian school courtyard, young students offering flowers to their teacher, tilak on forehead, banyan tree backdrop, warm editorial photo', 'landscape_16_9'),
    gallery: galleryFor('Gurupournima Indian school students offering flowers tilak letters to teachers'),
    location: 'Central Courtyard · Banyan Talao',
  },
  {
    id: 'ev9',
    title: 'Republic Day Parade & Prize Distribution',
    category: 'Celebration',
    date: '2026-01-26',
    monthShort: 'JAN',
    dayNum: '26',
    excerpt: 'The NCC led the parade. Class V recited the full preamble in Marathi, Hindi and English.',
    description:
      'Hoisting of the tricolour, NCC and Scout-Guide parade, patriotic songs by the choir, and distribution of 124 prizes for academic merit, sport, art, community seva and perfect attendance. The Chief Guest was Retd. Col. Shriram Koli (VSM), himself a Kopargaon boy and a Sanjivani parent.',
    thumbnail: img('Republic Day parade at an Indian rural school, NCC cadets marching, tricolour flag unfurled, winter morning light, editorial documentary photo', 'landscape_16_9'),
    gallery: galleryFor('Republic Day Indian school NCC cadets march tricolour flag hoisting'),
    location: 'Sanjivani Parade Ground',
  },
  {
    id: 'ev10',
    title: 'Independence Day · Swaraj Vani Elocution',
    category: 'Cultural',
    date: '2025-08-15',
    monthShort: 'AUG',
    dayNum: '15',
    excerpt: '38 speakers, three languages, one topic: "What does freedom mean to a child of the taluka?"',
    description:
      'Our annual Swaraj Vani elocution competition drew finalists from 19 feeder rural schools. The winning speech in Marathi — by a Class VIII girl from a village 17 km from Kopargaon — left not a dry eye in the Sabhagriha and is now reproduced on the wall by the school office.',
    thumbnail: img('Indian school Independence Day celebration, girl student giving speech at mike, tricolour pinned to her uniform, audience listening, editorial photo', 'landscape_16_9'),
    gallery: galleryFor('Indian school elocution competition Independence Day students speeches'),
    location: 'Saraswati Sabhagriha',
  },
  {
    id: 'ev11',
    title: 'Taluka Level Inter-School General Knowledge Quiz',
    category: 'Academic',
    date: '2025-11-08',
    monthShort: 'NOV',
    dayNum: '08',
    excerpt: 'Sanjivani defended the rolling shield for the third year running.',
    description:
      'Hosted in partnership with the Lions Club of Kopargaon, the taluka GK quiz drew 32 teams from as many as 28 schools. Our senior team — Adwait, Ananya, and Hriday — clinched the final in a buzzer round on Maharashtra\u2019s agricultural history.',
    thumbnail: img('Indian school quiz competition, students pressing buzzers at desks, judges watching, blackboard with scores, editorial bright classroom photo', 'landscape_16_9'),
    gallery: galleryFor('Indian school quiz buzzers judges teams competition'),
    location: 'Saraswati Sabhagriha',
  },
  {
    id: 'ev12',
    title: 'Sanjivani Bal Mela · The Children\u2019s Fair',
    category: 'Celebration',
    date: '2025-12-05',
    monthShort: 'DEC',
    dayNum: '05',
    excerpt: 'Games, science stalls, food counters run entirely by children — and every rupee of profit went to the old age home.',
    description:
      'The end-of-year Bal Mela raised ₹ 1,42,700 this year for the Kopargaon Vrudhashram. Parents, grandparents and siblings thronged the 34 stalls — from the ever-popular "Guess the Weight of the Pumpkin" to candle-dipping, clay modelling, and a mini planetarium made by Class IX with a bedsheet and a torch.',
    thumbnail: img('Indian school children fair mela, small stalls with food, games, colourful, parents with children walking around, festive afternoon light, editorial documentary', 'landscape_16_9'),
    gallery: galleryFor('Bal Mela Indian school children fair stalls parents kids games'),
    location: 'Sanjivani Main Quadrangle',
  },
]

export default events
