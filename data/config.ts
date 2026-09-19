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
    liveUrl: '/demos/nexora/',
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
    liveUrl: '/demos/siplab/#product',
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
    liveUrl: '/demos/soma/',
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