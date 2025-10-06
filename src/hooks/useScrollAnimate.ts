
'use client';

import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Define a type for the animation properties for better type-checking
type AnimationVars = gsap.TweenVars;

export const useScrollAnimate = (
  ref: RefObject<HTMLElement>,
  elementsToAnimate: string,
  fromVars: AnimationVars,
  stagger: number = 0.2
) => {
  useEffect(() => {
    // Ensure the ref is attached to an element
    if (!ref.current) {
      console.warn("useScrollAnimate: Ref is not attached to an element.");
      return;
    }

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(elementsToAnimate);

      if (elements.length === 0) {
        // No elements found, do nothing.
        return;
      }

      gsap.from(elements, {
        ...fromVars,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 90%',
          end: 'bottom 70%',
          scrub: 1, // A value of 1 makes the scrub smoother
          markers: false, // set to true for debugging
        },
        stagger: stagger,
        ease: 'power1.out', // Use an ease for a more natural animation
      });
    }, ref);

    return () => ctx.revert();
  }, [ref, elementsToAnimate, fromVars, stagger]);
};
