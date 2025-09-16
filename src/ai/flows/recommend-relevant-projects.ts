'use server';

/**
 * @fileOverview AI-powered tool to recommend relevant projects from the showcase based on keywords extracted from a message.
 *
 * - recommendRelevantProjects - A function that handles the project recommendation process.
 * - RecommendRelevantProjectsInput - The input type for the recommendRelevantProjects function.
 * - RecommendRelevantProjectsOutput - The return type for the recommendRelevantProjects function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendRelevantProjectsInputSchema = z.object({
  message: z.string().describe('The message being drafted by the user.'),
  projects: z.array(z.object({
    title: z.string().describe('The title of the project.'),
    description: z.string().describe('The description of the project.'),
    keywords: z.array(z.string()).describe('Keywords associated with the project.'),
  })).describe('The list of projects to recommend from.'),
});
export type RecommendRelevantProjectsInput = z.infer<typeof RecommendRelevantProjectsInputSchema>;

const RecommendRelevantProjectsOutputSchema = z.array(z.object({
  title: z.string().describe('The title of the recommended project.'),
  description: z.string().describe('The description of the recommended project.'),
  keywords: z.array(z.string()).describe('Keywords associated with the project.'),
})).describe('The list of recommended projects.');
export type RecommendRelevantProjectsOutput = z.infer<typeof RecommendRelevantProjectsOutputSchema>;

export async function recommendRelevantProjects(input: RecommendRelevantProjectsInput): Promise<RecommendRelevantProjectsOutput> {
  return recommendRelevantProjectsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendRelevantProjectsPrompt',
  input: {schema: RecommendRelevantProjectsInputSchema},
  output: {schema: RecommendRelevantProjectsOutputSchema},
  prompt: `You are an AI assistant helping to recommend relevant projects from a portfolio based on the content of a user's message.

Given the following message:
{{message}}

And the following list of projects:
{{#each projects}}
- Title: {{this.title}}
  Description: {{this.description}}
  Keywords: {{#each this.keywords}}{{this}}{{#unless @last}}, {{/unless}}{{/each}}
{{/each}}

Recommend the projects that are most relevant to the user's message. Only return the projects themselves, do not add any additional text or formatting.
Make sure to use the same format as the input, including the title, description, and keywords. Ensure all projects in your output exist in the input.
Do not omit any fields from the projects, and preserve the original wording.
`, 
});

const recommendRelevantProjectsFlow = ai.defineFlow(
  {
    name: 'recommendRelevantProjectsFlow',
    inputSchema: RecommendRelevantProjectsInputSchema,
    outputSchema: RecommendRelevantProjectsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
