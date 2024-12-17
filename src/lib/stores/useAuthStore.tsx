import { create } from "zustand";

export interface UseAuthStoreProps {
  token: string | null;
  setToken: (token: string) => void;
  loadFromGetToken: () => void;
}

const useAuthStore = create<UseAuthStoreProps>((set) => ({
  token: null,
  setToken: (token: string) => {
    set({ token });
    localStorage.setItem("@auth/access_token", token);
  },
  loadFromGetToken: () => {
    const token = localStorage.getItem("@auth/access_token");

    if (token !== null && token !== "") {
      set({ token: token });
    }
  },
}));

export default useAuthStore;
