
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
import { Motion } from '@/components/ui/motion';

function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'new-hero');
  const promoImage = PlaceHolderImages.find(p => p.id === 'promo-image');

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
            <Motion as="h1" variant='fade-in' style={{ fontFamily: 'Jost, sans-serif' }} className="text-[15vw] md:text-[10vw] lg:text-[12rem] font-thin tracking-wider leading-none">
              TWT
            </Motion>
            <Motion as="p" variant='fade-in' delay={0.2} className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest -mt-4 text-center" style={{ fontFamily: 'Jost, sans-serif' }}>
              HAIR STUDIO
            </Motion>
          </div>

          <Motion variant='slide-in-left' delay={0.2} className="flex flex-col space-y-4 w-[380px] h-[calc(100vh-200px)] max-h-[700px] bg-[#EAE8E3]/90 dark:bg-[#252322]/90 backdrop-blur-sm rounded-3xl p-6 text-foreground absolute bottom-16 right-4 sm:right-6 lg:right-[50px]">
              <Motion as="div" variant='slide-in-up' delay={0.4} className="flex-1 flex flex-col justify-center">
                  <h2 className="text-2xl font-light tracking-wide text-center" style={{fontFamily: 'Jost, sans-serif'}}>Shop at TWT</h2>
                  <p className="mt-4 text-sm font-light text-center leading-relaxed text-muted-foreground">
                  Embark on a journey to stunning style and well-groomed confidence with our thoughtfully curated selection of premium hair care products at the TWT Online Boutique.
                  </p>
              </Motion>
              {promoImage && (
                <Motion as='div' variant='fade-in' delay={0.6} className="flex-1 relative overflow-hidden rounded-2xl border-none">
                    <Image
                        src={promoImage.imageUrl}
                        alt={promoImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={promoImage.imageHint}
                        sizes="33vw"
                    />
                </Motion>
              )}
          </Motion>
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
