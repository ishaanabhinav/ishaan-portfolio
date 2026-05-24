import { motion } from 'framer-motion';
import { Award, BrainCircuit, Layers, Rocket } from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';

const PILLARS = [
  {
    icon: Layers,
    title: 'Systems thinker',
    description:
      'I love drawing the line between business goals and the bytes that move through a system — bidding, telemetry, search relevance.',
  },
  {
    icon: Rocket,
    title: 'Ship-first engineer',
    description:
      'Pragmatic over perfect. I prefer shipping iteratively, measuring impact, and bending the architecture toward what actually works.',
  },
  {
    icon: BrainCircuit,
    title: 'Polyglot',
    description:
      'Go, Elixir, Java, Python, TypeScript — whichever language fits the problem. Backend by gravity, full-stack by choice.',
  },
  {
    icon: Award,
    title: 'Outcome-driven',
    description:
      'I measure my work by what it moves — revenue, reliability, latency, or recruiter throughput. Engineering, for me, is measured in outcomes, not output.',
  },
];

export const About = () => (
  <section id="about" className="relative py-[var(--section-spacing-y)]">
    <Container>
      <SectionHeading
        eyebrow="About"
        title="A lead engineer who builds the boring, important stuff well."
        description="I spend my days designing distributed systems for ads at Gojek — and a lot of nights thinking about how to make engineering teams faster, more focused, and less stressed."
      />

      <div className="grid gap-6 lg:grid-cols-12">
        <GlassCard className="lg:col-span-7">
          <p className="text-pretty text-base leading-relaxed text-ink-700 dark:text-ink-200 sm:text-lg">
            I&rsquo;m Ishaan — currently a Lead Software Engineer at Gojek (GoTo), where I work
            across the supply and demand sides of the ads platform. My focus is on the
            unsexy-but-business-critical pieces: real-time bidding, search-ads relevance,
            telemetry reliability, and high-cardinality measurement.
          </p>
          <p className="mt-4 text-pretty text-base leading-relaxed text-ink-700 dark:text-ink-200 sm:text-lg">
            Before Gojek, I spent 4.5 years at CBREX building everything from low-latency
            Java APIs to a ML-powered profile deduplicator and a full Struts/JSP → Next.js
            stack migration. I&rsquo;ve been hands-on across mobile, web, ML, and backend —
            and I&rsquo;ve led teams through each.
          </p>
          <p className="mt-4 text-pretty text-base leading-relaxed text-ink-700 dark:text-ink-200 sm:text-lg">
            Outside of work, you&rsquo;ll find me lifting heavy things, doing CrossFit,
            outdoors somewhere, or arguing about an anime arc.
          </p>
        </GlassCard>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <GlassCard className="h-full" padded>
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
                  <pillar.icon className="h-4 w-4" aria-hidden />
                </div>
                <h3 className="font-display text-base font-semibold tracking-tight text-ink-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="mt-1 text-sm text-ink-600 dark:text-ink-300">
                  {pillar.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);
