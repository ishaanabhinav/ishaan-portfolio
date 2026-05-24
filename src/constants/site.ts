export const SITE = {
  name: 'Ishaan Abhinav',
  shortName: 'Ishaan',
  role: 'Lead Software Engineer',
  tagline: 'I build large-scale ad-tech, real-time bidding systems, and full-stack products.',
  location: 'Bangalore, India',
  email: 'ishaanabhinav@gmail.com',
  url: import.meta.env.VITE_SITE_URL ?? 'https://ishaanabhinav.com',
  description:
    'Lead Software Engineer at Gojek (GoTo). I design and ship distributed systems that serve thousands of requests per second across ads platforms.',
  ogImage: '/og-image.png',
  resumeUrl: '/resume.pdf',
} as const;
