import { GetStaticPropsResult } from "next/types";

import Sidebar from "@/components/organisms/Sidebar";
import { API_URL } from "@/constants/env";
import { ONE_DAY } from "@/constants/time";
import { DataStructureSearchInfo } from "@/types/types";

type Props = {
  searchInfo: DataStructureSearchInfo[];
};

export default function DataStructure({ searchInfo }: Props) {
  return (
    <div>
      <Sidebar searchInfo={searchInfo} />
      <div>자료구조 페이지</div>
    </div>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  // Get data structure name list
  const res = await fetch(`${API_URL}/data-structure/list`);
  const dataStructureList = await res.json();

  // Make object with { name, link }
  const searchInfoList: DataStructureSearchInfo[] = dataStructureList.map(
    (name: string) => ({
      name,
      link: `/data-structure/${name.replaceAll(" ", "-")}`,
    })
  );

  return {
    props: { searchInfo: searchInfoList },
    revalidate: ONE_DAY, // Re-generate every day
  };
}
