'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating blog titles for the salon blog.
 *
 * It takes a topic as input and returns a list of suggested blog titles.
 * @interface GenerateBlogTitlesInput - The input type for the generateBlogTitles function.
 * @interface GenerateBlogTitlesOutput - The output type for the generateBlogTitles function.
 * @function generateBlogTitles - The function that generates blog titles based on the input topic.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogTitlesInputSchema = z.object({
  topic: z.string().describe('The topic for which to generate blog titles.'),
});

export type GenerateBlogTitlesInput = z.infer<typeof GenerateBlogTitlesInputSchema>;

const GenerateBlogTitlesOutputSchema = z.object({
  titles: z.array(z.string()).describe('An array of suggested blog titles.'),
});

export type GenerateBlogTitlesOutput = z.infer<typeof GenerateBlogTitlesOutputSchema>;

export async function generateBlogTitles(input: GenerateBlogTitlesInput): Promise<GenerateBlogTitlesOutput> {
  return generateBlogTitlesFlow(input);
}

const generateBlogTitlesPrompt = ai.definePrompt({
  name: 'generateBlogTitlesPrompt',
  input: {schema: GenerateBlogTitlesInputSchema},
  output: {schema: GenerateBlogTitlesOutputSchema},
  prompt: `You are a marketing expert for a hair salon. Generate a list of blog titles based on the following topic:\n\nTopic: {{{topic}}}\n\nBlog Titles:`,
});

const generateBlogTitlesFlow = ai.defineFlow(
  {
    name: 'generateBlogTitlesFlow',
    inputSchema: GenerateBlogTitlesInputSchema,
    outputSchema: GenerateBlogTitlesOutputSchema,
  },
  async input => {
    const {output} = await generateBlogTitlesPrompt(input);
    return output!;
  }
);
