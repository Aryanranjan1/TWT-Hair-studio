import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Instagram, Star, ArrowRight } from 'lucide-react';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { stylists, reviews } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about TWT\'s story, our values, and meet the talented team of stylists dedicated to providing the best hair care in Petaling Jaya.',
};

function TeamSection() {
    return (
        <section className="py-16 sm:py-24 bg-secondary">
            <div className="container max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-center">Meet Our Expert Team</h2>
                <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground">
                    Our stylists are the heart of TWT. With years of experience and a passion for their craft, they are dedicated to making you look and feel your best.
                </p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
                    {stylists.map((stylist) => {
                        const image = PlaceHolderImages.find(p => p.id === stylist.image);
                        return (
                            <div key={stylist.id} className="text-center">
                                {image && (
                                    <div className="relative aspect-square mx-auto w-full max-w-sm">
                                        <Image
                                            src={image.imageUrl}
                                            alt={`Portrait of ${stylist.name}`}
                                            fill
                                            className="rounded-lg object-cover shadow-lg"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            data-ai-hint={image.imageHint}
                                        />
                                    </div>
                                )}
                                <h3 className="mt-6 text-2xl font-headline font-semibold">{stylist.name}</h3>
                                <p className="mt-1 text-primary font-medium">{stylist.specialty}</p>
                                <Link href={'/'} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center text-muted-foreground hover:text-primary">
                                    <Instagram className="h-4 w-4 mr-2" />
                                    <span>Follow on Instagram</span>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function TestimonialsSection() {
    return (
      <section className="py-16 sm:py-24">
        <div className="container max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center">Words from Our Clients</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-headline">{review.name}</CardTitle>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-salon');
  
  return (
    <div>
      <section className="py-16 sm:py-24 pt-48">
        <div className="container max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Story</h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Founded in 2020, TWT Hair Studio was born from a simple idea: to create a welcoming space where artistry and hair care converge. We believe that a great haircut is more than just a style—it's a form of self-expression and confidence.
              </p>
              <p className="mt-4 text-muted-foreground">
                Located in the heart of Petaling Jaya, we are a passionate team of stylists committed to providing personalized services that cater to the unique needs of each client. Our brand values are rooted in creativity, quality, and building genuine connections. We strive to stay at the forefront of hair trends and techniques while using only the best products for your hair's health.
              </p>
              <Button asChild size="lg" className="mt-8">
                <Link href="/">Join Our Story <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="relative aspect-video">
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
      
      <TeamSection />
      <TestimonialsSection />
    </div>
  );
}
