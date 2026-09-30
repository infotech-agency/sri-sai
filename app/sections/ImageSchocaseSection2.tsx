'use client'
import React, { useEffect, useState } from 'react'
import { didot } from '@/lib/fonts';

const ImageSchocaseSection2 = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/33314763/pexels-photo-33314763.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/10" /> */}
      {/* Dark overlay */}
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        {/* Small kicker line */}
        <span
          className={`inline-block uppercase tracking-[0.3em] text-xs md:text-sm text-white/70 mb-4 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Interior Design Studio
        </span>

        <h1
          className={`text-white ${didot.className} text-4xl md:text-6xl lg:text-7xl leading-tight mb-8 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Where Every Room <br />
          <span className="italic text-primary">Finds Its Character</span>
        </h1>

        <p
          className={`text-gray-200 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000 ease-out delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          We pair considered materials with a light hand, shaping rooms that
          feel personal, calm, and built to live in — not just to look at.
        </p>

        {/* Animated underline accent */}
        <div
          className={`mx-auto h-px bg-white/50 transition-all duration-1000 ease-out delay-700 ${
            isVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'
          }`}
        />
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-1000 delay-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-white/70 text-[10px] uppercase tracking-[0.25em]">
          Scroll
        </span>
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/80 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default ImageSchocaseSection2