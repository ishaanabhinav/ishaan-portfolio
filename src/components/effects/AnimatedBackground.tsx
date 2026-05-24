import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

/**
 * Decorative animated background — animated gradient orbs + dotted grid overlay.
 * Respects prefers-reduced-motion automatically.
 */
export const AnimatedBackground = () => {
  const reduced = usePrefersReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-gradient-aurora"
    >
      <div className="absolute inset-0 grid-bg opacity-50" />

      <motion.div
        className="absolute -left-32 top-[-20%] h-[36rem] w-[36rem] rounded-full bg-brand-400/30 blur-3xl dark:bg-brand-500/20"
        animate={reduced ? undefined : { x: [0, 40, -20, 0], y: [0, 30, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-10%] top-[20%] h-[28rem] w-[28rem] rounded-full bg-accent-400/30 blur-3xl dark:bg-accent-500/20"
        animate={reduced ? undefined : { x: [0, -40, 20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[20%] h-[30rem] w-[30rem] rounded-full bg-brand-300/20 blur-3xl dark:bg-accent-500/15"
        animate={reduced ? undefined : { x: [0, 20, -30, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};
