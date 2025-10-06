
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

import { Button } from '@/components/ui/button';
import { stylists } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';


export function FeaturedStylists() {
  const featuredStylists = stylists.slice(0, 3);
  
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container max-w-7xl">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Meet Our Stylists
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground md:mt-0">
            Our talented team of passionate stylists is ready to bring your hair goals to life.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {featuredStylists.map((stylist, index) => {
            const image = PlaceHolderImages.find(p => p.id === stylist.image);
            
            return (
              <div
                key={stylist.id}
                className="group overflow-hidden"
              >
                <Link href="/">
                  {image && (
                    <div className="relative h-[480px] w-full">
                      <Image
                        className="h-full w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0"
                        src={image.imageUrl}
                        alt={`Portrait of ${stylist.name}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                </Link>
                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-headline font-medium transition-all duration-500 group-hover:tracking-wider">
                      {stylist.name}
                    </h3>
                    <span className="text-xs text-muted-foreground">_0{index + 1}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {stylist.specialty}
                    </span>
                    <Link
                      href={'/'}
                      target='_blank'
                      rel='noopener noreferrer'
                      className="inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100 text-primary"
                    >
                      Instagram
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/">
                Meet The Full Team <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
