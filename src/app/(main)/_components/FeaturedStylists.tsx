
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Instagram } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { stylists } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function FeaturedStylists() {
  // We'll feature the first 4 stylists on the homepage
  const featuredStylists = stylists.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-secondary/50">
      <div className="container max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Meet Our Stylists</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Our talented team of passionate stylists is ready to bring your hair goals to life.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredStylists.map((stylist) => {
            const image = PlaceHolderImages.find(p => p.id === stylist.image);
            return (
              <div key={stylist.id} className="group text-center">
                {image && (
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg shadow-md">
                    <Image
                      src={image.imageUrl}
                      alt={`Portrait of ${stylist.name}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <h3 className="mt-6 text-xl font-headline font-semibold">{stylist.name}</h3>
                <p className="mt-1 text-primary font-medium">{stylist.specialty}</p>
                <Link href={stylist.instagram} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center text-sm text-muted-foreground hover:text-primary">
                  <Instagram className="h-4 w-4 mr-2" />
                  <span>Follow</span>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/about">Meet The Full Team <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
