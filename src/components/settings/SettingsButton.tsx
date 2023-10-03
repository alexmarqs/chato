import { SelectModalSettings } from './SelectModalSettings';
import { Button } from '../ui/Button';
import { Icons } from '../ui/Icons';
import { Label } from '../ui/Label';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/Popover';

export const SettingsButton = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="sm" variant="outline" aria-controls="radix-:Rb6rbdj9:">
          <Icons.Settings className="mr-2 h-4 w-4" /> Settings
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Settings</h4>
            <p className="text-sm text-muted-foreground">
              Set the settings for the chat.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Model</Label>
              <div className="col-span-2 h-8 flex justify-center items-center">
                <SelectModalSettings />
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
