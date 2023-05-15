import React, { useEffect, useState } from "react";

import CodeBlock from "@/components/atoms/CodeBlock";
import DropDown from "@/components/atoms/DropDown";
import DropDownItem from "@/components/atoms/DropDownItem";
import { DataStructureCode } from "@/types/types";

type Props = {
  codes: DataStructureCode[];
};

export default function Code({ codes }: Props) {
  const [selectedCode, setSelectedCode] = useState<
    undefined | DataStructureCode
  >();

  // 페이지 이동 시 selectedCode를 업데이트
  useEffect(() => {
    setSelectedCode(codes?.[0]);
  }, [codes]);

  return (
    <div>
      <DropDown defaultLabel="Language" selectedItem={selectedCode?.language}>
        {codes.map((code) => {
          return (
            <DropDownItem
              key={code.language}
              label={code.language}
              onClick={() => setSelectedCode(code)}
            />
          );
        })}
      </DropDown>
      {selectedCode && (
        <CodeBlock code={selectedCode.code} language={selectedCode.language} />
      )}
    </div>
  );
}
