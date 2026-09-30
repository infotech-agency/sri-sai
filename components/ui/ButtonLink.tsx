import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'default' | 'large';
  className?: string;
  external?: boolean;
  icon?: 'arrow' | 'arrowUpRight' | 'none';
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'default',
  className,
  external = false,
  icon = 'arrow',
}: ButtonLinkProps) {
  const base =
    'group inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2';

  const sizes = {
    default: 'px-6 py-3 text-sm',
    large: 'px-7 py-4 text-base',
  };

  const variants = {
    primary: 'bg-primary text-white hover:bg-blue-500',
    secondary:
      'bg-white text-primary border border-border hover:border-primary hover:shadow-md',
    outline:
      'border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm',
    ghost: 'text-foreground hover:text-primary',
  };

  const content = (
    <>
      {children}
      {icon === 'arrow' && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      )}
      {icon === 'arrowUpRight' && (
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, sizes[size], variants[variant], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      {content}
    </Link>
  );
}
