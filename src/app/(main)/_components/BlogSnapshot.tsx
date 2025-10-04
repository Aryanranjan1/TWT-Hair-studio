
'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Instagram, Facebook, Rss } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export function BlogSnapshot() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <section className="py-16 sm:py-24 bg-background text-foreground">
      <div className="container max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
                    From the Journal
                </h2>
                <p className="mt-4 text-3xl md:text-4xl font-headline font-bold">
                    Stay inspired with our latest hair tips, trends, and salon news.
                </p>
            </div>
            <div className='text-right'>
                <Button asChild size="lg" variant="outline">
                    <Link href="/blog">View All Posts <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
            </div>
        </div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full mt-12"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{ loop: true }}
        >
          <CarouselContent>
            {blogPosts.map((post) => {
              const image = PlaceHolderImages.find((p) => p.id === post.image);
              return (
                <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
                  <Link href={`/blog/${post.slug}`} className="group">
                    <Card className="overflow-hidden">
                      <CardHeader className="p-0">
                        {image && (
                          <div className="relative aspect-video">
                            <Image
                              src={image.imageUrl}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              data-ai-hint={image.imageHint}
                            />
                          </div>
                        )}
                      </CardHeader>
                      <CardContent className="p-6">
                        <h3 className="font-headline text-xl font-semibold group-hover:text-primary transition-colors">{post.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
        </Carousel>

        <div className="mt-16 bg-secondary p-8 md:p-12 rounded-lg">
            <h2 className="text-3xl font-headline font-bold text-center">Join Our Social Circle</h2>
            <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
                Connect with us on social media to stay updated on the latest styles, promotions, and behind-the-scenes moments at TWT.
            </p>
            <div className="mt-8 flex justify-center gap-4">
                 <Button asChild size="lg">
                    <Link href="https://instagram.com" target="_blank">
                        <Instagram className="mr-2 h-5 w-5" /> Instagram
                    </Link>
                </Button>
                 <Button asChild size="lg" variant="outline">
                    <Link href="https://facebook.com" target="_blank">
                        <Facebook className="mr-2 h-5 w-5" /> Facebook
                    </Link>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
