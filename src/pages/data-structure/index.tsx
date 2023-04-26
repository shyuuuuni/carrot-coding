import { GetStaticPropsResult } from "next/types";

import IndexPostContents from "@/components/organisms/IndexPostContents";
import Post from "@/components/templates/Post";
import { API_URL } from "@/constants/env";
import { ONE_DAY } from "@/constants/time";
import { DataStructureSearchInfo } from "@/types/types";

type Props = {
  searchInfo: DataStructureSearchInfo[];
};

export default function DataStructure({ searchInfo }: Props) {
  return (
    <Post sidebarSearchInfo={searchInfo}>
      <IndexPostContents />
    </Post>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  // Get data structure name list
  const res = await fetch(`${API_URL}/data-structure/list`);
  const dataStructureList = await res.json();

  // Make object with { name, link }
  const searchInfoList: DataStructureSearchInfo[] = Object.keys(
    dataStructureList
  ).map((name: string) => ({
    name,
    link: `/data-structure/${name.replaceAll(" ", "-")}`,
  }));

  return {
    props: { searchInfo: searchInfoList },
    revalidate: ONE_DAY, // Re-generate every day
  };
}
