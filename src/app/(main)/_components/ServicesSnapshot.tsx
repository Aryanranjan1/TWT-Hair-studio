
import { valuePropositions } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ServicesSnapshot() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
                Why Choose Us
            </h2>
            <p className="mt-4 text-2xl md:text-3xl font-headline">
                A Cut Above the Rest
            </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuePropositions.map((prop) => (
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
