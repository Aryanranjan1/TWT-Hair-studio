
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LeadCaptureForm } from './LeadCaptureForm';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function LocationSnapshot() {
  const mapImage = PlaceHolderImages.find(p => p.id === 'contact-map');
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-headline font-bold">Visit Us & Get in Touch</h2>
            <p className="mt-4 text-muted-foreground">
              We're conveniently located in Petaling Jaya. Whether you have a question or are ready to book, reach out to us. We'd love to hear from you.
            </p>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 shrink-0 text-primary" />
                <span>Casa Tropicana, PJU 3, Petaling Jaya, Selangor, Malaysia</span>
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-3 shrink-0 text-primary" />
                <span>+60 3-7499 6879</span>
              </p>
            </div>
            <div className="mt-6 flex space-x-4">
              <Button asChild variant="outline" size="icon">
                <Link href="https://wa.me/60123456789" target="_blank">
                  <Phone className="h-5 w-5" /><span className="sr-only">WhatsApp</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon">
                <Link href="https://instagram.com" target="_blank">
                  <Instagram className="h-5 w-5" /><span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon">
                <Link href="https://facebook.com" target="_blank">
                  <Facebook className="h-5 w-5" /><span className="sr-only">Facebook</span>
                </Link>
              </Button>
            </div>

            {mapImage && (
              <div className="mt-8 aspect-[16/9] relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={mapImage.imageUrl}
                  alt="Map showing TWT location"
                  fill
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-ai-hint={mapImage.imageHint}
                />
              </div>
            )}
          </div>
          <div className="bg-secondary p-8 rounded-lg">
            <LeadCaptureForm />
          </div>
        </div>
      </div>
    </section>
  );
}
