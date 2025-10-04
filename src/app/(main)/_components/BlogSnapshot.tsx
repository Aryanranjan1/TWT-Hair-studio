'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function BlogSnapshot() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">From the Journal</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Get inspired with our latest hair tips, trends, and salon news.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Placeholder for 2-3 blog posts */}
          <div className="border rounded-lg p-6 text-center bg-muted/20">Blog Post 1</div>
          <div className="border rounded-lg p-6 text-center bg-muted/20">Blog Post 2</div>
          <div className="border rounded-lg p-6 text-center bg-muted/20">Blog Post 3</div>
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/blog">Read More <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
