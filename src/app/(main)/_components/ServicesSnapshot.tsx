
import { Scissors, Paintbrush, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const snapshotServices = [
    {
        icon: Scissors,
        title: "Precision Cuts",
        description: "Modern and classic cuts tailored to your face shape and lifestyle."
    },
    {
        icon: Paintbrush,
        title: "Creative Coloring",
        description: "From subtle balayage to vibrant fashion colors, express yourself with our expert colorists."
    },
    {
        icon: Sparkles,
        title: "Restorative Treatments",
        description: "Revitalize your hair and scalp with our signature treatments for ultimate health and shine."
    }
]

export function ServicesSnapshot() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
                Our Expertise
            </h2>
            <p className="mt-4 text-2xl md:text-3xl font-headline">
                A Glimpse of Our Services
            </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {snapshotServices.map((prop) => (
            <Card key={prop.title} className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                    <prop.icon className="h-8 w-8" />
                </div>
                <CardTitle className='font-headline pt-2'>{prop.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{prop.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
