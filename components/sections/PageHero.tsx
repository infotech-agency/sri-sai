'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}

export function PageHero({ eyebrow, title, subtitle, image, alt }: PageHeroProps) {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden bg-navy-950 pt-20">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-blue-400" />
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
              {eyebrow}
            </span>
          </div>
          <h1 className="max-w-3xl font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
