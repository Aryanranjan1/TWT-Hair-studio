
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, ParkingCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with CWT. Find our address, phone number, and location in Petaling Jaya. Book your appointment or send us an inquiry.',
};

const contactDetails = [
  {
    icon: MapPin,
    title: 'Address',
    value: 'Casa Tropicana, PJU 3, Petaling Jaya, Selangor, Malaysia',
    isLink: false,
  },
  {
    icon: Phone,
    title: 'Phone / WhatsApp',
    value: '+60 12-345 6789',
    href: '/',
    isLink: true,
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@cwt.com',
    href: 'mailto:hello@cwt.com',
    isLink: true,
  },
  {
    icon: ParkingCircle,
    title: 'Parking',
    value: 'Visitor parking is available in the Casa Tropicana condominium. Inform security you are visiting CWT Hair Studio.',
    isLink: false,
  },
];

export default function ContactPage() {
  const mapImage = PlaceHolderImages.find(p => p.id === 'contact-map');

  return (
    <div className="py-16 sm:py-24 pt-48">
      <div className="container max-w-7xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Get In Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We'd love to hear from you! Whether you have a question about our services or want to book an appointment, here's how you can reach us.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactDetails.map((detail) => (
            <Card key={detail.title}>
              <CardHeader className="flex flex-row items-center gap-4">
                <detail.icon className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-xl">{detail.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {detail.isLink ? (
                  <Link href={detail.href || '#'} rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors break-words">
                    {detail.value}
                  </Link>
                ) : (
                  <p className="text-muted-foreground break-words">{detail.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-headline font-bold text-center mb-8">Our Location</h2>
          {mapImage && (
            <div className="aspect-[16/6] relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={mapImage.imageUrl}
                alt="Map showing CWT location"
                fill
                className="w-full h-full object-cover"
                sizes="100vw"
                data-ai-hint={mapImage.imageHint}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
