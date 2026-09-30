import type { Metadata } from 'next';
import { Phone, MessageCircle, User, MapPin } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { ContactForm } from '@/components/forms/ContactForm';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact — Sri Sai Realtors',
  description:
    'Get in touch with Sri Sai Realtors to discuss your commercial, retail, aviation, furniture or specialized project requirements.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Discuss Your Project"
        subtitle="Tell us about your requirements — we'll get back to you promptly."
        image="https://images.pexels.com/photos/4269266/pexels-photo-4269266.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Modern office reception desk"
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
                  Get in Touch
                </p>
                <h2 className="mt-4 font-heading text-2xl font-bold text-foreground sm:text-3xl">
                  Speak with our team
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Whether you have a defined project scope or are exploring options,
                  we&apos;re ready to discuss your requirements.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4 rounded-sm border border-border p-5">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm bg-blue-100 text-blue-600">
                      <User className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Contact Person
                      </p>
                      <p className="mt-1 font-heading text-base font-semibold text-foreground">
                        {siteConfig.contactPerson}
                      </p>
                    </div>
                  </div>

                  <a
                    href={`tel:${siteConfig.phoneInternational}`}
                    className="group flex items-start gap-4 rounded-sm border border-border p-5 transition-colors hover:border-primary hover:bg-secondary"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm bg-blue-100 text-blue-600 transition-colors group-hover:bg-primary group-hover:text-white">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Phone
                      </p>
                      <p className="mt-1 font-heading text-base font-semibold text-foreground">
                        {siteConfig.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 rounded-sm border border-border p-5 transition-colors hover:border-primary hover:bg-secondary"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm bg-[#25D366]/10 text-[#25D366] transition-colors group-hover:bg-[#25D366] group-hover:text-white">
                      <MessageCircle className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        WhatsApp
                      </p>
                      <p className="mt-1 font-heading text-base font-semibold text-foreground">
                        Chat with us
                      </p>
                    </div>
                  </a>
                </div>

                <div className="mt-8 rounded-sm bg-secondary p-5">
                  <p className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    Pan-India project execution
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
