import type { BlogPost } from '@/types';

/**
 * Placeholder writing entries. Replace with real posts as they're published —
 * easiest path is to keep them here, or wire up an RSS/MDX source later.
 */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'rtb-design-notes',
    title: 'Designing a Real-Time Bidding System at 7K RPS',
    description:
      'What I learned from rebuilding an ads platform around dynamic auctions: latency budgets, fairness, and the hidden cost of scheduler-based aggregation.',
    publishedAt: '2025-03-12',
    readingMinutes: 9,
    tags: ['Distributed Systems', 'Ad Tech', 'Go'],
    url: '#blog',
  },
  {
    slug: 'hll-in-production',
    title: 'HyperLogLog in Production: From Scheduler Pain to Cardinality Joy',
    description:
      'How replacing a complex scheduler pipeline with HyperLogLog cut system load by 40 points — and what the gotchas look like in practice.',
    publishedAt: '2024-11-04',
    readingMinutes: 7,
    tags: ['Algorithms', 'Redis', 'Observability'],
    url: '#blog',
  },
  {
    slug: 'mqtt-telemetry',
    title: 'When WebSockets Aren\u2019t Enough: A Parallel MQTT Telemetry Pipeline',
    description:
      'Recovering meaningful lost revenue by cross-verifying high-volume ad events with a second transport — and how to design dual pipelines without doubling cost.',
    publishedAt: '2024-08-20',
    readingMinutes: 8,
    tags: ['Telemetry', 'MQTT', 'Reliability'],
    url: '#blog',
  },
];
