<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<div align="center">
  <img src="https://res.cloudinary.com/dftuawd1d/image/upload/v1661222921/github/onbit_logo_edv89b.png" alt="logo" width="200" height="auto">
  
  <h1 align="center">온빛 정신건강의학과의원</h1>

  <p>
    온빛 정신건강의학과의원 병원 홈페이지입니다.
  </p>

  <p>
    <a href="https://onbitclinic.com">View Demo</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

[![온빛 스크린샷](https://res.cloudinary.com/dftuawd1d/image/upload/v1661223065/github/onbit_screenshot_iogzjb.png)](https://onbitclinic.comm)

이 웹사이트에 주안점을 둔 것은 사용자 경험입니다. 병원 홈페이지 방문자들에게 편안한 첫인상을 주면서 필요한 기능을 사용하는 데 지장이 없도록 디자인과 개발을 고려하여 UX를 설계했습니다. 예를 들어 '진료과정' 페이지에서는 과정을 파악할 수 있게끔 멀티 스텝으로 구성하고 전체 스텝은 항상 표시되도록 상단에 고정했습니다. 스크롤에 따라 스텝이 바뀌며 다른 스텝이라는 것을 인지할 수 있게끔 배경색 두 가지를 스텝마다 번갈아 사용했습니다.

[![온빛 진료과정 스크린샷](https://res.cloudinary.com/dftuawd1d/image/upload/v1661225397/github/onbit_screenshot2_h6goeo.png)](https://onbitclinic.com/process)

### Firebase 선택 배경

프론트엔드 개발에 집중하고자 Baas(Backend-as-a-Service)를 선택했으며 커뮤니티 서포트도 많은 Firebase를 선택하게 되었습니다.

또한 firebase는 비용적인 이점이 있습니다. 이 웹사이트의 타겟 사용자는 병원 홈페이지 방문자로서 사용량이 많지 않아 firebase의 무료 플랜으로 감당할 수 있는 범위입니다.

### 개발 환경

Firebase에서 제공하는 로컬 테스트 환경인 emulators를 활용하여 개발 및 테스트를 수행합니다. 해당하는 기능은 firestore(DB), authentication, function입니다.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Tech Stack

<!-- https://github.com/Ileriayo/markdown-badges -->

- [![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
- [![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)
- [![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)](https://sass-lang.com/)
- [![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)](https://firebase.google.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FEATIRES -->

## Features

- 관리자 계정
- 공지사항 CRUD (Firebase firestore)
- 메일 전송 (Firebase functions 및 nodemailer)
- 네이버 지도 API
- 랜딩페이지 Parallax Scrolling

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

이 프로젝트를 로컬에서 실행하려면 아래를 참고하세요.

### Prerequisite

앱을 실행하기 위해서 아래와 같은 사전 준비가 필요합니다.

- npm
- firebase-tools
- java >= v11
- node v14

### Installation

1. 로컬 디렉토리에 repo를 복제합니다.
   ```sh
   git clone https://github.com/cozyzoey/onbit.git
   cd onbit
   ```
2. NPM 패키지를 설치합니다.
   ```sh
   npm install
   cd functions && npm install
   ```
3. 프로젝트 루트에서 코드를 실행한 후 브라우저에서 http://localhost:3000에 접속합니다.
   ```sh
   npm run dev
   ```

<!-- CONTACT -->

## Contact

김반석 - devzoeykim@gmail.com

Project Link: [https://github.com/cozyzoey/onbit](https://github.com/cozyzoey/onbit)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Performant Parallaxing](https://developer.chrome.com/blog/performant-parallaxing/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
