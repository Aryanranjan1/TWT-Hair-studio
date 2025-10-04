
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
        <div className='wrapper'>
          <section className='text-foreground h-screen w-full bg-background grid place-content-center sticky top-0'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
            <h1 className='2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%] font-headline'>
              Our Transformations
            </h1>
            <p className='text-center mt-4 text-muted-foreground'>Scroll down to see our work</p>
          </section>
        </div>

        <section className='text-foreground w-full bg-background'>
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
            <div className='sticky top-0 h-screen w-full col-span-4 gap-2 grid grid-rows-3'>
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
