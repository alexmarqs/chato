import { Chat } from '@/components/chat/Chat';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default async function Home() {
  const { userId, sessionClaims } = auth();

  if (!userId) return redirect('/sign-in');

  return (
    <div className="flex-1 flex flex-col">
      <Chat userAvatarUrl={sessionClaims.avatarUrl as string} />
    </div>
  );
}
