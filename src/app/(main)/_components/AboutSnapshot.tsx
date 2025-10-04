
'use client';

import React, { MouseEvent, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function AboutSnapshot() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-salon');
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    const maxRotate = 10;
    setRotate({
      x: yPct * -maxRotate,
      y: xPct * maxRotate,
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
              Our Story
            </h2>
            <p className="mt-4 text-3xl md:text-4xl font-headline font-bold">
              Where Artistry and Hair Care Converge
            </p>
            <p className="mt-6 text-muted-foreground">
              Founded in 2020, TWT Hair Studio was born from a simple idea: to create a welcoming space where artistry and hair care converge. Located in the heart of Petaling Jaya, we are a passionate team of stylists committed to providing personalized services that cater to the unique needs of each client. We believe that a great haircut is more than just a style—it's a form of self-expression and confidence, and we're dedicated to helping you find yours.
            </p>
            <Button asChild size="lg" variant="outline" className="mt-8 self-start">
              <Link href="/about">Learn More About Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
          <div 
            className="relative min-h-[400px] w-full" 
            style={{ perspective: '1000px' }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={imageRef}
          >
            {aboutImage && (
              <div 
                className="w-full h-full"
                style={{
                  transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${isHovering ? 1.05 : 1}, ${isHovering ? 1.05 : 1}, 1)`,
                  transition: 'transform 0.1s ease-out'
                }}
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

