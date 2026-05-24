import type { Skill, SkillCategory } from '@/types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  'Frontend',
  'Backend',
  'DevOps',
  'Databases',
  'Tools',
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React', category: 'Frontend', level: 5 },
  { name: 'TypeScript', category: 'Frontend', level: 5 },
  { name: 'Next.js', category: 'Frontend', level: 4 },
  { name: 'React Native', category: 'Frontend', level: 4 },
  { name: 'Redux', category: 'Frontend', level: 4 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 5 },

  // Backend
  { name: 'Go (Golang)', category: 'Backend', level: 5 },
  { name: 'Elixir', category: 'Backend', level: 4 },
  { name: 'Java', category: 'Backend', level: 5 },
  { name: 'Spring Boot', category: 'Backend', level: 5 },
  { name: 'Python', category: 'Backend', level: 4 },
  { name: 'Django', category: 'Backend', level: 4 },
  { name: 'gRPC', category: 'Backend', level: 4 },
  { name: 'Microservices', category: 'Backend', level: 5 },

  // DevOps
  { name: 'Docker', category: 'DevOps', level: 4 },
  { name: 'Kubernetes', category: 'DevOps', level: 3 },
  { name: 'AWS', category: 'DevOps', level: 4 },
  { name: 'GCP', category: 'DevOps', level: 4 },
  { name: 'CI/CD (GH Actions)', category: 'DevOps', level: 4 },

  // Databases
  { name: 'PostgreSQL', category: 'Databases', level: 5 },
  { name: 'Redis', category: 'Databases', level: 5 },
  { name: 'Kafka', category: 'Databases', level: 4 },
  { name: 'MongoDB', category: 'Databases', level: 3 },
  { name: 'BigQuery', category: 'Databases', level: 4 },

  // Tools
  { name: 'Datadog', category: 'Tools', level: 4 },
  { name: 'Grafana', category: 'Tools', level: 4 },
  { name: 'MQTT', category: 'Tools', level: 4 },
  { name: 'HyperLogLog', category: 'Tools', level: 4 },
];
