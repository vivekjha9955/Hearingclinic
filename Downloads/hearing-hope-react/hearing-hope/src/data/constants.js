// ===== NAVIGATION DATA =====
// export const NAV_LINKS = [
//   { label: "Home", href: "#" },
//   { label: "About", href: "#about" },
//   {
//     label: "Services",
//     href: "#services",
//     dropdown: [
//       { label: "Hearing Care Solution in Ranchi", href: "#" },
//       { label: "Hearing Test in Ranchi", href: "#" },
//       { label: "Hearing Aid Center in Delhi", href: "#" },
//       { label: "Speech Therapy in Delhi", href: "#" },
//       { label: "ENT Services in Delhi", href: "#" },
//       { label: "Pure Tone Audiometry Test", href: "#" },
//       { label: "BERA Test in Delhi", href: "#" },
//       { label: "OAE Test in Delhi", href: "#" },
//     ],
//   },
//   {
//     label: "Hearing Aids",
//     href: "#products",
//     dropdown: [
//       { label: "BTE Hearing Aids", href: "#" },
//       { label: "CIC Hearing Aids", href: "#" },
//       { label: "ITC Hearing Aids", href: "#" },
//       { label: "IIC Hearing Aids", href: "#" },
//       { label: "RIC Hearing Aids", href: "#" },
//       { label: "Rechargeable Hearing Aids", href: "#" },
//       { label: "Bluetooth Hearing Aids", href: "#" },
//       { label: "Wireless Hearing Aids", href: "#" },
//       { label: "Pocket Hearing Aids", href: "#" },
//     ],
//   },
//   { label: "Blog", href: "#blogs" },
//   { label: "FAQ", href: "#" },
// ];
export const SERVICES_DATA = [
  {
    id: 1,
    slug: "hearing-evaluation",
    icon: "fas fa-ear-listen",
    title: "Hearing Evaluation",
    shortDesc:
      "Comprehensive hearing assessments to accurately diagnose hearing loss and recommend the most suitable treatment options.",
    longDesc:
      "Our hearing evaluation service includes a detailed assessment of your auditory health using advanced diagnostic tools and clinical expertise. We carefully examine your hearing ability, identify the degree and type of hearing loss, and provide a clear understanding of your hearing condition. This evaluation helps us recommend the most appropriate treatment plan, whether it involves hearing aids, therapy, or further clinical care. We provide hearing tests for children, adults, and senior citizens in a comfortable and professional environment.",
    points: [
      "Pure tone hearing assessment",
      "Speech audiometry and listening evaluation",
      "Diagnosis of hearing loss type and severity",
      "Personalized treatment recommendations",
      "Suitable for all age groups"
    ]
  },
  {
    id: 2,
    slug: "hearing-aid-fitting",
    icon: "fas fa-headphones",
    title: "Hearing Aid Fitting",
    shortDesc:
      "Professional hearing aid selection, fitting, programming, and adjustment for maximum comfort and performance.",
    longDesc:
      "We provide expert hearing aid fitting services tailored to your hearing profile, lifestyle, and comfort needs. Our specialists help you choose the right hearing aid model, program it according to your hearing test results, and fine-tune the settings for clear and natural sound quality. We also guide you on usage, maintenance, and follow-up adjustments to ensure long-term satisfaction. Our goal is to help you hear better with confidence and comfort.",
    points: [
      "Selection of suitable hearing aid models",
      "Custom fitting for comfort and accuracy",
      "Digital programming and sound optimization",
      "Trial and adjustment support",
      "Guidance on care, usage, and maintenance"
    ]
  },
  {
    id: 3,
    slug: "speech-language-evaluation",
    icon: "fas fa-comments",
    title: "Speech & Language Evaluation",
    shortDesc:
      "Detailed assessment of speech, language, and communication abilities for children and adults.",
    longDesc:
      "Our speech and language evaluation service is designed to identify communication challenges such as speech delay, articulation difficulties, language disorders, fluency issues, and voice-related concerns. We assess the individual’s ability to understand, express, and communicate effectively, and create a personalized therapy plan based on the findings. This service is especially beneficial for children with developmental speech delays as well as adults facing speech or language difficulties.",
    points: [
      "Assessment of speech clarity and articulation",
      "Language understanding and expression evaluation",
      "Communication skill analysis",
      "Fluency and voice screening",
      "Individualized therapy planning"
    ]
  },
  {
    id: 4,
    slug: "speech-therapy",
    icon: "fas fa-comment-medical",
    title: "Speech Therapy",
    shortDesc:
      "Personalized therapy sessions to improve speech clarity, language development, and communication confidence.",
    longDesc:
      "Our speech therapy sessions are customized to help children and adults overcome speech and communication challenges. Whether it is speech delay, unclear pronunciation, stammering, language delay, or communication difficulty after illness or hearing loss, our qualified Speech-Language Pathologists provide structured therapy with measurable progress. We focus on improving speech clarity, language comprehension, expressive skills, and overall communication confidence.",
    points: [
      "Speech delay and language delay therapy",
      "Articulation and pronunciation correction",
      "Stammering and fluency support",
      "Voice and communication therapy",
      "Child and adult therapy programs"
    ]
  },
  {
    id: 5,
    slug: "hearing-rehabilitation",
    icon: "fas fa-heart-pulse",
    title: "Hearing Rehabilitation",
    shortDesc:
      "End-to-end hearing care support including counseling, adaptation training, and long-term hearing health management.",
    longDesc:
      "Hearing rehabilitation is a complete support program designed to help individuals adjust to hearing loss and improve their communication in daily life. This includes counseling, hearing aid adaptation support, listening strategies, auditory training, and follow-up care. Our rehabilitation services help patients and families better understand hearing loss and build confidence in using hearing solutions effectively. This service ensures that hearing care goes beyond diagnosis and becomes part of long-term quality of life improvement.",
    points: [
      "Counseling for patients and families",
      "Hearing aid adaptation and follow-up support",
      "Listening and communication strategies",
      "Auditory training and confidence building",
      "Long-term hearing wellness guidance"
    ]
  }
];
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  {
    label: "Services",
    href: "/#services",
    dropdown: [
      { label: "Hearing Evaluation", href: "/services/hearing-evaluation" },
      { label: "Hearing Aid Fitting", href: "/services/hearing-aid-fitting" },
      { label: "Speech & Language Evaluation", href: "/services/speech-language-evaluation" },
      { label: "Speech Therapy", href: "/services/speech-therapy" },
      { label: "Hearing Rehabilitation", href: "/services/hearing-rehabilitation" },
    ],
  },
  {
    label: "Hearing Aids",
    href: "/#brands",
    dropdown: [
      { label: "Phonak Hearing Aids", href: "/brands/1" },
      { label: "Signia Hearing Aids", href: "/brands/2" },
      { label: "Widex Hearing Aids", href: "/brands/3" },
      { label: "Oticon Hearing Aids", href: "/brands/4" },
      { label: "Starkey Hearing Aids", href: "/brands/5" },
      { label: "ReSound Hearing Aids", href: "/brands/6" },
      { label: "Unitron Hearing Aids", href: "/brands/7" },
      { label: "Audio Service Hearing Aids", href: "/brands/8" },
    ],
  },
  { label: "Blog", href: "/#blogs" },
  { label: "FAQ", href: "/faq" },
];

