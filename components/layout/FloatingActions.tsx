'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/site';
import Image from 'next/image';

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-4 z-40 flex flex-col gap-3 transition-all duration-500 sm:bottom-6 sm:right-6 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      aria-hidden={!show}
    >
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 sm:h-13 sm:w-13"
      >
        {/* <MessageCircle className="h-5 w-5 text-white" /> */}
        <Image src={'/whatsapp.png'} className='rounded-full' height={47} width={47} alt='linkedin'/>
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-sm bg-navy-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 md:block">
          Chat on WhatsApp
        </span>
      </a>
      <a
        href={`tel:${siteConfig.phoneInternational}`}
        aria-label="Call Sri Sai Realtors"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full  shadow-lg transition-transform hover:scale-110 sm:h-13 sm:w-13"
      >
        {/* <Phone className="h-5 w-5 text-white" /> */}
        <Image src={'/telephone.png'} className='rounded-full' height={47} width={47} alt='linkedin'/>
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-sm bg-navy-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 md:block">
          Call {siteConfig.phone}
        </span>
      </a>
    </div>
  );
}
