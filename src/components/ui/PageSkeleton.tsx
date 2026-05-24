export const PageSkeleton = () => (
  <div
    role="status"
    aria-label="Loading"
    className="mx-auto flex min-h-[60vh] w-full max-w-6xl flex-col gap-6 px-6 py-16"
  >
    <div className="h-10 w-2/3 animate-pulse rounded-xl bg-ink-200/60 dark:bg-white/[0.06]" />
    <div className="h-5 w-1/2 animate-pulse rounded-lg bg-ink-200/60 dark:bg-white/[0.06]" />
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="h-32 animate-pulse rounded-2xl bg-ink-200/50 dark:bg-white/[0.05]"
        />
      ))}
    </div>
    <span className="sr-only">Loading…</span>
  </div>
);
