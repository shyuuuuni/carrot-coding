import React from "react";

import Sidebar from "@/components/organisms/Sidebar";
import { DataStructureSearchInfo } from "@/types/types";

type Props = {
  sidebarSearchInfo: DataStructureSearchInfo[];
} & React.PropsWithChildren;

export default function Post({ sidebarSearchInfo, children }: Props) {
  return (
    <div className="flex h-full max-w-7xl grow-0 flex-row border-l border-r border-gray-700">
      <Sidebar searchInfo={sidebarSearchInfo} />
      <div className="h-full w-full pl-80">{children}</div>
    </div>
  );
}
