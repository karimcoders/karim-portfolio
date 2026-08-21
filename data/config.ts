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
  year: string; liveUrl?: string; caseStudy: boolean; featured: boolean;
};

export const projects: Project[] = [
  { title:'MROOI — AI SEO & Digital Tools Platform', slug:'mrooi', category:'AI • SEO • SaaS • Web Tools', description:'A digital tools ecosystem evolving toward a flagship evidence-first AI SEO audit platform.', image:'/projects/mrooi.jpg', technologies:['PHP','JavaScript','Next.js','TypeScript','AI APIs'], challenge:'Turn complex technical SEO signals into clear, customer-facing decisions.', solution:'Designed a modular audit suite covering technical SEO, performance, security, schema, content and social metadata with letter-grade reporting.', features:['Core Web Vitals','Security checks','Schema analysis','Content analysis','Evidence-first scoring'], year:'2026', caseStudy:true, featured:true },
  { title:'Bharat Hunt', slug:'bharat-hunt', category:'Platform • Web Application', description:'A community-driven platform for discovering and showcasing Indian projects, startups and ventures.', image:'/projects/bharat-hunt.jpg', technologies:['Web Platform','Responsive UI','Product Design'], challenge:'Make user-submitted ventures easy to add, browse and discover.', solution:'Structured the experience around clear project listings, discovery and community participation.', year:'2026', liveUrl:'https://bharathunt.org/', caseStudy:true, featured:true },
  { title:'Real-Time Cricket Scoring Platform', slug:'cricket-scoring', category:'Web App • Firebase • Real-Time Data', description:'A live scoring application with separate admin controls and user-facing match experiences.', image:'/projects/cricket.jpg', technologies:['HTML','CSS','JavaScript','Firebase'], challenge:'Keep match state, player statistics and multiple live views synchronized.', solution:'Built a Firebase Realtime Database workflow for scoring, striker management, innings, archives and instant score updates.', features:['Toss & team selection','Runs, wickets & extras','Player statistics','Multiple matches','Reset/archive workflow'], year:'2025', caseStudy:true, featured:true },
  { title:'Smart Inventory & Shop Management', slug:'inventory', category:'Business Web App • Inventory', description:'A mobile-responsive product concept for stock, location, payment and multi-shop workflows.', image:'/projects/inventory.jpg', technologies:['JavaScript','Business UX','QR Workflows'], challenge:'Unify everyday shop operations without making the interface complex.', solution:'Explored product tracking, warehouse location, search, QR payments, receipts, accounts, alerts and AI-assisted workflows.', year:'2025', caseStudy:true, featured:true },
  { title:'Tanvi Eye Center', slug:'tanvi-eye-center', category:'Healthcare • WordPress • UI/UX', description:'A trust-focused healthcare website with clear services, modern hierarchy and conversion-led calls to action.', image:'/projects/tanvi.jpg', technologies:['WordPress','Elementor','Responsive Design'], challenge:'Present clinical services clearly while keeping the experience welcoming and credible.', solution:'Created a responsive information structure with strong service navigation and accessible enquiry paths.', year:'2025', caseStudy:true, featured:true },
  { title:'Blueways Water Solutions', slug:'blueways', category:'Corporate Website • WordPress', description:'A brand-led corporate website for a water solutions company, structured around services and business credibility.', image:'/projects/blueways.jpg', technologies:['WordPress','UI/UX','Corporate Web'], challenge:'Turn a technical service offering into an understandable business website.', solution:'Applied the established teal and blue identity to a responsive, service-first content system.', features:['Client-provided: 1,000+ completed projects','Client-provided: 1.5M+ litres saved/day','Client-provided: 250+ satisfied customers'], year:'2025', caseStudy:true, featured:true },
  { title:'Adprint', slug:'adprint', category:'Corporate Website • WordPress • Performance', description:'WordPress and Elementor development with responsive implementation, optimization and performance troubleshooting.', image:'/projects/mrooi.jpg', technologies:['WordPress','Elementor','Performance'], challenge:'Improve reliability and responsiveness in a real-world WordPress build.', solution:'Combined UI implementation with structured troubleshooting and performance optimization.', year:'2025', caseStudy:false, featured:false },
  { title:'E-Commerce & Online Stores', slug:'ecommerce', category:'WooCommerce • Shopify', description:'Responsive storefront systems spanning product pages, customer accounts, payments, checkout and product management.', image:'/projects/inventory.jpg', technologies:['WooCommerce','Shopify','Payments'], challenge:'Create friction-free shopping journeys that remain manageable for store teams.', solution:'Build around clear product discovery, dependable checkout and practical catalog operations.', year:'2025', caseStudy:false, featured:false }
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