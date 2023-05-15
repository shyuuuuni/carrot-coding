import React, { useEffect, useRef, useState } from "react";

import CodeBlock from "@/components/atoms/CodeBlock";
import Content from "@/components/atoms/Content";
import DropDown from "@/components/atoms/DropDown";
import DropDownItem from "@/components/atoms/DropDownItem";
import TextArea from "@/components/atoms/TextArea";
import TimeComplexity from "@/components/atoms/TimeComplexity";
import useScrollToTop from "@/hooks/useScrollToTop";
import { AlgorithmDetail, CodeDetail, Name } from "@/types/types";

type Props = {
  detail: AlgorithmDetail;
};

export default function PostContents({ detail }: Props) {
  const [selectedCode, setSelectedCode] = useState<undefined | CodeDetail>();
  const ref = useRef<HTMLDivElement>(null);
  const scrollToTop = useScrollToTop(ref);

  // 페이지 이동 시 selectedCode를 업데이트
  useEffect(() => {
    setSelectedCode(detail.codes[0]);
  }, [detail]);

  // 화면에 표시할 데이터 변경 시 스크롤을 최상단으로 올리는 부분
  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  return (
    <div
      ref={ref}
      className="flex h-full grow-0 flex-col gap-10 overflow-auto p-4 px-20"
    >
      <div className="pb-4 text-5xl font-bold">
        {detail.name.kr}({detail.name.en})
      </div>
      <DropDown defaultLabel="Language" selectedItem={selectedCode?.language}>
        {detail.codes.map((code) => {
          return (
            <DropDownItem
              key={code.language}
              label={code.language}
              onClick={() => setSelectedCode(code)}
            />
          );
        })}
      </DropDown>
      <Content title="소스코드">
        {selectedCode && (
          <CodeBlock
            code={selectedCode.code}
            language={selectedCode.language}
          />
        )}
      </Content>
      <Content title="시간 복잡도">
        {selectedCode && (
          <TimeComplexity complexity={selectedCode?.complexity} />
        )}
      </Content>
      <Content title="설명">
        <TextArea text={detail.description} />
      </Content>
    </div>
  );
}
