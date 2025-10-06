import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { galleryImages } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GalleryCategory } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'View our portfolio of stunning hair transformations. See before and after photos of our cuts, coloring, and treatments.',
};

const categories: GalleryCategory[] = ['Cuts', 'Coloring', 'Treatments'];

export default function GalleryPage() {
  return (
    <div className="py-16 sm:py-24 pt-48">
      <div className="container max-w-7xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Work</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            A picture is worth a thousand words. Browse our gallery of client transformations and find inspiration for your next look.
          </p>
        </div>

        <Tabs defaultValue="Cuts" className="mt-12">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages
                .filter((img) => img.category === category)
                .map((galleryImage) => {
                  const image = PlaceHolderImages.find(p => p.id === galleryImage.image);
                  return (
                    <Card key={galleryImage.id} className="overflow-hidden group">
                      <CardContent className="p-0 relative aspect-[3/4]">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={galleryImage.description}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            data-ai-hint={image.imageHint}
                          />
                        )}
                      </CardContent>
                      <CardFooter className="p-4 flex flex-col items-start">
                        <p className="font-medium">{galleryImage.description}</p>
                        <Button asChild variant="link" className="p-0 h-auto mt-2 text-primary">
                          <Link href="/">Book this look</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
