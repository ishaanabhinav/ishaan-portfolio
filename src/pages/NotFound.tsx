import { Link } from 'react-router-dom';

import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Button';
import { Seo } from '@/components/Seo';

export const NotFound = () => (
  <>
    <Seo title="404 — Page not found" description="The page you're looking for doesn't exist." />
    <section className="flex min-h-[60vh] items-center">
      <Container className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Couldn&rsquo;t find that page.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-ink-600 dark:text-ink-300">
          The URL might be off, or the page may have moved. Head back home.
        </p>
        <div className="mt-8 flex items-center justify-center">
          <Link to="/" className="inline-flex">
            <LinkButton href="/">Take me home</LinkButton>
          </Link>
        </div>
      </Container>
    </section>
  </>
);
