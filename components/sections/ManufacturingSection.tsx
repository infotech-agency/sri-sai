'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { furnitureProducts } from '@/data/site';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { ImageReveal } from '@/components/animations/ImageReveal';

const highlights = [
  'Product quality',
  'Manufacturing schedules',
  'Customization',
  'Material selection',
  'Quality inspection',
  'Delivery coordination',
  'Installation',
];

export function ManufacturingSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative">
            <ImageReveal
              src="https://images.pexels.com/photos/14804687/pexels-photo-14804687.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Workers operating machinery in a furniture manufacturing facility"
              width={1200}
              height={800}
              className="relative aspect-[4/3] overflow-hidden rounded-sm"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute -bottom-6 -right-4 hidden bg-primary px-6 py-5 text-white sm:block lg:-right-6">
              <p className="font-heading text-3xl font-extrabold leading-none">2018</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/70">
                Established
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="In-House Manufacturing"
              title="Furniture Built Around Your Project."
              subtitle="Sri Sai Realtors has its own furniture manufacturing facility, enabling customized solutions for commercial, corporate, retail and aviation projects."
            />

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={prefersReduced ? {} : { opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <Check className="h-3 w-3 text-blue-600" />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="font-heading text-xs font-semibold uppercase tracking-wider text-blue-500">
                Products
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {furnitureProducts.map((product) => (
                  <span
                    key={product}
                    className="rounded-sm bg-secondary px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <ButtonLink href="/about" variant="primary" icon="arrow">
                Explore Our Capabilities
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
