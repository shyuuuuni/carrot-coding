import { GetStaticPropsResult } from "next/types";

import Sidebar from "@/components/organisms/Sidebar";
import { API_URL } from "@/constants/env";
import { ONE_DAY } from "@/constants/time";
import { DataStructureSearchInfo } from "@/types/types";

type Props = {
  search: DataStructureSearchInfo[];
};

export default function DataStructure({ search }: Props) {
  return (
    <div>
      <Sidebar searchDatas={search} />
      <div>자료구조 페이지</div>
    </div>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  // Get data structure name list
  const res = await fetch(`${API_URL}/data-structure/list`);
  const dataStructureList = await res.json();

  // Make object with { name, link }
  const searchList: DataStructureSearchInfo[] = dataStructureList.map(
    (name: string) => ({
      name,
      link: `/data-structure/${name.replaceAll(" ", "-")}`,
    })
  );

  return {
    props: { search: searchList },
    revalidate: ONE_DAY, // Re-generate every day
  };
}
