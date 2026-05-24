import type { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    slug: 'rtb-ad-platform',
    title: 'Real-Time Bidding Platform',
    subtitle: 'Dynamic auctions for Gojek Ads',
    description:
      'Architected and shipped a real-time bidding system across 8 microservices, replacing static CPC/CPM with dynamic auction-based pricing. Serves ~7K requests/sec at peak with sub-50ms p99 latency.',
    outcomes: [
      'Material lift in ads booked revenue versus the prior CPC/CPM stack',
      '~7K RPS at peak with sub-50ms p99 latency',
      'Flexible pricing-model framework — pluggable for future ad innovations',
    ],
    stack: ['Go', 'gRPC', 'Kafka', 'Redis', 'PostgreSQL', 'Kubernetes'],
    category: 'Backend',
    featured: true,
  },
  {
    slug: 'keyword-selection',
    title: 'Keyword Selection (Search Ads)',
    subtitle: 'Intent-aligned campaigns for merchants',
    description:
      'Engineered Keyword Selection for self-serve and enterprise merchants — letting businesses define keywords that trigger their ads and aligning campaigns with user search intent.',
    outcomes: [
      'Low single-digit % monthly lift in self-serve booked revenue',
      'Adopted across self-serve and enterprise merchants',
      'Improved merchant ROAS and ad relevance',
    ],
    stack: ['Go', 'Elixir', 'PostgreSQL', 'Redis', 'BigQuery'],
    category: 'Backend',
    featured: true,
  },
  {
    slug: 'telemetry-mqtt',
    title: 'Ads Telemetry Reliability',
    subtitle: 'MQTT cross-verification pipeline',
    description:
      'Engineered a parallel telemetry system using MQTT to cross-verify ad events against WebSockets, identifying dropped or delayed events that caused revenue loss.',
    outcomes: [
      'Recovered a low single-digit % of revenue previously lost to missed impressions',
      'Measurable org-wide improvement in event-capture reliability',
      'Established a redundant transport pattern reused across the ads stack',
    ],
    stack: ['Go', 'MQTT', 'WebSockets', 'Kafka', 'Datadog'],
    category: 'Infra',
    featured: true,
  },
  {
    slug: 'hll-impressions',
    title: 'HyperLogLog Impression Counting',
    subtitle: 'Memory-efficient cardinality at scale',
    description:
      'Replaced a complex scheduler-based unique-impression counter with HyperLogLog — a probabilistic data structure that delivers near-real-time accuracy with constant memory.',
    outcomes: [
      'System load reduced by roughly 40 percentage points',
      'Eliminated scheduler jobs and the latency they added',
      'Low single-digit % lift in ads revenue from improved counting accuracy',
    ],
    stack: ['Go', 'Redis', 'HyperLogLog', 'Kafka'],
    category: 'Backend',
  },
  {
    slug: 'profile-deduplicator',
    title: 'ML Profile Deduplicator',
    subtitle: 'FastText + scikit-learn',
    description:
      'Built an ML engine that deduplicates candidate profiles using FastText embeddings and scikit-learn classifiers, removing hours of manual recruiter work.',
    outcomes: [
      'Manual de-dup time: hours → ~20 seconds',
      'Materially increased recruiter throughput on the CBREX platform',
      'Used across the recruiter workflow',
    ],
    stack: ['Python', 'FastText', 'scikit-learn', 'FastAPI'],
    category: 'ML',
  },
  {
    slug: 'platform-revamp',
    title: 'Legacy → Modern Stack Migration',
    subtitle: 'Struts/JSP → Next.js + Spring Boot',
    description:
      'Led a full platform revamp from Struts/JSP to Next.js + Spring Boot with Redux and Tailwind CSS, modernising the stack for better UX and faster delivery cycles.',
    outcomes: [
      'Faster delivery cycles and reduced incidents',
      'Improved Core Web Vitals across the product',
      'Foundation for a unified design system',
    ],
    stack: ['Next.js', 'React', 'Redux', 'Spring Boot', 'Tailwind CSS'],
    category: 'Full-Stack',
  },
];

export const PROJECT_CATEGORIES = ['All', 'Backend', 'Full-Stack', 'Infra', 'ML'] as const;
