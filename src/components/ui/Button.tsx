import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';
import { cn } from '@/utils/cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface CommonProps {
  variant?: Variant;
  size?: Size;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, CommonProps {}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-500 focus-visible:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-brand text-white shadow-glow hover:shadow-[0_0_50px_-8px_rgba(251,53,99,0.65)] hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-ink-900 text-white hover:bg-ink-800 dark:bg-white dark:text-ink-900 dark:hover:bg-ink-100',
  outline:
    'border border-ink-200 bg-white/60 text-ink-900 hover:border-ink-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:text-ink-50 dark:hover:bg-white/[0.08]',
  ghost:
    'text-ink-700 hover:bg-ink-100/70 dark:text-ink-200 dark:hover:bg-white/[0.06]',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = 'primary', size = 'md', leadingIcon, trailingIcon, children, ...rest },
    ref,
  ) => (
    <button
      ref={ref}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {leadingIcon ? <span className="-ml-0.5 inline-flex">{leadingIcon}</span> : null}
      {children}
      {trailingIcon ? <span className="-mr-0.5 inline-flex">{trailingIcon}</span> : null}
    </button>
  ),
);
Button.displayName = 'Button';

interface LinkButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    CommonProps {
  href: string;
  external?: boolean;
}

export const LinkButton = ({
  href,
  external,
  variant = 'primary',
  size = 'md',
  leadingIcon,
  trailingIcon,
  className,
  children,
  ...rest
}: LinkButtonProps) => (
  <a
    href={href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    className={cn(base, variants[variant], sizes[size], className)}
    {...rest}
  >
    {leadingIcon ? <span className="-ml-0.5 inline-flex">{leadingIcon}</span> : null}
    {children}
    {trailingIcon ? <span className="-mr-0.5 inline-flex">{trailingIcon}</span> : null}
  </a>
);
