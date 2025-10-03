import type { Metadata } from 'next';
import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { faqs } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Find answers to frequently asked questions about TWT Hair Studio, including our services, booking process, pricing, and policies.',
};

export default function FAQPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container max-w-4xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Frequently Asked Questions</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Have questions? We have answers. If you can't find what you're looking for, feel free to contact us directly.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full mt-12">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center bg-secondary p-8 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-headline font-bold">Still have questions?</h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Our team is here to help. Get in touch with us for any specific inquiries.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
