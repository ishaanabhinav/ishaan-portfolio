import { Container } from '@/components/ui/Container';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { SITE } from '@/constants/site';
import { SOCIALS } from '@/data/socials';

export const Footer = () => (
  <footer className="relative mt-24 border-t border-ink-200/70 py-12 dark:border-white/10">
    <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-display text-base font-semibold tracking-tight">
          {SITE.name}
        </p>
        <p className="text-sm text-ink-500 dark:text-ink-400">
          {SITE.role} · {SITE.location}
        </p>
      </div>

      <ul className="flex items-center gap-2">
        {SOCIALS.map((social) => (
          <li key={social.platform}>
            <a
              href={social.href}
              target={social.platform === 'email' ? undefined : '_blank'}
              rel={social.platform === 'email' ? undefined : 'noopener noreferrer'}
              aria-label={social.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200/70 bg-white/60 text-ink-700 transition hover:border-ink-300 hover:text-ink-900 dark:border-white/10 dark:bg-white/[0.04] dark:text-ink-200 dark:hover:text-white"
            >
              <SocialIcon platform={social.platform} className="h-4 w-4" aria-hidden />
            </a>
          </li>
        ))}
      </ul>
    </Container>

    <Container className="mt-8 flex flex-col items-start gap-2 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between dark:text-ink-400">
      <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
      <p>
        Built with React, Vite, Tailwind CSS &amp; Framer Motion. Deployed on Vercel.
      </p>
    </Container>
  </footer>
);
