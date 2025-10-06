
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
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
import SectionWrapper from '@/components/SectionWrapper';
import { useRef } from 'react';


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
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="absolute bottom-16 left-4 sm:left-6 lg:left-[50px] text-white"
          >
            <h1 style={{ fontFamily: 'Jost, sans-serif' }} className="text-[15vw] md:text-[10vw] lg:text-[12rem] font-thin tracking-wider leading-none">
              TWT
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest -mt-4 text-center" style={{ fontFamily: 'Jost, sans-serif' }}>
              HAIR STUDIO
            </p>
          </motion.div>
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
          <SectionWrapper>
            <FeaturedServices />
          </SectionWrapper>
        </div>
        <div className="py-12 md:py-16">
          <SectionWrapper>
            <AboutSnapshot />
          </SectionWrapper>
        </div>
        <div className="py-12 md:py-16">
          <SectionWrapper>
            <ValuePropositions />
          </SectionWrapper>
        </div>
        <div className="py-12 md:py-16">
          <SectionWrapper>
            <ServicesSnapshot />
          </SectionWrapper>
        </div>
        <div className="py-12 md:py-16">
          <SectionWrapper>
            <GalleryPreview />
          </SectionWrapper>
        </div>
        <div className="py-12 md:py-16">
          <SectionWrapper>
            <FeaturedStylists />
          </SectionWrapper>
        </div>
        <div className="py-12 md:py-16">
          <SectionWrapper>
            <Testimonials />
          </SectionWrapper>
        </div>
        <div className="py-12 md:py-16">
          <SectionWrapper>
            <BookingCTA />
          </SectionWrapper>
        </div>
        <div className="py-12 md:py-16">
          <SectionWrapper>
            <BlogSnapshot />
          </SectionWrapper>
        </div>
        <div className="py-12 md:py-16">
          <SectionWrapper>
            <LocationSnapshot />
          </SectionWrapper>
        </div>
      </div>
    </>
  );
}
