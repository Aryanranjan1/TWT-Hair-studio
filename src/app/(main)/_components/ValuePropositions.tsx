
import { Heart, Award, Smile, Calendar } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { valuePropositions } from '@/lib/data';


export function ValuePropositions() {
  const icons: { [key: string]: React.ElementType } = {
    Heart,
    Award,
    Smile,
    Calendar,
  };

  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
                Why Choose Us
            </h2>
            <p className="mt-4 text-3xl md:text-4xl font-headline font-bold text-foreground">
                The TWT Difference
            </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuePropositions.map((prop) => {
            const Icon = icons[prop.icon];
            return (
              <Card key={prop.title} className="text-center bg-transparent border-none shadow-none">
                <CardHeader className="p-0">
                  <div className="mx-auto text-primary mb-4">
                    {Icon && <Icon className="h-10 w-10" />}
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                    <h3 className="font-semibold text-lg">{prop.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{prop.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
