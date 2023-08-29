import { APIError } from '@/lib/server/api-error';
import { feedbackRequestSchema } from '@/lib/server/schema-validations';
import { ZodError } from 'zod';
import { ratelimit } from '@/lib/server/cache-client';

export const runtime = 'edge'; // EDGE runtime

async function handler(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for');
    const { success, limit, reset, remaining } = await ratelimit.limit(
      `ratelimit_${ip}`
    );

    if (!success) {
      throw new APIError(
        429,
        'You have reached your request limit. Please calm down.',
        {
          'X-RateLimit-Limit': limit.toString(),
          'X-RateLimit-Remaining': remaining.toString(),
          'X-RateLimit-Reset': reset.toString()
        }
      );
    }

    const requestBody = await req.json();

    // Validate the request body for user feedback
    const { feedback, userEmail } = feedbackRequestSchema.parse(requestBody);

    console.log('🚀 ~ file: route.ts:31 ~ handler ~ _user:', userEmail);
    console.log('🚀 ~ file: route.ts:31 ~ handler ~ _feedback:', feedback);

    // Send email to developer (with the feedback)
    // Send email to user (just a confirmation that we received the feedback)
  } catch (error) {
    console.log(error);

    if (error instanceof APIError) {
      return new Response(error.message || 'API Internal Server Error', {
        status: error.status,
        headers: error.headers
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
