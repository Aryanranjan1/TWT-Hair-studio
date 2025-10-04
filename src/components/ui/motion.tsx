'use client'

import { useRef, type ComponentProps, type ElementType } from 'react'
import { motion, useInView } from 'framer-motion'

type MotionVariant =
  | 'fade-in'
  | 'slide-in-up'
  | 'slide-in-down'
  | 'slide-in-left'
  | 'slide-in-right'
  | 'scale-in'
  | 'rotate-in'

type MotionProps<T extends ElementType> = {
  as?: T
  variant: MotionVariant
  delay?: number
  duration?: number
  once?: boolean
  amount?: number
} & ComponentProps<T>

const variants = {
  'fade-in': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  'slide-in-up': {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  'slide-in-down': {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  'slide-in-left': {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  'slide-in-right': {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },
  'scale-in': {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  'rotate-in': {
    hidden: { opacity: 0, rotate: -5 },
    visible: { opacity: 1, rotate: 0 },
  },
}

export function Motion<T extends ElementType = 'div'>({
  as,
  variant,
  delay = 0,
  duration = 0.5,
  once = false,
  amount = 0.2,
  ...props
}: MotionProps<T>) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount })
  const Component = as || 'div'
  const MotionComponent = motion(Component)

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[variant]}
      transition={{ delay, duration, ease: 'easeOut' }}
      {...props}
    />
  )
}
