import { LucideIcon } from "lucide-react";

export type ServiceCategory = 'Cuts' | 'Treatments' | 'Coloring' | 'Packages';

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  category: ServiceCategory;
  image: string;
}

export interface Stylist {
  id: string;
  name: string;
  specialty: string;
  instagram: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
}

export type GalleryCategory = 'Cuts' | 'Coloring' | 'Treatments';

export interface GalleryImage {
  id: string;
  category: GalleryCategory;
  image: string;
  description: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
