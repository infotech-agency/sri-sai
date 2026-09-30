import './globals.css';
import type { Metadata } from 'next';
// import { Manrope, Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/layout/FloatingActions';
import { ScrollProgress } from '@/components/layout/ScrollProgress';

// const manrope = Manrope({
//   subsets: ['latin'],
//   variable: '--font-heading',
//   display: 'swap',
//   weight: ['400', '500', '600', '700', '800'],
// });

const manrope = localFont({
  src: [
    {
      path: '../public/fonts/neutratext.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/neutratext.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-heading',
  display: 'swap',
});

const inter = localFont({
  src: '../public/fonts/neutratext.woff2',
  variable: '--font-body',
  display: 'swap',
});
// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-body',
//   display: 'swap',
//   weight: ['400', '500', '600'],
// });

export const metadata: Metadata = {
  title: {
    default: 'Sri Sai Realtors — Integrated Interior Fit-Out & Furniture Solutions',
    template: '%s | Sri Sai Realtors',
  },
  description:
    'Sri Sai Realtors delivers end-to-end interior fit-out, furniture manufacturing, civil & MEP, and specialized project execution for commercial, corporate, retail, aviation, warehousing, and large-scale infrastructure environments across India.',
  keywords: [
    'interior fit-out company',
    'commercial interior fit-out',
    'corporate office fit-out',
    'retail fit-out',
    'furniture manufacturing',
    'commercial furniture',
    'civil and MEP',
    'airport interior fit-out',
    'warehouse fit-out',
    'turnkey interior solutions',
    'Sri Sai Realtors',
  ],
  openGraph: {
    title: 'Sri Sai Realtors — Integrated Interior Fit-Out & Furniture Solutions',
    description:
      'End-to-end interior fit-out, in-house furniture manufacturing, civil & MEP, and specialized project execution across India.',
    type: 'website',
    siteName: 'Sri Sai Realtors',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sri Sai Realtors — Integrated Interior Fit-Out & Furniture Solutions',
    description:
      'End-to-end interior fit-out, in-house furniture manufacturing, civil & MEP, and specialized project execution across India.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="font-body text-foreground">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
