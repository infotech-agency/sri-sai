'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isHome = pathname === '/';

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled || !isHome
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border'
            : 'bg-transparent',
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 lg:h-20">
          <Link
  href="/"
  className={cn(
    'flex items-center gap-2.5 font-heading font-bold text-lg tracking-tight transition-colors',
    scrolled || !isHome ? 'text-primary' : 'text-white',
  )}
  aria-label="Sri Sai Realtors — Home"
>
  <Image
    src={
      scrolled || !isHome
        ? '/logo/logo-blue.png'   // white navbar ke liye dark logo
        : '/logo/logo-white.png'  // transparent navbar ke liye white logo
    }
    alt="Sri Sai Realtors logo"
    height={55}
    width={55}
    priority
  />
</Link>
          <ul className="hidden items-center gap-8 lg:flex">
            {siteConfig.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'relative font-body text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300',
                      active
                        ? 'after:w-full'
                        : 'after:w-0 hover:after:w-full',
                      scrolled || !isHome
                        ? active
                          ? 'text-primary'
                          : 'text-foreground/70 hover:text-foreground'
                        : active
                          ? 'text-white'
                          : 'text-white/70 hover:text-white',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phoneInternational}`}
              className={cn(
                'flex items-center gap-2 text-sm font-medium transition-colors',
                scrolled || !isHome
                  ? 'text-foreground/70 hover:text-primary'
                  : 'text-white/80 hover:text-white',
              )}
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className={cn(
                'inline-flex items-center rounded-sm px-5 py-2.5 text-sm font-semibold transition-all duration-300',
                scrolled || !isHome
                  ? 'bg-primary text-white hover:bg-blue-500'
                  : 'bg-white text-primary hover:bg-white/90',
              )}
            >
              Discuss Your Project
            </Link>
          </div>

          <button
            className={cn(
              'lg:hidden p-2 transition-colors',
              scrolled || !isHome
                ? 'text-foreground'
                : 'text-white',
            )}
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-navy-950 lg:hidden"
          >
            <div className="flex h-16 items-center justify-between px-4 sm:px-6">
              <span className="font-heading font-bold text-lg text-white">
                Sri Sai Realtors
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
                className="p-2 text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <motion.nav
              className="flex flex-col px-4 sm:px-6 pt-8"
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
                closed: {},
              }}
            >
              {siteConfig.nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 20 },
                    }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'block border-b border-white/10 py-5 font-heading text-2xl font-semibold transition-colors',
                        active ? 'text-blue-400' : 'text-white hover:text-blue-400',
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 },
                }}
                className="mt-8 flex flex-col gap-3"
              >
                <a
                  href={`tel:${siteConfig.phoneInternational}`}
                  className="flex items-center justify-center gap-2 rounded-sm border border-white/20 px-5 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
                >
                  <Phone className="h-5 w-5" />
                  Call {siteConfig.phone}
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center rounded-sm bg-blue-500 px-5 py-3.5 text-base font-semibold text-white transition-colors hover:bg-blue-400"
                >
                  Discuss Your Project
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
