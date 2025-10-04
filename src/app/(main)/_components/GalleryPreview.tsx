import InteractiveImageBentoGallery, { type ImageItem } from "@/components/ui/bento-gallery"
import { PlaceHolderImages } from '@/lib/placeholder-images';

// Helper function to find an image and handle cases where it might not be found
const findImage = (id: string) => PlaceHolderImages.find(p => p.id === id) || { imageUrl: '', description: 'Image not found', imageHint: '' };

const imageItems: ImageItem[] = [
  {
    id: 1,
    title: "Modern Bob",
    desc: "A chic and timeless cut.",
    url: findImage('gallery-cut-1').imageUrl,
    imageHint: findImage('gallery-cut-1').imageHint,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Sun-Kissed Balayage",
    desc: "Natural, blended highlights.",
    url: findImage('gallery-color-1').imageUrl,
    imageHint: findImage('gallery-color-1').imageHint,
    span: "md:row-span-1",
  },
  {
    id: 3,
    title: "Pastel Dreams",
    desc: "Creative and vibrant color.",
    url: findImage('gallery-color-2').imageUrl,
    imageHint: findImage('gallery-color-2').imageHint,
    span: "md:row-span-1",
  },
  {
    id: 4,
    title: "Keratin Smooth",
    desc: "Frizz-free, glossy results.",
    url: findImage('gallery-treatment-1').imageUrl,
    imageHint: findImage('gallery-treatment-1').imageHint,
    span: "md:row-span-2",
  },
  {
    id: 5,
    title: "Vibrant Copper",
    desc: "Rich and fiery tones.",
    url: findImage('gallery-color-3').imageUrl,
    imageHint: findImage('gallery-color-3').imageHint,
    span: "md:row-span-1",
  },
  {
    id: 6,
    title: "Layered Perfection",
    desc: "Elegant long layers with bangs.",
    url: findImage('gallery-cut-3').imageUrl,
    imageHint: findImage('gallery-cut-3').imageHint,
    span: "md:col-span-2 md:row-span-1",
  },
];


export function GalleryPreview() {
  return (
    <div className="w-full antialiased">
      <InteractiveImageBentoGallery
        imageItems={imageItems}
        title="Our Transformations"
        description="A showcase of our recent work. Drag to explore, click to expand."
      />
    </div>
  )
}
