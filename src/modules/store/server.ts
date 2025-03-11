import { create } from "zustand";

type ServerStoreType = {
  currentServer: string;
  setCurrentServer: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
};

export const useUser = create<ServerStoreType>()((set) => ({
  currentServer: "",
  setCurrentServer: (value) => set({ currentServer: value }),
  category: "",
  setCategory: (value) => set({ category: value }),
}));
