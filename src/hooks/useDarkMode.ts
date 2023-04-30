import { useEffect } from "react";

import usePersistedStore from "@/hooks/usePersistedStore";
import {
  INITIAL_THEME_STORE,
  ThemeStore,
  usePersistedThemeStore,
} from "@/stores/themeStore";

export default function useDarkMode() {
  const selector = (store: ThemeStore): [boolean, (arg: boolean) => void] => [
    store.isDark,
    store.setDark,
  ];
  const [isDark, setDark] = usePersistedStore(
    usePersistedThemeStore,
    INITIAL_THEME_STORE,
    selector
  );

  const toggleDark = () => {
    setDark(!isDark);
  };

  // tailwindcss 의 class 기반 다크모드 적용 처리
  useEffect(() => {
    // 다크모드 전역 상태에 따라 <html> 태그에 "dark" class 적용 결정
    if (typeof window !== undefined) {
      document.documentElement.classList.toggle("dark", isDark);
    }
  }, [isDark]);

  return { isDark, setDark, toggleDark };
}
