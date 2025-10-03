import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Heart, Scissors as ScissorsIcon, Sparkles, MapPin, Phone, MessageCircle } from 'lucide-react';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { services, stylists, reviews, valuePropositions, blogPosts, galleryImages } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GalleryCategory } from '@/lib/types';


function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');

  return (
    <section className="relative w-full h-[80vh] min-h-[500px] text-primary-foreground">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
      <div className="relative h-full flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-white drop-shadow-lg">
          Good Hair Day, Every Day.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-200 drop-shadow-md">
          Professional Haircuts, Coloring & Treatments in Tropicana, PJ.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 mt-8'>
            <Button asChild size="lg">
                <Link href="/booking">Book Your Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
                <Link href="/services">View Services</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
    const stats = [
        { icon: Star, text: "4.8/5 rating from 68+ clients", filled: true },
        { icon: Sparkles, text: "15+ Years Combined Experience", filled: false },
        { icon: ScissorsIcon, text: "1,000+ Hair Transformations", filled: false },
        { icon: MapPin, text: "Located in Casa Tropicana, PJ", filled: false },
    ];

    return (
        <section className="bg-background">
            <div className="container max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-12">
                    {stats.map((stat, index) => (
                        <Card key={index} className="text-center p-4 shadow-lg">
                            <CardContent className="p-2 flex flex-col items-center justify-center gap-2">
                                <stat.icon className={`h-8 w-8 text-primary ${stat.filled ? 'fill-primary' : ''}`} />
                                <p className="text-sm font-semibold">{stat.text}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServicesSnapshot() {
    const snapshotServices = [
        services.find(s => s.category === 'Cuts'),
        services.find(s => s.category === 'Coloring'),
        services.find(s => s.category === 'Treatments'),
        services.find(s => s.category === 'Packages'),
    ].filter(Boolean);

    const serviceIcons: { [key: string]: React.ElementType } = {
        'Cuts': ScissorsIcon,
        'Coloring': Sparkles,
        'Treatments': Heart,
        'Packages': Star,
    };

    return (
        <section className="py-16 sm:py-24 bg-background">
            <div className="container max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-center">Our Services</h2>
                <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
                    Tailored experiences to make you look and feel your best.
                </p>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {snapshotServices.map((service) => {
                        if (!service) return null;
                        const Icon = serviceIcons[service.category];
                        return (
                            <Card key={service.id} className="text-center flex flex-col">
                                <CardHeader>
                                    <div className="mx-auto bg-primary/10 p-4 rounded-full">
                                        {Icon && <Icon className="h-8 w-8 text-primary" />}
                                    </div>
                                    <CardTitle className="font-headline text-xl">{service.category}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground">{service.name.split(' & ')[0]}, and more.</p>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild variant="outline" className="w-full">
                                        <Link href="/services">See Full Pricing</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}


function WhyChooseUs() {
    return (
        <section className="py-16 sm:py-24 bg-secondary">
            <div className="container max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-center">Why Choose TWT Hair Studio?</h2>
                <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
                    Experience the difference with our commitment to quality and care.
                </p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {valuePropositions.map((prop) => (
                        <Card key={prop.title} className="text-center">
                            <CardHeader>
                                <div className="mx-auto">
                                    <prop.icon className="h-10 w-10 text-primary" />
                                </div>
                                <CardTitle className="font-headline text-lg">{prop.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">{prop.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}


function FeaturedStylists() {
  const featuredStylists = stylists.slice(0, 4);

  return (
    <section className="py-16 sm:py-24">
      <div className="container max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center">Meet Our Expert Stylists</h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
          Our talented team of passionate stylists is ready to bring your hair vision to life.
        </p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {featuredStylists.map((stylist) => {
            const image = PlaceHolderImages.find(p => p.id === stylist.image);
            return (
              <div key={stylist.id} className="text-center group">
                {image && (
                    <div className="relative">
                        <Image
                            src={image.imageUrl}
                            alt={stylist.name}
                            width={400}
                            height={400}
                            className="rounded-lg aspect-square object-cover mx-auto shadow-lg transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={image.imageHint}
                        />
                    </div>
                )}
                <h3 className="mt-6 text-xl font-headline font-semibold">{stylist.name}</h3>
                <p className="mt-1 text-primary text-sm">{stylist.specialty}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/about">Meet The Team <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function GalleryPreview() {
    const categories: GalleryCategory[] = ['Cuts', 'Coloring', 'Treatments'];
    const previewImages = galleryImages.slice(0, 6);

    return (
        <section className="py-16 sm:py-24 bg-secondary">
            <div className="container max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-center">Our Transformations</h2>
                <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
                    See the magic we create every day in our studio.
                </p>
                <Tabs defaultValue="all" className="mt-12">
                    <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto">
                        <TabsTrigger value="all">All</TabsTrigger>
                        {categories.map((category) => (
                            <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                        ))}
                    </TabsList>
                    <TabsContent value="all">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                            {previewImages.map((galleryImage) => {
                                const image = PlaceHolderImages.find(p => p.id === galleryImage.image);
                                return (
                                    <div key={galleryImage.id} className="overflow-hidden rounded-lg group aspect-w-1 aspect-h-1">
                                        {image && (
                                            <Image
                                                src={image.imageUrl}
                                                alt={galleryImage.description}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                                data-ai-hint={image.imageHint}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </TabsContent>
                    {categories.map((category) => (
                        <TabsContent key={category} value={category}>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                                {galleryImages
                                    .filter((img) => img.category === category)
                                    .slice(0,6)
                                    .map((galleryImage) => {
                                        const image = PlaceHolderImages.find(p => p.id === galleryImage.image);
                                        return (
                                            <div key={galleryImage.id} className="overflow-hidden rounded-lg group aspect-w-1 aspect-h-1">
                                                {image && (
                                                    <Image
                                                        src={image.imageUrl}
                                                        alt={galleryImage.description}
                                                        fill
                                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                                        data-ai-hint={image.imageHint}
                                                    />
                                                )}
                                            </div>
                                        );
                                    })}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
                <div className="text-center mt-12">
                    <Button asChild size="lg" variant="outline">
                        <Link href="/gallery">View Full Gallery</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center">What Our Clients Say</h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
            Real stories from our valued clients.
        </p>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mt-12"
        >
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col h-full">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <Avatar>
                                <AvatarImage src={`https://i.pravatar.cc/150?u=${review.name}`} />
                                <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-base font-headline">{review.name}</CardTitle>
                                <div className="flex mt-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />)}
                                </div>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground text-sm italic">"{review.text}"</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}


function FinalCallToAction() {
    return (
        <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
            <div className="container max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Your Good Hair Day Starts Here.</h2>
                <p className="mt-4 max-w-2xl mx-auto">
                    Ready for a transformation? Book your appointment instantly.
                </p>
                <Button asChild size="lg" variant="secondary" className="mt-8">
                    <Link href="/booking">Book Your Appointment Now</Link>
                </Button>
                <p className="mt-4 text-sm text-primary-foreground/80">Instant confirmation via Fresha.</p>
            </div>
        </section>
    );
}

function BlogPreview() {
    const featuredPosts = blogPosts.slice(0, 2);

    return (
        <section className="py-16 sm:py-24">
            <div className="container max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-center">Hair Tips & Trends</h2>
                <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
                    From our blog, the TWT Hair Journal.
                </p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {featuredPosts.map((post) => {
                        const image = PlaceHolderImages.find(p => p.id === post.image);
                        return (
                            <Card key={post.id} className="overflow-hidden group">
                                <Link href={`/blog/${post.slug}`}>
                                    <CardHeader className="p-0">
                                        {image && (
                                            <Image
                                                src={image.imageUrl}
                                                alt={post.title}
                                                width={600}
                                                height={400}
                                                className="object-cover aspect-video transition-transform duration-300 group-hover:scale-105"
                                                data-ai-hint={image.imageHint}
                                            />
                                        )}
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <Badge variant="secondary" className="mb-2">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</Badge>
                                        <h3 className="text-xl font-headline font-semibold group-hover:text-primary transition-colors">{post.title}</h3>
                                        <p className="mt-2 text-muted-foreground text-sm">{post.excerpt}</p>
                                    </CardContent>
                                    <CardFooter>
                                        <span className="text-primary font-semibold text-sm">Read More <ArrowRight className="inline-block ml-1 h-4 w-4" /></span>
                                    </CardFooter>
                                </Link>
                            </Card>
                        );
                    })}
                </div>
                <div className="text-center mt-12">
                    <Button asChild variant="outline">
                        <Link href="/blog">Read More</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

function LocationContact() {
    const mapImage = PlaceHolderImages.find(p => p.id === 'contact-map');

    return (
        <section className="py-16 sm:py-24 bg-secondary">
            <div className="container max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-headline font-bold">Visit Us</h2>
                        <p className="mt-4 text-muted-foreground">We're conveniently located at Casa Tropicana. Find us and get ready for a pampering session.</p>
                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 text-primary mt-1"/>
                                <div>
                                    <h3 className="font-semibold">Address</h3>
                                    <p className="text-muted-foreground">Casa Tropicana, PJU 3, Petaling Jaya, Selangor, Malaysia</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <Phone className="h-6 w-6 text-primary mt-1"/>
                                <div>
                                    <h3 className="font-semibold">Phone</h3>
                                    <p className="text-muted-foreground">+60 3-7499 6879</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <MessageCircle className="h-6 w-6 text-primary mt-1"/>
                                <div>
                                    <h3 className="font-semibold">WhatsApp</h3>
                                    <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary underline">
                                        +60 12-345 6789
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                         {mapImage && (
                            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg h-full">
                                <Image
                                    src={mapImage.imageUrl}
                                    alt="Map showing TWT Hair Studio location"
                                    fill
                                    className="w-full h-full object-cover"
                                    data-ai-hint={mapImage.imageHint}
                                />
                            </div>
                         )}
                    </div>
                </div>
            </div>
        </section>
    );
}


export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesSnapshot />
      <WhyChooseUs />
      <FeaturedStylists />
      <GalleryPreview />
      <Testimonials />
      <FinalCallToAction />
      <BlogPreview />
      <LocationContact />
    </>
  );
}
