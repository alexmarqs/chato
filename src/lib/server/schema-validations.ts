import { z } from 'zod';

export const chatCompletionRequestSchema = z.object({
  model: z.string().default('gpt-3.5-turbo'),
  messages: z.array(
    z.object({
      role: z.enum(['system', 'user', 'assistant', 'function']),
      content: z.string().optional(),
      name: z.string().optional()
    })
  )
});

export type ChatCompletionRequest = z.infer<typeof chatCompletionRequestSchema>;
