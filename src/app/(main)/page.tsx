
import Image from 'next/image';
import Link from 'next/link';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { FeaturedServices } from './_components/FeaturedServices';
import { AboutSnapshot } from './_components/AboutSnapshot';
import { Card } from '@/components/ui/card';
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

  return (
    <section className="relative w-full min-h-screen bg-background text-foreground">
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
        <div className="container max-w-7xl h-full flex items-center justify-between">
          {/* Main content - Logo */}
          <div className="absolute bottom-16 left-4 sm:left-6 lg:left-[50px] text-white">
            <h1 style={{ fontFamily: 'Jost, sans-serif' }} className="text-[15vw] md:text-[10vw] lg:text-[12rem] font-thin tracking-wider leading-none">
              TWT
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
      <div style={{ marginTop: '50px', marginBottom: '50px' }}>
        <FeaturedServices />
      </div>
      <div style={{ marginTop: '50px', marginBottom: '50px' }}>
        <AboutSnapshot />
      </div>
      <div style={{ marginTop: '50px', marginBottom: '50px' }}>
        <ValuePropositions />
      </div>
      <div style={{ marginTop: '50px', marginBottom: '50px' }}>
        <ServicesSnapshot />
      </div>
      <div style={{ marginTop: '50px', marginBottom: '50px' }}>
        <GalleryPreview />
      </div>
      <div style={{ marginTop: '50px', marginBottom: '50px' }}>
        <FeaturedStylists />
      </div>
      <div style={{ marginTop: '50px', marginBottom: '50px' }}>
        <Testimonials />
      </div>
      <div style={{ marginTop: '50px', marginBottom: '50px' }}>
        <BookingCTA />
      </div>
      <div style={{ marginTop: '50px', marginBottom: '50px' }}>
        <BlogSnapshot />
      </div>
      <div style={{ marginTop: '50px', marginBottom: '50px' }}>
        <LocationSnapshot />
      </div>
    </>
  );
}
