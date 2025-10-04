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
  visible: { x: 0, opacity: 1 },
};

const slideInUp: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const zoomIn: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
}

const animationVariants = {
  'default': defaultVariants,
  'slide-in-left': slideInLeft,
  'slide-in-up': slideInUp,
  'fade-in': fadeIn,
  'zoom-in': zoomIn
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
  amount = 0.5,
  ...props
}: MotionProps<T>) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once, amount });
  
  const MotionComponent = motion[as || 'div'] as React.ElementType;
  const selectedVariant = animationVariants[variant];

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={selectedVariant}
      transition={{ duration: 0.6, delay: delay, ease: 'easeOut' }}
      className={cn(className)}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};
