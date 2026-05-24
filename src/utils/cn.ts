import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names with clsx and resolves Tailwind conflicts with tailwind-merge.
 */
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));
