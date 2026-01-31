'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Wand2, Loader2, Image as ImageIcon } from 'lucide-react';
import { generateLookbookImage } from '@/ai/flows/generate-lookbook-flow';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Lookbook',
    description: 'Generate hairstyle ideas with our AI Lookbook Generator. Describe your vision and see it come to life.',
};

export default function LookbookPage() {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: 'Description is required',
        description: 'Please describe the hairstyle you want to see.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    setGeneratedImage(null);

    try {
      const result = await generateLookbookImage({ prompt });
      setGeneratedImage(result.imageUrl);
      toast({
        title: 'Image Generated!',
        description: 'Your hairstyle concept has been brought to life.',
      });
    } catch (error) {
      console.error('Error generating lookbook image:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate image. The model might be unavailable. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 sm:py-24 pt-48">
      <div className="container max-w-5xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold flex items-center justify-center gap-4">
            <Wand2 className="h-10 w-10 text-primary" />
            AI Lookbook Generator
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Have a hair idea in mind? Describe it below and let our AI generate a visual concept for you. It's the perfect way to brainstorm your next look before your appointment!
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-xl">Describe Your Vision</CardTitle>
              <CardDescription>Be as detailed as you like. Mention color, length, style, and texture.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Textarea
                  placeholder="e.g., 'A shoulder-length wavy bob with copper balayage and curtain bangs.'"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  disabled={loading}
                  rows={4}
                />
                <Button onClick={handleGenerate} disabled={loading} className="w-full">
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                     <>
                       <Sparkles className="mr-2 h-4 w-4" />
                       Generate Image
                     </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="min-h-[460px] flex items-center justify-center">
             <CardContent className="p-2 w-full h-full flex items-center justify-center">
                {loading && (
                    <div className="flex flex-col items-center gap-4 text-muted-foreground">
                        <Loader2 className="h-16 w-16 animate-spin text-primary" />
                        <p>Our AI is creating your look...</p>
                        <p className="text-xs">This can take up to 30 seconds.</p>
                    </div>
                )}
                {!loading && generatedImage && (
                    <div className="relative aspect-square w-full rounded-lg overflow-hidden">
                        <Image
                            src={generatedImage}
                            alt="AI generated hairstyle"
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
                 {!loading && !generatedImage && (
                    <div className="text-center text-muted-foreground p-8">
                        <ImageIcon className="h-16 w-16 mx-auto mb-4" />
                        <h3 className="font-semibold">Your generated image will appear here.</h3>
                        <p className="text-sm mt-2">Describe your desired hairstyle and click "Generate Image" to get started.</p>
                    </div>
                )}
             </CardContent>
          </Card>
        </div>

        <Alert className="mt-8">
            <Sparkles className="h-4 w-4" />
            <AlertTitle>A Note on AI Images</AlertTitle>
            <AlertDescription>
                These generated images are for inspiration and conceptualization. The final result in the salon will depend on your hair type, texture, and history. Always consult with your stylist to achieve the best look for you.
            </AlertDescription>
        </Alert>

      </div>
    </div>
  );
}
