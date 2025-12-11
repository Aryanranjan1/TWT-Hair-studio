
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Book Your Appointment',
  description: 'Schedule your appointment at CWT using our fast and easy online booking system.',
};

export default function BookingPage() {
  // Replace this with your actual Fresha booking widget URL
  const freshaUrl = "https://www.fresha.com/a/twt-hair-studio-petaling-jaya-casa-tropicana-nii0gej9/booking?dpp=1";

  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <header className="p-4 border-b bg-background">
        <div className="container max-w-7xl mx-auto flex justify-center">
            <Link href="/" className="inline-flex items-center space-x-2">
                <span className="text-lg font-bold font-headline" style={{ fontFamily: 'Jost, sans-serif' }}>CWT</span>
            </Link>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-0 sm:p-4">
        <div className="w-full max-w-7xl mx-auto">
            <div className="bg-muted text-muted-foreground text-xs text-center py-1 rounded-t-lg">
                Fresha Widget
            </div>
        </div>
        <div className="w-full max-w-7xl h-[calc(100vh-109px)] sm:h-[calc(100vh-60px)] sm:max-h-[800px] bg-background sm:rounded-b-lg shadow-2xl overflow-hidden">
          <iframe
            src={freshaUrl}
            title="Book an Appointment"
            className="w-full h-full border-0"
          />
        </div>
        <p className="mt-8 text-sm text-muted-foreground text-center px-4 pb-4">
          Having trouble with the booking widget? <Link href="/" className="underline hover:text-primary">Contact us directly</Link>.
        </p>
      </main>
    </div>
  );
}
