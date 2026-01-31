'use server';
/**
 * @fileOverview A Genkit flow for generating hairstyle images for a lookbook.
 *
 * - generateLookbookImage - A function that generates an image based on a text description.
 * - GenerateLookbookImageInput - The input type for the function.
 * - GenerateLookbookImageOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLookbookImageInputSchema = z.object({
  prompt: z.string().describe('A text description of the desired hairstyle.'),
});
export type GenerateLookbookImageInput = z.infer<typeof GenerateLookbookImageInputSchema>;

const GenerateLookbookImageOutputSchema = z.object({
  imageUrl: z.string().describe('The data URI of the generated hairstyle image.'),
});
export type GenerateLookbookImageOutput = z.infer<typeof GenerateLookbookImageOutputSchema>;

export async function generateLookbookImage(input: GenerateLookbookImageInput): Promise<GenerateLookbookImageOutput> {
  return generateLookbookImageFlow(input);
}

const generationPrompt = `Create a photorealistic, professional salon photograph of a person with the following hairstyle: "{{prompt}}". The image should be high-quality, showcasing the hair clearly with good lighting. The background should be a simple, clean, out-of-focus salon or studio environment.`;

const generateLookbookImageFlow = ai.defineFlow(
  {
    name: 'generateLookbookImageFlow',
    inputSchema: GenerateLookbookImageInputSchema,
    outputSchema: GenerateLookbookImageOutputSchema,
  },
  async input => {
    const { media } = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: generationPrompt.replace('{{prompt}}', input.prompt),
    });

    if (!media?.url) {
      throw new Error('Image generation failed.');
    }

    return { imageUrl: media.url };
  }
);
