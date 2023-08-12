import { cn } from '@/lib/client/utils';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { ClerkProvider } from '@clerk/nextjs';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chato',
  description: 'An AI Chat Bot'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: 'black',
          colorTextOnPrimaryBackground: 'white'
        }
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            'antialiased flex flex-col min-h-screen',
            inter.className
          )}
        >
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </body>
      </html>
    </ClerkProvider>
  );
}
