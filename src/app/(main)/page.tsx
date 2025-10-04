
import Image from 'next/image';
import Link from 'next/link';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');

  return (
    <section className="relative w-full h-screen text-primary-foreground overflow-hidden">
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
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative h-full flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-7xl md:text-9xl font-headline font-light text-white tracking-wider uppercase">
          TWT
        </h1>
        <h2 className="text-xl md:text-2xl font-body text-white tracking-[0.2em] uppercase">
          Hair Studio
        </h2>
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
