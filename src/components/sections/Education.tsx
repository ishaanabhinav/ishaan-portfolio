import { GraduationCap } from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EDUCATION } from '@/data/education';

export const Education = () => (
  <section id="education" className="relative py-[var(--section-spacing-y)]">
    <Container>
      <SectionHeading eyebrow="Education" title="Where it started." />

      <div className="grid gap-5 sm:grid-cols-2">
        {EDUCATION.map((edu) => (
          <GlassCard key={edu.institution} glow>
            <div className="flex items-start gap-4">
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                <GraduationCap className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink-900 dark:text-white">
                  {edu.institution}
                </h3>
                <p className="text-sm text-ink-600 dark:text-ink-300">
                  {edu.degree} · {edu.field}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-ink-500 dark:text-ink-400">
                  {edu.startYear} — {edu.endYear} · {edu.location}
                </p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </Container>
  </section>
);