// ===== HERO SLIDES =====
export const HERO_SLIDES = [
  {
    id: 1,
    gradient: "linear-gradient(135deg, #3d0000 0%, #800000 60%, #a00000 100%)",
    title: "Best Hearing Care Clinic in Ranchi",
    subtitle:
      "We are a Signia Certified Center delivering advanced, compassionate hearing care to improve your quality of life.",
    btnText: "Our Services",
    btnIcon: "fas fa-stethoscope",
    btnHref:  "/#services",
    icon: "fas fa-ear-listen",
  },
  {
    id: 2,
    gradient: "linear-gradient(135deg, #3d0000 0%, #800000 60%, #a00000 100%)",
    title: "Advanced Hearing Aids for Every Need",
    subtitle:
      "Explore our wide range of Signia hearing aids — customized fitting for maximum comfort and performance.",
    btnText: "View Products",
    btnIcon: "fas fa-headphones",
    btnHref: "/#Brands",
    icon: "fas fa-headphones-simple",
  },
  {
    id: 3,
    gradient: "linear-gradient(135deg, #3d0000 0%, #800000 60%, #a00000 100%)",
    title: "17+ Years of Trusted Hearing Healthcare",
    subtitle:
      "Join thousands of happy patients who regained their hearing confidence with our expert audiologists.",
    btnText: "Book Appointment",
    btnIcon: "fas fa-calendar-check",
    btnHref: "/#contact",
    icon: "fas fa-user-doctor",
  },
];

