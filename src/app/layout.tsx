import { cn } from '@/lib/client/utils';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chato',
  description: 'An AI Chat Bot',
  viewport:
    'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
};

export const runtime = 'edge'; // EDGE runtime

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          variables: {
            colorPrimary: 'black',
            colorTextOnPrimaryBackground: 'white'
          }
        }}
      >
        <body
          className={cn(
            'antialiased flex flex-col min-h-screen',
            inter.className
          )}
          suppressHydrationWarning={true}
        >
          <Navbar />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
