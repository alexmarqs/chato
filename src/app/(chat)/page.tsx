import { Chat } from '@/components/chat/Chat';
import { sleep } from '@/lib/client/utils';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default function Home() {
  const { userId, sessionClaims } = auth();

  if (!userId) return redirect('/sign-in');

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <Chat
        userFirstName={sessionClaims.firstName as string}
        userAvatarUrl={sessionClaims.avatarUrl as string}
      />
    </div>
  );
}
