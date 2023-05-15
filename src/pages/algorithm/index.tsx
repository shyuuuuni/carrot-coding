import { GetStaticPropsResult } from "next";

import IndexPostContents from "@/components/organisms/IndexPostContents";
import Post from "@/components/templates/Post";
import { API_URL } from "@/constants/env";
import { ONE_DAY } from "@/constants/time";
import { AlgorithmSearchInfo, SearchInfo } from "@/types/types";

const INTRODUCTION = `알고리즘은 주어진 문제를 해결하기 위한 단계적인 절차를 의미합니다. 알고리즘은 일련의 단계를 거쳐 입력값을 처리하고, 원하는 결과를 출력하는 과정을 구현합니다. 알고리즘은 문제 해결에 필요한 특정한 기능을 수행하며, 일반적으로 다음과 같은 기능을 제공합니다.

1. 정렬(Sorting): 주어진 데이터를 특정한 순서로 정렬합니다.
2. 탐색(Searching): 주어진 데이터 중에서 특정한 값을 찾습니다.
3. 최적화(Optimization): 주어진 조건에서 최적의 해결책을 찾습니다.
4. 구조화(Structuring): 주어진 데이터를 구조화하여 관리합니다.
5. 분할(Dividing): 주어진 문제를 작은 단위로 나누어 해결합니다.

알고리즘은 주로 시간 복잡도와 공간 복잡도를 평가합니다. 시간 복잡도는 알고리즘이 문제를 해결하는 데 걸리는 시간을 측정하며, 공간 복잡도는 알고리즘이 사용하는 메모리 공간의 양을 측정합니다. 알고리즘이 더 빠르고 적은 메모리를 사용하면 더 효율적인 알고리즘이라고 할 수 있습니다.

코딩 테스트에서는 다양한 알고리즘이 출제됩니다. 가장 기본적인 알고리즘으로는 선형 탐색, 이진 탐색, 정렬 알고리즘 등이 있습니다. 이외에도 그래프 알고리즘, 분할 정복 알고리즘, 그리디 알고리즘, 동적 계획법 등 다양한 알고리즘이 있으며, 이러한 알고리즘들을 조합해서 보다 복잡한 문제를 해결할 수 있습니다. 알고리즘을 적절하게 선택하고 구현하는 능력이 있는 개발자는 코딩 테스트에서 좋은 성적을 거둘 수 있을 것입니다.`;

type Props = {
  searchInfo: SearchInfo[];
};

export default function Algorithm({ searchInfo }: Props) {
  return (
    <Post sidebarSearchInfo={searchInfo}>
      <IndexPostContents
        title="알고리즘"
        header="알고리즘이란?"
        text={INTRODUCTION}
      />
    </Post>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
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

  return {
    props: { searchInfo },
    revalidate: ONE_DAY, // Re-generate every day
  };
}
