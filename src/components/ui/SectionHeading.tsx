import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) => (
  <div
    className={cn(
      'mb-10 flex flex-col gap-3 sm:mb-14',
      align === 'center' && 'items-center text-center',
      className,
    )}
  >
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4 }}
      className="inline-flex items-center gap-2 self-start text-xs font-semibold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-300"
    >
      <span className="h-px w-6 bg-brand-500/60" aria-hidden />
      {eyebrow}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="font-display text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl md:text-5xl dark:text-ink-50"
    >
      {title}
    </motion.h2>
    {description ? (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-2xl text-pretty text-base text-ink-600 sm:text-lg dark:text-ink-300"
      >
        {description}
      </motion.p>
    ) : null}
  </div>
);
