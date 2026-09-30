'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { processSteps } from '@/data/site';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function ProcessTimeline() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Approach"
          title="From Plan to Handover"
          // subtitle="A structured seven-stage process that coordinates every discipline — from initial planning through final handover."
          subtitle="A structured seven-stage process that coordinates every discipline, from initial planning and technical drawings through final handover."
          align="center"
        />

        <div className="mt-16 hidden lg:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-6 h-px bg-border" />
            <motion.div
              className="absolute left-0 top-6 h-px bg-blue-500"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
            <div className="relative grid grid-cols-7 gap-2">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-500 bg-white font-heading text-sm font-bold text-blue-600">
                    {step.step}
                  </div>
                  <h3 className="mt-4 font-heading text-base font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="mt-12 lg:hidden">
          <div className="relative pl-8">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={prefersReduced ? {} : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pb-8 last:pb-0"
              >
                <div className="absolute -left-[1.45rem] top-0.5 flex h-7 w-7 items-center justify-center rounded-full border-2 border-blue-500 bg-white font-heading text-[10px] font-bold text-blue-600">
                  {step.step}
                </div>
                <h3 className="font-heading text-base font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div> */}
        <div className="mt-12 lg:hidden">
  <div className="relative pl-10">
    {/* Vertical line */}
    <div className="absolute left-3.5 top-0 bottom-0 w-px bg-border" />
    
    {processSteps.map((step, i) => (
      <motion.div
        key={step.step}
        initial={prefersReduced ? {} : { opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: i * 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative pb-8 last:pb-0"
      >
        {/* Step number circle — positioned relative to the container's left edge */}
        <div className="absolute -left-10 top-0.5 flex h-7 w-7 items-center justify-center rounded-full border-2 border-blue-500 bg-white font-heading text-[10px] font-bold text-blue-600">
          {step.step}
        </div>
        <h3 className="font-heading text-base font-bold text-foreground">
          {step.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {step.description}
        </p>
      </motion.div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}
