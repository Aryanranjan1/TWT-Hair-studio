import Link from 'next/link';
import { Scissors, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { NewsletterForm } from './NewsletterForm';

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    href: '#',
  },
  {
    name: 'WhatsApp',
    icon: Phone,
    href: '#',
  },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">TWT Hair Studio</span>
            </Link>
            <p className="text-sm text-muted-foreground">Good Hair Day.</p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <Link key={item.name} href={item.href} className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-lg font-headline font-semibold">Contact &amp; Location</h3>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-primary" />
                <span>Casa Tropicana, PJU 3, Petaling Jaya, Selangor, Malaysia</span>
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2 shrink-0 text-primary" />
                <span>+60 12-345 6789</span>
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2 shrink-0 text-primary" />
                <span>hello@twthairstudio.com</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold">Stay Updated</h3>
            <p className="mt-4 text-sm text-muted-foreground">Get the latest trends, tips, and promotions straight to your inbox.</p>
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">&copy; {new Date().getFullYear()} TWT Hair Studio Online. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
