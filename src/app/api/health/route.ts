import { APIError } from '@/lib/server/api-error';

export const runtime = 'edge'; // EDGE runtime

async function handler(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('API_KEY');

    if (!id || id !== process.env.HEALTH_API_KEY) {
      throw new APIError(401, 'Unauthorized');
    }

    return new Response('OK', { status: 200 });
  } catch (error) {
    console.log(error);

    if (error instanceof APIError) {
      return new Response(error.message || 'API Internal Server Error', {
        status: error.status
      });
    }

    return new Response('API Internal Server Error', { status: 500 });
  }
}

export { handler as GET };
