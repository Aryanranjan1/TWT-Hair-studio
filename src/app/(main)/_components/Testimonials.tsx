'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { TimelineContent } from '@/components/ui/timeline-animation';
import { reviews, stylists } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Testimonials() {
  const testimonialRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: 'blur(10px)',
      y: 20,
      opacity: 0,
    },
  };

  const displayedReviews = reviews.slice(0, 5);
  const testimonialGrid = [
    { review: displayedReviews[0], colSpan: 2, rowSpan: 2, bgColor: 'bg-muted/30' },
    { review: displayedReviews[1], colSpan: 1, rowSpan: 1, bgColor: 'bg-primary text-primary-foreground' },
    { review: displayedReviews[2], colSpan: 1, rowSpan: 1, bgColor: 'bg-secondary' },
    { review: displayedReviews[3], colSpan: 1, rowSpan: 1, bgColor: 'bg-secondary' },
    { review: displayedReviews[4], colSpan: 2, rowSpan: 1, bgColor: 'bg-muted/30' },
  ];

  return (
    <section ref={testimonialRef} className="py-16 sm:py-24 bg-background">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
            <TimelineContent as="h2" timelineRef={testimonialRef} animationNum={0} customVariants={revealVariants} className="text-3xl md:text-4xl font-headline font-bold">What Our Clients Say</TimelineContent>
            <TimelineContent as="p" timelineRef={testimonialRef} animationNum={1} customVariants={revealVariants} className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                Real stories from our happy customers.
            </TimelineContent>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonialGrid.map((item, index) => {
            if (!item.review) return null;
            
            // Just for visual diversity, we'll assign a random stylist image if there's no direct link.
            const randomStylistImageId = stylists[index % stylists.length].image;
            const reviewerImage = PlaceHolderImages.find(p => p.id === `stylist-${item.review.name.split(' ')[0].toLowerCase()}`) 
                                  || PlaceHolderImages.find(p => p.id === randomStylistImageId);
            
            return (
              <TimelineContent
                key={item.review.id}
                timelineRef={testimonialRef}
                animationNum={index + 1}
                customVariants={revealVariants}
                className={`
                  col-span-1 
                  md:col-span-${item.colSpan}
                  md:row-span-${item.rowSpan}
                  ${item.bgColor}
                  rounded-lg p-6 flex flex-col justify-between
                `}
              >
                <div>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < item.review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                        ))}
                    </div>
                    <p className="mt-4 text-lg">"{item.review.text}"</p>
                </div>
                <div className="flex items-center gap-4 mt-6">
                  {reviewerImage && (
                    <Image
                      src={reviewerImage.imageUrl}
                      alt={item.review.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="font-semibold">{item.review.name}</p>
                    <p className="text-sm opacity-80">Valued Client</p>
                  </div>
                </div>
              </TimelineContent>
            );
          })}
        </div>
      </div>
    </section>
  );
}
