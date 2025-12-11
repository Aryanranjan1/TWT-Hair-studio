

'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { useScrollAnimate } from '@/hooks/useScrollAnimate';

export function AboutSnapshot() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-salon');
  const sectionRef = useRef(null);

  // Animate text content
  useScrollAnimate(sectionRef, '.animate-text', { x: 100, opacity: 0 });
  // Animate image
  useScrollAnimate(sectionRef, '.animate-image', { x: -100, opacity: 0 });

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-background overflow-hidden">
      <div className="container max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col justify-center animate-text">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
              Our Story
            </h2>
            <p className="mt-4 text-3xl md:text-4xl font-headline font-bold">
              Where Artistry and Hair Care Converge
            </p>
            <p className="mt-6 text-muted-foreground">
              Founded in 2020, CWT Hair Studio was born from a simple idea: to create a welcoming space where artistry and hair care converge. Located in the heart of Petaling Jaya, we are a passionate team of stylists committed to providing personalized services that cater to the unique needs of each client. We believe that a great haircut is more than just a style—it's a form of self-expression and confidence, and we're dedicated to helping you find yours.
            </p>
            <Button asChild size="lg" variant="outline" className="mt-8 self-start">
              <Link href="/">Learn More About Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
          <div 
            className="relative min-h-[400px] w-full animate-image" 
          >
            {aboutImage && (
              <div 
                className="w-full h-full"
              >
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="rounded-lg shadow-xl object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-ai-hint={aboutImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
