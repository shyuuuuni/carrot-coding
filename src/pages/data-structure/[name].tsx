import { GetStaticPropsContext, GetStaticPropsResult } from "next";

import DataStructurePostContents from "@/components/organisms/DataStructurePostContents";
import Post from "@/components/templates/Post";
import { API_URL } from "@/constants/env";
import { ONE_DAY } from "@/constants/time";
import {
  DataStructureDetail,
  DataStructureDetails,
  SearchInfo,
} from "@/types/types";

type Props = {
  searchInfo: SearchInfo[];
  details: DataStructureDetails;
};

export default function DataStructurePost({ searchInfo, details }: Props) {
  return (
    <Post sidebarSearchInfo={searchInfo}>
      <DataStructurePostContents dataStructureDetails={details} />
    </Post>
  );
}

type Params = {
  name: string;
};

export async function getStaticProps({
  params,
}: GetStaticPropsContext<Params>): Promise<GetStaticPropsResult<Props>> {
  const dataStructureName = params?.name as string;

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

  // 포스트 컨텐츠를 위한 자료구조 정보 [이름, 데이터]
  const dataStructureInfos = Object.entries(dataStructureList).find((info) => {
    return info[0].replaceAll(" ", "-") === dataStructureName;
  });

  if (!dataStructureInfos) {
    throw Error(`data fetching error with ${dataStructureName}.`);
  }

  // 데이터만 필터링
  const dataStructureDetails = dataStructureInfos[1];

  return {
    props: {
      searchInfo,
      details: {
        name: dataStructureDetails[0].name,
        complexity: dataStructureDetails[0].complexity,
        description: dataStructureDetails[0].description,
        code: dataStructureDetails
          .map((detail) => ({
            language: detail.language,
            state: detail.state,
            code: detail.code,
            createdAt: detail.createdAt,
            updatedAt: detail.updatedAt,
          }))
          .sort(),
      },
    },
    revalidate: ONE_DAY / 24, // 1시간마다 재생성
  };
}

export async function getStaticPaths() {
  // 자료구조 목록 전체 가져오기
  const res = await fetch(`${API_URL}/data-structure/list`);
  const dataStructureList = await res.json();

  // 자료구조 이름을 프론트엔드 URL 경로로 변경
  const paths = Object.keys(dataStructureList).map(
    (name: string) => `/data-structure/${name.replaceAll(" ", "-")}`
  );

  return {
    paths,
    fallback: false,
  };
}
