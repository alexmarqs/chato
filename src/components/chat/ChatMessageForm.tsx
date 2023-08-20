import { ChatRequestOptions } from 'ai';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Icons } from '../ui/Icons';
import { useSettingsStore } from '@/stores/settings';

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
  const model = useSettingsStore((state) => state.model);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e, {
      options: {
        body: {
          model
        }
      }
    });
  };

  return (
    <div className="bg-white p-6 border-t-[1px] border-slate-200">
      <form
        onSubmit={handleFormSubmit}
        className="flex space-x-2 items-center w-full mx-auto max-w-2xl"
      >
        <Input
          placeholder="How can I help you?"
          value={value}
          onChange={onValueChange}
        />
        <Button type="submit" disabled={isLoading}>
          <Icons.Send size={14} />
        </Button>
      </form>
    </div>
  );
};
