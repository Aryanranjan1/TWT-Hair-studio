'use client';

import { useState } from 'react';
import { generateBlogTitles } from '@/ai/flows/generate-blog-titles';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, Loader2 } from 'lucide-react';

export default function BlogTitleGenerator() {
  const [topic, setTopic] = useState('');
  const [titles, setTitles] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!topic.trim()) {
      toast({
        title: 'Topic is required',
        description: 'Please enter a topic to generate titles.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    setTitles([]);

    try {
      const result = await generateBlogTitles({ topic });
      setTitles(result.titles);
    } catch (error) {
      console.error('Error generating blog titles:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate blog titles. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className='flex items-center gap-2'>
            <Sparkles className="h-6 w-6 text-primary"/>
            <CardTitle className='font-headline text-xl'>Blog Title Idea Generator</CardTitle>
        </div>
        <CardDescription>Stuck on a title? Enter a topic and let AI help you out.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input
            placeholder="e.g., 'summer hair care tips'"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            disabled={loading}
          />
          <Button onClick={handleGenerate} disabled={loading} className="w-full">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              'Generate Titles'
            )}
          </Button>

          {titles.length > 0 && (
            <div className="mt-4 space-y-2 pt-4 border-t">
              <h4 className="font-semibold">Suggested Titles:</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                {titles.map((title, index) => (
                  <li key={index}>{title}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
