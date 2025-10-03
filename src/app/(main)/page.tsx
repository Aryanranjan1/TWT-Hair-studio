import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services, stylists, reviews } from '@/lib/data';
import { NewsletterForm } from '@/components/NewsletterForm';

function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');

  return (
    <section className="relative w-full h-[60vh] min-h-[500px] text-primary-foreground">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
      <div className="relative h-full flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-white drop-shadow-lg">
          Good Hair Day.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-200 drop-shadow-md">
          Experience transformative hair care with Petaling Jaya's top stylists. Your journey to stunning hair starts here.
        </p>
        <Button asChild size="lg" className="mt-8 rounded-full">
          <Link href="/booking">Book Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
        </Button>
      </div>
    </section>
  );
}

function HighlightedServices() {
  const topServices = services.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center">Our Signature Services</h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
          Discover the services our clients love the most, from transformative cuts to rejuvenating treatments.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {topServices.map((service) => {
            const image = PlaceHolderImages.find(p => p.id === service.image);
            return (
              <Card key={service.id} className="overflow-hidden group">
                <CardHeader className="p-0">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={600}
                      height={400}
                      className="object-cover aspect-video transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-headline font-semibold">{service.name}</h3>
                  <p className="mt-2 text-muted-foreground text-sm">{service.description}</p>
                  <Button asChild variant="link" className="p-0 mt-4">
                    <Link href="/services">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function FeaturedStylists() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center">Meet Our Stylists</h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
          Our talented team of passionate stylists is ready to bring your hair vision to life.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stylists.map((stylist) => {
            const image = PlaceHolderImages.find(p => p.id === stylist.image);
            return (
              <div key={stylist.id} className="text-center group">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={stylist.name}
                    width={400}
                    height={400}
                    className="rounded-full aspect-square object-cover mx-auto shadow-lg transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={image.imageHint}
                  />
                )}
                <h3 className="mt-6 text-xl font-headline font-semibold">{stylist.name}</h3>
                <p className="mt-1 text-primary">{stylist.specialty}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/about">More About Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const featuredReviews = reviews.slice(0, 3);
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container max-w-7xl">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
                <span className="font-bold text-lg text-primary">4.8</span>
                <div className="flex">
                    {[...Array(5)].map((_, i) => <Star key={i} className={`h-5 w-5 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400 fill-yellow-400/50'}`} />)}
                </div>
                <span className="text-muted-foreground">based on Fresha ratings</span>
            </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredReviews.map((review) => (
            <Card key={review.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-headline">{review.name}</CardTitle>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">"{review.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
    return (
        <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
            <div className="container max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready for Your Transformation?</h2>
                <p className="mt-4 max-w-2xl mx-auto">
                    Your best hair is just an appointment away. Click below to schedule your visit and let our experts pamper you.
                </p>
                <Button asChild size="lg" variant="secondary" className="mt-8 rounded-full">
                    <Link href="/booking">Book Your Appointment Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
            </div>
        </section>
    );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <HighlightedServices />
      <FeaturedStylists />
      <Testimonials />
      <CallToAction />
    </>
  );
}
