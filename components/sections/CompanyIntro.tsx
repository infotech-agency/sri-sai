'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const facts = [
  { label: 'Established', value: '2018' },
  { label: 'Execution Model', value: 'End-to-End' },
  { label: 'Manufacturing', value: 'In-House' },
  { label: 'Reach', value: 'Pan-India' },
];

export function CompanyIntro() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="border-b border-border bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Sri Sai Realtors"
              title="Integrated Execution. Controlled Delivery."
              subtitle="Sri Sai Realtors provides end-to-end interior fit-out solutions for commercial, corporate, retail, aviation, warehousing, and large-scale infrastructure environments — backed by in-house furniture manufacturing and structured project management."
            />
            <ScrollReveal delay={0.2} className="mt-8">
              <p className="text-base leading-relaxed text-muted-foreground">
                From planning and procurement to manufacturing, execution, inspection,
                installation and handover, every stage is coordinated under a single
                project framework — giving clients one accountable partner from start
                to finish.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border">
              {facts.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  className="bg-white p-6 lg:p-8"
                  initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <p className="font-heading text-xs font-semibold uppercase tracking-wider text-blue-500">
                    {fact.label}
                  </p>
                  <p className="mt-2 font-heading text-xl font-bold text-foreground lg:text-2xl">
                    {fact.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
