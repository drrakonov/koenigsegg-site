import { create } from "zustand";

interface IsAnimatingState {
    isAnimating: boolean;
    setIsAnimating: (value?: boolean) => void;
}


const useIsAnimating = create<IsAnimatingState>((set) => ({
    isAnimating: false,
    setIsAnimating: (value) =>
        set((state) => ({
            isAnimating: value !== undefined ? value : !state.isAnimating,
        })),    
}));

export default useIsAnimating;