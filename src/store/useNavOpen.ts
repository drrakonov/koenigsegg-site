import { create } from "zustand";

interface NavState {
  navOpen: boolean;
  setNavOpen: (value?: boolean) => void;
}

const useNav = create<NavState>((set) => ({
  navOpen: false,
  setNavOpen: (value) =>
    set((state) => ({
      navOpen: value !== undefined ? value : !state.navOpen,
    })),
}));

export default useNav;
