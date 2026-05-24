import { Mail } from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LinkButton } from '@/components/ui/Button';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { SITE } from '@/constants/site';
import { SOCIALS } from '@/data/socials';

export const Contact = () => (
  <section id="contact" className="relative py-[var(--section-spacing-y)]">
    <Container>
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something."
        description="Always interested in conversations about distributed systems, adtech, and engineering teams that ship."
      />

      <GlassCard glow className="mx-auto max-w-2xl text-center">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow">
          <Mail className="h-5 w-5" aria-hidden />
        </div>

        <p className="mt-5 text-balance text-base text-ink-700 sm:text-lg dark:text-ink-200">
          The fastest way to reach me is email — I check it every weekday.
        </p>

        <div className="mt-6 flex justify-center">
          <LinkButton
            href={`mailto:${SITE.email}`}
            variant="primary"
            size="lg"
            leadingIcon={<Mail className="h-4 w-4" />}
          >
            {SITE.email}
          </LinkButton>
        </div>

        <p className="mt-8 text-xs font-medium uppercase tracking-wider text-ink-500 dark:text-ink-400">
          Around the web
        </p>
        <ul className="mt-3 flex flex-wrap items-center justify-center gap-2">
          {SOCIALS.filter((s) => s.platform !== 'email').map((social) => (
            <li key={social.platform}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group inline-flex items-center gap-1.5 rounded-full border border-ink-200/70 bg-white/55 px-3.5 py-1.5 text-xs font-medium text-ink-700 transition hover:border-ink-300 hover:text-ink-900 dark:border-white/10 dark:bg-white/[0.04] dark:text-ink-200 dark:hover:text-white"
              >
                <SocialIcon platform={social.platform} className="h-3.5 w-3.5" aria-hidden />
                <span>{social.label}</span>
                <span className="text-ink-400 dark:text-ink-500">{social.handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </GlassCard>
    </Container>
  </section>
);
