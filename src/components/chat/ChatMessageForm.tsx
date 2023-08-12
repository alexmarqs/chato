import { ChatRequestOptions } from 'ai';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Icons } from '../ui/Icons';

type ChatMessageFormProps = {
  value: string;
  isLoading: boolean;
  onValueChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions
  ) => void;
};

export const ChatMessageForm = ({
  value,
  onValueChange,
  onSubmit,
  isLoading
}: ChatMessageFormProps) => {
  return (
    <form onSubmit={onSubmit} className="flex space-x-2 items-center w-full">
      <Input
        placeholder="How can I help you?"
        value={value}
        onChange={onValueChange}
      />
      <Button type="submit" disabled={isLoading}>
        <Icons.Send size={14} />
      </Button>
    </form>
  );
};
