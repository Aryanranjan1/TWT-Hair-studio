'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function GalleryPreview() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container max-w-7xl">
        <div className="text-center">
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            See the magic we create every day in our salon.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Placeholder for 6-8 images */}
          <div className="aspect-square border rounded-lg p-6 bg-muted/20">Image 1</div>
          <div className="aspect-square border rounded-lg p-6 bg-muted/20">Image 2</div>
          <div className="aspect-square border rounded-lg p-6 bg-muted/20">Image 3</div>
          <div className="aspect-square border rounded-lg p-6 bg-muted/20">Image 4</div>
          <div className="aspect-square border rounded-lg p-6 bg-muted/20">Image 5</div>
          <div className="aspect-square border rounded-lg p-6 bg-muted/20">Image 6</div>
          <div className="aspect-square border rounded-lg p-6 bg-muted/20">Image 7</div>
          <div className="aspect-square border rounded-lg p-6 bg-muted/20">Image 8</div>
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
