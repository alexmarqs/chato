import { useState } from 'react';
import { FeedbackWidget } from './FeedbackWidget';
import { Button } from '../ui/Button';
import { Icons } from '../ui/Icons';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/Popover';

export const FeedbackButton = () => {
  const [open, setOpen] = useState(false);

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button size="sm" variant="outline" aria-controls="radix-:R1mcq:">
          <Icons.Feedback className="mr-2 h-4 w-4" />
          Feedback
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[360px]">
        {/* Checking if open is true so that the feedback widget is only rendered when the popover is open */}
        {<FeedbackWidget onSubmitCompleted={closeDialog} />}
      </PopoverContent>
    </Popover>
  );
};
