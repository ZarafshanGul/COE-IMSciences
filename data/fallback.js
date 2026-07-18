// ============================================================
// data/fallback.js
// Single source of truth:
//  (a) seed MongoDB via  npm run seed
//  (b) render pages when DB is not yet connected
// ============================================================

// ------ APPLY LINK ------------------------------------------
// Replace this URL with your actual Google Form application link.
const APPLY_LINK = '#';

// ------ CENTERS ---------------------------------------------
const centers = [
  {
    name: 'IMSciences',
    shortName: 'IMSciences',
    location: 'Peshawar',
    slug: 'imsciences-peshawar',
    type: 'hub',
    address: 'Institute of Management Sciences, Peshawar, KP',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Institute+of+Management+Sciences+Peshawar',
    registrationsOpen: true,
  },
  {
    name: 'Govt. Polytechnic Institute',
    shortName: 'Govt. Polytechnic Institute',
    location: 'D.I. Khan',
    slug: 'gpi-dikhan',
    type: 'spoke',
    address: 'Government Polytechnic Institute, Kaiserabad colony, Multan road, D.I. Khan',
    mapLink: 'https://maps.app.goo.gl/ht8WyfoYhGJAKv168',
    registrationsOpen: false,
  },
  {
    name: 'Government Polytechnic Institute',
    shortName: 'Government Polytechnic Institute',
    location: 'Torghu, Skardu',
    slug: 'gpi-skardu',
    type: 'spoke',
    address: 'Shigar Road, Torghu-Pain, Skardu, Gilgit-Baltistan',
    mapLink: 'https://maps.app.goo.gl/JA5fahqn3934AQ1x6',
    registrationsOpen: false,
  },
  {
    name: 'Karakoram International University',
    shortName: 'Karakoram International University',
    location: 'KIU',
    slug: 'kiu-gilgit',
    type: 'spoke',
    address: 'University Road, Gilgit-Baltistan',
    mapLink: 'https://maps.app.goo.gl/qzhSV8fv7Tf7pKAFA',
    registrationsOpen: false,
  },
];

const footerSpokes = [
  {
    name: 'Haripur',
    institute: 'Government Technical and Vocational Training Centre for Women, KTS Haripur',
    address: 'Adnan Chowk, Sector-4, Khalabat Township, Haripur, KP',
    mapLink: 'https://maps.app.goo.gl/7XwSBaiTbzmjNta78',
  },
  {
    name: 'D.I.Khan',
    institute: 'Government Polytechnic Institute for Women, D.I.Khan',
    address: 'Government Polytechnic Institute, Kaiserabad colony, Multan road, opposite to Rivaj Marquee, D.I. Khan',
    mapLink: 'https://maps.app.goo.gl/ht8WyfoYhGJAKv168',
  },
  {
    name: 'Gilgit',
    institute: 'Karakoram International University, Gilgit',
    address: 'University Road, Gilgit-Baltistan',
    mapLink: 'https://maps.app.goo.gl/qzhSV8fv7Tf7pKAFA',
  },
  {
    name: 'Skardu',
    institute: 'Government Polytechnic Institute, Torghu, Skardu',
    address: 'Shigar Road, Torghu-Pain, Skardu, Gilgit-Baltistan',
    mapLink: 'https://maps.app.goo.gl/JA5fahqn3934AQ1x6',
  },
];

// ------ CURRENT IMSciences (HUB) COURSES --------------------
// 5 open courses
const imsCourses = [
  { slug: 'artificial-intelligence',  title: 'Artificial Intelligence'  },
  { slug: 'cloud-engineering',        title: 'Cloud Engineering'        },
  { slug: 'cybersecurity',            title: 'Cybersecurity'            },
  { slug: 'e-commerce',               title: 'E-Commerce'               },
  { slug: 'creative-motion-design',   title: 'Creative Motion Design'   },
];