// ===== SERVICES DATA =====
export const SERVICES = [
  {
    id: 1,
    icon: "fas fa-microscope",
    title: "Hearing Test",
    description:
      "Conducting precise, state-of-the-art hearing tests to evaluate auditory function and determine the best solutions for any degree of hearing loss.",
    href: "#",
  },
  {
    id: 2,
    icon: "fas fa-headphones",
    title: "Hearing Aid",
    description:
      "Offering advanced, customizable hearing aids designed to enhance sound quality and ensure comfort, empowering individuals with hearing loss to live confidently.",
    href: "#",
  },
  {
    id: 3,
    icon: "fas fa-comments",
    title: "Speech Therapy",
    description:
      "Delivering tailored speech therapy sessions to address speech and language disorders, fostering clearer communication and boosting confidence in everyday interactions.",
    href: "#",
  },
  {
    id: 4,
    icon: "fas fa-heart-pulse",
    title: "Hearing Care",
    description:
      "Providing personalized hearing care solutions, from consultation to ongoing support, aimed at preserving auditory health and improving overall quality of life.",
    href: "#",
  },
];

// ===== STATS DATA =====
export const STATS = [
  { id: 1, icon: "fas fa-calendar-days", target: 17, suffix: "+", label: "Years of Experience" },
  { id: 2, icon: "fas fa-face-smile", target: 7000, suffix: "+", label: "Happy Customers" },
  { id: 3, icon: "fas fa-headphones", target: 3000, suffix: "+", label: "Hearing Aids Sold" },
  { id: 4, icon: "fas fa-stethoscope", target: 8000, suffix: "+", label: "Hearing Tests Done" },
];

// ===== PRODUCTS DATA =====
export const PRODUCTS = [
  {
    id: 1,
    icon: "fas fa-headphones",
    title: "Signia BTE Fun P",
    description:
      "An affordable and easy-to-use hearing aid that offers excellent amplification for mild to moderate hearing loss.",
    href: "#",
  },
  {
    id: 2,
    icon: "fas fa-volume-high",
    title: "Signia BTE Fun SP",
    description:
      "Powerful BTE device perfect for individuals with severe hearing loss, offering high amplification and simple controls.",
    href: "#",
  },
  {
    id: 3,
    icon: "fas fa-sliders",
    title: "Signia Digital 8 Channel",
    description:
      "A digital hearing aid featuring 8 channels for precise sound tuning, ensuring natural sound reproduction.",
    href: "#",
  },
  {
    id: 4,
    icon: "fas fa-ear-listen",
    title: "Signia CIC Prompt Custom",
    description:
      "Completely-in-canal (CIC) custom hearing aid, practically invisible with personalized fitting and high-quality sound.",
    href: "#",
  },
  {
    id: 5,
    icon: "fas fa-broadcast-tower",
    title: "Signia Digital 12 Channel",
    description:
      "Featuring 12 channels for superior sound precision, allowing users to enjoy clearer speech in any situation.",
    href: "#",
  },
  {
    id: 6,
    icon: "fas fa-battery-full",
    title: "Pure Charge & Go 1AX – 16 Channel",
    description:
      "Rechargeable hearing aid offering all-day use with 16-channel sound processing, perfect for active lifestyles.",
    href: "#",
  },
  {
    id: 7,
    icon: "fab fa-bluetooth-b",
    title: "Signia Kit Styletto 1AX – 16 Channel",
    description:
      "Stylish and innovative hearing aid with 16 channels, combining aesthetic design and advanced sound technology.",
    href: "#",
  },
  {
    id: 8,
    icon: "fas fa-circle-dot",
    title: "Signia Silk 1X – 16 Channel",
    description:
      "Nearly invisible hearing aid with 16 channels, providing natural sound and a snug fit for enhanced discretion.",
    href: "#",
  },
  {
    id: 9,
    icon: "fas fa-wave-square",
    title: "Signia BTE Intuis 4.1 P/SP",
    description:
      "A powerful BTE hearing aid available in power and super power options, offering clear sound for moderate to severe hearing loss.",
    href: "#",
  },
  {
    id: 10,
    icon: "fas fa-signal",
    title: "Signia RIC Pure 1AX",
    description:
      "Advanced RIC hearing aid with enhanced sound processing technology for greater speech clarity in various situations.",
    href: "#",
  },
  {
    id: 11,
    icon: "fas fa-microchip",
    title: "Signia Digital 16 Channel",
    description:
      "A 16-channel digital hearing aid providing precise sound customization and excellent clarity across various environments.",
    href: "#",
  },
  {
    id: 12,
    icon: "fas fa-bolt",
    title: "Signia Kit Active – 16 Channel",
    description:
      "A cutting-edge high-tech hearing aid designed for active users, featuring 16 channels and a sleek design.",
    href: "#",
  },
];

