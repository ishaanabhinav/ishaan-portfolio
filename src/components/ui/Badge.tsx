import type { HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

type Tone = 'neutral' | 'brand' | 'accent' | 'success';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
}

const tones: Record<Tone, string> = {
  neutral:
    'border-ink-200/80 bg-white/70 text-ink-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-ink-200',
  brand:
    'border-brand-200 bg-brand-50/80 text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-200',
  accent:
    'border-accent-200 bg-accent-50/80 text-accent-700 dark:border-accent-500/30 dark:bg-accent-500/10 dark:text-accent-200',
  success:
    'border-emerald-200 bg-emerald-50/80 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200',
};

export const Badge = ({ className, tone = 'neutral', ...rest }: BadgeProps) => (
  <span
    className={cn(
      'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium tracking-tight backdrop-blur',
      tones[tone],
      className,
    )}
    {...rest}
  />
);
