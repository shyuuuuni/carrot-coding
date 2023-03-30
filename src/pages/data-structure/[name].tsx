import { GetStaticPropsContext, GetStaticPropsResult } from "next";

import Sidebar from "@/components/organisms/Sidebar";
import { API_URL } from "@/constants/env";
import { ONE_DAY } from "@/constants/time";
import { DataStructureDetails, DataStructureSearchInfo } from "@/types/types";

type Props = {
  searchInfo: DataStructureSearchInfo[];
  details: DataStructureDetails;
};

export default function DataStructurePost({ searchInfo, details }: Props) {
  return (
    <div>
      <Sidebar searchInfo={searchInfo} />
      <div>{details.code}</div>
      <div>{Object.entries(details.complexity)}</div>
      <div>{details.description}</div>
    </div>
  );
}

type Params = {
  name: string;
};

export async function getStaticProps({
  params,
}: GetStaticPropsContext<Params>): Promise<GetStaticPropsResult<Props>> {
  // Get data structure name list
  const dsListRes = await fetch(`${API_URL}/data-structure/list`);
  const dataStructureList = await dsListRes.json();

  // Make object with { name, link }
  const searchInfoList = dataStructureList.map((name: string) => ({
    name,
    link: `/data-structure/${name.replaceAll(" ", "-")}`,
  }));

  // Get data structure detail
  const detailRes = await fetch(
    `${API_URL}/data-structure/${params?.name?.replace(" ", "-")}/javascript`
  );
  const details = await detailRes.json();

  return {
    props: {
      searchInfo: searchInfoList,
      details: {
        code: details.Code,
        complexity: details.Complexity,
        description: details.Description,
      },
    },
    revalidate: ONE_DAY, // Re-generate every day
  };
}

export async function getStaticPaths() {
  // Get data structure name list
  const res = await fetch(`${API_URL}/data-structure/list`);
  const searchRes = await res.json();

  // Make name to link
  const paths = searchRes.map(
    (name: string) => `/data-structure/${name.replaceAll(" ", "-")}`
  );

  return {
    paths,
    fallback: false,
  };
}
