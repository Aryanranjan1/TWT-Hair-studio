'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function FeaturedStylists() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Meet Our Stylists</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Our talented team of passionate stylists is ready to bring your hair goals to life.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Placeholder for 4 stylist cards */}
          <div className="border rounded-lg p-6 text-center bg-muted/20">Stylist 1</div>
          <div className="border rounded-lg p-6 text-center bg-muted/20">Stylist 2</div>
          <div className="border rounded-lg p-6 text-center bg-muted/20">Stylist 3</div>
          <div className="border rounded-lg p-6 text-center bg-muted/20">Stylist 4</div>
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/about">Meet The Team <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
