
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

export function AboutSnapshot() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-salon');
  
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
              Our Story
            </h2>
            <p className="mt-4 text-3xl md:text-4xl font-headline font-bold">
              Where Artistry and Hair Care Converge
            </p>
            <p className="mt-6 text-muted-foreground">
              Founded in 2020, TWT Hair Studio was born from a simple idea: to create a welcoming space where artistry and hair care converge. Located in the heart of Petaling Jaya, we are a passionate team of stylists committed to providing personalized services that cater to the unique needs of each client. We believe that a great haircut is more than just a style—it's a form of self-expression and confidence, and we're dedicated to helping you find yours.
            </p>
            <Button asChild size="lg" variant="outline" className="mt-8">
              <Link href="/about">Learn More About Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
          <div className="relative h-96 w-full">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="rounded-lg shadow-xl object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
