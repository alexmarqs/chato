import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

export const redis = new Redis({
  url: process.env.UPSTASH_API_URL || '',
  token: process.env.UPSTASH_API_SECRET || ''
});

export const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(5, '10 s'), // rate limit to 5 requests per 10 seconds
  prefix: 'chato-app'
});
