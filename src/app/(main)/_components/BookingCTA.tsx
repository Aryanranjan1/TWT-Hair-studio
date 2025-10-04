'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function BookingCTA() {
  return (
    <section className="py-20 sm:py-32 bg-secondary">
      <div className="container max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-headline font-bold">Your Good Hair Day Starts Here.</h2>
        <Button asChild size="lg" className="mt-8">
          <Link href="/booking">Book Your Appointment Now</Link>
        </Button>
        <p className="mt-4 text-sm text-muted-foreground">
          Instant confirmation via Fresha.
        </p>
      </div>
    </section>
  );
}
