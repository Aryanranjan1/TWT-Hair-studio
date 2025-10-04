'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Instagram, Phone } from 'lucide-react';

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

const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com',
    },
    {
      name: 'WhatsApp',
      icon: Phone,
      href: 'https://wa.me/60123456789',
    },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container flex h-[100px] max-w-7xl items-center justify-between">
        {/* Left side: Navigation for desktop */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium w-1/3">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'transition-colors hover:text-primary text-foreground/80',
                pathname === href ? 'text-primary font-semibold' : ''
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
              <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-accent">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 bg-background">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-6" onClick={() => setSheetOpen(false)}>
                <span className="font-bold font-headline inline-block text-2xl tracking-widest">TWT</span>
              </Link>
              <div className="flex flex-col space-y-3">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setSheetOpen(false)}
                    className={cn(
                        'transition-colors hover:text-primary p-2 rounded-l-md text-lg',
                        pathname === href ? 'bg-secondary text-primary font-semibold' : 'text-foreground'
                      )}
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <Button asChild className="w-full mt-6 bg-white text-black hover:bg-gray-200">
                <Link href="/booking" onClick={() => setSheetOpen(false)}>Book Now</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center w-1/3">
            <Link href="/" className="flex items-center space-x-2 text-foreground">
                 <span className="font-bold font-headline inline-block text-2xl tracking-widest">TWT</span>
            </Link>
        </div>

        {/* Right side: Socials and CTA for desktop */}
        <div className="hidden md:flex items-center justify-end space-x-4 text-sm font-medium w-1/3">
            {socialLinks.map((item) => (
                <Link key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </Link>
            ))}
           <Button asChild className="rounded-full bg-white text-black hover:bg-gray-200 hover:text-black">
            <Link href="/booking">Book Now</Link>
          </Button>
        </div>

        {/* Right side: Mobile booking button */}
        <div className="flex md:hidden w-1/3 justify-end">
             <Button asChild size="sm" variant="outline" className="rounded-full bg-white text-black hover:bg-gray-200 hover:text-black">
                <Link href="/booking">Book Now</Link>
            </Button>
        </div>

      </div>
    </header>
  );
}
