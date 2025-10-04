
'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';

export function FeaturedServices() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true }));

  const handleSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    handleSelect();
    api.on('select', handleSelect);
    api.on('reInit', handleSelect);
    
    return () => {
      api.off('select', handleSelect);
      api.off('reInit', handleSelect);
    };
  }, [api, handleSelect]);

  // We need enough services to create a looping effect if desired
  const featured = [...services, ...services].slice(0, 10);

  return (
    <section className="bg-background text-foreground py-16 sm:py-24 overflow-hidden">
      <div className="container max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
            Featured Hairstyles
          </h2>
          <p className="mt-4 text-2xl md:text-3xl font-headline">
            Discover services designed to nurture your style, from precision cuts to creative coloring.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{
            align: 'center',
            loop: true,
          }}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {featured.map((service, index) => {
              const image = PlaceHolderImages.find((p) => p.id === service.image);
              return (
                <CarouselItem
                  key={`${service.id}-${index}`}
                  className="basis-1/2 md:basis-1/3 lg:basis-1/4 flex items-center justify-center"
                >
                  <Link href="/services" className="group shrink-0">
                    <div
                      className={cn(
                        'relative w-[280px] h-[280px] rounded-full overflow-hidden shadow-lg transition-transform duration-300 ease-in-out',
                        index === current ? 'scale-100' : 'scale-75 opacity-60'
                      )}
                    >
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={service.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-center justify-center p-4">
                        <h3 className="text-center text-lg font-headline text-white">
                          {service.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="mt-12 text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/services">View All Services</Link>
        </Button>
      </div>
    </section>
  );
}
