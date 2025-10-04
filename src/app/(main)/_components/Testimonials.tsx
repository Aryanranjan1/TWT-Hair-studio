'use client';

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">What Our Clients Say</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Real stories from our happy customers.
          </p>
        </div>
        <div className="mt-12">
          {/* Placeholder for rotating carousel */}
          <div className="relative h-48 border rounded-lg flex items-center justify-center bg-background">
            <p className="text-muted-foreground">Rotating reviews carousel will be here.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
