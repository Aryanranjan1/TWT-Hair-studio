
'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    lenis.on('scroll', (e: any) => {
      // console.log(e)
    })
    
    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })
    
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, [pathname]);

  return <>{children}</>;
};

export default SmoothScroll;
