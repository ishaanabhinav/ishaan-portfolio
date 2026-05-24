export const SITE = {
  name: 'Ishaan Abhinav',
  shortName: 'Ishaan',
  role: 'Lead Software Engineer',
  tagline: 'I build adtech systems — bidding, telemetry, and search ads.',
  location: 'Bangalore, India',
  email: 'ishaanabhinav@gmail.com',
  url: import.meta.env.VITE_SITE_URL ?? 'https://ishaanabhinav.com',
  description:
    'Engineer at Gojek (GoTo) building adtech systems — bidding, telemetry, search ads. Previously a year on risk & fraud.',
  ogImage: '/og-image.png',
  resumeUrl: '/resume.pdf',
} as const;