// ===== WHY TRUST DATA =====
export const TRUST_ITEMS = [
  { id: 1, icon: "fas fa-certificate", label: "Signia Certified Center" },
  { id: 2, icon: "fas fa-user-doctor", label: "Team of Professional Audiologists" },
  { id: 3, icon: "fas fa-microscope", label: "World Class Equipments" },
  { id: 4, icon: "fas fa-clock", label: "17+ Years of Experience" },
  { id: 5, icon: "fas fa-house-medical", label: "Home Visit Facility" },
  { id: 6, icon: "fas fa-comments", label: "Speech Therapy Available" },
];

// ===== TESTIMONIALS DATA =====
export const TESTIMONIALS = [
  {
    id: 1,
    avatar: "R",
    name: "Ritik Mehta",
    text: "I recently bought a hearing aid from here. People were very friendly and helpful and explained it very calmly and reasonably how to use it. Their service was very good.",
    rating: 5,
  },
  {
    id: 2,
    avatar: "S",
    name: "Suman Kumar Mishra",
    text: "Got new machine feeling better and balanced. Most important that they understand the need of person who visits. Good experience doctor with expertise and staff well mannered. Thank you.",
    rating: 5,
  },
  {
    id: 3,
    avatar: "P",
    name: "Prakash Sharma",
    text: "I am a repeat customer of Hearing Hope and bought my new Hearing Aids from them. The whole team is very customer-friendly and gives service with a smile. All the very best to the whole team!",
    rating: 5,
  },
  {
    id: 4,
    avatar: "S",
    name: "Srishti Banzal",
    text: "The staff was very professional and friendly. They gave my grandmother a very good audiometry and hearing aid trial at home. I would recommend Hearing Hope for your needs.",
    rating: 5,
  },
  {
    id: 5,
    avatar: "G",
    name: "Gaurav Vij",
    text: "Happy with service. The staff is very co-operative. They provide the best services to their patients and Explained about the product and provided a good hearing aid for my brother. Thanks.",
    rating: 5,
  },
];

// ===== CERTIFICATIONS =====
export const CERTIFICATIONS = [
  { id: 1, icon: "fas fa-award" },
  { id: 2, icon: "fas fa-medal" },
  { id: 3, icon: "fas fa-certificate" },
  { id: 4, icon: "fas fa-shield-halved" },
  { id: 5, icon: "fas fa-ribbon" },
  { id: 6, icon: "fas fa-star" },
  { id: 7, icon: "fas fa-trophy" },
  { id: 8, icon: "fas fa-check-circle" },
];

// ===== BLOGS DATA =====
export const BLOGS = [
  {
    id: 1,
    icon: "fas fa-ear-listen",
    date: "January 2026",
    title: "Top Features of Signia 5IX Hearing Aid You Need to Know",
    excerpt:
      "If you are looking for a hearing solution that delivers exceptional sound clarity, the Signia 5IX might be right for you...",
    href: "#",
  },
  {
    id: 2,
    icon: "fas fa-headphones-simple",
    date: "January 2026",
    title: "Why the Signia 3IX Hearing Aid Is a Game-Changer for Hearing Loss",
    excerpt:
      "Hearing loss can affect anyone, and it often comes gradually. The Signia 3IX is designed to address this effectively...",
    href: "#",
  },
  {
    id: 3,
    icon: "fas fa-stethoscope",
    date: "September 2025",
    title: "What Is the Best Signia Hearing Aid? Complete 2025 Guide",
    excerpt:
      "If you're wondering what is the best Signia hearing aid, this comprehensive guide covers all models and use cases...",
    href: "#",
  },
];

