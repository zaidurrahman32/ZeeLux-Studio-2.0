/* ============================================================================
   ZEELUX STUDIO — CONTENT CONFIGURATION
   ----------------------------------------------------------------------------
   This is the ONLY file you normally need to edit to update the website:
   bio, projects, skills, services, social links and contact details.
   Replace placeholder values (marked with // 🔴) with your real content.

   • Profile photo: replace  /public/images/profile.jpg  with your portrait
     (a placeholder .jpg or .png with that exact name).
   • Project images: drop files in /public/images/projects/ and reference
     them by filename, e.g. image: '/images/projects/my-project.jpg'.
   • Contact form: set `contact.formEndpoint` to your Formspree URL (or any
     endpoint that accepts form POSTs) to make the form deliver to your inbox.
   ============================================================================ */

export const site = {
  name: 'ZeeLux Studio',
  founder: 'Zaid Ur Rahman',
  // Your real professional portrait goes at /public/images/profile.jpg
  profileImage: '/images/profile.jpg',
  role: 'Web Developer & Founder of ZeeLux Studio',
  email: 'your.email@example.com', // 🔴 replace with your real email
  // Formspree (https://formspree.io) or similar form endpoint — 🔴 replace
  formEndpoint: '',
}

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  greeting: 'Hi, I’m Zaid Ur Rahman',
  title: 'Web Developer Building Modern Digital Experiences.',
  subtitle:
    'I design and develop fast, responsive and visually polished websites for businesses, brands and creators.',
  status: 'Available for new projects',
}

export const about = {
  heading: 'About Me',
  kicker: '// who I am',
  lead: 'Zaid Ur Rahman is a young web developer and the founder of ZeeLux Studio.',
  bio: 'Hi, I’m Zaid Ur Rahman, a young web developer and the founder of ZeeLux Studio. I create modern, responsive and professional websites for businesses, brands and personal projects. I combine clean design, modern development and AI-powered tools to turn ideas into polished digital experiences.',
  facts: [
    { label: 'Age', value: '16' },
    { label: 'Role', value: 'Web Developer' },
    { label: 'Studio', value: 'ZeeLux Studio' },
  ],
}

export const services = [
  {
    id: '01',
    title: 'Website Development',
    description:
      'Modern responsive websites designed and developed for businesses, brands and individuals.',
    icon: 'code',
  },
  {
    id: '02',
    title: 'Landing Pages',
    description:
      'High-converting and visually polished landing pages for products, services and campaigns.',
    icon: 'rocket',
  },
  {
    id: '03',
    title: 'Business Websites',
    description:
      'Professional online presence for startups, small businesses and growing brands.',
    icon: 'building',
  },
  {
    id: '04',
    title: 'E-Commerce Websites',
    description:
      'Modern online stores with product presentation, shopping functionality and scalable architecture.',
    icon: 'cart',
  },
  {
    id: '05',
    title: 'AI-Powered Web Experiences',
    description:
      'Modern websites created with AI-assisted development and carefully customized for real-world use.',
    icon: 'sparkles',
  },
  {
    id: '06',
    title: 'Website Maintenance',
    description:
      'Updates, improvements, content changes and ongoing technical support.',
    icon: 'wrench',
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'layout',
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
  },
  {
    title: 'Development',
    icon: 'layers',
    skills: ['React', 'Next.js', 'API Integration'],
  },
  {
    title: 'Tools',
    icon: 'tool',
    skills: ['Git', 'GitHub', 'AI Development Tools'],
  },
]

/* Project categories used by the filter */
export const projectCategories = [
  'All',
  'Business Website',
  'E-Commerce',
  'Landing Page',
  'Portfolio',
  'AI Website',
]

/* ----------------------------------------------------------------------------
   PROJECTS — placeholder projects are marked placeholder: true and show a
   clear "PLACEHOLDER" badge. Replace them (or add new objects) with your real
   work. Each project supports:
     title, category, description, tags[], image, liveUrl, repoUrl, placeholder
   • image:  path under /public, e.g. '/images/projects/lumen.jpg'
   • liveUrl / repoUrl: leave as '' to hide that button.
   ---------------------------------------------------------------------------- */
