'use client';

import { Button } from '../ui/Button';
import { Textarea } from '../ui/Textarea';

export const FeedbackWidget = () => {
  return (
    <div className="space-y-2">
      <Textarea placeholder="Give me some feedback!" />
      <div className="flex w-full items-center justify-end">
        <Button>Send</Button>
      </div>
    </div>
  );
};
