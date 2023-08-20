import { create } from 'zustand';

type ConfettiStore = {
  conffetiEnabled: boolean;
  setConffetiEnabled: (conffetiEnabled: boolean) => void;
};

export const useConfettiStore = create<ConfettiStore>()((set) => ({
  conffetiEnabled: false,
  setConffetiEnabled: (conffetiEnabled) => set({ conffetiEnabled })
}));
