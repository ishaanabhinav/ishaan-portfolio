import { useScrollProgress } from '@/hooks/useScrollProgress';

export const ScrollProgress = () => {
  const progress = useScrollProgress();
  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-50 h-0.5 bg-transparent"
    >
      <div
        className="h-full origin-left bg-gradient-brand"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
};
