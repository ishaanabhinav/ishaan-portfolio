import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LinkButton } from '@/components/ui/Button';
import { NAV_ITEMS } from '@/constants/nav';
import { SITE } from '@/constants/site';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { cn } from '@/utils/cn';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(NAV_ITEMS.map((i) => i.id));

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 16);
    handle();
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        scrolled ? 'py-2.5' : 'py-4',
      )}
    >
      <Container>
        <nav
          aria-label="Primary"
          className={cn(
            'flex items-center justify-between rounded-2xl border px-3 py-2 transition-all duration-300',
            scrolled
              ? 'border-ink-200/70 bg-white/70 backdrop-blur-xl shadow-soft dark:border-white/10 dark:bg-ink-950/60'
              : 'border-transparent bg-transparent',
          )}
        >
          <a
            href="#hero"
            className="ml-2 flex items-center gap-2 font-display text-base font-semibold tracking-tight"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-brand text-sm font-bold text-white shadow-glow">
              IA
            </span>
            <span className="hidden sm:inline">{SITE.shortName}</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={cn(
                      'relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'text-ink-900 dark:text-white'
                        : 'text-ink-500 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white',
                    )}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-0 rounded-full bg-ink-100 dark:bg-white/[0.08]"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.55 }}
                      />
                    ) : null}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle className="hidden sm:inline-flex" />
            <LinkButton
              href="#contact"
              size="sm"
              variant="primary"
              className="hidden sm:inline-flex"
            >
              Get in touch
            </LinkButton>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200/70 bg-white/70 text-ink-900 backdrop-blur-md md:hidden dark:border-white/10 dark:bg-white/[0.05] dark:text-white"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mt-2 md:hidden"
          >
            <Container>
              <ul className="flex flex-col gap-1 rounded-2xl border border-ink-200/70 bg-white/85 p-3 backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/80">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-white/[0.06]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2 flex items-center justify-between rounded-xl bg-ink-50 px-4 py-3 dark:bg-white/[0.04]">
                  <span className="text-sm text-ink-600 dark:text-ink-300">Theme</span>
                  <ThemeToggle />
                </li>
              </ul>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};