// ------ PREVIOUS (CLOSED) IMSciences COURSES ----------------
const prevCourses = [
  { slug: 'full-stack-web-development', title: 'Full Stack Web Development' },
  { slug: 'digital-marketing',          title: 'Digital Marketing'          },
];

// ------ SPOKE COURSES (no detail pages needed) ---------------
const coursesByCenter = {
  'gpi-dikhan': [
    { title: 'Full Stack Web Development', slug: 'full-stack-web-development' },
    { title: 'E-Commerce',                 slug: 'e-commerce'                 },
  ],
  'gpi-skardu': [
    { title: 'Full Stack Web Development', slug: 'full-stack-web-development' },
    { title: 'E-Commerce',                 slug: 'e-commerce'                 },
  ],
  'kiu-gilgit': [
    { title: 'Digital Marketing', slug: 'digital-marketing' },
    { title: 'Web Development',   slug: 'web-development'   },
  ],
};

// ------ HOME PAGE COURSE CATEGORY LIST ----------------------
const allCourseCategories = [
  'Web Application Development',
  'Mobile Application Development',
  'Creative Motion Design',
  'Cybersecurity',
  'Cloud Engineering',
  'ERP Management',
  'Block Chain Development',
  'Artificial Intelligence',
  'Game Development',
  'Quantum Computing',
  'Digital Marketing',
  'E-Commerce',
  'Financial & Data Engineering',
  'Software Development & Testing',
  'AI Robotics',
];

// ------ APPLICATIONS OPEN NOTIFICATIONS ----------------------------------------
const notifications = [
  {
    title: 'Applications Are Now Open',
    message: 'Applications for the Centre of Excellence courses at IMSciences (hub) are now open. Click below to apply before the deadline.',
    // attachmentName: 'Apply Now',
    // attachmentUrl: APPLY_LINK,
    // publishedAt: new Date('2026-07-14'),
    isRead: false,
  },
]

// ------ PREVIOUS NOTIFICATIONS ----------------------------------------
// const notifications = [
//   {
//     title: 'CoE Notice 2, March 18th, 2026',
//     message: 'Open the attachment to read the full document.',
//     attachmentName: 'CoE Notice 2, March 18th, 2026.pdf',
//     attachmentUrl: '/files/coe-notice-2-2026-03-18.pdf',
//     publishedAt: new Date('2026-03-18'),
//     isRead: false,
//   },
//   {
//     title: 'CoE Notice 1, March 13th, 2026',
//     message: 'A new official CoE notice has been published. Open the attachment to read the full announcement.',
//     attachmentName: 'CoE Notice 1, March 13th, 2026.pdf',
//     attachmentUrl: '/files/coe-notice-1-2026-03-13.pdf',
//     publishedAt: new Date('2026-03-13'),
//     isRead: false,
//   },
// ];

