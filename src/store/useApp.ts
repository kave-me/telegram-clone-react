import create, { State } from "zustand";

interface AppStore extends State {
  // Current User ID
  CUID: number;
  // Target User ID
  TUID: number;
  setTargetUser: (TUID: number) => void;
}

const useAPP = create<AppStore>((set) => ({
  CUID: 7,
  // default to -1 which means none/empty
  TUID: 1,
  setTargetUser(TUID) {
    set((state) => ({ ...state, TUID }));
  },
}));

export default useAPP;
