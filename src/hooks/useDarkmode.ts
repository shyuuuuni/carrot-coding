import { useCallback, useEffect, useState } from "react";

export default function useDarkmode() {
  const [isDarkmode, setIsDarkmode] = useState(false);

  const updateDarkmode = useCallback(
    (_isDarkmode: boolean) => {
      localStorage.setItem("theme", _isDarkmode ? "dark" : "");
      setIsDarkmode(_isDarkmode);
    },
    [setIsDarkmode]
  );

  // Apply theme on initial loading
  useEffect(() => {
    const browserDarkmode = localStorage.getItem("theme") === "dark";
    setIsDarkmode(browserDarkmode);
  }, []);

  // Apply theme on changing state
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkmode);
  }, [isDarkmode]);

  return { isDarkmode, updateDarkmode };
}
