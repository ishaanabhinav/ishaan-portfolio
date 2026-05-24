export type ThemeMode = 'light' | 'dark';

export type SocialPlatform = 'github' | 'linkedin' | 'email';

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
  handle?: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export type SkillCategory = 'Frontend' | 'Backend' | 'DevOps' | 'Databases' | 'Tools';

export interface Skill {
  name: string;
  category: SkillCategory;
  level: 1 | 2 | 3 | 4 | 5;
  iconKey?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  summary: string;
  highlights: string[];
  stack: string[];
  link?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  stack: string[];
  category: string;
  image?: string;
  imageAlt?: string;
  repoUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number;
  location: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingMinutes: number;
  tags: string[];
  url: string;
}
