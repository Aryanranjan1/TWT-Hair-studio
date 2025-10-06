
'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

type AnimationOptions = {
  from: gsap.TweenVars;
  to: gsap.TweenVars;
  triggerOptions?: ScrollTrigger.Vars;
};

/**
 * Custom hook to apply scroll-triggered animations using GSAP.
 * @param options - Configuration for the animation.
 * @returns A ref to be attached to the target element.
 */
export const useScrollAnimate = <T extends HTMLElement>(options: AnimationOptions) => {
  const ref = useRef<T>(null);

  const { from, to, triggerOptions } = options;

  useEffect(() => {
    const element = ref.current;

    if (element) {
      // Set initial animation state
      gsap.set(element, from);

      // Create the scroll-triggered animation
      const animation = gsap.to(element, {
        ...to,
        scrollTrigger: {
          trigger: element,
          start: 'top 85%', // Animation starts when the top of the element is 85% from the top of the viewport
          end: 'bottom 15%', // Animation can reverse when element leaves the viewport
          toggleActions: 'play reverse play reverse', // Play on enter, reverse on leave
          ...triggerOptions,
        },
      });

      // Cleanup function to kill the animation and ScrollTrigger instance on unmount
      return () => {
        animation.scrollTrigger?.kill();
        animation.kill();
      };
    }
  }, [from, to, triggerOptions]);

  return ref;
};
