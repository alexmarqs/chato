import { cn } from '@/lib/client/utils';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Providers } from '@/components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chato',
  description: 'An AI Chat Bot'
};

export const runtime = 'edge'; // EDGE runtime

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'antialiased flex flex-col min-h-screen',
          inter.className
        )}
        suppressHydrationWarning={true}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
