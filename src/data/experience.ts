import type { ExperienceItem } from '@/types';

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Gojek (GoTo)',
    role: 'Lead Software Engineer',
    location: 'Bengaluru, India',
    startDate: 'Sep 2022',
    endDate: 'Present',
    summary:
      'Currently on the Ads platform — designing bidding systems, search-ads relevance, and high-throughput telemetry. Earlier on the Risk & Fraud team, building real-time fraud detection for the Gojek + Tokopedia ecosystem.',
    highlights: [
      'Designed and shipped a real-time bidding (RTB) system serving ~7K requests/sec at peak, migrating from static CPC/CPM to dynamic auctions.',
      'Led architectural redesign of an 8-microservice ads platform; framework now supports flexible pricing models and new ad innovations.',
      'Materially lifted ads booked revenue via the new bidding stack, with further upside as CPM bidding rolls out.',
      'Launched Keyword Selection for self-serve & enterprise merchants, driving a low single-digit % monthly lift in booked revenue.',
      'Built a parallel MQTT telemetry pipeline that recovered a low single-digit % of revenue previously lost to dropped impressions and improved org-wide event-capture reliability.',
      'Replaced scheduler-based impression counting with HyperLogLog, cutting system load by ~40 percentage points and modestly lifting ads revenue from improved counting accuracy.',
      'Earlier on Risk & Fraud (Sep 2022 – Oct 2023): designed real-time risk-scoring and anomaly-detection systems covering merchant risk, scam detection, account takeovers, and payment validation across Gojek + Tokopedia.',
      'Partnered with data science on predictive ML models for proactive fraud detection — reducing financial losses and strengthening platform security.',
    ],
    stack: ['Go', 'Elixir', 'Kafka', 'Redis', 'gRPC', 'MQTT', 'PostgreSQL', 'BigQuery', 'Python', 'ML'],
    link: 'https://www.gojek.com',
  },
  {
    company: 'CBREX',
    role: 'Senior Full-Stack Developer',
    location: 'Bengaluru, India',
    startDate: 'Apr 2018',
    endDate: 'Aug 2022',
    summary:
      'Owned core platform engineering across web, mobile, and ML — from low-latency APIs to a complete stack migration that modernised the product.',
    highlights: [
      'Drove a full platform revamp from Struts/JSP → Next.js + Spring Boot with Redux & Tailwind, modernising UX and dev velocity.',
      'Developed low-latency Java + Spring Boot APIs powering the company’s web and mobile applications.',
      'Built an ML profile deduplicator (FastText + scikit-learn) that cut manual recruiter work from hours to ~20 seconds.',
    ],
    stack: [
      'Java',
      'Spring Boot',
      'Next.js',
      'React',
      'Redux',
      'Python',
      'scikit-learn',
      'Tailwind CSS',
    ],
    link: 'https://www.cbrex.com',
  },
];
