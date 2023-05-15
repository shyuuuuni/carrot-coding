import React from "react";

import Sidebar from "@/components/organisms/Sidebar";
import { SearchInfo } from "@/types/types";

type Props = {
  sidebarSearchInfo: SearchInfo[];
} & React.PropsWithChildren;

export default function Post({ sidebarSearchInfo, children }: Props) {
  return (
    <div className="flex h-full w-3/4 max-w-7xl grow-0 flex-row">
      <Sidebar searchInfo={sidebarSearchInfo} />
      <div className="h-full w-full pl-80">{children}</div>
    </div>
  );
}
