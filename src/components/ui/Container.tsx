import type { HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

export const Container = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8', className)} {...rest} />
);
