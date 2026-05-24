import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
  padded?: boolean;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, glow = false, padded = true, children, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn(
        'relative overflow-hidden rounded-2xl border bg-white/60 shadow-soft backdrop-blur-xl transition-colors',
        'border-ink-200/70 dark:border-white/10 dark:bg-white/[0.04]',
        padded && 'p-6 sm:p-7',
        glow &&
          'before:absolute before:-inset-px before:rounded-2xl before:bg-gradient-brand before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-30 before:[mask:linear-gradient(#000,transparent_30%)]',
        className,
      )}
      {...rest}
    >
      <div className="relative">{children}</div>
    </div>
  ),
);
GlassCard.displayName = 'GlassCard';
