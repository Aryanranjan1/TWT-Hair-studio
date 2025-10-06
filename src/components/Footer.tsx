import Link from 'next/link';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { NewsletterForm } from './NewsletterForm';

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    href: '/',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    href: '/',
  },
  {
    name: 'WhatsApp',
    icon: Phone,
    href: '/',
  },
];

const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/', label: 'Services' },
    { href: '/', label: 'Gallery' },
    { href: '/', label: 'About' },
    { href: '/', label: 'Blog' },
    { href: '/', label: 'Contact' },
    { href: '/', label: 'Book Now' },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container max-w-7xl py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center space-x-2">
              <span style={{ fontFamily: 'Jost, sans-serif' }} className="text-2xl font-light tracking-wider">TWT</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              TWT is a premier hair salon in Petaling Jaya, dedicated to providing exceptional hair care and styling in a welcoming atmosphere. Our expert stylists are passionate about the art of hair and are committed to helping you achieve your desired look.
            </p>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((item) => (
                <Link key={item.name} href={item.href} rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-headline font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
                {footerLinks.map(link => (
                    <li key={link.href}>
                        <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-headline font-semibold">Contact &amp; Hours</h3>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-primary" />
                <span>Casa Tropicana, PJU 3, Petaling Jaya, Selangor, Malaysia</span>
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2 shrink-0 text-primary" />
                <span>+60 3-7499 6879</span>
              </p>
              <p className="mt-4 font-semibold text-secondary-foreground">Opening Hours:</p>
              <p>Tues - Sun: 10:30 AM - 8:00 PM</p>
              <p>Mon: Closed</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-headline font-semibold">Stay Updated</h3>
            <p className="mt-4 text-sm text-muted-foreground">Get the latest trends, tips, and promotions straight to your inbox.</p>
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">&copy; {new Date().getFullYear()} TWT Online. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
