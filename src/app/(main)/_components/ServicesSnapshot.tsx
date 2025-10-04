
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Scissors, Paintbrush, Sparkles } from 'lucide-react';

const snapshotServices = [
    {
        icon: Scissors,
        title: "Precision Cuts",
        description: "Tailored to your face shape and lifestyle."
    },
    {
        icon: Paintbrush,
        title: "Creative Coloring",
        description: "From subtle balayage to vibrant fashion colors."
    },
    {
        icon: Sparkles,
        title: "Restorative Treatments",
        description: "For ultimate health and shine."
    }
]

export function ServicesSnapshot() {
  const snapshotImage = PlaceHolderImages.find(p => p.id === 'services-snapshot');

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-secondary rounded-lg overflow-hidden shadow-lg">
          <div className="p-8 md:p-12 order-2 md:order-1">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
                Our Expertise
            </h2>
            <p className="mt-4 text-3xl md:text-4xl font-headline font-bold text-foreground">
                A Glimpse of Our Services
            </p>
            <div className="mt-8 space-y-6">
              {snapshotServices.map((service) => (
                <div key={service.title} className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-2 rounded-full">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild size="lg" variant="outline" className="mt-10">
              <Link href="/services">Explore All Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
          <div className="relative h-80 md:h-full w-full order-1 md:order-2 min-h-[300px]">
            {snapshotImage && (
              <Image
                src={snapshotImage.imageUrl}
                alt={snapshotImage.description}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                data-ai-hint={snapshotImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
