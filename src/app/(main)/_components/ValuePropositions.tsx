
import { valuePropositions } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ValuePropositions() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuePropositions.map((prop) => (
            <Card key={prop.title} className="text-center bg-transparent border-none shadow-none">
              <CardHeader className="p-0">
                <div className="mx-auto text-primary mb-4">
                    <prop.icon className="h-10 w-10" />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg">{prop.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{prop.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
