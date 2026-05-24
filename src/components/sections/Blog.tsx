import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { BLOG_POSTS } from '@/data/blog';

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

export const Blog = () => (
  <section id="blog" className="relative py-[var(--section-spacing-y)]">
    <Container>
      <SectionHeading
        eyebrow="Writing"
        title="Notes from production."
        description="A mix of distributed-systems writeups and engineering-culture notes from the field."
      />

      <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
        {BLOG_POSTS.map((post, i) => (
          <motion.a
            key={post.slug}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="group block focus:outline-none"
          >
            <GlassCard glow className="h-full">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-ink-500 dark:text-ink-400">
                <span>{formatDate(post.publishedAt)}</span>
                <span aria-hidden>·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" aria-hidden />
                  {post.readingMinutes} min
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-ink-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">{post.description}</p>
              <div className="mt-4 flex flex-wrap items-center gap-1.5">
                {post.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-300">
                Read on Medium
                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </div>
            </GlassCard>
          </motion.a>
        ))}
      </div>
    </Container>
  </section>
);
