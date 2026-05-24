import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { EXPERIENCE } from '@/data/experience';
import { formatRange } from '@/utils/format';

export const Experience = () => (
  <section id="experience" className="relative py-[var(--section-spacing-y)]">
    <Container>
      <SectionHeading
        eyebrow="Experience"
        title="Seven years across ad-tech and full-stack platforms."
        description="From low-latency APIs and ML pipelines to real-time bidding systems serving thousands of requests per second."
      />

      <ol className="relative space-y-6 border-l border-dashed border-ink-200/80 pl-6 sm:pl-8 dark:border-white/15">
        {EXPERIENCE.map((item, index) => (
          <motion.li
            key={item.company + item.startDate}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="relative"
          >
            <span
              aria-hidden
              className="absolute -left-[33px] top-2 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-white bg-gradient-brand shadow-glow sm:-left-[37px] dark:border-ink-950"
            />
            <GlassCard className="">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-brand-600 dark:text-brand-300">
                    {formatRange(item.startDate, item.endDate)}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-ink-900 dark:text-white">
                    {item.role}{' '}
                    <span className="text-ink-500 dark:text-ink-400">@ {item.company}</span>
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-ink-500 dark:text-ink-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Briefcase className="h-3.5 w-3.5" aria-hidden /> Full-time
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" aria-hidden /> {item.location}
                  </span>
                </div>
              </div>

              <p className="mt-3 text-sm text-ink-700 dark:text-ink-200">{item.summary}</p>

              <ul className="mt-4 space-y-2">
                {item.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-ink-700 dark:text-ink-200">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap items-center gap-1.5">
                {item.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </GlassCard>
          </motion.li>
        ))}
      </ol>
    </Container>
  </section>
);
