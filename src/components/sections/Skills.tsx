import { motion } from 'framer-motion';

import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SKILL_CATEGORIES, SKILLS } from '@/data/skills';
import { cn } from '@/utils/cn';

export const Skills = () => (
  <section id="skills" className="relative py-[var(--section-spacing-y)]">
    <Container>
      <SectionHeading
        eyebrow="Toolkit"
        title="Languages, frameworks, and the tools I reach for."
        description="A curated set — not everything I've ever touched, but the things I keep coming back to."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((category, index) => {
          const items = SKILLS.filter((s) => s.category === category);
          if (!items.length) return null;
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <GlassCard glow className="h-full">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-base font-semibold tracking-tight">
                    {category}
                  </h3>
                  <span className="text-xs font-medium text-ink-500 dark:text-ink-400">
                    {items.length}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <li key={skill.name}>
                      <span
                        className={cn(
                          'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition',
                          'border-ink-200/70 bg-white/55 text-ink-700 hover:border-brand-300/70 hover:text-brand-700',
                          'dark:border-white/10 dark:bg-white/[0.04] dark:text-ink-200 dark:hover:border-accent-400/40 dark:hover:text-accent-200',
                        )}
                      >
                        <SkillDots level={skill.level} />
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </Container>
  </section>
);

const SkillDots = ({ level }: { level: 1 | 2 | 3 | 4 | 5 }) => (
  <span className="inline-flex items-center gap-[3px]" aria-label={`Proficiency: ${level} of 5`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={cn(
          'h-1.5 w-1.5 rounded-full',
          i < level ? 'bg-gradient-brand' : 'bg-ink-200 dark:bg-white/15',
        )}
      />
    ))}
  </span>
);
