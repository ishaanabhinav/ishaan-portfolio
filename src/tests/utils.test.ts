import { describe, expect, it } from 'vitest';
import { cn } from '@/utils/cn';
import { formatRange } from '@/utils/format';

describe('cn()', () => {
  it('joins truthy class names', () => {
    expect(cn('a', false, 'b', null, undefined, 'c')).toBe('a b c');
  });

  it('resolves Tailwind class conflicts', () => {
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4');
  });
});

describe('formatRange()', () => {
  it('formats a normal date range', () => {
    expect(formatRange('Sep 2022', 'Aug 2024')).toBe('Sep 2022 — Aug 2024');
  });

  it('handles "Present" as the end value', () => {
    expect(formatRange('Sep 2022', 'Present')).toBe('Sep 2022 — Present');
  });
});
