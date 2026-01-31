
import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://cwt.com'; // Replace with your actual domain

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/gallery',
    '/blog',
    '/contact',
    '/faq',
    '/booking',
    '/shop',
    '/lookbook',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
  }));

  return [...staticRoutes, ...blogRoutes];
}