// ------ FAQs -------------------------------------------------
const faqs = [
  {
    q: 'Who can apply?',
    a: 'Women across Khyber Pakhtunkhwa and Gilgit-Baltistan who meet the eligibility criteria of the relevant competency-based courses can apply. Specific age and education requirements vary by course and are listed on each course’s application form.',
  },
  {
    q: 'What courses are offered at the Centre of Excellence?',
    a: 'The CoE offers career-focused programmes including Web Development, Mobile Application Development, Creative Motion Design, Cyber Security, Software Development & Testing, Cloud Engineering, AI Robotics, ERP Specialist, Block Chain Developer, Artificial Intelligence, Game Developer, Quantum Computing, Digital Marketing, and E-Commerce.',
  },
  {
    q: 'How long are the training programmes?',
    a: 'Programme length varies by course. Most Competency-Based Training and Assessment (CBT&A) courses run from three to six months, with mandatory on-the-job training, and combine classroom learning with hands-on, industry-aligned practice.',
  },
  {
    q: 'Is there any fee for the courses?',
    a: 'All CBT&A courses offered through the CoE hub-and-spoke network are fully funded for female candidates; however, there is a subsidised fee for male candidates.',
  },
  {
    q: 'How do I register?',
    a: 'Registration is done through online forms that are made available on our website and social media handles when admissions are open.',
  },
  {
    q: 'Is a daycare facility available?',
    a: 'The Centre of Excellence (CoE) provides a supervised daycare facility to support students who require childcare services.',
  },
  {
    q: 'Can male students apply?',
    a: 'Yes. Male students may be admitted subject to seat availability and payment of the subsidised fee.',
  },
  {
    q: 'Can international students enrol?',
    a: 'Students with Khyber Pakhtunkhwa (KP) and Gilgit-Baltistan (GB) domiciles can enrol in the courses.',
  },
  {
    q: 'What are the training locations?',
    a: 'Training is delivered through the main hub at IMSciences, Peshawar, and through partner spoke institutes in D.I. Khan, Skardu, Gilgit, and Haripur.',
  },
  {
    q: 'Are hostel facilities available?',
    a: 'Yes, the Centre of Excellence (CoE) provides free hostel facilities to its students. However, accommodation is limited and subject to availability.',
  },
  {
    q: 'Will I receive a certificate after completing the course?',
    a: 'Yes, after successfully completing the course, the trainee will be required to get assessed and certified by a government body; furthermore, trainees will be given an opportunity to get international certifications free of cost.',
  },
  {
    q: 'What support is available after course completion?',
    a: 'The CoE provides job placement facilities and incubation support to help graduates transition into employment or start their own digital ventures.',
  },
  {
    q: 'What are the class hours, timings, and attendance requirements?',
    a: 'The hours and schedule vary depending on the course. However, 75% attendance is compulsory for all courses.',
  },
  {
    q: 'Are the classes online or in person?',
    a: 'All classes are conducted in person.',
  },
];

// ------ HUB FEATURES (homepage) ------------------------------
const hubFeatures = [
  'State-of-the-art Infrastructure',
  'Inclusive and Accessible Centre',
  'Intl Accredited Qualifications',
  'Smart Classrooms',
  'Hi-Tech Labs/Gaming Room',
  'Digital Library',
  'Fab-Lab',
  'Job Placement Facilities',
  'Incubation Facilities',
  'Day Care',
  'Hostel',
];

const spokeInstitutes = [
  'Government Technical and Vocational Training Centre for Women, KTS Haripur',
  'Government Polytechnic Institute for Women, D.I.Khan',
  'Karakoram International University, Gilgit',
  'Government Polytechnic Institute, Torghu, Skardu',
];

