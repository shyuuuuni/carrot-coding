import React from "react";

import Sidebar from "@/components/organisms/Sidebar";
import { DataStructureSearchInfo } from "@/types/types";

type Props = {
  sidebarSearchInfo: DataStructureSearchInfo[];
} & React.PropsWithChildren;

export default function Post({ sidebarSearchInfo, children }: Props) {
  return (
    <div className="flex h-full max-w-6xl grow-0 flex-row ">
      <Sidebar searchInfo={sidebarSearchInfo} />
      <div className="pl-80">{children}</div>
    </div>
  );
}
