'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  dark = false,
  className,
}: SectionHeadingProps) {
  const prefersReduced = useReducedMotion();

  const containerProps = prefersReduced
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-60px' },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <motion.div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
      {...containerProps}
    >
      {eyebrow && (
        <div
          className={cn(
            'mb-4 flex items-center gap-3',
            align === 'center' && 'justify-center',
          )}
        >
          <span className="h-px w-8 bg-blue-500" />
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={cn(
          'font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-balance',
          dark ? 'text-white' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed sm:text-lg',
            dark ? 'text-white/60' : 'text-muted-foreground',
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
