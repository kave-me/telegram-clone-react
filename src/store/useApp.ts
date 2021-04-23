import create, { State } from "zustand";

interface AppStore extends State {
  // Current User ID
  CUID: number;
  // Target User ID
  TUID: number;
  showUserInfoModal: boolean;
  setTargetUser: (TUID: number) => void;
  setUserInfoModal: (value: boolean) => void;
}

const useApp = create<AppStore>((set) => ({
  CUID: 7,
  // default to -1 which means none/empty
  TUID: -1,
  showUserInfoModal: false,

  setTargetUser(TUID) {
    set((state) => ({ ...state, TUID }));
  },
  setUserInfoModal(v) {
    set((state) => ({
      ...state,
      showUserInformationModal: v,
    }));
  },
}));

export default useApp;
