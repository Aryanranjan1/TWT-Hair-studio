
'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

const animationVariants = {
  'fade-in': {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  'slide-in-up': {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  'slide-in-down': {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  },
  'slide-in-left': {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  },
  'slide-in-right': {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
  },
  'zoom-in': {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
  },
  'zoom-out': {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1 },
  },
  'flip-in-x': {
    initial: { opacity: 0, rotateX: -90 },
    animate: { opacity: 1, rotateX: 0 },
  },
  'flip-in-y': {
    initial: { opacity: 0, rotateY: -90 },
    animate: { opacity: 1, rotateY: 0 },
  },
  'pop-in': {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
  'hop-in': {
    initial: { opacity: 0, y: -40, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
  },
  'slide-in-diag-1': {
    initial: { opacity: 0, x: -30, y: -30 },
    animate: { opacity: 1, x: 0, y: 0 },
  },
  'slide-in-diag-2': {
    initial: { opacity: 0, x: 30, y: -30 },
    animate: { opacity: 1, x: 0, y: 0 },
  },
};

type MotionProps<T extends keyof typeof animationVariants> = HTMLMotionProps<"div"> & {
  variant: T;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number | 'some' | 'all';
  as?: React.ElementType;
};

export function Motion<T extends keyof typeof animationVariants>({
  children,
  variant,
  className,
  delay = 0,
  duration = 0.4,
  once = true,
  amount = 0.1,
  as,
  ...props
}: MotionProps<T>) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });
  const selectedVariant = animationVariants[variant];

  const variants: Variants = {
    hidden: {
      ...selectedVariant.initial,
      transition: { duration, delay, ease: 'easeOut' },
    },
    visible: {
      ...selectedVariant.animate,
      transition: { duration, delay, ease: 'easeOut' },
    },
  };
  
  const MotionComponent = as || motion.div;

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={cn(className)}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
