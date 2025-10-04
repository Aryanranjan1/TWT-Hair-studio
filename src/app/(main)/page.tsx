import Image from 'next/image';
import Link from 'next/link';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';


function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');

  return (
    <section className="relative w-full h-screen min-h-[600px] text-primary-foreground">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
      <div className="relative h-full flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-white drop-shadow-lg">
          Good Hair Day, Every Day.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-200 drop-shadow-md">
          Professional Haircuts, Coloring & Treatments in Tropicana, PJ.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 mt-8'>
            <Button asChild size="lg">
                <Link href="/booking">Book Your Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
                <Link href="/services">View Services</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
    </>
  );
}
