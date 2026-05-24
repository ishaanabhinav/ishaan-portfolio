import { motion } from 'framer-motion';
import type { ComponentType, SVGProps } from 'react';
import {
  SiAmazonwebservices,
  SiApachekafka,
  SiDocker,
  SiElixir,
  SiGo,
  SiGooglecloud,
  SiKubernetes,
  SiNextdotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiTypescript,
} from 'react-icons/si';

import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

type TechIcon = ComponentType<SVGProps<SVGSVGElement>>;

interface Tech {
  name: string;
  Icon: TechIcon;
}

const TECHNOLOGIES: Tech[] = [
  { name: 'Go', Icon: SiGo },
  { name: 'Elixir', Icon: SiElixir },
  { name: 'Java', Icon: SiOpenjdk },
  { name: 'Python', Icon: SiPython },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'React', Icon: SiReact },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'Spring Boot', Icon: SiSpringboot },
  { name: 'PostgreSQL', Icon: SiPostgresql },
  { name: 'Redis', Icon: SiRedis },
  { name: 'Kafka', Icon: SiApachekafka },
  { name: 'Docker', Icon: SiDocker },
  { name: 'Kubernetes', Icon: SiKubernetes },
  { name: 'AWS', Icon: SiAmazonwebservices },
  { name: 'GCP', Icon: SiGooglecloud },
];

export const Skills = () => (
  <section id="skills" className="relative py-[var(--section-spacing-y)]">
    <Container>
      <SectionHeading
        eyebrow="Toolkit"
        title="The stack I reach for."
        description="A curated set — not everything I've touched, but the things I keep coming back to."
      />

      <motion.ul
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8"
        aria-label="Technologies I use"
      >
        {TECHNOLOGIES.map(({ name, Icon }, i) => (
          <motion.li
            key={name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: i * 0.025 }}
          >
            <div
              className="group flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-ink-200/60 bg-white/55 px-2 py-3 text-ink-500 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-brand-300/60 hover:text-brand-600 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.03] dark:text-ink-300 dark:hover:border-accent-400/40 dark:hover:text-accent-300"
              title={name}
            >
              <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-[11px] font-medium tracking-wide text-ink-600 dark:text-ink-400">
                {name}
              </span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </Container>
  </section>
);
