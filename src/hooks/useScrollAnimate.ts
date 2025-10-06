
'use client';

import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimate = (ref: RefObject<HTMLElement>, elementsToAnimate: string) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(elementsToAnimate);
      cards.forEach((card: any) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            end: 'bottom 70%',
            scrub: true,
            markers: false, // set to true for debugging
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, [ref, elementsToAnimate]);
};
