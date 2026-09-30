// lib/fonts.ts
import localFont from 'next/font/local';

export const didot = localFont({
  src: '../public/fonts/didot.otf', // apna path daalo
  variable: '--font-didot',
  display: 'swap',
});