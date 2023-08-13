import { OpenAIStream, StreamingTextResponse } from 'ai';
import { openai } from '@/lib/server/openai-client';
import { APIError } from '@/lib/server/api-error';
import { chatCompletionRequestSchema } from '@/lib/server/schema-validations';
import { ZodError } from 'zod';

export const runtime = 'edge'; // EDGE runtime

export async function handler(req: Request) {
  try {
    // Extract the `prompt` from the body of the request
    const requestBody = await req.json();

    // Validate the request body
    const { model, messages } = chatCompletionRequestSchema.parse(requestBody);

    // Ask OpenAI for a streaming chat completion given the prompt
    const response = await openai.createChatCompletion({
      model,
      stream: true,
      messages: messages
    });

    // Check for errors
    if (!response.ok) {
      throw new APIError(response.status, await response.text());
    }

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);

    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.log(error);

    if (error instanceof APIError) {
      return new Response(error.message || 'API Internal Server Error', {
        status: error.status
      });
    }

    if (error instanceof ZodError) {
      return new Response('API Invalid Request Body', {
        status: 400
      });
    }

    return new Response('API Internal Server Error', { status: 500 });
  }
}

export { handler as POST };