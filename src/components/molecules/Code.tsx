import React, { useState } from "react";

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

  const selectedItem = selectedCode
    ? { label: selectedCode.language }
    : undefined;

  return (
    <div>
      <DropDown defaultLabel="Language" selectedItem={selectedItem}>
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
