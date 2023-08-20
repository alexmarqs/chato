import { useConfettiStore } from '@/stores/confetti';
import dynamic from 'next/dynamic';
import { useWindowSize } from 'react-use';

const Confetti = dynamic(() => import('react-confetti'), {
  ssr: false
});

export const ConfettiParty = () => {
  const { conffetiEnabled, setConffetiEnabled } = useConfettiStore();
  const { width, height } = useWindowSize();

  return (
    <>
      {(conffetiEnabled && (
        <Confetti
          width={width}
          height={height}
          style={{ position: 'fixed', zIndex: 9999 }}
          recycle={false}
          numberOfPieces={200}
          onConfettiComplete={() => setConffetiEnabled(false)}
        />
      )) ||
        null}
    </>
  );
};
