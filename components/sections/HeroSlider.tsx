'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '@/data/site';
import { ButtonLink } from '@/components/ui/ButtonLink';

const AUTOPLAY_MS = 7000;

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReduced = useReducedMotion();

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [next, paused]);

  const slide = heroSlides[current];

  const textVariants = prefersReduced
    ? {
        hidden: {},
        visible: {},
      }
    : {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            delay: 0.1 + i * 0.12,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        }),
      };

  return (
    <section
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-navy-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Sri Sai Realtors capabilities"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={current === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${current}`}
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
              >
                <motion.div
                  custom={0}
                  variants={textVariants}
                  className="mb-5 flex items-center gap-3"
                >
                  <span className="h-px w-10 bg-blue-400" />
                  <span className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
                    {slide.eyebrow}
                  </span>
                </motion.div>

                <motion.h1
                  custom={1}
                  variants={textVariants}
                  className="font-heading text-xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl text-balance"
                >
                  {slide.headline}
                </motion.h1>

                <motion.p
                  custom={2}
                  variants={textVariants}
                  className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
                >
                  {slide.description}
                </motion.p>

                <motion.div
                  custom={3}
                  variants={textVariants}
                  className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
                >
                  <ButtonLink
                    href={slide.primaryCta.href}
                    variant="primary"
                    size="large"
                    icon="arrow"
                  >
                    {slide.primaryCta.label}
                  </ButtonLink>
                  <ButtonLink
                    href={slide.secondaryCta.href}
                    variant="outline"
                    size="large"
                    icon="none"
                  >
                    {slide.secondaryCta.label}
                  </ButtonLink>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === current}
                className="group flex items-center py-2"
              >
                <span
                  className={`h-0.5 transition-all duration-500 ${
                    i === current
                      ? 'w-10 bg-blue-400'
                      : 'w-6 bg-white/30 group-hover:bg-white/60'
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-2 lg:flex">
        <span className="font-heading text-xs font-medium text-white/50 [writing-mode:vertical-rl]">
          {String(current + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
}
