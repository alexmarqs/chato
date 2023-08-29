import { Button } from '../ui/Button';
import { Icons } from '../ui/Icons';
import { useConfettiStore } from '@/stores/confetti';

export const ConfettiButton = () => {
  const setConffetiEnabled = useConfettiStore(
    (state) => state.setConffetiEnabled
  );

  return (
    <>
      <Button
        size="sm"
        variant="outline"
        onClick={() => setConffetiEnabled(true)}
      >
        <Icons.Party className="mr-2 h-4 w-4" />
        Confetti
      </Button>
    </>
  );
};
