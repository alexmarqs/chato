'use client';

import { submitFeedback } from '@/lib/client/feedback-api-client';
import { Button } from '../ui/Button';
import { Textarea } from '../ui/Textarea';
import { useMutation } from 'react-query';
import { Icons } from '../ui/Icons';
import { cn } from '@/lib/client/utils';
import { useUser } from '@clerk/nextjs';

type FeedbackWidgetProps = {
  onSubmitCompleted: (status: 'success' | 'error') => void;
};

export const FeedbackWidget = ({ onSubmitCompleted }: FeedbackWidgetProps) => {
  const { user } = useUser();

  const { mutate: sendFeedbackMutation, isLoading: isSendingFeedback } =
    useMutation(
      async (data: { feedback: string; userEmail: string }) => {
        await submitFeedback(data);
      },
      {
        onSuccess: () => {
          onSubmitCompleted('success');
        },
        onError: () => {
          onSubmitCompleted('error');
        }
      }
    );

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const feedback = formData.get('feedback');

    // If feedback is null, return early
    if (!feedback) return;

    sendFeedbackMutation({
      feedback: feedback.toString(),
      userEmail: user?.emailAddresses[0].emailAddress || ''
    });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-2">
      <Textarea required name="feedback" placeholder="Give me some feedback!" />
      <div className="flex items-center w-full justify-end">
        <Button
          onClick={(e) => e.stopPropagation()}
          disabled={isSendingFeedback}
          type="submit"
        >
          <Icons.Loading
            className={cn('mr-2 h-4 w-4', isSendingFeedback && 'animate-spin')}
          />
          Send
        </Button>
      </div>
    </form>
  );
};
