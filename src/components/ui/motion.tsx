
'use client';
import { useRef } from 'react';
import { motion, useInView, type Variants, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const slideInLeft: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
};

const slideInRight: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
};

const slideInUp: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
};

const slideInDiagLeft: Variants = {
  hidden: { x: -100, y: -100, opacity: 0 },
  visible: { x: 0, y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
};

const slideInDiagRight: Variants = {
  hidden: { x: 100, y: 100, opacity: 0 },
  visible: { x: 0, y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const zoomIn: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
}

const hopAndPop: Variants = {
  hidden: { y: 50, scale: 0.8, opacity: 0 },
  visible: { 
    y: 0, 
    scale: 1, 
    opacity: 1, 
    transition: { type: 'spring', stiffness: 200, damping: 10 } 
  },
};


const animationVariants = {
  'default': defaultVariants,
  'slide-in-left': slideInLeft,
  'slide-in-right': slideInRight,
  'slide-in-up': slideInUp,
  'slide-in-diag-left': slideInDiagLeft,
  'slide-in-diag-right': slideInDiagRight,
  'fade-in': fadeIn,
  'zoom-in': zoomIn,
  'hop-and-pop': hopAndPop,
};

type MotionProps<T extends keyof HTMLElementTagNameMap> = {
  children?: React.ReactNode;
  className?: string;
  as?: T;
  variant?: keyof typeof animationVariants;
  once?: boolean;
  delay?: number;
  amount?: number;
} & HTMLMotionProps<T>;

export const Motion = <T extends keyof HTMLElementTagNameMap = 'div'>({
  children,
  className,
  as,
  variant = 'default',
  once = false,
  delay = 0,
  amount = 0.2, // Trigger animation when 20% of the element is in view
  ...props
}: MotionProps<T>) => {
  const ref = useRef<HTMLElement>(null);
  // Animate when in view, and animate out when it leaves. 'once: false' is key.
  const isInView = useInView(ref, { once, amount });
  
  const MotionComponent = motion[as || 'div'] as React.ElementType;
  const selectedVariant = animationVariants[variant];

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'} // Controls in/out animation
      exit="hidden" // Ensures it animates out
      variants={selectedVariant}
      transition={{ duration: 0.6, delay: delay, ease: 'easeOut' }}
      className={cn(className)}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};
