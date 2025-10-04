
import Image from 'next/image';
import Link from 'next/link';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { FeaturedServices } from './_components/FeaturedServices';
import { ServicesSnapshot } from './_components/ServicesSnapshot';
import { ValuePropositions } from './_components/ValuePropositions';
import { AboutSnapshot } from './_components/AboutSnapshot';

function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image-2');

  return (
    <section className="bg-secondary">
      <div className="container max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-screen pt-20 md:pt-0">
          <div className="text-center md:text-left">
            <p className="font-headline text-3xl md:text-4xl text-primary mb-4">TWT Hair Studio</p>
            <h1 className="text-5xl md:text-7xl font-bold font-headline uppercase tracking-tight text-foreground">
              Good Hair Day,
              <br />
              Every Day.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Welcome to a space where your hair is our canvas. We are dedicated to crafting the perfect look that reflects your unique personality and style.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/booking">Book Your Experience</Link>
            </Button>
          </div>
          <div className="relative h-96 md:h-[600px] w-full">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover rounded-lg shadow-2xl"
                priority
                data-ai-hint={heroImage.imageHint}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <ServicesSnapshot />
      <ValuePropositions />
      <AboutSnapshot />
    </>
  );
}