// Hero carousel slides (rendered server-side, animated client-side with Slick)
const heroSlides = [
  {
    title: 'Centre of Excellence for digital and high-tech skills',
    subtitle: 'Funded by the European Union and German Government\nImplemented by British Council Pakistan',
    layout: 'two-col',
    images: [
      { src: '/images/coe-slider/coe_01.webp', mobile: true ,alt: 'Centre of Excellence for digital and high-tech skills - Image 1' },
      { src: '/images/coe-slider/coe_02.webp',mobile: true ,alt: 'Centre of Excellence for digital and high-tech skills - Image 2' },
    ],
  },
  {
    title: 'Trainings in High Tech Digital Skills to 1500 Women from KP & GB',
    subtitle: '',
    layout: 'one-plus-two',
    images: [
      { src: '/images/second-slider/second_slider_01.webp', mobile: true, alt: 'Trainings in High Tech Digital Skills to 1500 Women from KP & GB - Image 1' },
      { src: '/images/second-slider/second_slider_02.webp', mobile: true,  alt: 'Trainings in High Tech Digital Skills to 1500 Women from KP & GB - Image 2' },
      { src: '/images/second-slider/second_slider_03.webp', mobile: false, alt: 'Trainings in High Tech Digital Skills to 1500 Women from KP & GB - Image 3' },
    ],
  },
  {
    title: 'Modern Computer Labs & Smart Classrooms',
    subtitle: '',
    layout: 'one-plus-two',
    images: [
      { src: '/images/classroom-lab/classroom_1.webp', mobile: false, alt: 'Modern Computer Labs & Smart Classrooms - Image 1' },
      { src: '/images/classroom-lab/lab.webp', mobile: true, alt: 'Modern Computer Labs & Smart Classrooms - Image 2' },
      { src: '/images/digital-library-robot/robot-crp.webp', mobile: false, alt: 'Modern Computer Labs & Smart Classrooms - Image 3' },
    ],
  },
  {
    title: 'Day Care Centre',
    subtitle: '',
    layout: 'one-plus-two',
    images: [
      { src: '/images/library-daycare/daycare_02.webp', mobile: true, alt: 'Day Care Centre - Image 1' },
      { src: '/images/library-daycare/daycare_04.webp', mobile: false, alt: 'Day Care Centre - Image 2' },
      { src: '/images/library-daycare/daycare_03.webp', mobile: true, alt: 'Day Care Centre - Image 3' },
    ],
  },
  {
    title: 'Digital Library',
    subtitle: '',
    layout: 'two-col',
    images: [
      { src: '/images/digital-library-robot/digital_library_1.webp', mobile: true,  alt: 'Digital Library - Image 1' },
      { src: '/images/digital-library-robot/digital_library_2.webp', mobile: false, alt: 'Digital Library - Image 2' },
    ],
  },
  {
    title: 'Incubation Centre and Job Placement Office',
    subtitle: '',
    layout: 'one-plus-two',
    images: [
      { src: '/images/incubation-centre/incubation.webp', mobile: true, alt: 'Incubation Centre and Job Placement Office - Image 1' },
      { src: '/images/incubation-centre/job_placement_1.webp', mobile: true, alt: 'Incubation Centre and Job Placement Office - Image 2' },
      { src: '/images/incubation-centre/job_placement_2.webp', mobile: false, alt: 'Incubation Centre and Job Placement Office - Image 3' },
    ],
  },
];

// ------ COURSE DETAIL DATA -----------------------------------
// Each open IMSciences course gets a full detail object.
// The `applyLink` points to your Google Form — update APPLY_LINK at the top.

