import { create } from "zustand";

type SiteStoreTypes = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
  isSearchBarOpen: boolean;
  setIsSearchOpen: (value: boolean) => void;
};

export const useSiteStore = create<SiteStoreTypes>()((set) => ({
  isSearchBarOpen: false,
  setIsSearchOpen: (value) => set({ isSearchBarOpen: value }),
  isSidebarOpen: false,
  setIsSidebarOpen: (value) => set({ isSearchBarOpen: value }),
}));
