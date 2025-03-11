import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type PlayerStoreState = {
  autoSkip: boolean;
  setAutoSkip: (value: boolean) => void;
  autoNext: boolean;
  setAutoNext: (value: boolean) => void;
  light: boolean;
  setLight: (value: boolean) => void;
};

export const usePlayStore = create<PlayerStoreState>()(
  persist(
    (set) => ({
      autoNext: false,
      setAutoNext: (value) => set({ autoNext: value }),
      autoSkip: false,
      setAutoSkip: (value) => set({ autoNext: value }),
      light: false,
      setLight: (value) => set({ light: value }),
    }),
    {
      name: "player_store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
