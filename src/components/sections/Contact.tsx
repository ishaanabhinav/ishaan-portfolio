import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { SITE } from '@/constants/site';
import { SOCIALS } from '@/data/socials';
import { sendContactMessage } from '@/services/contact';
import { cn } from '@/utils/cn';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputStyles =
  'block w-full rounded-xl border border-ink-200/80 bg-white/60 px-4 py-3 text-sm text-ink-900 placeholder-ink-400 transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/40 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder-ink-500';

export const Contact = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus('error');
      setMessage('Please fill in every field.');
      return;
    }

    setStatus('submitting');
    const result = await sendContactMessage(payload);
    setStatus(result.ok ? 'success' : 'error');
    setMessage(result.message);
    if (result.ok) event.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-[var(--section-spacing-y)]">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something."
          description="Open to staff-level / engineering-leader conversations, advisory work, and the occasional good problem to think about."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          <GlassCard className="lg:col-span-5">
            <p className="text-base text-ink-700 dark:text-ink-200">
              The fastest way to reach me is email — I check it every weekday.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-4 inline-flex items-center gap-2 text-base font-medium text-brand-700 hover:text-brand-800 dark:text-brand-300 dark:hover:text-brand-200"
            >
              <Mail className="h-4 w-4" aria-hidden />
              {SITE.email}
            </a>

            <hr className="my-6 border-ink-200/70 dark:border-white/10" />

            <p className="text-sm font-medium uppercase tracking-wider text-ink-500 dark:text-ink-400">
              Around the web
            </p>
            <ul className="mt-3 space-y-2">
              {SOCIALS.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.href}
                    target={social.platform === 'email' ? undefined : '_blank'}
                    rel={social.platform === 'email' ? undefined : 'noopener noreferrer'}
                    className="group inline-flex items-center gap-2 text-sm text-ink-700 hover:text-ink-900 dark:text-ink-200 dark:hover:text-white"
                  >
                    <SocialIcon platform={social.platform} className="h-4 w-4" aria-hidden />
                    <span className="font-medium">{social.label}</span>
                    <span className="text-ink-400 dark:text-ink-500">{social.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block sm:col-span-1">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-500 dark:text-ink-400">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className={inputStyles}
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-500 dark:text-ink-400">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className={inputStyles}
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-500 dark:text-ink-400">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me what you're working on…"
                  className={cn(inputStyles, 'resize-y')}
                />
              </label>

              <div className="flex items-center justify-between gap-4 sm:col-span-2">
                <p
                  className={cn(
                    'text-sm transition-opacity',
                    status === 'idle' && 'opacity-0',
                    status === 'submitting' && 'text-ink-500 dark:text-ink-400',
                    status === 'success' && 'text-emerald-600 dark:text-emerald-300',
                    status === 'error' && 'text-rose-600 dark:text-rose-300',
                  )}
                  role="status"
                  aria-live="polite"
                >
                  {status === 'submitting' ? 'Sending…' : message}
                </p>
                <motion.div whileTap={{ scale: 0.96 }}>
                  <Button
                    type="submit"
                    disabled={status === 'submitting'}
                    trailingIcon={<Send className="h-4 w-4" />}
                  >
                    Send message
                  </Button>
                </motion.div>
              </div>
            </form>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
};
