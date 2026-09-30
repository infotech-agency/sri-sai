'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ButtonLink } from '@/components/ui/ButtonLink';

export function SelectedWork() {
  const prefersReduced = useReducedMotion();
  const featured = projects.filter((p) => p.featured).slice(0, 2);
  const rest = projects.filter((p) => !p.featured).slice(0, 4);

  const cardClass =
    'group relative block overflow-hidden rounded-sm bg-navy-950';

  const imgClass =
    'object-cover transition-transform duration-700 group-hover:scale-105';

  const overlayClass =
    'absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent';

  const contentClass =
    'absolute bottom-0 left-0 right-0 p-5 lg:p-6';

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Selected Work"
            title="Experience Across Complex Commercial Environments"
            align="left"
          />
          <ButtonLink href="/work" variant="ghost" icon="arrow">
            View All Projects
          </ButtonLink>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={i === 0 ? 'lg:col-span-7' : 'lg:col-span-5'}
            >
              <Link href="/work" className={`${cardClass} block h-80 lg:h-[460px]`}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className={imgClass}
                />
                <div className={overlayClass} />
                <div className={contentClass}>
                  <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-bold text-white lg:text-2xl">
                    {project.title}
                  </h3>
                  {project.scope && (
                    <p className="mt-1 text-sm text-white/60">{project.scope}</p>
                  )}
                </div>
                <ArrowUpRight className="absolute right-5 top-5 h-5 w-5 text-white/50 transition-all group-hover:right-4 group-hover:top-4 group-hover:text-white" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {rest.map((project, i) => (
            <motion.div
              key={project.title}
              initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link href="/work" className={`${cardClass} block h-64`}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={imgClass}
                />
                <div className={overlayClass} />
                <div className={contentClass}>
                  <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                    {project.category}
                  </span>
                  <h3 className="mt-1.5 font-heading text-base font-bold text-white lg:text-lg">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