// ===== CONTACT INFO =====
export const CONTACT_INFO = {
  email: "indian.speechhearingclinic@gmail.com",
  // phone1: "+91 8210394248",
  phone1:"+91 6367667306",
  phone2: "+91 6367667306",
  whatsapp: "6367667306",
  locations: [
    {
      id: 1,
      label: "Indian Speech & Hearing Clinic",
      address:
        "Indian Speech and Hearing Clinic, 1st floor, Arctic Mall, Bariatu Road, Ranchi-834009, Ranchi, India, Jharkhand",
    },
  ],
};

// ===== FOOTER LINKS =====
export const FOOTER_COMPANY_LINKS = [
  { label: "Home", href: "/#" },
  { label: "About", href: "/#about" },
  { label: "Hearing Aids Types", href: "/#" },
  { label: "Hearing Aids Models", href: "/#products" },
  { label: "Blog", href: "/#blogs" },
  { label: "Contact Us", href: "/#contact" },
];

export const FOOTER_SERVICE_LINKS = [
  { label: "Hearing Test", href: "/#" },
  { label: "Hearing Aid", href: "/#" },
  { label: "Hearing Care", href: "/#" },
  { label: "Speech Therapy", href: "/#" },
  { label: "ENT Services", href: "/#" },
  { label: "BERA Test", href: "/#" },
];

