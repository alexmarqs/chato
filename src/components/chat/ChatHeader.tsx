import { CardDescription, CardTitle } from '@/components/ui/Card';
import { Button } from '../ui/Button';

type ChatHeaderProps = {
  name: string | undefined | null;
  onReset: () => void;
  chatInitiated: boolean;
};

export const ChatHeader = ({
  name,
  onReset,
  chatInitiated
}: ChatHeaderProps) => {
  const handleReset = () => {
    onReset();
  };

  return (
    <div className="flex items-center justify-between flex-wrap gap-y-2">
      <div className="space-y-2">
        <CardTitle>👋 Hey {name ? name : ''}</CardTitle>
        <CardDescription>
          This is a chat bot that helps you with your daily tasks.
        </CardDescription>
      </div>
      {chatInitiated && (
        <Button variant={'outline'} className="h-8 px-2" onClick={handleReset}>
          Clear chat
        </Button>
      )}
    </div>
  );
};