export const projects = [
  {
    title: 'Nova Business Site',
    category: 'Business Website',
    description:
      'Placeholder project — a modern multi-page business website concept with a glassmorphic UI and fast, responsive layouts.',
    tags: ['React', 'CSS', 'Responsive'],
    image: '',
    liveUrl: '',
    repoUrl: '',
    placeholder: true,
  },
  {
    title: 'Aurora Store',
    category: 'E-Commerce',
    description:
      'Placeholder project — an e-commerce storefront concept featuring product grids, cart UI and a clean checkout flow.',
    tags: ['Next.js', 'UI Design', 'API Integration'],
    image: '',
    liveUrl: '',
    repoUrl: '',
    placeholder: true,
  },
  {
    title: 'Pulse Launch Page',
    category: 'Landing Page',
    description:
      'Placeholder project — a conversion-focused landing page for a product launch with bold typography and CTA flow.',
    tags: ['HTML', 'JavaScript', 'Landing Page'],
    image: '',
    liveUrl: '',
    repoUrl: '',
    placeholder: true,
  },
  {
    title: 'Vertex Portfolio',
    category: 'Portfolio',
    description:
      'Placeholder project — a developer portfolio concept with dark aesthetics, project showcases and smooth motion.',
    tags: ['React', 'CSS', 'Animation'],
    image: '',
    liveUrl: '',
    repoUrl: '',
    placeholder: true,
  },
  {
    title: 'Synth AI Web App',
    category: 'AI Website',
    description:
      'Placeholder project — an AI-assisted web experience concept with streaming-style UI and API-driven content.',
    tags: ['Next.js', 'AI Tools', 'API Integration'],
    image: '',
    liveUrl: '',
    repoUrl: '',
    placeholder: true,
  },
  {
    title: 'Ledger Co. Website',
    category: 'Business Website',
    description:
      'Placeholder project — a professional website concept for a growing company, focused on trust, clarity and speed.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '',
    liveUrl: '',
    repoUrl: '',
    placeholder: true,
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Understanding your goals, audience and what the website needs to achieve.',
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Defining structure, pages, content and a clear roadmap before building.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'Crafting a modern, clean visual direction with layout, typography and spacing.',
  },
  {
    step: '04',
    title: 'Development',
    description: 'Building fast, responsive and maintainable code with modern web tools.',
  },
  {
    step: '05',
    title: 'Testing',
    description: 'Checking responsiveness, performance, accessibility and details across devices.',
  },
  {
    step: '06',
    title: 'Launch',
    description: 'Deploying the finished site and supporting you after it goes live.',
  },
]

export const whyPoints = [
  {
    title: 'Modern Design',
    description: 'Clean, premium interfaces with current design standards — not generic templates.',
    icon: 'sparkles',
  },
  {
    title: 'Responsive Development',
    description: 'Websites that look and work properly on phones, tablets and desktops.',
    icon: 'device',
  },
  {
    title: 'Clean User Experience',
    description: 'Intuitive structure and navigation so visitors find what they need quickly.',
    icon: 'layout',
  },
  {
    title: 'AI-Assisted Workflow',
    description: 'AI-powered tools speed up development, with every detail carefully customized.',
    icon: 'cpu',
  },
  {
    title: 'Client-Focused Communication',
    description: 'Clear updates and collaboration throughout the project, from idea to launch.',
    icon: 'chat',
  },
  {
    title: 'Continuous Improvement',
    description: 'Ongoing updates, refinements and support as your project grows over time.',
    icon: 'refresh',
  },
]

export const contact = {
  heading: 'Have a project in mind?',
  kicker: '// get in touch',
  text: 'Let’s turn your idea into a modern digital experience.',
  projectTypes: [
    'Website Development',
    'Landing Page',
    'Business Website',
    'E-Commerce Website',
    'AI-Powered Web Experience',
    'Website Maintenance',
    'Something Else',
  ],
  budgetRanges: ['Under $200', '$200 – $500', '$500 – $1,000', '$1,000+', 'Not sure yet'],
}

/* Social / contact links — 🔴 replace every placeholder '#' with your real URL.
   Leave a value as '' to hide that channel entirely. */
export const socials = [
  { id: 'whatsapp', label: 'WhatsApp', href: '', icon: 'whatsapp', placeholder: true },
  { id: 'email', label: 'Email', href: 'mailto:your.email@example.com', icon: 'mail', placeholder: true },
  { id: 'instagram', label: 'Instagram', href: '', icon: 'instagram', placeholder: true },
  { id: 'github', label: 'GitHub', href: '', icon: 'github', placeholder: true },
  { id: 'linkedin', label: 'LinkedIn', href: '', icon: 'linkedin', placeholder: true },
]

export const footer = {
  tagline: 'Built with creativity, technology and a passion for the web.',
  copyright: '© 2026 ZeeLux Studio. All rights reserved.',
}
