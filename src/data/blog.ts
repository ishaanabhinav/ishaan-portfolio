import type { BlogPost } from '@/types';

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'every-impression-counts',
    title:
      'Every Impression Counts: How the Ads Team Supercharged Gojek\u2019s Telemetry Event Collection',
    description:
      'How the Gojek Ads team replaced scheduler-based counting with HyperLogLog and added a parallel MQTT telemetry channel — improving accuracy, cutting load by ~50%, and recovering revenue from dropped events.',
    publishedAt: '2025-02-28',
    readingMinutes: 4,
    tags: ['Ad Tech', 'Telemetry', 'HyperLogLog', 'MQTT'],
    url: 'https://medium.com/gojekengineering/every-impression-counts-how-the-ads-team-supercharged-gojeks-telemetry-event-collection-6a450a4476b6',
  },
  {
    slug: 'life-of-engineer-at-startup',
    title: 'Life of an Engineer at a Startup \u2014 A Tech Journey',
    description:
      'A year that took me from front-end to full-stack to enterprise mobile to ML — and what fast-moving startups teach you about adapting on the fly.',
    publishedAt: '2020-09-25',
    readingMinutes: 4,
    tags: ['Career', 'Startup', 'Engineering Culture'],
    url: 'https://medium.com/cbrex/life-of-an-engineer-at-a-startup-a-tech-journey-cfea195b0ce1',
  },
];
