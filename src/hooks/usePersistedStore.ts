import { useEffect, useState } from "react";

import { StoreApi, UseBoundStore } from "zustand";

/**
 * SSR 환경에서 PersistedStore를 사용할 수 있도록 지원하는 커스텀 훅
 * PersistedStore를 직접 사용할 경우, Text content does not match server-rendered HTML 오류가 발생할 수 있다.
 * 이를 방지하기 위해 useEffect 호출 이후에 PersistedStore를 동기화해서 SSR의 결과가 클라이언트에서 마크업되는 것을 보장할 수 있다.
 * @param useStore 대상 zustand 스토어를 호출하는 훅
 * @param initialStore 대상 zustand 스토어의 초기값
 * @param selector 스토어의 selector
 * @returns 스토어에서 selector를 실행한 결과
 */
export default function usePersistedStore<T, V>(
  useStore: UseBoundStore<StoreApi<T>>,
  initialStore: T,
  selector: (store: T) => V
) {
  const [hydrated, setHydrated] = useState(false);
  const storeState = useStore(selector);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated ? storeState : selector(initialStore);
}
