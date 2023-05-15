import { GetStaticPropsContext, GetStaticPropsResult } from "next";

import PostContents from "@/components/organisms/PostContents";
import Post from "@/components/templates/Post";
import { API_URL } from "@/constants/env";
import { ONE_DAY } from "@/constants/time";
import {
  AlgorithmDetail,
  AlgorithmSearchInfo,
  SearchInfo,
} from "@/types/types";

type Props = {
  searchInfo: SearchInfo[];
  detail: AlgorithmDetail;
};

export default function AlgorithmPost({ searchInfo, detail }: Props) {
  return (
    <Post sidebarSearchInfo={searchInfo}>
      <PostContents detail={detail} />
    </Post>
  );
}

type Params = {
  name: string;
};

export async function getStaticProps({
  params,
}: GetStaticPropsContext<Params>): Promise<GetStaticPropsResult<Props>> {
  const algorithmName = params?.name as string;

  // 알고리즘 목록 전체 가져오기
  const algorithmSearchInfosResponse = await fetch(`${API_URL}/algorithms`);
  const algorithmSearchInfos: AlgorithmSearchInfo[] =
    await algorithmSearchInfosResponse.json();

  // 사이드바를 위한 검색 정보
  const searchInfo = algorithmSearchInfos.map(({ name, description }) => ({
    name,
    description,
    link: `/algorithm/${name.en.replaceAll(" ", "-")}`,
  }));

  // URL에 맞는 알고리즘 이름 검색
  const algorithmOriginName = algorithmSearchInfos.find(
    ({ name }) => name.en.replaceAll(" ", "-") === algorithmName
  );
  if (!algorithmOriginName) {
    throw Error(`data fetching error with ${algorithmName}.`);
  }

  // 포스트 컨텐츠를 위한 알고리즘 정보
  const algorithmDetailResponse = await fetch(
    `${API_URL}/algorithms/${algorithmOriginName.name.en}`
  );
  const algorithmDetail: AlgorithmDetail = await algorithmDetailResponse.json();
  if (!algorithmOriginName) {
    throw Error(
      `data fetching error with ${algorithmName}. Not found algorithm detail.`
    );
  }

  return {
    props: {
      searchInfo,
      detail: algorithmDetail,
    },
    revalidate: ONE_DAY / 24, // 1시간마다 재생성
  };
}

export async function getStaticPaths() {
  // 알고리즘 목록 전체 가져오기
  const algorithmSearchInfosResponse = await fetch(`${API_URL}/algorithms`);
  const algorithmSearchInfos: AlgorithmSearchInfo[] =
    await algorithmSearchInfosResponse.json();

  // 자료구조 이름을 프론트엔드 URL 경로로 변경
  const paths = algorithmSearchInfos.map(
    ({ name }) => `/algorithm/${name.en.replaceAll(" ", "-")}`
  );

  return {
    paths,
    fallback: false,
  };
}
