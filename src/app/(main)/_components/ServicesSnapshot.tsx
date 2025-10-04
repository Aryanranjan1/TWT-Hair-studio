'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Scissors, Paintbrush, Sparkles, ChevronUp, ChevronDown } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const snapshotServices = [
    {
        icon: Scissors,
        title: "Precision Cuts",
        description: "Tailored to your face shape and lifestyle."
    },
    {
        icon: Paintbrush,
        title: "Creative Coloring",
        description: "From subtle balayage to vibrant fashion colors."
    },
    {
        icon: Sparkles,
        title: "Restorative Treatments",
        description: "For ultimate health and shine."
    }
];

const VerticalCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, axis: 'y' }, [Autoplay({ delay: 7000 })]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollTo = useCallback((index: number) => {
        emblaApi?.scrollTo(index);
    }, [emblaApi]);

    const scrollPrev = useCallback(() => {
        emblaApi?.scrollPrev();
      }, [emblaApi]);
    
    const scrollNext = useCallback(() => {
        emblaApi?.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };
        emblaApi.on('select', onSelect);
        onSelect();
        return () => { emblaApi.off('select', onSelect) };
    }, [emblaApi]);

    const serviceImages = services
        .map(s => PlaceHolderImages.find(p => p.id === s.image))
        .filter((img): img is NonNullable<typeof img> => !!img)
        .slice(0, 3); // Limit to 3 images for the 3 dashes

    return (
        <div className="h-full w-full relative">
            <div className="h-full w-full overflow-hidden" ref={emblaRef}>
                <div className="flex flex-col h-full">
                    {serviceImages.map((image, index) => (
                        <div key={index} className="flex-[0_0_100%] min-h-0 relative">
                            <Image
                                src={image.imageUrl}
                                alt={image.description}
                                fill
                                className={cn(
                                    'object-cover w-full h-full transition-transform duration-500 ease-in-out',
                                    index === selectedIndex ? 'scale-100' : 'scale-110'
                                )}
                                sizes="50vw"
                                data-ai-hint={image.imageHint}
                            />
                        </div>
                    ))}
                </div>
            </div>
             <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col gap-y-4">
                {serviceImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className="p-0 m-0 h-10 w-2 rounded-full bg-white/40 hover:bg-white/80 transition-colors"
                    >
                        <div
                            className={cn(
                                'w-full h-full rounded-full transition-all duration-500',
                                index === selectedIndex ? 'bg-white' : 'bg-transparent'
                            )}
                        />
                    </button>
                ))}
            </div>
            <div className="absolute bottom-4 right-4 flex flex-col gap-y-2">
                <Button variant="outline" size="icon" className="rounded-full bg-black/30 text-white hover:bg-black/50 border-white/50" onClick={scrollPrev}>
                    <ChevronUp className="h-5 w-5" />
                    <span className="sr-only">Previous Slide</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-black/30 text-white hover:bg-black/50 border-white/50" onClick={scrollNext}>
                    <ChevronDown className="h-5 w-5" />
                    <span className="sr-only">Next Slide</span>
                </Button>
            </div>
        </div>
    );
};

export function ServicesSnapshot() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-secondary rounded-lg shadow-lg p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
                Our Expertise
            </h2>
            <p className="mt-4 text-3xl md:text-4xl font-headline font-bold text-foreground">
                A Glimpse of Our Services
            </p>
            <div className="mt-8 space-y-6">
              {snapshotServices.map((service) => (
                <div key={service.title} className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-2 rounded-full">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild size="lg" variant="outline" className="mt-10">
              <Link href="/services">Explore All Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
          <div className="relative h-[530px] w-full bg-secondary rounded-lg shadow-lg overflow-hidden">
            <VerticalCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
