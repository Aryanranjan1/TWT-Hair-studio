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
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container flex h-[100px] max-w-7xl items-center justify-between">
        {/* Left side: Navigation for desktop */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium w-1/3">
          {navLinks.slice(0, 3).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'transition-colors hover:text-white text-slate-200',
                pathname === href ? 'text-white font-semibold' : ''
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        
        {/* Left side: Mobile menu trigger */}
        <div className="flex md:hidden w-1/3">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 bg-background">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-6" onClick={() => setSheetOpen(false)}>
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

        {/* Center: Logo */}
        <div className="flex justify-center w-1/3">
            <Link href="/" className="flex items-center space-x-2 text-white">
                <Scissors className="h-6 w-6" />
                <span className="font-bold font-headline inline-block">TWT Hair Studio</span>
            </Link>
        </div>

        {/* Right side: Navigation for desktop */}
        <nav className="hidden md:flex items-center justify-end space-x-6 text-sm font-medium w-1/3">
          {navLinks.slice(3).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'transition-colors hover:text-white text-slate-200',
                pathname === href ? 'text-white font-semibold' : ''
              )}
            >
              {label}
            </Link>
          ))}
           <Button asChild className="rounded-full">
            <Link href="/booking">Book Now</Link>
          </Button>
        </nav>

        {/* Right side: Mobile booking button */}
        <div className="flex md:hidden w-1/3 justify-end">
             <Button asChild size="sm">
                <Link href="/booking">Book Now</Link>
            </Button>
        </div>

      </div>
    </header>
  );
}
