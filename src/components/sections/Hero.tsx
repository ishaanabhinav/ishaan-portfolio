import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Button';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { Badge } from '@/components/ui/Badge';
import { SITE } from '@/constants/site';
import { SOCIALS } from '@/data/socials';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export const Hero = () => (
  <section id="hero" className="relative overflow-x-clip pb-16 pt-8 sm:pb-24 sm:pt-12">
    <Container>
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12"
      >
        <div className="lg:col-span-7">
          <motion.div variants={fadeUp}>
            <Badge tone="brand">
              <Sparkles className="h-3 w-3" aria-hidden />
              Distributed systems &middot; Adtech &middot; Real-time platforms
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
            {SITE.role} at{' '}
            <strong className="font-semibold text-ink-900 dark:text-white">Gojek (GoTo)</strong>. I
            build adtech systems &mdash; bidding, telemetry, and search ads. Earlier I spent a year
            on the risk &amp; fraud team, designing real-time fraud detection across the Gojek +
            Tokopedia ecosystem.
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

        <motion.div variants={fadeUp} className="lg:col-span-5">
          <HeroPortrait />
        </motion.div>

        <motion.div variants={fadeUp} className="lg:col-span-12">
          <HeroStats />
        </motion.div>
      </motion.div>
    </Container>
  </section>
);

const HeroPortrait = () => {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
      {/* Soft warm ambient glow behind the figure */}
      <div
        aria-hidden
        className="absolute -inset-12 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(255,145,36,0.35),transparent_70%)] blur-2xl"
      />
      <div
        aria-hidden
        className="absolute -inset-x-10 -inset-y-6 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,rgba(251,53,99,0.3),transparent_75%)] blur-2xl"
      />

      <motion.div
        animate={reduced ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="relative overflow-hidden rounded-[2rem]"
      >
        <img
          src="/hero-portrait.jpg"
          alt="Ishaan Abhinav, Lead Software Engineer, in front of a stylised circuit-board backdrop"
          width={768}
          height={1024}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="block h-auto w-full select-none object-cover"
          draggable={false}
        />
        {/* Edge vignettes — soft fades on every side so the rectangle dissolves into the page */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_80%_at_50%_50%,transparent_45%,rgba(13,13,16,0.55)_75%,rgba(13,13,16,0.9)_100%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink-950 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-ink-950 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-ink-950 to-transparent"
        />
      </motion.div>

      {/* Floating "shipping at Gojek" pill — sibling of masked image so it's not faded */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-ink-950/80 px-4 py-2 text-xs font-medium text-ink-50 shadow-glow backdrop-blur-xl"
      >
        <span className="relative inline-flex h-2 w-2 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        Currently shipping at Gojek
        <span className="hidden text-ink-400 sm:inline">· Go · Elixir · Java</span>
      </motion.div>
    </div>
  );
};

const STATS = [
  { value: '7+ yrs', label: 'shipping software', sub: 'startup → scale-up' },
  { value: '7K RPS', label: 'peak throughput', sub: 'real-time ads platform' },
  { value: '5+', label: 'production languages', sub: 'Go · Elixir · Java · Python · TS' },
  { value: '3', label: 'core specialties', sub: 'backend · ML · full-stack' },
];

const HeroStats = () => (
  <div className="mt-8 grid grid-cols-2 gap-3 rounded-3xl border border-ink-200/70 bg-white/55 p-3 shadow-soft backdrop-blur-xl sm:mt-4 sm:grid-cols-4 dark:border-white/10 dark:bg-white/[0.04]">
    {STATS.map((s) => (
      <div key={s.label} className="rounded-2xl bg-white/60 p-4 text-left dark:bg-white/[0.03]">
        <p className="font-display text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl dark:text-white">
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
