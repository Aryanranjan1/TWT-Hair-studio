
import Image from 'next/image';
import Link from 'next/link';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { FeaturedServices } from './_components/FeaturedServices';
import { AboutSnapshot } from './_components/AboutSnapshot';
import { Card } from '@/components/ui/card';
import { ServicesSnapshot } from './_components/ServicesSnapshot';
import { ValuePropositions } from './_components/ValuePropositions';

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

      <div className="relative h-screen flex items-center">
        <div className="container max-w-7xl h-full flex items-center justify-between">
          {/* Main content - Logo */}
          <div className="flex-1 flex justify-center text-white">
            <h1 style={{ fontFamily: 'Jost, sans-serif' }} className="text-[15vw] md:text-[10vw] lg:text-[12rem] font-thin tracking-wider leading-none">
              SHEAR
            </h1>
          </div>

          {/* Right sidebar */}
          <div className="hidden lg:flex flex-col space-y-4 w-[380px] h-[calc(100vh-200px)] max-h-[700px] bg-[#EAE8E3]/90 dark:bg-[#252322]/90 backdrop-blur-sm rounded-3xl p-6 text-foreground">
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-2xl font-light tracking-wide text-center" style={{ fontFamily: 'Jost, sans-serif' }}>Shop at SHEAR</h2>
              <p className="mt-4 text-sm font-light text-center leading-relaxed text-muted-foreground">
                Embark on a journey to stunning style and well-groomed confidence with our thoughtfully curated selection of premium hair care products at the SHEAR Online Boutique. Immerse yourself in the world of luxurious self-care, where each item is meticulously crafted to elevate your hairstyling ritual.
              </p>
            </div>
            
            <Card className="flex-1 relative overflow-hidden rounded-2xl border-none">
              {promoImage && (
                <Image
                  src={promoImage.imageUrl}
                  alt={promoImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={promoImage.imageHint}
                  sizes="33vw"
                />
              )}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 text-center text-white">
                <p className="text-lg font-light">Limited Time!</p>
                <h3 className="text-4xl font-medium" style={{ fontFamily: 'Jost, sans-serif' }}>Enjoy 35% Off!</h3>
                <p className="mt-2 text-xs font-light max-w-xs">
                  Elevate your hairstyling with SHEAR. Use code STYLE35 at checkout for an exclusive 35% discount.
                </p>
                <Button asChild variant="outline" className="mt-4 bg-transparent text-white border-white rounded-full hover:bg-white hover:text-black">
                  <Link href="/shop">Shop Now</Link>
                </Button>
              </div>
            </Card>
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
      <FeaturedServices />
      <ServicesSnapshot />
      <ValuePropositions />
      <AboutSnapshot />
    </>
  );
}
