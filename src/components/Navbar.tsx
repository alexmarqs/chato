import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <header className="z-40 w-full border-b-[1px] border-slate-100">
      <div className="container">
        <Link
          href={'/'}
          className="flex h-14 items-center justify-between font-bold"
        >
          Chato.
          <div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </Link>
      </div>
    </header>
  );
};
