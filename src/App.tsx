import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLayout } from '@/components/layout/PageLayout';
import { PageSkeleton } from '@/components/ui/PageSkeleton';

const Home = lazy(() => import('@/pages/Home').then((m) => ({ default: m.Home })));
const NotFound = lazy(() =>
  import('@/pages/NotFound').then((m) => ({ default: m.NotFound })),
);

export const App = () => (
  <PageLayout>
    <Suspense fallback={<PageSkeleton />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </PageLayout>
);
