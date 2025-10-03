import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/data';
import { ServiceCategory } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Services &amp; Pricing',
  description: 'Explore our full range of hair services at TWT Hair Studio, including cuts, treatments, coloring, and packages. Find pricing information and book your service online.',
};

const categories: ServiceCategory[] = ['Cuts', 'Coloring', 'Treatments', 'Packages'];

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container max-w-7xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            From classic cuts to creative coloring and restorative treatments, we offer a full range of services to meet your hair needs. All prices are indicative and may vary based on hair length and thickness.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-3xl font-headline font-bold mb-8 text-center md:text-left">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services
                  .filter((service) => service.category === category)
                  .map((service) => {
                    const image = PlaceHolderImages.find(p => p.id === service.image);
                    return (
                        <Card key={service.id} className="flex flex-col">
                            <CardHeader className="p-0">
                                {image && (
                                <Image
                                    src={image.imageUrl}
                                    alt={service.name}
                                    width={600}
                                    height={400}
                                    className="object-cover aspect-[3/2] rounded-t-lg"
                                    data-ai-hint={image.imageHint}
                                />
                                )}
                            </CardHeader>
                            <CardContent className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-headline font-semibold">{service.name}</h3>
                                <p className="mt-2 text-muted-foreground text-sm flex-grow">{service.description}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-lg font-semibold text-primary">{service.price}</p>
                                    <Button asChild>
                                        <Link href="/booking">Book Now</Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
