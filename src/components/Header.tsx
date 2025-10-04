'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Instagram, Facebook, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
];

const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com',
    },
    {
      name: 'WhatsApp',
      icon: Phone,
      href: 'https://wa.me/60123456789',
    }
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="absolute top-0 z-50 w-full text-white bg-gradient-to-b from-black/30 to-transparent">
      <div className="container flex h-[100px] max-w-7xl items-center justify-between mx-auto">
        {/* Center: Logo for mobile */}
        <div className="flex justify-start w-1/3 md:hidden">
            <Link href="/" className="flex items-center space-x-2">
                 <span style={{ fontFamily: 'Jost, sans-serif' }} className="font-light inline-block text-3xl tracking-wider">TWT</span>
            </Link>
        </div>
        
        {/* Left side: Navigation for desktop */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-light tracking-widest w-1/3">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'transition-colors hover:text-white pb-1',
                pathname === href ? 'text-white border-b border-white' : 'text-white/80'
              )}
            >
              {label.toUpperCase()}
            </Link>
          ))}
        </nav>
        
        {/* Center: Logo for desktop */}
        <div className="hidden md:flex justify-center w-1/3">
            <Link href="/" className="flex items-center space-x-2">
                 <span style={{ fontFamily: 'Jost, sans-serif' }} className="font-light inline-block text-3xl tracking-wider">TWT</span>
            </Link>
        </div>

        {/* Right side: Socials and CTA */}
        <div className="flex items-center justify-end space-x-4 text-sm font-medium w-1/3">
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map((item) => (
                  <Link key={item.name} href={item.href} target={'_blank'} rel="noopener noreferrer" className="text-white/80 hover:text-white">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </Link>
              ))}
            </div>
           <Button asChild variant="outline" className="rounded-full bg-white/90 text-black hover:bg-white">
            <Link href="/booking">Book Now</Link>
          </Button>

           {/* Mobile menu trigger */}
          <div className="flex md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="pr-0 bg-background text-foreground">
                <Link href="/" className="mr-6 flex items-center space-x-2 mb-6" onClick={() => setSheetOpen(false)}>
                  <span style={{ fontFamily: 'Jost, sans-serif' }} className="font-light inline-block text-3xl tracking-wider">TWT</span>
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
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </div>
    </header>
  );
}
