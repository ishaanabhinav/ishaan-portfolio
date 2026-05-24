import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/utils/cn';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200/70 bg-white/60 text-ink-700 backdrop-blur-md transition hover:border-ink-300 hover:text-ink-900',
        'dark:border-white/10 dark:bg-white/[0.05] dark:text-ink-200 dark:hover:border-white/20 dark:hover:text-white',
        className,
      )}
    >
      <Sun
        className={cn('h-4 w-4 transition-all', isDark ? 'scale-0 rotate-90 opacity-0' : 'scale-100')}
        aria-hidden
      />
      <Moon
        className={cn(
          '-ml-4 h-4 w-4 transition-all',
          isDark ? 'scale-100' : 'scale-0 -rotate-90 opacity-0',
        )}
        aria-hidden
      />
    </button>
  );
};
