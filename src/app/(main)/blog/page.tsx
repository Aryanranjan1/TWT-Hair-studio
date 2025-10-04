import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BlogTitleGenerator from './_components/BlogTitleGenerator';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read our blog for the latest hair trends, tips, and advice from the experts at SHEAR.',
};

export default function BlogPage() {
  return (
    <div className="py-16 sm:py-24 pt-48">
      <div className="container max-w-7xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">SHEAR Journal</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Your source for expert hair care advice, style inspiration, and the latest trends from our salon in Petaling Jaya.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {blogPosts.map((post) => {
              const image = PlaceHolderImages.find(p => p.id === post.image);
              return (
                <article key={post.id} className="group">
                  <Link href={`/blog/${post.slug}`}>
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={post.title}
                        width={800}
                        height={500}
                        className="rounded-lg object-cover aspect-video mb-6 shadow-md group-hover:shadow-xl transition-shadow"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                    <div className="flex items-center text-sm text-muted-foreground">
                        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                    </div>
                    <h2 className="mt-2 text-2xl md:text-3xl font-headline font-semibold group-hover:text-primary transition-colors">{post.title}</h2>
                    <p className="mt-3 text-muted-foreground">{post.excerpt}</p>
                    <span className="mt-4 inline-flex items-center font-semibold text-primary">
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Link>
                </article>
              );
            })}
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <BlogTitleGenerator />
              
              <Card className="mt-8">
                <CardHeader>
                    <h3 className="font-headline text-xl font-semibold">Ready for a Change?</h3>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">Inspired by what you've read? Let our experts bring your vision to life.</p>
                    <Button asChild className="w-full">
                        <Link href="/booking">Book Your Transformation</Link>
                    </Button>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
