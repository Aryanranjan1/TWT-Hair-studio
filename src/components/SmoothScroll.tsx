
'use client'

import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      lerp: 0.1, // Controls the smoothness. Closer to 1 is more responsive.
    });

    lenisRef.current = lenis;

    // Sync GSAP's ticker with Lenis's animation frame for perfect animation timing
    const unsubscribe = gsap.ticker.add((time: number) => {
      lenis.raf(time * 1000);
    });
    
    // Start the animation loop
    gsap.ticker.lagSmoothing(0);


    // Cleanup on unmount
    return () => {
      unsubscribe();
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
