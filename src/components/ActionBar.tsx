import { ConfettiButton } from './ConfettiButton';
import { SettingsButton } from './SettingsButton';
import { Button } from './ui/Button';
import { Icons } from './ui/Icons';

type ActionBarProps = {
  onReset: () => void;
};

export const ActionBar = ({ onReset }: ActionBarProps) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <SettingsButton />
      <Button size="sm" variant="outline" onClick={onReset}>
        <Icons.Reset className="mr-2 h-4 w-4" /> Clear
      </Button>
      <ConfettiButton />
    </div>
  );
};
