export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  /** One-liner — used on the /projects index cards */
  summary: string;
  /** Full case-study copy — used on /projects/[slug] */
  description: string;
  coverImage: string;
  /** Additional job photos for the gallery on the detail page */
  gallery: string[];
};

// TODO: replace summary/description/images with the real project details.
// Paths are placeholders — drop matching files under public/images/projects/<slug>/
export const PROJECTS: Project[] = [
  {
    slug: 'lagos-rooftop-residential',
    title: 'Rooftop Residential Array',
    location: 'Lagos',
    category: 'Residential',
    summary: 'A 5kWp rooftop solar system delivering reliable backup power for a family home.',
    description:
      'A 5kWp rooftop solar installation for a family home in Lagos, sized to cover daily household load with battery backup through outages. Scope covered site survey, mounting, wiring, and commissioning, with a smart meter installed to give the homeowner clear visibility into daily generation and usage.',
    coverImage: '/images/hero-1.avif',
    gallery: [
      '/images/proj-1.jpg',
      '/images/proj-3.jpg',
      '/images/proj-4.jpg',
    ],
  },
  {
    slug: 'asaba-community-minigrid',
    title: 'Community Mini-Grid',
    location: 'Asaba, Delta State',
    category: 'Mini-Grid',
    summary: 'A mini-grid deployment powering homes and small businesses across a residential cluster.',
    description:
      'A community-scale mini-grid built to power a residential cluster and the small businesses operating within it. The project included feasibility assessment, distribution design, and phased commissioning to bring the network online in stages with minimal disruption to residents.',
    coverImage: '/images/proj-4.jpg',
    gallery: [
      '/images/proj-5.jpg',
      '/images/proj-6.jpg',
      '/images/proj-7.webp',
    ],
  },
  {
    slug: 'benin-city-school-retrofit',
    title: 'School Solar Retrofit',
    location: 'Benin City, Edo State',
    category: 'Institutional',
    summary: 'Hybrid solar installation keeping classrooms and labs powered through outages.',
    description:
      'A hybrid solar retrofit for an existing school building, designed to keep classrooms, labs, and administrative offices powered through grid outages without disrupting the academic calendar. Installation was scheduled around term breaks to minimize impact on students and staff.',
    coverImage: '/images/hero-3.jpg',
    gallery: [
      '/images/proj-1.jpg',
      '/images/proj-3.jpg',
      '/images/proj-4.jpg',
    ],
  },
  {
    slug: 'port-harcourt-hospital-backup',
    title: 'Hospital Backup Power',
    location: 'Port Harcourt, Rivers State',
    category: 'Healthcare',
    summary: 'A dependable hybrid system safeguarding critical care equipment around the clock.',
    description:
      'A hybrid backup power system for a healthcare facility, engineered around zero-tolerance for downtime on critical-care equipment. The system includes automatic failover and was tested extensively under simulated outage conditions before handover.',
    coverImage: '/images/projects/port-harcourt-hospital-backup/cover.jpg',
    gallery: [
      '/images/projects/port-harcourt-hospital-backup/01.jpg',
      '/images/projects/port-harcourt-hospital-backup/02.jpg',
    ],
  },
  {
    slug: 'abuja-commercial-metering',
    title: 'Commercial Metering Rollout',
    location: 'Abuja, FCT',
    category: 'Commercial',
    summary: 'Smart metering rollout giving a commercial client precise, real-time usage data.',
    description:
      'A smart metering rollout across a commercial client\u2019s facilities in Abuja, replacing legacy meters with units giving real-time, per-zone usage data. The client now has the visibility needed to identify waste and plan future efficiency upgrades.',
    coverImage: '/images/proj-5.jpg',
    gallery: [
      '/images/proj-5.jpg',
      '/images/proj-6.jpg',
      '/images/proj-7.webp',
    ],
  },
];
