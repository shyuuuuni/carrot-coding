import React, { useEffect, useRef } from "react";

import Content from "@/components/atoms/Content";
import TextArea from "@/components/atoms/TextArea";
import TimeComplexity from "@/components/atoms/TimeComplexity";
import Code from "@/components/molecules/Code";
import useScrollToTop from "@/hooks/useScrollToTop";
import { DataStructureDetails } from "@/types/types";

type Props = {
  dataStructureDetails: DataStructureDetails;
};

export default function DataStructurePostContents({
  dataStructureDetails,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollToTop = useScrollToTop(ref);

  // 화면에 표시할 데이터 변경 시 스크롤을 최상단으로 올리는 부분
  useEffect(() => {
    scrollToTop();
  }, [scrollToTop, dataStructureDetails]);

  return (
    <div
      ref={ref}
      className="flex h-full grow-0 flex-col gap-10 overflow-auto p-4 px-20"
    >
      <div className="pb-4 text-5xl font-bold">
        {dataStructureDetails.name.kr}({dataStructureDetails.name.en})
      </div>
      <Content title="소스코드">
        <Code codes={dataStructureDetails.code} />
      </Content>
      <Content title="시간 복잡도">
        <TimeComplexity complexity={dataStructureDetails.complexity} />
      </Content>
      <Content title="설명">
        <TextArea text={dataStructureDetails.description} />
      </Content>
    </div>
  );
}
