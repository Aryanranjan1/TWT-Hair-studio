
'use client';
import { ReactLenis } from 'lenis/react';
import React, { useMemo } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function GalleryPreview() {
  const gallerySet1 = useMemo(() => [
      PlaceHolderImages.find(p => p.id === 'gallery-cut-1'),
      PlaceHolderImages.find(p => p.id === 'service-coloring'),
      PlaceHolderImages.find(p => p.id === 'gallery-treatment-1'),
      PlaceHolderImages.find(p => p.id === 'service-cut-men'),
      PlaceHolderImages.find(p => p.id === 'gallery-color-2'),
  ].filter(Boolean), []);

  const gallerySet2 = useMemo(() => [
      PlaceHolderImages.find(p => p.id === 'service-balayage'),
      PlaceHolderImages.find(p => p.id === 'service-keratin'),
      PlaceHolderImages.find(p => p.id === 'service-cut'),
  ].filter(Boolean), []);

  const gallerySet3 = useMemo(() => [
      PlaceHolderImages.find(p => p.id === 'gallery-cut-3'),
      PlaceHolderImages.find(p => p.id === 'gallery-color-3'),
      PlaceHolderImages.find(p => p.id === 'blog-1'),
      PlaceHolderImages.find(p => p.id === 'blog-2'),
      PlaceHolderImages.find(p => p.id === 'blog-3'),
  ].filter(Boolean), []);


  return (
    <ReactLenis root>
        <section className='text-foreground w-full bg-background py-16 sm:py-24'>
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Transformations</h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                    Scroll down to see our work
                </p>
            </div>
          <div className='grid grid-cols-12 gap-2 container max-w-7xl'>
            <div className='grid gap-2 col-span-4'>
              {gallerySet1.map((image) => (
                <figure key={image!.id} className='w-full'>
                  <Image
                    src={image!.imageUrl}
                    alt={image!.description}
                    width={500}
                    height={384}
                    className='transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md'
                    data-ai-hint={image!.imageHint}
                  />
                </figure>
              ))}
            </div>
            <div className='sticky top-24 h-screen w-full col-span-4 gap-2 grid grid-rows-3'>
              {gallerySet2.map((image) => (
                <figure key={image!.id} className='w-full h-full'>
                  <Image
                    src={image!.imageUrl}
                    alt={image!.description}
                    width={500}
                    height={500}
                    className='transition-all duration-300 h-full w-full align-bottom object-cover rounded-md'
                    data-ai-hint={image!.imageHint}
                  />
                </figure>
              ))}
            </div>
            <div className='grid gap-2 col-span-4'>
              {gallerySet3.map((image) => (
                <figure key={image!.id} className='w-full'>
                  <Image
                    src={image!.imageUrl}
                    alt={image!.description}
                    width={500}
                    height={384}
                    className='transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md'
                    data-ai-hint={image!.imageHint}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>
    </ReactLenis>
  );
}
