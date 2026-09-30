'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { ButtonLink } from '@/components/ui/ButtonLink';

export function FinalCTA() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 lg:py-32">
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/13219418/pexels-photo-13219418.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Modern building exterior at night"
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/90 to-navy-950" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-blue-400" />
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              Let&apos;s Build Together
            </span>
            <span className="h-px w-8 bg-blue-400" />
          </div>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Have a Project in Mind?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Discuss your commercial, retail, aviation, furniture or specialized project
            requirements with Sri Sai Realtors.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <ButtonLink href="/contact" variant="primary" size="large" icon="arrow">
              Start a Conversation
            </ButtonLink>
            <a
              href={`tel:${siteConfig.phoneInternational}`}
              className="group inline-flex items-center justify-center gap-2 rounded-sm border border-white/30 px-7 py-4 font-heading text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4 transition-transform group-hover:scale-110" />
              Call {siteConfig.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
