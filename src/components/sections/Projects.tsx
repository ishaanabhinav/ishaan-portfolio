import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { PROJECT_CATEGORIES, PROJECTS } from '@/data/projects';
import type { Project } from '@/types';
import { cn } from '@/utils/cn';

export const Projects = () => {
  const [activeFilter, setActiveFilter] =
    useState<(typeof PROJECT_CATEGORIES)[number]>('All');

  const visible = useMemo<Project[]>(
    () =>
      activeFilter === 'All'
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === activeFilter),
    [activeFilter],
  );

  return (
    <section id="projects" className="relative py-[var(--section-spacing-y)]">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Projects that moved the needle."
          description="A peek at what I've shipped recently. Most live behind enterprise platforms, so the writeups are the public version."
        />

        <div className="mb-8 flex flex-wrap items-center gap-2">
          {PROJECT_CATEGORIES.map((cat) => {
            const isActive = cat === activeFilter;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                aria-pressed={isActive}
                className={cn(
                  'relative inline-flex items-center rounded-full border px-3.5 py-1.5 text-sm font-medium transition',
                  isActive
                    ? 'border-transparent bg-ink-900 text-white dark:bg-white dark:text-ink-900'
                    : 'border-ink-200/70 bg-white/55 text-ink-700 hover:border-ink-300 dark:border-white/10 dark:bg-white/[0.04] dark:text-ink-200',
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => (
  <GlassCard glow className="group flex h-full flex-col">
    <div className="flex items-start justify-between gap-3">
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-brand-600 dark:text-brand-300">
          {project.subtitle}
        </p>
        <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-ink-900 dark:text-white">
          {project.title}
        </h3>
      </div>
      <Badge tone={project.featured ? 'accent' : 'neutral'}>{project.category}</Badge>
    </div>

    <p className="mt-3 text-sm text-ink-600 dark:text-ink-300">{project.description}</p>

    {project.outcomes.length > 0 ? (
      <ul className="mt-4 space-y-1.5">
        {project.outcomes.map((o) => (
          <li
            key={o}
            className="flex gap-2 text-sm text-ink-700 dark:text-ink-200"
          >
            <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
            <span>{o}</span>
          </li>
        ))}
      </ul>
    ) : null}

    <div className="mt-5 flex flex-wrap items-center gap-1.5">
      {project.stack.map((tech) => (
        <Badge key={tech}>{tech}</Badge>
      ))}
    </div>

    <div className="mt-6 flex items-center gap-3 border-t border-ink-200/70 pt-4 dark:border-white/10">
      {project.repoUrl ? (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-700 hover:text-ink-900 dark:text-ink-200 dark:hover:text-white"
        >
          <Github className="h-4 w-4" aria-hidden /> Code
        </a>
      ) : null}
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-700 hover:text-ink-900 dark:text-ink-200 dark:hover:text-white"
        >
          <ExternalLink className="h-4 w-4" aria-hidden /> Live
        </a>
      ) : null}
      <span className="ml-auto inline-flex items-center text-xs font-medium text-ink-400 transition group-hover:text-brand-600 dark:text-ink-500 dark:group-hover:text-brand-300">
        Internal project
        <ArrowUpRight className="ml-1 h-3.5 w-3.5" aria-hidden />
      </span>
    </div>
  </GlassCard>
);
