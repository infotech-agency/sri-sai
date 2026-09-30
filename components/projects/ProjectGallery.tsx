'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion, LayoutGroup } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { projects, projectCategories } from '@/data/projects';

export function ProjectGallery() {
  const [filter, setFilter] = useState<string>('All');
  const prefersReduced = useReducedMotion();

  const filtered = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 border-b border-border pb-6">
          {projectCategories.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-sm px-4 py-2 text-sm font-medium transition-all ${
                  active
                    ? 'bg-primary text-white'
                    : 'bg-secondary text-muted-foreground hover:bg-border'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <LayoutGroup>
          <motion.div
            layout
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.4,
                    delay: prefersReduced ? 0 : i * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href="/contact"
                    className="group relative block h-72 overflow-hidden rounded-sm bg-navy-950 lg:h-80"
                  >
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                        {project.category}
                      </span>
                      <h3 className="mt-1.5 font-heading text-lg font-bold text-white">
                        {project.title}
                      </h3>
                      {project.location && (
                        <p className="mt-0.5 text-xs text-white/50">{project.location}</p>
                      )}
                      {project.scope && (
                        <p className="mt-1 text-sm text-white/60">{project.scope}</p>
                      )}
                    </div>
                    <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-white/40 transition-all group-hover:right-3 group-hover:top-3 group-hover:text-white" />
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
