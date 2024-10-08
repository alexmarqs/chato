import { authMiddleware } from '@clerk/nextjs';

// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
  apiRoutes: '/api(.*)', // Require authentication for all API routes
  publicRoutes: ['/api/health'] // Exclude the health clerk from authentication
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
};
