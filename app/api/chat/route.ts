import { systemPrompt } from '@/constants/system-learning';
import { groq } from '@ai-sdk/groq';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model : groq('gemma2-9b-it'),
    system: systemPrompt,
    messages,
  });

  return result.toDataStreamResponse();
}