const courseDetails = {

  // ── 1. ARTIFICIAL INTELLIGENCE ─────────────────────────────
  'artificial-intelligence': {
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    tagline: 'Learn AI, Machine Learning, NLP, and Python while building real-world AI applications aligned with industry requirements.',
    about: 'This Artificial Intelligence programme provides practical, hands-on knowledge in machine learning, data processing, natural language processing, and AI application development. The course combines theory with real coding exercises, portfolio projects, and freelancing skills to prepare learners for careers in AI — from junior developer roles to independent freelance work on platforms like Fiverr and Upwork.',
    duration: '6 months with mandatory on-the-job training.',
    prerequisites: 'English proficiency, Intermediate certificate Problem solving skills, and Computer programming knowledge.',
    learn: [
      'Artificial Intelligence fundamentals',
      'Python programming from scratch',
      'Machine Learning algorithms',
      'Data preprocessing & analysis',
      'Regression and classification models',
      'Natural Language Processing (NLP)',
      'TensorFlow & PyTorch basics',
      'AI project & portfolio development',
      'Freelancing with Fiverr & Upwork',
      'Prompt engineering & AI tools',
    ],
    applyLink: APPLY_LINK,
    registrationsOpen: true,
  },

  // ── 2. CLOUD ENGINEERING ────────────────────────────────────
  'cloud-engineering': {
    slug: 'cloud-engineering',
    title: 'Cloud Engineering',
    tagline: 'Master cloud platforms, virtualization, and DevOps fundamentals for the next generation of IT infrastructure.',
    about: 'The Cloud Engineering programme equips learners with practical skills to deploy, manage, and secure cloud-based systems using AWS, Microsoft Azure, and Linux. Through hands-on labs, real-world projects, and on-the-job training, students gain the expertise needed for entry-level cloud administrator and cloud engineer roles in today\'s digital-first organisations.',
    duration: '6 months with mandatory on-the-job training.',
    prerequisites: 'English proficiency, Intermediate certification, and Basic networking knowledge.',
    learn: [
      'Cloud Computing concepts, models & frameworks',
      'Amazon Web Services (AWS) fundamentals',
      'Microsoft Azure essentials',
      'Linux operating system & command line',
      'Virtualization & containers (Docker)',
      'Cloud networking & security',
      'Infrastructure as Code basics',
      'Serverless computing',
      'Cloud monitoring & performance',
      'Deployment automation & DevOps introduction',
    ],
    applyLink: APPLY_LINK,
    registrationsOpen: true,
  },

  // ── 3. CYBERSECURITY ────────────────────────────────────────
  'cybersecurity': {
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    tagline: 'Protect systems and networks through ethical hacking, digital forensics, and security operations.',
    about: 'The Cybersecurity programme develops practical skills in system security, ethical hacking, vulnerability assessment, and cyber defence. Students work through real-world scenarios in a supervised lab environment, learning to think like both attackers and defenders. The programme aligns with NAVTTC competency standards and prepares learners for roles in security operations centres, penetration testing, and digital forensics.',
    duration: '6 months with mandatory on-the-job training.',
    prerequisites: 'English proficiency and Intermediate certification. Preference for candidates with a computing background.',
    learn: [
      'Cybersecurity fundamentals & the CIA triad',
      'Networking & protocols (TCP/IP, DNS, HTTP)',
      'Ethical hacking & penetration testing practices',
      'Vulnerability Assessment & Pen Testing (VAPT)',
      'Security Operations Centre (SOC) basics',
      'Digital forensics & incident response',
      'Risk management & compliance',
      'Web application security',
      'Cryptography & secure communications',
      'Freelancing as a cybersecurity specialist',
    ],
    applyLink: APPLY_LINK,
    registrationsOpen: true,
  },

  // ── 4. E-COMMERCE ───────────────────────────────────────────
  'e-commerce': {
    slug: 'e-commerce',
    title: 'E-Commerce',
    tagline: 'Launch, manage, and scale a successful online business from the ground up.',
    about: 'The E-Commerce programme teaches learners how to establish and grow digital businesses across major platforms including Amazon, Daraz, and Shopify. From product research and supplier management to digital marketing campaigns and business analytics, students graduate ready to run their own online stores or pursue careers managing e-commerce operations for established brands.',
    duration: '6 months with mandatory on-the-job training.',
    prerequisites: 'Basic computer skills, English proficiency, and Intermediate certification.',
    learn: [
      'E-commerce business models & platforms',
      'Product research & niche selection',
      'Supplier & inventory management system & software',
      'Online store setup (Shopify, Daraz, Amazon)',
      'Digital marketing for e-commerce',
      'SEO & paid advertising campaigns',
      'Social media & content marketing',
      'Customer service & returns management',
      'Business registration & accounting basics',
      'Analytics & performance tracking',
    ],
    applyLink: APPLY_LINK,
    registrationsOpen: true,
  },

  // ── 5. CREATIVE MOTION DESIGN ───────────────────────────────
  'creative-motion-design': {
    slug: 'creative-motion-design',
    title: 'Creative Motion Design (2D & 3D Animation & Video Editing',
    tagline: 'Develop professional motion graphics, animation, and visual storytelling skills using industry-standard creative tools.',
    about: 'The Creative Motion Design programme equips learners with professional animation, video production, motion graphics, and digital storytelling skills through project-based learning aligned with NAVTTC competency standards. Students build a strong portfolio while mastering tools like Adobe Creative Suite, Blender, and After Effects — preparing them for careers in media production, advertising, and digital content creation.',
    duration: '6 months with mandatory on-the-job training.',
    prerequisites: 'English Proficiency, Intermediate certification, Computer literacy, Strong aptitude and interest in Creative Arts.',
    learn: [
      'Visual Storytelling & Storyboarding — core modules',
      'Adobe Photoshop — photo editing & illustration',
      'Adobe Illustrator — vector & 2D design',
      'Adobe After Effects — motion graphics',
      'Adobe Premiere Pro — video editing',
      'Blender — 3D modelling & animation',
      'Typography & brand identity',
      'Color theory & composition',
      'Portfolio development',
      'Freelancing for creative professionals',
    ],
    applyLink: APPLY_LINK,
    registrationsOpen: true,
  },

  // ── KIU SPOKE: Web Development ─────────────────────────────
  'web-development': {
    slug: 'web-development',
    title: 'Web Development',
    tagline: 'Build modern, responsive websites and full-stack web applications using cutting-edge technologies.',
    about: 'This comprehensive Full Stack Web Development course took learners from complete beginner to proficient web developer. The programme covered frontend, backend, database management, and deployment, with a strong emphasis on hands-on projects and real-world applications using HTML, CSS, JavaScript, React, Node.js, and MongoDB.',
    duration: '6 months with mandatory on-the-job training.',
    prerequisites: 'Basic computer skills, English proficiency, and Intermediate certification.',
    learn: [
      'HTML5 & CSS3 fundamentals',
      'JavaScript programming and ES6+',
      'Responsive web design & mobile-first approach',
      'React.js for building interactive User Interfaces',
      'Backend development with Node.js',
      'Database management with MongoDB',
      'RESTful API design and implementation',
      'Version control with Git and GitHub',
      'Web hosting and deployment',
      'Performance optimization and SEO basics',
    ],
    applyLink: null,
    registrationsOpen: false,
  },

  // ── PREVIOUS COURSES (closed — no apply link) ───────────────
  'full-stack-web-development': {
    slug: 'full-stack-web-development',
    title: 'Full Stack Web Development',
    tagline: 'Build modern, responsive websites and full-stack web applications using cutting-edge technologies.',
    about: 'This comprehensive Full Stack Web Development course took learners from complete beginner to proficient web developer. The programme covered frontend, backend, database management, and deployment, with a strong emphasis on hands-on projects and real-world applications using HTML, CSS, JavaScript, React, Node.js, and MongoDB.',
    duration: '6 months with mandatory on-the-job training.',
    prerequisites: 'Basic computer skills, English proficiency, and Intermediate certification.',
    learn: [
      'HTML5 & CSS3 fundamentals',
      'JavaScript programming and ES6+',
      'Responsive web design & mobile-first approach',
      'React.js for building interactive User Interfaces',
      'Backend development with Node.js',
      'Database management with MongoDB',
      'RESTful API design and implementation',
      'Version control with Git and GitHub',
      'Web hosting and deployment',
      'Performance optimization and SEO basics',
    ],
    applyLink: null,
    registrationsOpen: false,
  },

  'digital-marketing': {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    tagline: 'Master social media marketing, SEO, Google Ads, and online branding to grow businesses in the digital age.',
    about: 'This Digital Marketing course prepared learners for careers in digital marketing through practical campaigns, live ad management, and real-world projects spanning SEO, social media, content marketing, and e-commerce advertising.',
    duration: '6 months with mandatory on-the-job training.',
    prerequisites: 'Basic computer skills, social media familiarity, and Intermediate certification.',
    learn: [
      'Digital marketing fundamentals',
      'Search Engine Optimisation (SEO)',
      'Google Ads & Pay-Per-Click (PPC) campaigns',
      'Social media marketing (Facebook, Instagram, LinkedIn)',
      'Email marketing & automation',
      'Content marketing & copywriting',
      'Video marketing & YouTube',
      'Analytics & reporting (Google Analytics)',
      'E-commerce marketing',
      'Brand strategy & online presence',
    ],
    applyLink: null,
    registrationsOpen: false,
  },
};

// ─────────────────────────────────────────────────────────────
module.exports = {
  APPLY_LINK,
  centers,
  footerSpokes,
  imsCourses,
  prevCourses,
  coursesByCenter,
  allCourseCategories,
  notifications,
  faqs,
  hubFeatures,
  spokeInstitutes,
  heroSlides,
  courseDetails,
};
