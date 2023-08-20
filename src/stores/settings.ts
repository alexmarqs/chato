import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type Model = 'gpt-3.5-turbo' | 'gpt-4';

type SettingsStore = {
  model: Model;
  setModel: (model: Model) => void;
};

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      model: 'gpt-3.5-turbo',
      setModel: (model) => set({ model })
    }),
    {
      name: 'settings-chat-storage',
      storage: createJSONStorage(() => sessionStorage) // (optional) by default, 'localStorage' is used
    }
  )
);
