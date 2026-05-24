import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, FileDown, MapPin, Sparkles } from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Button';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { Badge } from '@/components/ui/Badge';
import { SITE } from '@/constants/site';
import { SOCIALS } from '@/data/socials';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export const Hero = () => (
  <section id="hero" className="relative pb-16 pt-8 sm:pb-24 sm:pt-12">
    <Container>
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12"
      >
        <div className="lg:col-span-8">
          <motion.div variants={fadeUp}>
            <Badge tone="brand">
              <Sparkles className="h-3 w-3" aria-hidden />
              Open to staff-level & engineering-leader roles
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-balance text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.05] dark:text-white"
          >
            Hi, I&rsquo;m {SITE.shortName}. I build{' '}
            <span className="gradient-text">large-scale systems</span> that move
            <br className="hidden sm:block" /> revenue, not just requests.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-pretty text-base text-ink-600 sm:text-lg dark:text-ink-300"
          >
            {SITE.role} at <strong className="font-semibold text-ink-900 dark:text-white">Gojek (GoTo)</strong>.
            I design real-time bidding platforms, low-latency telemetry, and full-stack products —
            building systems that move <strong className="font-semibold text-ink-900 dark:text-white">meaningful revenue and reliability</strong>, not just requests.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <LinkButton
              href="#projects"
              variant="primary"
              size="lg"
              trailingIcon={<ArrowDown className="h-4 w-4" />}
            >
              View my work
            </LinkButton>
            <LinkButton href="#contact" variant="outline" size="lg">
              Let&rsquo;s talk
            </LinkButton>
            <LinkButton
              href={SITE.resumeUrl}
              external
              variant="ghost"
              size="lg"
              leadingIcon={<FileDown className="h-4 w-4" />}
            >
              Résumé
            </LinkButton>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-ink-500 dark:text-ink-400"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              {SITE.location}
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-ink-300 sm:inline-block dark:bg-ink-600" />
            <ul className="flex items-center gap-2">
              {SOCIALS.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.href}
                    target={social.platform === 'email' ? undefined : '_blank'}
                    rel={social.platform === 'email' ? undefined : 'noopener noreferrer'}
                    aria-label={social.label}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-ink-200/70 bg-white/60 px-3 py-1.5 text-xs text-ink-700 backdrop-blur-md transition hover:border-ink-300 hover:text-ink-900 dark:border-white/10 dark:bg-white/[0.04] dark:text-ink-200 dark:hover:text-white"
                  >
                    <SocialIcon platform={social.platform} className="h-3.5 w-3.5" aria-hidden />
                    <span>{social.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="lg:col-span-4">
          <HeroStats />
        </motion.div>
      </motion.div>
    </Container>
  </section>
);

const STATS = [
  { value: '7K', label: 'requests / sec at peak', sub: 'Gojek RTB platform' },
  { value: '<50ms', label: 'p99 latency', sub: 'critical bidding paths' },
  { value: '8', label: 'microservices', sub: 'ads platform redesign' },
  { value: '7+ yrs', label: 'building products', sub: 'across full stack' },
];

const HeroStats = () => (
  <div className="grid grid-cols-2 gap-3 rounded-3xl border border-ink-200/70 bg-white/55 p-3 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
    {STATS.map((s) => (
      <div
        key={s.label}
        className="rounded-2xl bg-white/60 p-4 text-left dark:bg-white/[0.03]"
      >
        <p className="font-display text-2xl font-semibold tracking-tight text-ink-900 dark:text-white sm:text-3xl">
          {s.value}
        </p>
        <p className="mt-1 text-xs font-medium uppercase tracking-wider text-ink-500 dark:text-ink-400">
          {s.label}
        </p>
        <p className="mt-0.5 text-xs text-ink-500 dark:text-ink-500">{s.sub}</p>
      </div>
    ))}
  </div>
);
