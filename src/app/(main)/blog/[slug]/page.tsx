import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const image = PlaceHolderImages.find(p => p.id === post.image);

  return (
    <div className="py-16 sm:py-24">
      <div className="container max-w-4xl">
        <article>
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-headline font-bold">{post.title}</h1>
            <p className="mt-4 text-muted-foreground">
              Published on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </header>

          {image && (
            <div className="relative aspect-video mb-12">
              <Image
                src={image.imageUrl}
                alt={post.title}
                fill
                className="rounded-lg object-cover shadow-lg"
                priority
                sizes="100vw"
                data-ai-hint={image.imageHint}
              />
            </div>
          )}

          <div
            className="prose prose-lg dark:prose-invert max-w-none 
                       prose-headings:font-headline prose-headings:text-foreground
                       prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                       prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <div className="mt-16 text-center bg-secondary p-8 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-headline font-bold">Inspired? Let's Create Your Look.</h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Our expert stylists are ready to help you achieve the hair of your dreams.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/">Book Your Transformation</Link>
          </Button>
        </div>
        
        <div className="mt-12 text-center">
            <Button asChild variant="outline">
                <Link href="/">Back to Blog</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
