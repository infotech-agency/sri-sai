import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { CompanyIntro } from '@/components/sections/CompanyIntro';
import { ManufacturingSection } from '@/components/sections/ManufacturingSection';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { WhySriSai } from '@/components/sections/WhySriSai';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ImageReveal } from '@/components/animations/ImageReveal';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'About — Sri Sai Realtors',
  description:
    'Established in 2018, Sri Sai Realtors delivers integrated interior fit-out, in-house furniture manufacturing, civil & MEP, and specialized project execution across India.',
};

const experienceSectors = [
  'Commercial',
  'Corporate',
  'Retail',
  'Aviation',
  'Warehousing',
  'Fulfilment',
  'Hospitality',
  'Infrastructure',
  'Museums',
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About Sri Sai Realtors"
        subtitle="Integrated Interior Fit-Out & Furniture Solutions"
        image="https://images.pexels.com/photos/7511755/pexels-photo-7511755.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Office building hallway with modern design"
      />

      <CompanyIntro />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <ImageReveal
              src="https://images.pexels.com/photos/35203642/pexels-photo-35203642.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Modern open office with workstations and natural lighting"
              width={1200}
              height={800}
              className="relative aspect-[4/3] overflow-hidden rounded-sm"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div>
              <SectionHeading
                eyebrow="Our Experience"
                title="Diverse Sector Experience"
                subtitle="From corporate offices to controlled airport environments, our portfolio spans multiple commercial and infrastructure sectors."
              />
              <ScrollReveal delay={0.2} className="mt-6">
                <p className="text-base leading-relaxed text-muted-foreground">
                  Our experience includes commercial and retail projects, aviation
                  interiors within airport environments, warehouse and fulfilment
                  centre fit-outs, hospitality spaces, museums, and large-scale
                  infrastructure support — each executed with attention to quality,
                  timelines and project-specific requirements.
                </p>
              </ScrollReveal>
              <div className="mt-8 flex flex-wrap gap-2">
                {experienceSectors.map((sector) => (
                  <span
                    key={sector}
                    className="rounded-sm border border-border bg-secondary px-3.5 py-2 text-sm font-medium text-foreground"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ManufacturingSection />

      <ProcessTimeline />

      <WhySriSai />

      <section className="navy-bg py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              Our Promise
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Quality. Commitment. Execution. Integrity.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60">
              We focus on long-term relationships, transparent communication,
              consistent workmanship, quality, safety, timelines and client
              satisfaction — across every project we undertake.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 border-t border-white/10 pt-10">
              {siteConfig.promise.split(' | ').map((word) => (
                <span
                  key={word}
                  className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-white/40"
                >
                  {word}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
