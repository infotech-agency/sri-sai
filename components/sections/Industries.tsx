'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { industries } from '@/data/site';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Industries() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sectors"
          title="Industries We Serve"
          subtitle="From corporate offices to controlled airport environments, our execution capabilities span diverse commercial and infrastructure sectors."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href="/work"
                className="group relative block h-72 overflow-hidden rounded-sm bg-navy-950 lg:h-80"
              >
                <Image
                  src={ind.image}
                  alt={ind.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-heading text-lg font-bold text-white">
                    {ind.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/60">
                    {ind.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-blue-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span>Explore</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
