import { GetStaticPropsResult } from "next/types";

import IndexPostContents from "@/components/organisms/IndexPostContents";
import Post from "@/components/templates/Post";
import { API_URL } from "@/constants/env";
import { ONE_DAY } from "@/constants/time";
import { DataStructureDetail, DataStructureSearchInfo } from "@/types/types";

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
  // 자료구조 목록 전체 가져오기
  const dataStructureListRes = await fetch(`${API_URL}/data-structure/list`);
  const dataStructureList: { [key: string]: DataStructureDetail[] } =
    await dataStructureListRes.json();

  // 사이드바를 위한 검색 정보
  const searchInfo = Object.entries(dataStructureList).map(
    ([name, detail]) => ({
      name: detail[0].name,
      link: `/data-structure/${name.replaceAll(" ", "-")}`,
      description: detail[0].description,
    })
  );

  return {
    props: { searchInfo },
    revalidate: ONE_DAY, // Re-generate every day
  };
}
