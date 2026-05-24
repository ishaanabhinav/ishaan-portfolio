import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const About = () => (
  <section id="about" className="relative py-[var(--section-spacing-y)]">
    <Container>
      <SectionHeading
        eyebrow="About"
        title="A lead engineer who builds the boring, important stuff well."
        description="Distributed systems by day, engineering leadership most other hours."
      />

      <GlassCard className="mx-auto max-w-3xl">
        <p className="text-pretty text-base leading-relaxed text-ink-700 sm:text-lg dark:text-ink-200">
          I design high-throughput, low-latency distributed systems for{' '}
          <strong className="font-semibold text-ink-900 dark:text-white">
            Gojek&rsquo;s ads platform
          </strong>
          , balancing technical execution with engineering leadership. Over the past 7+ years,
          I&rsquo;ve led teams through complex stack migrations, built machine-learning
          pipelines, and scaled backend architectures across the full stack. I focus on
          engineering velocity, pragmatic architecture, and aligning system capabilities with
          business revenue.
        </p>
        <p className="mt-4 text-pretty text-base leading-relaxed text-ink-700 sm:text-lg dark:text-ink-200">
          Outside of work, you&rsquo;ll find me lifting heavy things, doing CrossFit, outdoors
          somewhere, or arguing about an anime arc.
        </p>
      </GlassCard>
    </Container>
  </section>
);
