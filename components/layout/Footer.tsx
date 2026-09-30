// 'use client';

// import Link from 'next/link';
// import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
// import { siteConfig } from '@/data/site';
// import Image from 'next/image';

// export function Footer() {
//   return (
//     <footer className="navy-bg border-t border-white/10">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
//         <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
//           <div className="lg:col-span-1">
//             <Link
//               href="/"
//               className="flex items-center gap-2.5 font-heading font-bold text-lg text-white"
//             >
//              <Image src={'/logo/logo-white.png'} alt='logo' height={70} width={70}/>
              
//             </Link>
//             <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
//               {siteConfig.positioning}
//             </p>
//             <p className="mt-6 text-sm text-white/40">
//               Established {siteConfig.established}
//             </p>
//           </div>

//           <div>
//             <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
//               Navigation
//             </h3>
//             <ul className="mt-4 space-y-3">
//               {siteConfig.nav.map((item) => (
//                 <li key={item.href}>
//                   <Link
//                     href={item.href}
//                     className="group inline-flex items-center gap-1 text-sm text-white/60 transition-colors hover:text-white"
//                   >
//                     <span>{item.label}</span>
//                     <ArrowRight className="h-3 w-0 -translate-x-1 opacity-0 transition-all group-hover:w-3 group-hover:translate-x-0 group-hover:opacity-100" />
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
//               Services
//             </h3>
//             <ul className="mt-4 space-y-3">
//               {siteConfig.services.map((service) => (
//                 <li key={service}>
//                   <span className="text-sm text-white/60">{service}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
//               Contact
//             </h3>
//             <div className="mt-4 space-y-3">
//               <p className="text-sm text-white/60">{siteConfig.contactPerson}</p>
//               <a
//                 href={`tel:${siteConfig.phoneInternational}`}
//                 className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
//               >
//                 <Phone className="h-4 w-4 text-blue-400" />
//                 {siteConfig.phone}
//               </a>
//               <a
//                 href={`https://wa.me/${siteConfig.whatsapp}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
//               >
//                 <MessageCircle className="h-4 w-4 text-blue-400" />
//                 WhatsApp
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="mt-16 border-t border-white/10 pt-8">
//           <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
//             <p className="text-xs text-white/40">
//               &copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
//             </p>
//             <p className="font-heading text-xs font-semibold uppercase tracking-widest text-white/30">
//               {siteConfig.promise}
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative navy-bg border-t border-white/10 overflow-hidden">
      {/* Organic wave divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-[1px]">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-20"
          aria-hidden="true"
        >
          <path
            d="M0,40 C240,90 480,0 720,30 C960,60 1200,10 1440,40 L1440,0 L0,0 Z"
            className="fill-white/[0.03]"
          />
        </svg>
      </div>

      {/* Ambient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 font-heading font-bold text-lg text-white rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label={`${siteConfig.name} — home`}
            >
              <div className="rounded-2xl bg-white/5 p-2 ring-1 ring-white/10">
                <Image
                  src="/logo/logo-white.png"
                  alt={siteConfig.name}
                  height={70}
                  width={70}
                  priority={false}
                />
              </div>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {siteConfig.positioning}
            </p>
            <div className="mt-6 inline-flex items-center rounded-full bg-white/5 px-4 py-1.5 ring-1 ring-white/10">
              <span className="text-xs text-white/40">
                Established {siteConfig.established}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
              Navigation
            </h3>
            <ul className="mt-5 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 rounded-full py-1.5 pr-3 text-sm text-white/60 transition-all hover:pl-3 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:text-white"
                  >
                    <span>{item.label}</span>
                    <ArrowRight
                      className="h-3 w-0 -translate-x-1 opacity-0 transition-all group-hover:w-3 group-hover:translate-x-0 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
              Services
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {siteConfig.services.map((service, i) => (
                <li key={`${service}-${i}`}>
                  <span className="inline-block rounded-full bg-white/5 px-3.5 py-1.5 text-xs text-white/60 ring-1 ring-white/10">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
              Contact
            </h3>
            <div className="mt-5 space-y-3">
              <p className="text-sm text-white/60">{siteConfig.contactPerson}</p>

              
              <a  href={`tel:${siteConfig.phoneInternational}`}
                className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:ring-white/20 focus-visible:outline-none focus-visible:ring-blue-400"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/15">
                  {/* <Phone className="h-4 w-4 text-blue-400" aria-hidden="true" /> */}
                  <Image src={'/telephone.png'} height={40} width={40} alt='linkedin'/>
                </span>
                <span className="text-sm text-white/80">{siteConfig.phone}</span>
              </a>

              
              <a  href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:ring-white/20 focus-visible:outline-none focus-visible:ring-blue-400"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/15">
                  <Image src={'/whatsapp.png'} height={40} width={40} alt='linkedin'/>
                </span>
                <span className="text-sm text-white/80">
                  WhatsApp
                  <span className="sr-only"> (opens in a new tab)</span>
                </span>
              </a>

               <a  href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:ring-white/20 focus-visible:outline-none focus-visible:ring-blue-400"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/15">
                  {/* <MessageCircle className="h-4 w-4 text-blue-400" aria-hidden="true" /> */}
                  <Image src={'/linkedin.png'} height={40} width={40} alt='linkedin'/>
                </span>
                <span className="text-sm text-white/80">
                  LinkedIn
                  <span className="sr-only"> (opens in a new tab)</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar — pill shaped */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 rounded-full bg-white/[0.03] px-6 py-4 ring-1 ring-white/10 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {year} {siteConfig.name}. All Rights Reserved.
          </p>
          <p className="font-heading text-xs font-semibold uppercase tracking-widest text-white/30">
            {siteConfig.promise}
          </p>
        </div>
      </div>
    </footer>
  );
}