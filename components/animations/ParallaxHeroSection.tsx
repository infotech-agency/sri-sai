'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * ParallaxHeroSection
 * ---------------------------------------------------------
 * 1. First image scrolls normally (no parallax) — full 100vh.
 * 2. After it finishes, the second image enters with a
 *    parallax drift effect (smooth spring).
 * 3. A center title panel floats over the boundary and
 *    fades/scales in on view.
 */

interface ParallaxHeroSectionProps {
  firstImage: string;
  secondImage: string;
  titleImage: string;
  title: string;
  subtitle?: string;
}

/* ---------------- FIRST IMAGE — normal scroll ---------------- */
function StaticImage({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);

  // Subtle fade-out as it leaves viewport (optional but nice)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <div
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-neutral-900"
    >
      <motion.div
        style={{
          opacity,
          scale,
          backgroundImage: `url(${src})`,
        }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}

/* ---------------- SECOND IMAGE — parallax ---------------- */
function ParallaxImage({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.4,
  });

  // Oversized image (h-130%) drifts -15% → +15%
  const y = useTransform(smoothProgress, [0, 1], ['-15%', '15%']);

  return (
    <div
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-neutral-900"
    >
      <motion.div
        style={{
          y,
          backgroundImage: `url(${src})`,
        }}
        className="absolute left-0 -top-[15%] h-[130%] w-full bg-cover bg-center bg-no-repeat will-change-transform"
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */
export function ParallaxHeroSection({
  firstImage,
  secondImage,
  titleImage,
  title,
  subtitle,
}: ParallaxHeroSectionProps) {
  return (
    <section className="relative">
      {/* 1. First image — normal scroll */}
      <StaticImage src={firstImage} />

      {/* 2. Second image — parallax scroll effect */}
      <ParallaxImage src={secondImage} />

      {/* 3. Center title panel floating over the boundary */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute left-1/2 top-1/2 z-10 flex aspect-[16/7] w-[85%] max-w-3xl
                   -translate-x-1/2 -translate-y-1/2 items-center justify-center
                   overflow-hidden rounded-lg shadow-2xl"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${titleImage})` }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 px-6 text-center">
          <h1 className="text-3xl font-bold tracking-wide text-white md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-sm text-white/85 md:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default ParallaxHeroSection;