import IndexPostContents from "@/components/organisms/IndexPostContents";

const INTRODUCTION = `당근 코딩은 "당신 근처의 코딩 테스트 가이드" 라는 의미로, 코딩 테스트에 필요한 정보들을 보여주는 사이트입니다.

ChatGPT의 "gpt-3.5-turbo" 모델을 사용해 필요한 데이터를 생성하고, AI가 생성한 데이터를 화면에 보여주고 있습니다.

- 자료구조, 알고리즘 에 대한 정보를 제공하고 있습니다.
- 사이드바를 통해 원하는 정보를 검색하고 볼 수 있습니다.
- JavaScript, Python, Java, C++ 언어를 선택해서 소스 코드를 볼 수 있습니다.
- 소스 코드에 작성된 시간 복잡도를 볼 수 있습니다.
- 정보에 대한 설명을 볼 수 있습니다.
- 잘못된 정보가 표기된 경우 해당 데이터를 신고하고 재생성 할 수 있습니다.
`;

export default function Home() {
  return (
    <IndexPostContents
      title="당근코딩"
      header="당신 근처의 코딩 테스트 가이드"
      text={INTRODUCTION}
    />
  );
}
