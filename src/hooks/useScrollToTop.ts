import { RefObject } from "react";

export default function useScrollToTop<T extends HTMLElement>(
  targetRef: RefObject<T>
) {
  const scrollToTop = () => {
    if (targetRef.current) {
      targetRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return scrollToTop;
}
