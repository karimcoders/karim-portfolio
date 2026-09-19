export const siteConfig = {
  name: 'Karim',
  title: 'Web Developer & Digital Product Builder',
  location: 'Patna, Bihar, India',
  email: '', // Add your professional email before deployment
  github: '', // Add your GitHub URL
  linkedin: '', // Add your LinkedIn URL
  upwork: '', // Add your Upwork URL
  canonicalUrl: 'https://your-domain.vercel.app', // Replace after first Vercel deployment
};

export type Project = {
  title: string; slug: string; category: string; description: string; image: string;
  technologies: string[]; challenge: string; solution: string; features?: string[];
  year: string; liveUrl?: string; adminUrl?: string; demoLogin?: { id: string; password: string };
  caseStudy: boolean; featured: boolean;
};

export const projects: Project[] = [
  {
    title: 'ADIELAS — Pediatric Nutrition E-Commerce',
    slug: 'adielas',
    category: 'E-Commerce • Full Store + Admin Panel',
    description: 'A premium e-commerce experience for ADIELAS, a pediatric nutrition brand selling stage-wise sprouted ragi and multigrain products — complete product catalog, cart, multi-gateway checkout and a full admin panel.',
    image: '/projects/adielas.jpg',
    technologies: ['Next.js', 'React', 'TypeScript', 'E-Commerce', 'Admin Panel', 'UPI & Card Payments'],
    challenge: 'Sell age-stage baby food online with the trust, clarity and simplicity parents need — plus give the brand owner a practical way to manage products and orders.',
    solution: 'Built a complete store on Next.js: stage-wise product journeys, cart and multi-gateway checkout, plus an admin panel with open demo credentials so the full backend can be explored.',
    features: ['Stage-wise product catalog', 'Cart & secure checkout (UPI, cards, wallets)', 'Admin panel with demo access', 'Pediatrician-trust storytelling', 'Responsive premium design'],
    year: '2026',
    liveUrl: 'https://adielas-ecommerce.vercel.app/',
    adminUrl: 'https://adielas-ecommerce.vercel.app/admin',
    demoLogin: { id: 'admin@adielas.com', password: 'Admin@123' },
    caseStudy: false,
    featured: true
  },
  {
    title: 'NEXORA — Performance Product Experience',
    slug: 'nexora',
    category: 'Creative Development • Product Landing',
    description: 'An original product story for a futuristic performance footwear concept, combining bold editorial typography, floating product imagery and a detailed technology narrative.',
    image: '/projects/nexora.jpg',
    technologies: ['React', 'JavaScript', 'Responsive UI', 'Motion Design'],
    challenge: 'Make a single product feel premium, technical and memorable without turning the experience into a conventional online store.',
    solution: 'Built a high-impact scrolling narrative with colour selection, technical feature sections, blueprint storytelling and responsive product presentation.',
    features: ['Interactive colour selection', 'Floating product presentation', 'Editorial technology sections', 'Responsive experience'],
    year: '2026',
    liveUrl: '/demos/nexora/index.html',
    caseStudy: true,
    featured: true
  },
  {
    title: 'SIPLAB — Experimental Beverage Brand',
    slug: 'siplab',
    category: 'Brand Website • Interactive Menu',
    description: 'An original colourful beverage brand experience that turns a signature menu into a strong visual product showcase with story, quality and contact sections.',
    image: '/projects/siplab.jpg',
    technologies: ['React', 'Responsive Design', 'UI Animation', 'Product UX'],
    challenge: 'Present multiple flavours with distinct personalities while keeping one consistent premium brand language.',
    solution: 'Created a responsive experience around bold colour systems, isolated product visuals, concise product cards and a clear brand story.',
    features: ['Signature menu', 'Product-focused visuals', 'Responsive layouts', 'Contact experience'],
    year: '2026',
    liveUrl: '/demos/siplab/index.html#product',
    caseStudy: true,
    featured: true
  },
  {
    title: 'SOMA — Botanical Milk Bar Experience',
    slug: 'soma',
    category: 'Creative Website • Product Storytelling',
    description: 'An original premium editorial experience built around botanical flavour, ritual and a visually rich product journey.',
    image: '/projects/soma.jpg',
    technologies: ['React', 'CSS Animation', 'Responsive UI', 'Creative Direction'],
    challenge: 'Translate a tactile café product into a digital experience that feels refined, warm and visually distinctive.',
    solution: 'Used layered imagery, oversized typography, product-led sections and subtle interaction to create a memorable browsing experience.',
    features: ['Editorial hero', 'Product storytelling', 'Motion details', 'Mobile-responsive design'],
    year: '2026',
    liveUrl: '/demos/soma/index.html',
    caseStudy: true,
    featured: true
  }
];

