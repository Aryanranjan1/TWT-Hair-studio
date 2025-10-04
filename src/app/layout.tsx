import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { SmoothScroll } from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: {
    default: 'TWT | Professional Hair Salon in Petaling Jaya',
    template: '%s | TWT',
  },
  description: 'TWT is a mid-range unisex salon in Petaling Jaya, Malaysia, offering professional hair cuts, treatments, and coloring services. Book your appointment today!',
  keywords: ['Hair salon Petaling Jaya', 'Scalp treatment Tropicana', 'Unisex hair salon Malaysia', 'TWT'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark no-scrollbar">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
        <SmoothScroll>{children}</SmoothScroll>
        <Toaster />
      </body>
    </html>
  );
}
