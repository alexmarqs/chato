'use client';

import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { Skeleton } from './ui/Skeleton';

export const Navbar = () => {
  const { isLoaded, isSignedIn } = useUser();

  return (
    <header className="z-40 w-full border-b-[1px] border-slate-200 sticky top-0 left-0 right-0 bg-white">
      <div className="container">
        <Link
          href={'/'}
          className="flex h-14 items-center justify-between font-bold"
        >
          Chato.
          {!isLoaded && !isSignedIn ? (
            <Skeleton className="h-8 w-8 rounded-full" />
          ) : (
            <UserButton afterSignOutUrl="/" />
          )}
        </Link>
      </div>
    </header>
  );
};
