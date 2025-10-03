import type { Service, Stylist, Review, GalleryImage, BlogPost, FAQ } from './types';

export const services: Service[] = [
  {
    id: 'cut-1',
    name: 'Women\'s Haircut & Style',
    description: 'A customized haircut designed by your stylist to fit your individual style and preferences, includes a blow-dry and style.',
    price: 'RM 90+',
    category: 'Cuts',
    image: 'service-cut',
  },
  {
    id: 'color-1',
    name: 'Full Head Coloring',
    description: 'Permanent or semi-permanent color applied from roots to ends for a complete color change or to refresh your current shade.',
    price: 'RM 250+',
    category: 'Coloring',
    image: 'service-coloring',
  },
  {
    id: 'treatment-1',
    name: 'Signature Scalp Treatment',
    description: 'A relaxing and rejuvenating treatment to cleanse, exfoliate, and nourish your scalp for healthier hair growth.',
    price: 'RM 180+',
    category: 'Treatments',
    image: 'service-treatment',
  },
  {
    id: 'cut-2',
    name: 'Men\'s Haircut',
    description: 'Classic or modern haircut and style for men, includes a wash and scalp massage.',
    price: 'RM 70+',
    category: 'Cuts',
    image: 'service-cut',
  },
  {
    id: 'color-2',
    name: 'Balayage / Ombré',
    description: 'A hand-painted coloring technique for a natural, sun-kissed look with softer, less noticeable regrowth lines.',
    price: 'RM 450+',
    category: 'Coloring',
    image: 'service-coloring',
  },
  {
    id: 'treatment-2',
    name: 'Keratin Smoothing Treatment',
    description: 'A treatment that smooths frizz, reduces curl, and adds shine for more manageable hair.',
    price: 'RM 600+',
    category: 'Treatments',
    image: 'service-treatment',
  },
  {
    id: 'package-1',
    name: 'Cut & Color Package',
    description: 'Combine a stylish haircut with a full head of color for a complete transformation at a special package price.',
    price: 'RM 320+',
    category: 'Packages',
    image: 'service-cut',
  },
];

export const stylists: Stylist[] = [
  {
    id: 'stylist-1',
    name: 'Alex Chen',
    specialty: 'Creative Coloring & Balayage',
    instagram: 'https://instagram.com/alexpj',
    image: 'stylist-1',
  },
  {
    id: 'stylist-2',
    name: 'Michelle Lim',
    specialty: 'Precision Cuts & Styling',
    instagram: 'https://instagram.com/michelletropicana',
    image: 'stylist-2',
  },
  {
    id: 'stylist-3',
    name: 'Sarah Tan',
    specialty: 'Scalp & Hair Treatments',
    instagram: 'https://instagram.com/sarahselangor',
    image: 'stylist-3',
  },
];

export const reviews: Review[] = [
  {
    id: 'review-1',
    name: 'Jessica W.',
    rating: 5,
    text: 'Absolutely love my new hair color by Alex! He understood exactly what I wanted and the result is stunning. The salon has a great vibe too.',
  },
  {
    id: 'review-2',
    name: 'David L.',
    rating: 5,
    text: 'Michelle gives the best men\'s haircuts in PJ. Always consistent, clean, and stylish. Highly recommended.',
  },
  {
    id: 'review-3',
    name: 'Aina S.',
    rating: 5,
    text: 'The scalp treatment with Sarah was so relaxing. My scalp feels so clean and my hair has never been healthier. Will be back for sure!',
  },
  {
    id: 'review-4',
    name: 'Ben T.',
    rating: 4,
    text: 'Good service and friendly staff. The booking process was easy and the place is easy to find. A bit pricey but the quality is there.',
  },
];

