import { Chat } from '@/components/chat/Chat';
import { currentUser } from '@clerk/nextjs';

export default async function Home() {
  const user = await currentUser();

  // sleep for 1 second to simulate a slow network
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  if (!user) return <div>Not logged in</div>;

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <Chat userFirstName={user?.firstName} userAvatarUrl={user?.imageUrl} />
    </div>
  );
}
