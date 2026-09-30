'use client';

import { clients } from '@/data/clients';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function ClientMarquee() {
  const doubled = [...clients, ...clients];

  return (
    <section className="border-y border-border bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Experience"
          title="Trusted Across Diverse Sectors"
          align="center"
        />
      </div>

      <div className="relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="marquee-track flex w-max items-center gap-12">
          {doubled.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex h-16 w-36 flex-shrink-0 items-center justify-center px-4"
              title={client.name}
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                loading="lazy"
                className="max-h-12 w-auto max-w-full object-contain  transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}