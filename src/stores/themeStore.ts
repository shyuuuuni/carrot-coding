import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Persist } from "@/types/types";

export type ThemeStore = {
  isDark: boolean;
  setDark: (isDark: boolean) => void;
};

export const INITIAL_THEME_STORE: ThemeStore = {
  isDark: false,
  setDark: (isDark: boolean) => ({}),
};

export const usePersistedThemeStore = create<ThemeStore>(
  (persist as Persist<ThemeStore>)(
    (set) => ({
      ...INITIAL_THEME_STORE,
      isDark: false,
      setDark: (isDark: boolean) => set(() => ({ isDark })),
    }),
    { name: "theme-storage" }
  )
);
