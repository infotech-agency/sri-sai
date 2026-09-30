'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { BlogPost } from '@/lib/blog-data';

export function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group block overflow-hidden rounded-sm border border-border bg-card transition-shadow hover:shadow-lg"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4 rounded-sm bg-navy-950/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            {post.category}
          </div>
        </div>

        <div className="p-6">
          <p className="mb-2 text-xs text-muted-foreground">
            {new Date(post.date).toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}{' '}
            · {post.readTime}
          </p>

          <h3 className="mb-3 font-heading text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
            {post.title}
          </h3>

          <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>

          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
            Read more
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}