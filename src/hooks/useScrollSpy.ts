import { useEffect, useState } from 'react';

/**
 * Tracks which of the supplied section IDs is most visible in the viewport.
 * Returns the active id or `null` when nothing matches.
 */
export const useScrollSpy = (ids: string[], rootMargin = '-40% 0px -55% 0px'): string | null => {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!ids.length) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin, threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, rootMargin]);

  return active;
};