// ===== HEARING BRANDS =====
export const HEARING_BRANDS = [
  {
    id: 1,
    brand: "Phonak",
    icon: "fas fa-headphones",
    tagline: "Excellent speech clarity & powerful Bluetooth connectivity",
    models: [
      {
        name: "Audeo Lumity",
        type: "RIC",
        icon: "fas fa-headphones",
        desc: "Latest generation with stellar speech clarity in noise. Features AutoSense OS 5.0 that automatically adapts to any sound environment for a seamless listening experience.",
      },
      {
        name: "Audeo Paradise",
        type: "RIC",
        icon: "fas fa-wifi",
        desc: "Universal connectivity to any Bluetooth device. Crystal-clear sound with motion sensor hearing that adapts dynamically to your movement and environment.",
      },
      {
        name: "Naída Paradise",
        type: "BTE Power",
        icon: "fas fa-bolt",
        desc: "Designed for severe to profound hearing loss. Ultra-powerful amplification without compromising on sound quality or wearing comfort.",
      },
      {
        name: "Virto Paradise",
        type: "Custom IIC",
        icon: "fas fa-eye-slash",
        desc: "Virtually invisible custom-fit aid built into the ear canal. Personalized fit crafted from your ear impression with premium Paradise sound quality.",
      },
    ],
  },
  {
    id: 2,
    brand: "Signia",
    icon: "fas fa-ear-listen",
    tagline: "Stylish design & AI-powered sound processing",
    models: [
      {
        name: "Pure Charge & Go IX",
        type: "RIC Rechargeable",
        icon: "fas fa-battery-full",
        desc: "AI-powered with Own Voice Processing technology. Rechargeable all-day battery with seamless Bluetooth streaming to phones and TVs.",
      },
      {
        name: "Styletto IX",
        type: "Slim RIC",
        icon: "fas fa-gem",
        desc: "Fashion-forward slim design with premium IX sound platform. Recharges like a smartphone — the charging case provides 3 full charges on the go.",
      },
      {
        name: "Insio AX",
        type: "Custom ITC",
        icon: "fas fa-microchip",
        desc: "Custom-crafted invisible aid with Augmented Xperience platform. Splits sound processing for razor-sharp speech clarity in any environment.",
      },
      {
        name: "Silk Charge & Go",
        type: "Instant Fit CIC",
        icon: "fas fa-circle-dot",
        desc: "Ready-to-wear invisible aid — no custom fitting needed. The smallest rechargeable hearing aid available, fitting instantly and comfortably.",
      },
    ],
  },
  {
    id: 3,
    brand: "Widex",
    icon: "fas fa-music",
    tagline: "Natural sound quality & exceptional music performance",
    models: [
      {
        name: "Widex Moment",
        type: "RIC",
        icon: "fas fa-wave-square",
        desc: "PureSound technology eliminates the artificial sound effect. Delivers the most natural sound experience, indistinguishable from normal hearing.",
      },
      {
        name: "Widex SmartRIC",
        type: "RIC",
        icon: "fas fa-sliders",
        desc: "Unique ergonomic design with long-lasting rechargeable battery. Smart controls and excellent directional microphone system for speech focus.",
      },
      {
        name: "Widex Evoke",
        type: "RIC",
        icon: "fas fa-brain",
        desc: "Machine learning adapts to your personal preferences over time. SoundSense Learn creates a truly personalized hearing experience unique to you.",
      },
    ],
  },
  {
    id: 4,
    brand: "Oticon",
    icon: "fas fa-brain",
    tagline: "BrainHearing technology for better speech in noise",
    models: [
      {
        name: "Oticon Real",
        type: "RIC",
        icon: "fas fa-wind",
        desc: "Handles sudden disturbing sounds like wind and handling noise in real time. Delivers a balanced, real-life sound experience with BrainHearing technology.",
      },
      {
        name: "Oticon More",
        type: "RIC",
        icon: "fas fa-network-wired",
        desc: "Deep Neural Network trained on 12 million real-life sounds. Gives the brain more sound detail and context to work with for effortless understanding.",
      },
      {
        name: "Oticon Own",
        type: "Custom IIC/CIC",
        icon: "fas fa-eye-slash",
        desc: "Invisible custom hearing aid with the full BrainHearing chip inside. Personalized fit crafted from your ear impression for all-day comfort.",
      },
    ],
  },
  {
    id: 5,
    brand: "Starkey",
    icon: "fas fa-star",
    tagline: "AI features, health tracking & fall detection",
    models: [
      {
        name: "Evolv AI",
        type: "RIC",
        icon: "fas fa-robot",
        desc: "Advanced AI processes sound 55 million times per second. Built-in health sensors track activity, heart rate, and detect falls automatically.",
      },
      {
        name: "Genesis AI",
        type: "RIC",
        icon: "fas fa-dna",
        desc: "Most advanced Starkey platform yet. Edge Mode+ provides instant sound optimization in any environment with a single tap.",
      },
      {
        name: "Livio AI",
        type: "RIC",
        icon: "fas fa-heartbeat",
        desc: "World's first hearing aid to track both hearing and body health. Integrated sensors monitor physical activity and cognitive engagement.",
      },
      {
        name: "SoundLens",
        type: "Invisible IIC",
        icon: "fas fa-low-vision",
        desc: "Completely invisible sitting deep in the ear canal. Custom-fit for a comfortable all-day wear with natural sound pickup from the ear's position.",
      },
    ],
  },
  {
    id: 6,
    brand: "ReSound",
    icon: "fas fa-signal",
    tagline: "Strong connectivity, clear sound & great app control",
    models: [
      {
        name: "ReSound Nexia",
        type: "RIC",
        icon: "fas fa-rss",
        desc: "Auracast broadcast technology ready. Connects directly to more devices than any other hearing aid with ultra-low energy Bluetooth.",
      },
      {
        name: "ReSound Omnia",
        type: "RIC",
        icon: "fas fa-globe",
        desc: "Full surround sound with 150% better speech understanding in noise. Organic Hearing philosophy delivers the most natural sound experience.",
      },
      {
        name: "ReSound ONE",
        type: "RIC",
        icon: "fas fa-fingerprint",
        desc: "Unique microphone inside the ear canal captures sound the natural way. M&RIE design delivers unmatched spatial awareness and natural hearing.",
      },
      {
        name: "ENZO Q",
        type: "BTE Power",
        icon: "fas fa-volume-up",
        desc: "Made for severe to profound hearing loss. Superpower performance with direct iPhone streaming and a long-lasting rechargeable option.",
      },
    ],
  },
  {
    id: 7,
    brand: "Unitron",
    icon: "fas fa-sliders",
    tagline: "Flexible upgrade options & great mid-range performance",
    models: [
      {
        name: "Moxi Blu",
        type: "RIC",
        icon: "fas fa-tint",
        desc: "Rechargeable RIC with Bluetooth streaming and AutoPath feature. Excellent mid-range performance with flexible upgrade options as your needs change.",
      },
      {
        name: "Moxi Jump",
        type: "RIC",
        icon: "fas fa-arrow-up",
        desc: "Compact and discreet RIC hearing aid. Easy to use with smart controls and reliable performance across everyday listening environments.",
      },
      {
        name: "Insera",
        type: "Custom ITC",
        icon: "fas fa-circle",
        desc: "Custom in-the-ear hearing aid with a natural fit. Discreet design with solid performance for mild to moderately-severe hearing loss.",
      },
    ],
  },
];