export const services = [
  ['WordPress Development','Custom websites, Elementor Pro, Divi, ACF, CPT UI, WooCommerce, theme work and REST API integrations.','WP'],
  ['Web Design & UI/UX','Conversion-focused landing pages, SaaS interfaces, dashboards and responsive mobile-first experiences.','UX'],
  ['Full-Stack Web Apps','Next.js, React, TypeScript, JavaScript, PHP, Firebase, APIs and data-driven applications.','</>'],
  ['AI & Automation','AI assistants, product features, content systems, SEO tools, API integrations and automated workflows.','AI'],
  ['SEO & Performance','Technical and on-page SEO, Core Web Vitals, schema, audits and search-friendly architecture.','↗'],
  ['E-Commerce','WooCommerce, Shopify, product systems, accounts, payment integrations and checkout customization.','₹']
];

export const stack = {
  Frontend:['HTML','CSS','JavaScript','React','Next.js','TypeScript'],
  Backend:['PHP','REST APIs','Firebase','Database systems'],
  CMS:['WordPress','Elementor','Elementor Pro','Divi','ACF','CPT UI'],
  'E-Commerce':['WooCommerce','Shopify'],
  'AI & APIs':['AI APIs','REST APIs','Google APIs','Automation workflows'],
  SEO:['Technical SEO','Rank Math','Core Web Vitals','Schema','Search optimization'],
  Tools:['GitHub','Figma','Photoshop','Adobe XD','Illustrator','PyCharm','Android Studio']
};

export type Sample = { title: string; slug: string; category: string; description: string; image: string; url: string };

export const samples: Sample[] = [
  {
    title: 'Moto Genius — Bike Parts Store',
    slug: 'motogenius',
    category: 'E-Commerce • Bike Accessories',
    description: 'SEO-optimized premium bike parts & accessories store with a clean product catalog and fast buying flow for riders.',
    image: '/projects/motogenius.jpg',
    url: 'https://motogeniusstore.com/'
  },
  {
    title: 'M Print House — Printing UAE',
    slug: 'mprinthouse',
    category: 'E-Commerce • Printing Services',
    description: 'Printing & branding services site for Dubai and Sharjah — banners, 3D signage, custom flags, merch and corporate gifts.',
    image: '/projects/mprinthouse.jpg',
    url: 'https://mprinthouse.ae/'
  },
  {
    title: 'Mr.Ooi — Technical SEO Agency',
    slug: 'mrooi',
    category: 'Agency Website • Technical SEO',
    description: 'Custom build for a technical SEO & AI-visibility studio — Core Web Vitals diagnostics, fixed-price offers and free tools.',
    image: '/projects/mrooi.jpg',
    url: 'https://mrooi.com/'
  },
  {
    title: 'Revamp — Creative Agency',
    slug: 'revamp',
    category: 'Agency Website • Creative Services',
    description: 'Creative agency website — web design, e-commerce, branding and social media campaigns in one sharp brand experience.',
    image: '/projects/revamp.jpg',
    url: 'https://revamp.ooisolutions.my/'
  },
  {
    title: 'Vacations Pilot — Travel & Tours',
    slug: 'vacationspilot',
    category: 'Travel • Tourism Website',
    description: 'Travel website with destination showcases — Kerala backwaters, Sikkim, Goa — and mood-based trip planning.',
    image: '/projects/vacationspilot.jpg',
    url: 'https://vacationspilot.com/'
  },
  {
    title: 'Vision Eye Care — Hospital Site',
    slug: 'roseybrown',
    category: 'Healthcare • Eye Hospital',
    description: 'Eye hospital website with online booking, cataract & refractive surgery info and specialist-led content. WordPress + Elementor.',
    image: '/projects/roseybrown.jpg',
    url: 'https://rosybrown-termite-108178.hostingersite.com/'
  },
  {
    title: 'MaxiVision — 30 Years Page',
    slug: 'maxivision',
    category: 'Healthcare • Milestone Landing',
    description: '30-years milestone landing page for MaxiVision Eye Hospitals — journey, leadership stories and celebration.',
    image: '/projects/maxivision.jpg',
    url: 'https://www.maxivisioneyehospital.com/30years/'
  },
  {
    title: 'La Gioia — Italian Restaurant',
    slug: 'lagioia',
    category: 'Hospitality • Restaurant Website',
    description: 'Italian restaurant site in Indiranagar, Bangalore — Neapolitan pizzas, handcrafted pastas, brunch and a curated bar menu.',
    image: '/projects/lagioia.jpg',
    url: 'https://lagioiaristorante.com/'
  },
  {
    title: 'MaasinMe — Silk Saree Store',
    slug: 'maasinme',
    category: 'E-Commerce • Handloom (Shopify)',
    description: 'Shopify store for pure handloom silk sarees — Sambalpuri, Berhampuri and Kotpad weaves with a clean product experience.',
    image: '/projects/maasinme.jpg',
    url: 'https://maasinme.com/'
  },
  {
    title: 'Pines — Nutrition Brand',
    slug: 'pines',
    category: 'Nutrition • Brand Website',
    description: 'Nutrition & wellness brand website with clean product storytelling for health-first families.',
    image: '/projects/pines.jpg',
    url: 'https://pinesnutrition.org/'
  }
];