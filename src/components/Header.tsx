'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Scissors } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Scissors className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline inline-block">TWT Hair Studio</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'transition-colors hover:text-primary',
                pathname === href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild className="hidden md:inline-flex rounded-full">
            <Link href="/booking">Book Now</Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                <Scissors className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline inline-block">TWT Hair Studio</span>
              </Link>
              <div className="flex flex-col space-y-3">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setSheetOpen(false)}
                    className={cn(
                        'transition-colors hover:text-primary p-2 rounded-l-md',
                        pathname === href ? 'bg-secondary text-primary font-semibold' : 'text-foreground'
                      )}
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <Button asChild className="w-full mt-6">
                <Link href="/booking" onClick={() => setSheetOpen(false)}>Book Now</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
