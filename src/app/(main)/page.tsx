

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FeaturedServices } from './_components/FeaturedServices';
import { AboutSnapshot } from './_components/AboutSnapshot';
import { ServicesSnapshot } from './_components/ServicesSnapshot';
import { ValuePropositions } from './_components/ValuePropositions';
import { FeaturedStylists } from './_components/FeaturedStylists';
import { Testimonials } from './_components/Testimonials';
import { BookingCTA } from './_components/BookingCTA';
import { BlogSnapshot } from './_components/BlogSnapshot';
import { LocationSnapshot } from './_components/LocationSnapshot';
import { GalleryPreview } from './_components/GalleryPreview';


function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'new-hero');
  const heroRef = useRef(null);

  return (
    <section ref={heroRef} className="relative w-full min-h-screen bg-background text-foreground">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover object-center"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/10" />

      <div className="relative h-screen flex items-end">
        <div className="container max-w-7xl mx-auto h-full flex items-center justify-between">
          {/* Main content - Logo */}
          <div 
            className="absolute bottom-16 left-4 sm:left-6 lg:left-[50px] text-white"
          >
            <h1 style={{ fontFamily: 'Jost, sans-serif' }} className="text-[15vw] md:text-[10vw] lg:text-[12rem] font-thin tracking-wider leading-none">
              CWT
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest -mt-4 text-center" style={{ fontFamily: 'Jost, sans-serif' }}>
              HAIR STUDIO
            </p>
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
      <div className="container max-w-7xl mx-auto">
        <div className="py-12 md:py-16">
            <FeaturedServices />
        </div>
        <div className="py-12 md:py-16">
            <AboutSnapshot />
        </div>
        <div className="py-12 md:py-16">
            <ValuePropositions />
        </div>
        <div className="py-12 md:py-16">
            <ServicesSnapshot />
        </div>
        <div className="py-12 md:py-16">
            <GalleryPreview />
        </div>
        <div className="py-12 md:py-16">
            <FeaturedStylists />
        </div>
        <div className="py-12 md:py-16">
            <Testimonials />
        </div>
        <div className="py-12 md:py-16">
            <BookingCTA />
        </div>
        <div className="py-12 md:py-16">
            <BlogSnapshot />
        </div>
        <div className="py-12 md:py-16">
            <LocationSnapshot />
        </div>
      </div>
    </>
  );
}
