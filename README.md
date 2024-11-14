# 어서와요 기다렸어요

## 프로젝트 소개
오랫동안 보호소에서 입양을 기다리고 있는 유기견들을 소개하고 입양을 촉진하기 위해 제작된 웹 애플리케이션입니다.

## UX/UI
- **메인 화면**
![main](https://github.com/user-attachments/assets/34157138-d371-4c07-b4e1-c1e58ac65da1)

- **상세 페이지**
<img width="1470" alt="detail" src="https://github.com/user-attachments/assets/edc951d2-c6f9-4eba-b9e6-6684e4775550">

- **스토리**
<img width="1470" alt="story" src="https://github.com/user-attachments/assets/edd9db69-d820-43ec-bbfc-6900a3f0c926">

- **스크롤 이동기능**
![scroll2](https://github.com/user-attachments/assets/c5672b92-daba-4c1a-90c6-9e609348511f)

## 기술 스택
-**React**: 컴포넌트 기반으로 각 유기견 카드 및 상세 정보를 구성하고 router를 통해 SPA기반 페이지를 구현했습니다.
-**Recoil**:  유기견 데이터 및 상태 관리를 위해 사용했습니다.
- **CSS**: 일관된 디자인의 UI를 위해 스타일링을 적용했습니다.

## 주요 기능
- **유기견 소개**: 1년 전 오늘 입소한 유기견과 입소한 지 가장 오랜된 10마리의 유기견을 carousel 형식으로 소개합니다.
- **상세 정보 페이지**: 유기견 사진 클릭 시 해당 유기견의 상세 정보가 담긴 상세 정보 페이지로 이동합니다.
- **스토리 페이지**: 프로젝트의 목표와 입양 후기를 소개합니다.
- **스크롤 이동**: 페이지 내에서 특정 섹션으로 빠르게 이동할 수 있는 기능을 추가해 사용자 경험을 개선했습니다.

## 학습 및 개발 포인트
- **API 데이터 처리** : 외부 API를 통해 유기견 데이터를 가져와 필요한 데이터만 필터링하여 표시하며 RESTful방식으로 데이터를 관리했습니다.
- **상태 관리** Recoil을 활용해 여러 컴포넌트에서 데이터를 효율적으로 공유하고 관리했습니다.
- **SPA 페이지 구성**: React Router를 사용해 페이지 전환을 구현하고, 사용자 인터랙션을 위한 다양한 라이브러리를 활용했습니다.
- **Carousel 구현**: 유기견 카드들을 슬라이드 형식으로 보여주는 Carousel 컴포넌트를 제작하여 사용자 인터랙션을 높였습니다.

## 실행 방법
1. 프로젝트를 클론
   
bash
   git clone https://github.com/Eonjoo-Oh/until_u_find_me.git

2. 프로젝트 디렉토리 이동 후 의존성 설치:
   
bash
   cd until_u_find_me
   npm install

3. 로컬 서버를 실행합니다
   npm start
브라우저에서 http://localhost:3000으로 접속하여 확인할 수 있습니다.