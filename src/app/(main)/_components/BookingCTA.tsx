
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Motion } from '@/components/ui/motion';

export function BookingCTA() {
  const ctaImage = PlaceHolderImages.find(p => p.id === 'about-salon');

  return (
    <section className="relative py-20 sm:py-32 bg-secondary/30">
      {ctaImage && (
        <Image 
          src={ctaImage.imageUrl}
          alt={ctaImage.description}
          fill
          className="object-cover object-center"
          data-ai-hint={ctaImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative container max-w-7xl">
        <div className="grid md:grid-cols-2">
            <Motion variant='slide-in-up' className="md:col-start-2">
                <div className="bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl md:text-5xl font-headline font-bold">Your Good Hair Day Starts Here.</h2>
                    <p className="mt-4 text-muted-foreground">
                        Ready for a transformation? Our expert stylists are waiting to bring your hair vision to life.
                    </p>
                    <Button asChild size="lg" className="mt-8">
                    <Link href="/">Book Your Appointment Now</Link>
                    </Button>
                    <div className="mt-4 bg-muted/50 border border-border rounded-md px-3 py-1 inline-block">
                        <p className="text-xs text-muted-foreground">
                        Instant confirmation via Fresha.
                        </p>
                    </div>
                </div>
            </Motion>
        </div>
      </div>
    </section>
  );
}
