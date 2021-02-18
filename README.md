# 온빛정신건강의학과의원 홈페이지

[https://onbitclinic.com](https://onbitclinic.com/)

## 소개

2021년 3월 개원 예정인 온빛정신건강의학과의원을 위한 홈페이지입니다.

## 요약

- 역할: 단독 작업 (프론트엔드 개발, 디자인, 배포 등 일체)
- 개발 기간: 2020년 1월 말 ~ 2월 중순 (3주)

## 기술 스택

- React with Redux (Frontend)
- SASS (CSS preprocessor)
- Firebase (Backend as a Service - BaaS)

## 주요 기능

1. 관리자 계정
2. 게시판 CRUD (Firebase firestore)
3. 메일 전송 (Firebase functions)
4. 채널톡 API
5. 네이버 지도 API
6. Parallax Scrolling

현재 4번의 채널톡 API는 비활성화되어 있으며 의원의 개원 시점에 맞춰 활성화할 예정입니다.

## 주요 이슈

#### 성능 개선

이전 프로젝트(하랑 홈페이지)에서 이미지 최적화, Code Splitting 등으로 성능을 개선했던 것을 동일하게 적용했습니다. 랜딩 페이지 기준 Lighthouse 결과는 아래와 같습니다.

![온빛 랜딩 페이지 Lighthouse 결과](https://github.com/cozyzoey/images/blob/master/onbit-lighthouse.png)

#### 테스트

Firebase에서 제공하는 로컬 테스트 환경인 emulators를 활용하여 개발 및 테스트를 진행했습니다.
이를 활용해 firestore(DB), authentication, function을 로컬 환경에서 구동했습니다.
Emulators를 적용하지 않았던 이전 프로젝트(하랑 홈페이지)에 비해 자유롭게 테스트와 개발을 진행할 수 있었습니다.

## 개선 사항

본 프로젝트는 다음의 개선 사항이 있습니다.

1. 유닛 테스트

- 테스트(Jest)를 작성하면 보다 안정적이고 전문적인 작업이 가능하겠습니다.
- 특히 프로젝트의 규모가 커지고 여러명의 개발자들과 협업하려면 테스트는 필수라고 생각합니다.

2. 다양한 브라우저 환경에서 검증

- 본 프로젝트는 크롬 브라우저 환경과 개발자 도구를 사용해 개발했습니다. [CanIUse](https://caniuse.com/)로 브라우저 지원을 확인하며 개발했지만 실제 다른 브라우저 환경에서도 검증을 하면 좋겠습니다.
- 대상 브라우저는 국내의 사용 점유율을 고려해서 익스플로러, 사파리, 삼성 인터넷 브라우저가 좋겠습니다.
