'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, Plane, Building2, Clock, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ButtonLink } from '@/components/ui/ButtonLink';

const aviationHighlights = [
  {
    icon: ShieldCheck,
    label: 'BCAS Cleared',
    detail: '5-year validity',
  },
  {
    icon: Building2,
    label: 'Terminal Works',
    detail: 'Landside & airside',
  },
  {
    icon: Clock,
    label: 'Restricted-Hour Ops',
    detail: 'Night & off-peak execution',
  },
  {
    icon: CheckCircle2,
    label: 'Protocol Adherence',
    detail: 'Project-specific approvals',
  },
];

export function AviationSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-28">
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/12940671/pexels-photo-12940671.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Airport terminal interior"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Aviation Experience"
              title="Experience in Controlled Airport Environments"
              dark
              subtitle="Execution capabilities within airport and aviation facilities, supported by relevant security clearances and adherence to project-specific protocols."
            />

            <div className="mt-8 flex items-start gap-4 rounded-sm border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <ShieldCheck className="mt-0.5 h-6 w-6 flex-shrink-0 text-blue-400" />
              <p className="text-sm leading-relaxed text-white/70">
                Sri Sai Realtors holds a valid BCAS Security Clearance for 5 years,
                supporting its capability to undertake eligible works within controlled
                airport environments, subject to applicable project-specific approvals
                and security protocols.
              </p>
            </div>

            <div className="mt-8">
              <ButtonLink href="/work" variant="outline" icon="arrow">
                View Aviation Projects
              </ButtonLink>
            </div>
          </div>

          <div>
            <p className="mb-5 flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              <Plane className="h-4 w-4" />
              Airport Execution Capability
            </p>

            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10">
              {aviationHighlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={prefersReduced ? {} : { opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex flex-col items-start justify-center gap-2 bg-navy-900 p-6 lg:p-8"
                  >
                    <Icon className="h-6 w-6 text-blue-400" />
                    <span className="text-sm font-semibold text-white">
                      {item.label}
                    </span>
                    <span className="text-xs text-white/60">{item.detail}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}