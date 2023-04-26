import React, { useEffect, useRef } from "react";

import Content from "@/components/atoms/Content";
import TextArea from "@/components/atoms/TextArea";
import useScrollToTop from "@/hooks/useScrollToTop";

const INTRODUCTION = `자료구조는 데이터를 효율적으로 저장하고 관리하기 위한 방법을 제공하는 컴퓨터 과학의 분야입니다. 자료구조는 데이터를 구성하는 방법과 데이터에 적용 가능한 연산에 대한 알고리즘을 제공합니다.

일반적으로 자료구조는 다음과 같은 기본 연산을 제공합니다.

1. 삽입(Insertion): 새로운 데이터를 자료구조에 추가합니다.
2. 삭제(Deletion): 자료구조에서 데이터를 삭제합니다.
3. 검색(Searching): 자료구조에서 특정 데이터를 찾습니다.
4. 순회(Traversal): 자료구조를 순회하며 모든 데이터를 차례대로 접근합니다.

자료구조는 크게 두 가지 종류로 나눌 수 있습니다.

1. 선형 자료구조: 데이터를 일렬로 나열하는 자료구조로 배열(Array), 연결 리스트(Linked List), 스택(Stack), 큐(Queue) 등이 있습니다.
2. 비선형 자료구조: 데이터를 계층 구조로 표현하는 자료구조로 트리(Tree), 그래프(Graph) 등이 있습니다.
자료구조를 효율적으로 설계하고 사용하면 데이터를 더 빠르고 쉽게 처리할 수 있습니다. 따라서, 자료구조는 컴퓨터 과학에서 매우 중요한 개념이며, 프로그래밍에서도 자주 사용됩니다.
`;

export default function IndexPostContents() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollToTop = useScrollToTop(ref);

  // 화면에 표시할 데이터 변경 시 스크롤을 최상단으로 올리는 부분
  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  return (
    <div
      ref={ref}
      className="flex h-full grow flex-col gap-10 overflow-auto p-4 px-20"
    >
      <div className="pb-4 text-5xl font-bold">자료구조</div>
      <Content title="자료구조란?">
        <TextArea text={INTRODUCTION} />
      </Content>
    </div>
  );
}
