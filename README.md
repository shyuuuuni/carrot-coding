# 당근 코딩

> 당신 근처의 코딩 테스트 가이드

- [당근 코딩 바로가기](https://carrot-coding.vercel.app/)

## 프로젝트 소개

당근 코딩은 `당신 근처의 코딩 테스트 가이드` 라는 의미로, 코딩 테스트에 필요한 정보들을 보여주는 사이트입니다.

ChatGPT의 `gpt-3.5-turbo` 모델을 사용해 필요한 데이터를 생성하고, AI가 생성한 데이터를 화면에 보여주고 있습니다.

## 디렉토리 구조

```
📦src
 ┣ 📂components       | 아토믹 디자인
 ┃ ┣ 📂atoms
 ┃ ┣ 📂molecules
 ┃ ┣ 📂organisms
 ┃ ┣ 📂skeletons
 ┃ ┗ 📂templates
 ┣ 📂constants        | 상수
 ┣ 📂hooks            | 커스텀 훅
 ┣ 📂pages
 ┃ ┣ 📂algorithm      | /algorithm 라우팅
 ┃ ┣ 📂data-structure | /data-structure 라우팅
 ┣ 📂stores           | zustand store
 ┣ 📂styles           | root 스타일 파일
 ┗ 📂types            | 타입 파일
```

- 컴포넌트를 분리한 아토믹 디자인 패턴은 [DEVIEW 2023 눈으로 보며 듣는 음성 기록, 클로바노트 서비스의 웹 기술 톺아보기](https://deview.kr/2023/sessions/537) 세션에서 소개한 방식을 적용했습니다.

## 기술 스택

> Back-end 기술 스택은 [carrot-coding-backend](https://github.com/shyuuuuni/carrot-coding-backend) 레포지토리를 참고해주세요.

- Next.js 13
- tailwindCSS
- zustand

## 기능

![image](https://github.com/shyuuuuni/carrot-coding-backend/assets/63703962/19da16cd-34f5-458b-a98a-9c0bf060ddce)

- `자료구조`, `알고리즘` 에 대한 정보를 제공하고 있습니다.
- 사이드바를 통해 원하는 정보를 검색하고 볼 수 있습니다.
- `JavaScript`, `Python`, `Java`, `C++` 언어를 선택해서 소스 코드를 볼 수 있습니다.
- 소스 코드에 작성된 시간 복잡도를 볼 수 있습니다.
- 정보에 대한 설명을 볼 수 있습니다.
- 잘못된 정보가 표기된 경우 해당 데이터를 신고하고 재생성 할 수 있습니다.

## TODOs

- 언어별 소스 코드 신고하기
- 설명 신고하기
- 신고가 많은 정보 주의 표시 붙이기
