"use client"

import React, { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils" // Assumes a 'lib/utils.ts' file for 'cn'
import { X } from "lucide-react"
import Image from 'next/image';

// Defines the structure for each image item in the gallery
export type ImageItem = {
  id: number | string
  title: string
  desc: string
  url: string;
  imageHint: string;
  span: string // Tailwind CSS grid span classes (e.g., "md:col-span-2")
}

// Defines the props for the main gallery component
interface InteractiveImageBentoGalleryProps {
  imageItems: ImageItem[]
  title: string
  description: string
}

// Modal component for displaying the selected image
const ImageModal = ({
  item,
  onClose,
}: {
  item: ImageItem
  onClose: () => void
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.url}
          alt={item.title}
          width={1200}
          height={800}
          className="h-auto max-h-[90vh] w-full rounded-lg object-contain"
          data-ai-hint={item.imageHint}
        />
      </div>
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-white/80 transition-colors hover:text-white"
        aria-label="Close image view"
      >
        <X size={24} />
      </button>
    </div>
  )
}

// Main gallery component
const InteractiveImageBentoGallery: React.FC<
  InteractiveImageBentoGalleryProps
> = ({ imageItems, title, description }) => {
  const [selectedItem, setSelectedItem] = useState<ImageItem | null>(null)
  const targetRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={targetRef}
      className="relative w-full overflow-hidden bg-secondary/50 py-16 sm:py-24"
    >
      <div
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {description}
        </p>
      </div>

      <div
        className="relative mt-12 w-full"
      >
        <div
          className="w-full"
        >
          <div
            className="grid grid-cols-1 md:grid-cols-4 auto-rows-fr gap-4 px-4 md:px-8"
          >
            {imageItems.map((item) => (
              <div
                key={item.id}
                className={cn(
                  "group relative flex h-full min-h-[15rem] w-full min-w-[15rem] cursor-pointer items-end overflow-hidden rounded-xl border bg-card p-4 shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  item.span,
                )}
                onClick={() => setSelectedItem(item)}
                onKeyDown={(e) => e.key === "Enter" && setSelectedItem(item)}
                tabIndex={0}
                aria-label={`View ${item.title}`}
              >
                <Image
                  src={item.url}
                  alt={item.title}
                  fill
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  data-ai-hint={item.imageHint}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-lg font-bold text-white font-headline">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedItem && (
        <ImageModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  )
}

export default InteractiveImageBentoGallery;
