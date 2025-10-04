
'use client'

import { ReactLenis } from '@studio-freight/react-lenis'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.07, duration: 1.2, smoothTouch: true }}>
      {children}
    </ReactLenis>
  )
}
