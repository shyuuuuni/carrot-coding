import React from "react";

import Codeblock from "@/components/atoms/Codeblock";
import Content from "@/components/atoms/Content";
import TextArea from "@/components/atoms/TextArea";
import TimeComplexity from "@/components/atoms/TimeComplexity";
import { DataStructureDetails } from "@/types/types";

type Props = {
  dataStructureDetails: DataStructureDetails;
};

export default function DataStructurePostContents({
  dataStructureDetails,
}: Props) {
  return (
    <div className="flex grow-0 flex-col gap-10 p-4">
      <div className="pb-4 text-5xl font-bold">{dataStructureDetails.name}</div>
      <Content title="소스코드">
        <Codeblock language="javascript" code={dataStructureDetails.code} />
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
