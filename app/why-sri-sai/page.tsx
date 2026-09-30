import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ImageReveal } from '@/components/animations/ImageReveal';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Why Sri Sai Realtors — Integrated Execution Partner',
  description:
    'One integrated partner from planning to handover. Integrated execution, in-house manufacturing, commercial expertise, aviation experience, project coordination, quality control, and pan-India capability.',
};

const differentiators = [
  {
    title: 'Integrated Execution',
    description:
      'Civil, interiors, MEP, furniture and installation are coordinated under one project framework — eliminating the friction of managing multiple vendors and contractors.',
    image:
      'https://images.pexels.com/photos/35203642/pexels-photo-35203642.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Modern open office with workstations',
  },
  {
    title: 'In-House Manufacturing',
    description:
      'Our own furniture manufacturing facility gives us direct control over product quality, customization, lead times and finishing — critical for projects with specific requirements.',
    image:
      'https://images.pexels.com/photos/5710910/pexels-photo-5710910.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Artisan shaping wood in a workshop',
  },
  {
    title: 'Commercial Expertise',
    description:
      'Years of experience across corporate, commercial, retail and operational environments — we understand the standards, timelines and coordination these projects demand.',
    image:
      'https://images.pexels.com/photos/5444186/pexels-photo-5444186.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Modern office interior with desks and chairs',
  },
  {
    title: 'Aviation Experience',
    description:
      'Execution capabilities within airport and aviation facilities, supported by BCAS Security Clearance and adherence to project-specific security protocols.',
    image:
      'https://images.pexels.com/photos/12940671/pexels-photo-12940671.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Airport terminal interior',
  },
];

const additionalPoints = [
  {
    title: 'Project Coordination',
    description:
      'Structured coordination from planning through final handover with defined milestones, clear communication and accountable project management.',
  },
  {
    title: 'Quality Control',
    description:
      'Inspection at every stage — from material selection and manufacturing through on-site execution, installation and final handover.',
  },
  {
    title: 'Pan-India Capability',
    description:
      'Execution capability across project locations in India, with the coordination and logistics to deliver consistently.',
  },
  {
    title: 'Client-Focused Approach',
    description:
      'We prioritize transparent communication, client requirements and long-term relationships over short-term gains.',
  },
];

export default function WhySriSaiPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="Why Sri Sai Realtors"
        subtitle="One Integrated Partner. From Planning to Handover."
        image="https://images.pexels.com/photos/34823913/pexels-photo-34823913.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Contemporary office reception with wood and glass"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
          {differentiators.map((item, i) => (
            <div
              key={item.title}
              className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <ImageReveal
                src={item.image}
                alt={item.alt}
                width={1200}
                height={800}
                className="relative aspect-[4/3] overflow-hidden rounded-sm"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div>
                <ScrollReveal>
                  <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
                    {String(i + 1).padStart(2, '0')} — Differentiator
                  </p>
                  <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                    {item.title}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </ScrollReveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Additional Strengths"
            title="Built on Discipline and Coordination"
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {additionalPoints.map((point, i) => (
              <ScrollReveal key={point.title} delay={i * 0.1} className="bg-white p-7 lg:p-8">
                <span className="font-heading text-3xl font-extrabold text-blue-100">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-heading text-lg font-bold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Ready to Start"
            title="Let's Discuss Your Project"
            align="center"
          />
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="primary" size="large" icon="arrow">
              Start a Conversation
            </ButtonLink>
            <ButtonLink href="/work" variant="secondary" size="large" icon="arrow">
              View Our Work
            </ButtonLink>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