export const galleryImages: GalleryImage[] = [
  { id: 'g1', category: 'Cuts', image: 'gallery-cut-1', description: 'Modern bob cut' },
  { id: 'g2', category: 'Coloring', image: 'gallery-color-1', description: 'Sun-kissed balayage' },
  { id: 'g3', category: 'Treatments', image: 'gallery-treatment-1', description: 'Post-keratin shine' },
  { id: 'g4', category: 'Cuts', image: 'gallery-cut-2', description: 'Men\'s layered cut' },
  { id: 'g5', category: 'Coloring', image: 'gallery-color-2', description: 'Pastel pink fantasy' },
  { id: 'g6', category: 'Treatments', image: 'gallery-treatment-2', description: 'Healthy scalp results' },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    slug: '5-tips-for-maintaining-colored-hair',
    title: '5 Tips for Maintaining Your Vibrant Hair Color',
    excerpt: 'Just got a fresh new color? Here’s how to keep it looking salon-fresh for as long as possible. We share our top tips...',
    content: '<p>Maintaining vibrant hair color is a commitment, but with the right care, you can prolong the life of your new shade. Here are five essential tips from our expert stylists at TWT Hair Studio:</p><ol><li><strong>Use Sulfate-Free Shampoo &amp; Conditioner:</strong> Sulfates can strip color from your hair. Switch to color-safe, sulfate-free products to gently cleanse without fading.</li><li><strong>Wash with Cool Water:</strong> Hot water opens up the hair cuticle, allowing color to escape. Rinsing with cool or lukewarm water helps seal the cuticle and lock in color.</li><li><strong>Limit Washing:</strong> The more you wash, the faster your color will fade. Try to wash your hair 2-3 times a week and use a dry shampoo in between.</li><li><strong>Deep Condition Weekly:</strong> Coloring can be damaging. A weekly deep conditioning mask helps to restore moisture and keep your hair healthy and shiny.</li><li><strong>Protect from Heat and Sun:</strong> Always use a heat protectant spray before styling with hot tools. When out in the sun, wear a hat or use a UV protectant spray for hair to prevent fading.</li></ol><p>Ready for your next color transformation? Book your appointment with our color experts today!</p>',
    date: '2024-07-15',
    image: 'blog-1',
  },
  {
    id: 'blog-2',
    slug: 'is-a-scalp-treatment-right-for-you',
    title: 'Is a Scalp Treatment Right for You? The Signs to Look For',
    excerpt: 'A healthy scalp is the foundation of healthy hair. But how do you know if you need a professional scalp treatment? Here are the signs...',
    content: '<p>We often focus on our hair, but forget about where it all starts: the scalp. An unhealthy scalp can lead to a host of issues like dandruff, itchiness, oiliness, and even hair loss. Here are some signs that you might benefit from a professional scalp treatment at TWT Hair Studio:</p><ul><li><strong>Persistent Dandruff or Flakes:</strong> If over-the-counter shampoos aren\'t working, you may need a deeper exfoliation and targeted treatment.</li><li><strong>Itchy or Irritated Scalp:</strong> Constant itchiness can be a sign of inflammation or product buildup that needs to be addressed.</li><li><strong>Excessively Oily or Dry Scalp:</strong> A professional treatment can help rebalance sebum production.</li><li><strong>Thinning Hair:</strong> A stimulated and healthy scalp environment is crucial for promoting hair growth.</li><li><strong>Product Buildup:</strong> If your hair feels weighed down and looks dull, you may have buildup that a clarifying scalp treatment can remove.</li></ul><p>Our Signature Scalp Treatment is designed to tackle these issues, leaving you with a refreshed, balanced scalp and the perfect foundation for beautiful hair. Experience the difference and book a consultation with us.</p>',
    date: '2024-06-28',
    image: 'blog-2',
  },
  {
    id: 'blog-3',
    slug: 'balayage-vs-ombre-whats-the-difference',
    title: 'Balayage vs. Ombré: What\'s the Difference?',
    excerpt: 'Thinking about a dimensional hair color but confused by the terms? We break down the key differences between Balayage and Ombré.',
    content: '<p>Balayage and Ombré are two of the most popular coloring techniques, but they create very different looks. Here’s a simple breakdown to help you decide which is right for you:</p><h3>Ombré</h3><p>Ombré is a French word meaning "shadow," and it\'s a dramatic, two-toned hair color effect that is typically darker at the roots and gradually lightens to the ends. The transition is usually quite distinct.</p><ul><li><strong>Look:</strong> More dramatic, defined transition from dark to light.</li><li><strong>Maintenance:</strong> Lower maintenance as there are no harsh root lines.</li></ul><h3>Balayage</h3><p>Balayage is another French word meaning "to sweep." It\'s a technique where the stylist hand-paints highlights onto the hair, creating a soft, natural, sun-kissed look. The highlights are more sporadic and blended throughout the hair.</p><ul><li><strong>Look:</strong> More natural, blended, and subtle. Mimics natural sun lightening.</li><li><strong>Maintenance:</strong> Very low maintenance, as the grow-out is extremely soft and diffused.</li></ul><h3>Which one to choose?</h3><p>If you want a bold, statement-making look, Ombré might be for you. If you prefer a natural, low-maintenance color that grows out beautifully, Balayage is an excellent choice. Our stylists at TWT Hair Studio are experts in both techniques. Book a consultation and we can help you achieve your dream hair!</p>',
    date: '2024-06-10',
    image: 'blog-3',
  },
];

export const faqs: FAQ[] = [
    {
        id: 'faq-1',
        question: 'What are your opening hours?',
        answer: 'We are open Tuesday to Sunday, from 10:30 AM to 8:00 PM. We are closed on Mondays.'
    },
    {
        id: 'faq-2',
        question: 'How do I book an appointment?',
        answer: 'The best way to book is through our "Book Now" buttons on the website, which links to our Fresha booking system. You can also call us or WhatsApp us, but online booking is fastest.'
    },
    {
        id: 'faq-3',
        question: 'Where are you located and is there parking?',
        answer: 'We are located at Casa Tropicana, PJU 3, Petaling Jaya. There is ample visitor parking available in the condominium\'s visitor car park. Just inform the guard you are visiting TWT Hair Studio.'
    },
    {
        id: 'faq-4',
        question: 'What is your cancellation policy?',
        answer: 'We appreciate a 24-hour notice for any cancellations or rescheduling. This allows us to offer the slot to other clients. Late cancellations or no-shows may be subject to a fee on your next booking.'
    },
    {
        id: 'faq-5',
        question: 'Can I have a consultation before booking a service?',
        answer: 'Absolutely! We encourage consultations, especially for major color changes. You can book a "Consultation" service for free on our booking page to discuss your hair goals with a stylist.'
    }
];
