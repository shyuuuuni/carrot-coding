import React, { useEffect, useRef } from "react";

import Content from "@/components/atoms/Content";
import TextArea from "@/components/atoms/TextArea";
import useScrollToTop from "@/hooks/useScrollToTop";

type Props = {
  title: string;
  header: string;
  text: string;
};

export default function IndexPostContents({ title, header, text }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollToTop = useScrollToTop(ref);

  // 화면에 표시할 데이터 변경 시 스크롤을 최상단으로 올리는 부분
  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  return (
    <div
      ref={ref}
      className="flex h-full grow flex-col gap-10 overflow-auto p-4 px-20"
    >
      <div className="pb-4 text-5xl font-bold">{title}</div>
      <Content title={header}>
        <TextArea text={text} />
      </Content>
    </div>
  );
}
