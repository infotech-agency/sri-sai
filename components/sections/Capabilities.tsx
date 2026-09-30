// 'use client';

// import Image from 'next/image';
// import { motion, useReducedMotion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';
// import Link from 'next/link';
// import { capabilities } from '@/data/site';
// import { SectionHeading } from '@/components/ui/SectionHeading';
// import { ScrollReveal } from '@/components/animations/ScrollReveal';

// export function Capabilities() {
//   const prefersReduced = useReducedMotion();

//   return (
//     <section className="bg-secondary py-20 lg:py-28">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <SectionHeading
//           eyebrow="What We Do"
//           title="Capabilities"
//           subtitle="End-to-end solutions across interiors, furniture, civil, MEP and specialized projects."
//         />

//         <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
//           {capabilities.map((cap, i) => {
//             const isLarge = i === 0 || i === 3;
//             return (
//               <motion.div
//                 key={cap.id}
//                 initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: '-60px' }}
//                 transition={{
//                   duration: 0.6,
//                   delay: i * 0.08,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 className={isLarge ? 'lg:col-span-2' : ''}
//               >
//                 <Link
//                   href="/about"
//                   className="group relative block h-full overflow-hidden rounded-sm border border-border bg-white"
//                 >
//                   <div className="relative h-56 overflow-hidden lg:h-64">
//                     <Image
//                       src={cap.image}
//                       alt={cap.alt}
//                       fill
//                       sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                       className="object-cover transition-transform duration-700 group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
//                     <span className="absolute left-5 top-5 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
//                       {cap.items[0]}
//                     </span>
//                   </div>
//                   <div className="p-6 lg:p-7">
//                     <div className="flex items-start justify-between gap-4">
//                       <h3 className="font-heading text-xl font-bold text-foreground lg:text-2xl">
//                         {cap.title}
//                       </h3>
//                       <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500 transition-transform group-hover:translate-x-1" />
//                     </div>
//                     <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
//                       {cap.description}
//                     </p>
//                     <div className="mt-5 flex flex-wrap gap-2">
//                       {cap.items.map((item) => (
//                         <span
//                           key={item}
//                           className="rounded-sm border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground"
//                         >
//                           {item}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </Link>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { capabilities, machines } from '@/data/site';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export function Capabilities() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Capabilities"
          subtitle="End-to-end solutions across interiors, furniture, civil, MEP and specialized projects."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {capabilities.map((cap, i) => {
            const isLarge = i === 0 || i === 3;
            return (
              <motion.div
                key={cap.id}
                initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={isLarge ? 'lg:col-span-2' : ''}
              >
                <Link
                  href="/about"
                  className="group relative block h-full overflow-hidden rounded-sm border border-border bg-white"
                >
                  <div className="relative h-56 overflow-hidden lg:h-64">
                    <Image
                      src={cap.image}
                      alt={cap.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                      {cap.items[0]}
                    </span>
                  </div>
                  <div className="p-6 lg:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-heading text-xl font-bold text-foreground lg:text-2xl">
                        {cap.title}
                      </h3>
                      <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500 transition-transform group-hover:translate-x-1" />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {cap.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {cap.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-sm border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Machines */}
        <div className="mt-20 lg:mt-24">
          <h3 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
            Our Machines
          </h3>
          <div className="section-line mt-4 h-[3px] w-24" />
          <p className="mt-4 max-w-2xl text-muted-foreground">
            In-house woodworking machinery for precise cutting, edge finishing,
            routing and pressing.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6 lg:gap-5">
            {machines.map((machine, i) => (
              <motion.figure
                key={machine.id}
                initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-white ${
                  i < 2 ? 'lg:col-span-3' : 'lg:col-span-2'
                }`}
              >
                <Image
                  src={machine.image}
                  alt={machine.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                  <div className="mb-3 h-[3px] w-10 bg-accent" />
                  <span className="font-heading text-lg font-bold text-black lg:text-xl">
                    {machine.name}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}