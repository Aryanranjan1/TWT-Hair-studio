import type { Metadata } from 'next';
import Link from 'next/link';
import { Scissors } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Book Your Appointment',
  description: 'Schedule your appointment at TWT using our fast and easy online booking system.',
};

export default function BookingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <header className="p-4 border-b">
        <div className="container max-w-5xl mx-auto flex justify-center">
            <Link href="/" className="inline-flex items-center space-x-2">
                <span className="text-lg font-bold font-headline" style={{ fontFamily: 'Jost, sans-serif' }}>TWT</span>
            </Link>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-5xl bg-background rounded-lg shadow-2xl overflow-hidden">
          <div className="p-4 bg-gray-100 dark:bg-gray-800 border-b">
            <h1 className="text-xl font-headline font-bold text-center">Book Your Appointment</h1>
          </div>
          <div className="p-4 sm:p-8 aspect-video flex flex-col items-center justify-center text-center bg-muted/40">
            <h2 className="text-2xl font-semibold">Fresha Booking System</h2>
            <p className="mt-2 text-muted-foreground">Our booking widget would be embedded here.</p>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">For this demonstration, the booking system is simulated. On a live website, the Fresha booking interface would load directly in this frame for a seamless experience.</p>
            <Link href="https://www.fresha.com/" target='_blank' rel='noopener noreferrer' className="mt-6 text-sm font-semibold text-primary hover:underline">
              Learn more about Fresha
            </Link>
          </div>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Having trouble? <Link href="/contact" className="underline hover:text-primary">Contact us directly</Link>.
        </p>
      </main>
    </div>
  );
}
