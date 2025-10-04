
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

export function FeaturedServices() {
  const featured = services.slice(0, 5); // Displaying first 5 services as featured

  return (
    <section className="bg-background text-foreground py-16 sm:py-24">
      <div className="container max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
            Featured Hairstyles
          </h2>
          <p className="mt-4 text-3xl md:text-4xl font-headline">
            Discover services designed to nurture your style, from precision cuts to creative coloring.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <div className="flex overflow-x-auto pb-8 no-scrollbar">
          <div className="flex flex-nowrap gap-x-8 px-4 sm:px-6 lg:px-[50px]">
            {featured.map((service) => {
              const image = PlaceHolderImages.find((p) => p.id === service.image);
              return (
                <Link href="/services" key={service.id} className="group shrink-0">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={service.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <h3 className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full text-center text-lg font-headline text-white">
                      {service.name}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/services">View All Services</Link>
        </Button>
      </div>
    </section>
  );
}
