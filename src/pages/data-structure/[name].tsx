import { GetStaticPropsContext, GetStaticPropsResult } from "next";

import DataStructurePostContents from "@/components/organisms/DataStructurePostContents";
import Post from "@/components/templates/Post";
import { API_URL } from "@/constants/env";
import { ONE_DAY } from "@/constants/time";
import {
  DataStructureDetail,
  DataStructureDetails,
  DataStructureSearchInfo,
} from "@/types/types";

type Props = {
  searchInfo: DataStructureSearchInfo[];
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
  // Get data structure name list
  const dataStructureListRes = await fetch(`${API_URL}/data-structure/list`);
  const dataStructureList = await dataStructureListRes.json();

  // Make object with { name, link }
  const searchInfo = Object.keys(dataStructureList).map((name: string) => ({
    name,
    link: `/data-structure/${name.replaceAll(" ", "-")}`,
  }));

  // Get data structure detail
  const detailRes = await fetch(
    `${API_URL}/data-structure/${params?.name?.replace(" ", "-")}`
  );
  const details = (await detailRes.json()) as DataStructureDetail[];

  return {
    props: {
      searchInfo,
      details: {
        name: details[0].name,
        complexity: details[0].complexity,
        description: details[0].description,
        code: details
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
    revalidate: ONE_DAY, // Re-generate every day
  };
}

export async function getStaticPaths() {
  // Get data structure name list
  const res = await fetch(`${API_URL}/data-structure/list`);
  const dataStructureList = await res.json();

  // Make name to link
  const paths = Object.keys(dataStructureList).map(
    (name: string) => `/data-structure/${name.replaceAll(" ", "-")}`
  );

  return {
    paths,
    fallback: false,
  };
}
