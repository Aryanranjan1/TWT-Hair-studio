
'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Instagram, Facebook, Youtube } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

import { blogPosts, stylists } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent }from '@/components/ui/card';

export function BlogSnapshot() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const eventImages = [
      PlaceHolderImages.find(p => p.id === 'gallery-cut-1'),
      PlaceHolderImages.find(p => p.id === 'gallery-color-1'),
      PlaceHolderImages.find(p => p.id === 'gallery-treatment-1')
  ].filter(Boolean);

  const latestPost = blogPosts[0];
  const authorStylist = stylists[2];
  const onlineActivitiesImage = PlaceHolderImages.find(p => p.id === 'services-snapshot');


  return (
    <section className="py-16 sm:py-24 bg-background text-foreground">
      <div className="container max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className='md:col-span-2 text-left mb-8'>
                <h2 className="text-4xl md:text-5xl font-headline font-bold">
                    JOIN THE <span className="text-primary">COMMUNITY</span>
                </h2>
                <p className="mt-4 text-muted-foreground max-w-2xl">
                    Connect and grow with thousands of style enthusiasts and professionals in the beauty industry.
                </p>
            </div>
            
            <div className="md:col-span-1">
                <Carousel
                  plugins={[plugin.current]}
                  className="w-full"
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
                  opts={{ loop: true }}
                >
                  <CarouselContent>
                    {eventImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <Card className="overflow-hidden">
                            <div className="relative aspect-video">
                                <Image
                                src={image!.imageUrl}
                                alt={image!.description}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                data-ai-hint={image!.imageHint}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
                                    <h3 className="text-white font-headline text-2xl">Style with Confidence</h3>
                                    <p className="text-white/80 text-sm mt-2">Explore our latest work and events.</p>
                                </div>
                            </div>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                  <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
                </Carousel>
            </div>

            <div className="md:col-span-1 flex flex-col justify-center h-full">
                <h3 className="text-2xl md:text-3xl font-headline font-bold">
                    We participate in style expos and organize special events to engage with our community in person.
                </h3>
            </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-1 p-6 flex flex-col">
                <h4 className="font-headline text-xl font-semibold">From our Journal</h4>
                <p className="mt-4 text-muted-foreground flex-grow">
                    "{latestPost.excerpt}"
                </p>
                <div className="flex items-center gap-4 mt-6">
                    {authorStylist && (
                        <Image src={PlaceHolderImages.find(p => p.id === authorStylist.image)!.imageUrl} alt={authorStylist.name} width={40} height={40} className="rounded-full object-cover" />
                    )}
                    <div>
                        <p className="font-semibold">{authorStylist.name}</p>
                        <p className="text-sm text-muted-foreground">TWT Stylist</p>
                    </div>
                </div>
                <Button asChild variant="outline" className="mt-6 self-start">
                    <Link href={`/blog/${latestPost.slug}`}>Read now <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </Card>

            <Card className="lg:col-span-1 p-6 flex flex-col justify-center">
                 <h4 className="font-headline text-xl font-semibold">Connect with us on social media.</h4>
                 <p className="mt-4 text-muted-foreground">
                    Network online and stay on top of updates, new styles, and beauty trends.
                 </p>
                 <div className="flex gap-4 mt-6">
                    <Button asChild variant="outline" size="icon">
                        <Link href="https://instagram.com" target="_blank"><Instagram /></Link>
                    </Button>
                     <Button asChild variant="outline" size="icon">
                        <Link href="https://facebook.com" target="_blank"><Facebook /></Link>
                    </Button>
                     <Button asChild variant="outline" size="icon">
                        <Link href="https://youtube.com" target="_blank"><Youtube /></Link>
                    </Button>
                 </div>
            </Card>

            <Card className="md:col-span-2 lg:col-span-1 p-0 relative rounded-lg overflow-hidden text-white flex flex-col justify-between">
                {onlineActivitiesImage && (
                    <Image
                        src={onlineActivitiesImage.imageUrl}
                        alt="A woman with beautifully styled hair"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        data-ai-hint={onlineActivitiesImage.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-black/50"/>
                <div className="relative p-6 flex flex-col h-full justify-end">
                    <h4 className="font-headline text-xl font-semibold">READY FOR A TRANSFORMATION?</h4>
                    <Button asChild variant="outline" className="bg-transparent text-white border-white mt-4 hover:bg-white hover:text-black self-start">
                        <Link href="/booking">Book Your Slot <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>
            </Card>

        </div>
      </div>
    </section>
  );
}
