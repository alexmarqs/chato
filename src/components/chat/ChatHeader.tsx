import { CardDescription, CardTitle } from '@/components/ui/Card';

type ChatHeaderProps = {
  name: string | undefined | null;
};

export const ChatHeader = ({ name }: ChatHeaderProps) => {
  return (
    <>
      <CardTitle>👋 Hey {name ? name : ''}</CardTitle>
      <CardDescription>
        This is a chat bot that helps you with your daily tasks.
      </CardDescription>
    </>
  );
};
