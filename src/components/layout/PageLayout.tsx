import type { ReactNode } from 'react';

import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollProgress } from './ScrollProgress';
import { AnimatedBackground } from '@/components/effects/AnimatedBackground';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => (
  <div className="relative isolate flex min-h-screen flex-col">
    <AnimatedBackground />
    <ScrollProgress />

    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-gradient-brand focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
    >
      Skip to content
    </a>

    <Navbar />

    <main id="main" className="flex-1 pt-24 sm:pt-28">
      {children}
    </main>

    <Footer />
  </div>
);
