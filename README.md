# 🫒 All Review You

![image](https://user-images.githubusercontent.com/76723666/142566229-10907106-4ea2-4255-a53e-59618edfbcab.png)![Nov-19-2021 10-28-34](https://user-images.githubusercontent.com/50583262/142808455-bd730ac8-42fb-4565-b371-c1f339588408.gif)

## 기획 의도

- 모든 리뷰를 모아 한 눈에 볼 수 있는 리뷰 전용 블로그 "All Review You"
- 유저들이 자유롭게 자신이 사용한 상품이나 방문했던 음식점, 시청한 영화/드라마에 대한 리뷰를 작성할 수 있는 리뷰 전용 블로그이다.
- 리뷰에 대한 별점과 관련한 태그를 작성할 수 있다.
- 텍스트 에디터를 사용해 리뷰를 작성하고 게시할 수 있다.
- 리뷰에 대한 다른 유저들의 생각을 댓글로 자유롭게 소통할 수 있다.
- 좋아요 누른 리뷰들도 모아서 볼 수 있다.

![responsive](https://user-images.githubusercontent.com/76723666/142566147-ec6130d6-3653-435a-8947-2526eec60e7b.gif)


## 구성 페이지 기능

### 메인 페이지
- 카테고리(태그) 분류하여 리뷰 렌더링
<img src="https://user-images.githubusercontent.com/50583262/142808306-f090087d-31ac-4967-97a1-f177b444e8f8.gif"  width="600" />

- 최신 순/ 좋아요 순 정렬
- 무한 스크롤

![infinity_scroll](https://user-images.githubusercontent.com/76723666/142565901-4d9befc7-e11d-477d-b801-321c02e19432.gif)

- 로딩시 스피너

![spinner](https://user-images.githubusercontent.com/76723666/142565971-47dcc5f4-e75f-4c82-a1c8-4ad1096b50cc.gif)

- 좋아요 버튼

![likes](https://user-images.githubusercontent.com/76723666/142565983-982b3bdc-a291-4979-a565-3369b6eaf723.gif)


### 검색 페이지

- 검색 기능 구현
- 무한 스크롤

![search](https://user-images.githubusercontent.com/76723666/142566060-96c40d79-0ce1-4003-ba38-0f008b7d57ea.gif)


### 로그인, 회원가입 페이지
- 아이디 저장
<img src="https://user-images.githubusercontent.com/50583262/142808521-38bdca14-8e5a-4a6f-aea8-a31663b749fd.gif"  width="600" />

- 자동 로그인

### 마이 페이지
- 자기가 작성한 리뷰 렌더링
- 자기가 좋아요한 리뷰 렌더링
<img src="https://user-images.githubusercontent.com/50583262/142808812-f7b13fc8-716c-4817-9180-7b699fea6665.gif"  width="600" />

- 최근 본 리뷰 렌더링

### 리뷰 작성 페이지
- 리뷰 작성 (제목, 태그, 별점 설정, 컨텐츠)

![edit](https://user-images.githubusercontent.com/76723666/142566093-bcd54f19-4dae-4ddd-bd5d-05b97f3e9cbb.gif)

- 수정, 삭제

![edit-delete](https://user-images.githubusercontent.com/76723666/142566097-e5438744-4764-4fe3-a5c6-212c78859d47.gif)


### 리뷰 상세 페이지
- 작성된 리뷰 내용 렌더링 (+별점)
- 좋아요 누르기
- 댓글 기능
<img src="https://user-images.githubusercontent.com/50583262/142807180-ecbe232c-856f-4893-8c89-4fadba748b97.gif"  width="600" />

- 태그 기반으로 비슷한 유형의 게시글 렌더링
<img src="https://user-images.githubusercontent.com/50583262/142807203-7b1a5134-621a-4996-bf54-725b1bd3b013.gif"  width="600" />


## 기술 스택

- HTML, CSS JavaScript
- Sass, Babel, Webpack
- **이미지 및 파일 전송**
    - multer
- **로그인 관련**
    - jwt
    - bcrypt
- **에디터**
    - quill
- **무한 스크롤**
    - Intersection Observer API
- **스타 찍기**
    - rater-js

## 소감

### 채영

- 사람들이 많이 사용하는 라이브러리를 경험해보았는데 확실히 편하고 빠르게 기능을 구현할 수 있는 부분이 편했습니다. (quill.js, jwt, bcrypt, multer)
- 로그인을 직접 구현하고 이론으로만 알고 있던 사용자 인증 과정을 더 정확히 파악할 수 있어서 좋았습니다.
- 비록 프로젝트에 최종적으로 적용하진 못했지만 바닐라 JS로 SPA에 대한 고민과 구현을 해보았던 경험이 의미 있었습니다.

### 강희

**구현한 것들**

- Intersection Observer를 사용하여 무한스크롤을 구현하여 서버로 부터 필요한 데이터만 동적으로 받아 올 수 있었습니다.
- Quill를 사용해서 이미 작성 된 리뷰를 수정 할 수 있게 구현하였습니다.
- 작성된 리뷰를 삭제하는 기능을 구현하였습니다.
- 리뷰를 좋아요순, 최신순으로 정렬된 값을 받아 렌더하였습니다.
- 검색어를 기준으로 리뷰 제목, 태그, 콘텐츠 내용을 비교하여 결과를 찾아내 렌더하였습니다.
- 하트를 누르면 해당 리뷰의 좋아요를 증가 또는 감소하는 기능을 구현하였습니다.
- 전체적인 디자인 설계를 맡았습니다.

**느낀점**
- 하루에 한번씩 코드 리뷰를 해서, 팀원이 구현한 기능의 로직을 이해할 수 있어서 좋았습니다. 또한 동일한 방식으로 구현하는 기능들은 최대한 컴포넌트화 시켜서 재사용성을 높일 수 있었습니다.
- 리팩토링을 혼자 진행하는 것 보다 팀원과 같이 얘기하며 리팩토링을 진행하니, 코드를 간결하고 가독성 좋게 작성하는 방법을 보고 배울 수 있었습니다.
- intersection observer, quill 등의 다양한 API를 공부하고 활용해 개발을 진행해볼 수 있어서 좋았습니다.
- 태그별로 리뷰를 모아볼 수는 있지만, 카테고리별로 모아볼 수 있게 추가 기능도 구현했으면 좋았을 듯 합니다. 장소에 관한 리뷰를 작성한다면, 지도 API를 사용해 봐도 좋을 것 같습니다.

**어려운 점**
- 블로그의 핵심 기능인 `CRUD` 를 구현하며 서버와 클라이언트 간의 restful한 약속이 중요하다는 것을 느꼈습니다. 통신은 상단히 빈번하게 일어나는데 restful하게 요청과 응답하지 않으면 어떤 목적으로 해당 통신을 수행해야 하는지 파악하기 어려웠습니다. 따라서 가독성 좋은 코드를 구현하기 위해서는 REST API설계를 잘 해야 이후 구현단계에서 어려움이 좀 덜었을 듯합니다.
- 처음에 SPA로 구현하고자 하였는데, 하나의 HTML파일에서 모든 것을 동적으로 렌더링 하려다 보니 컴포넌트 단위로 하나하나 그려주기 위해서 JS 코드가 복잡해지고, 한 페이지에서 여러 상태들을 관리하기가 어려워졌습니다. 그래서 다시 여러개의 페이지 별로 구현하는 방식으로 전환하면서 프로젝트의 구현을 싹 뒤집는 대공사를 진행하였습니다. 그 덕에 SPA구현을 쉽게하는 프레임워크의 필요성을 절실하게 느낄 수 있었습니다.


### 준규

**느낀점**
- 코드 리뷰를 통해 코드의 효율성에 대한 각자의 생각을 공유할 수 있어 좋았습니다. 덕분에 자바스크립트에 대해 한층 더 깊게 이해할 수 있었습니다.
- 비슷한 화면과 기능을 공유하는 페이지들이 많아 코드의 재사용성에 많은 노력을 기울였습니다. 이를 통해 코드의 효율성과 가독성에 대해 깊게 고민할 수 있는 시간이었습니다.

**어려운 점**
- 처음에 HTML 파일 하나로 모든 페이지를 랜더링 할 수 있게 구현하려고 했습니다. 하지만, 각 컴포넌트의 상태 관리가 힘들었고 결정적으로 오히려 코드의 가독성이 나빠졌던 문제가 있었습니다.
- ajax API를 구현하면서 `restful`의 어려움과 중요성을 다시 한 번 알게 됐습니다. 특히, 블로그는 서버를 통한 `CRUD`과정이 빈번해 다양한 API가 필요했습니다. 머리로는 쉬운 논리 과정도 코드로 구현하려니 여러 가지 오류, 가독성 있는 코드에 어려움을 겪었던 프로젝트였습니다.


### 태준
**느낀점**
- 매 프로젝트마다 숙련도 부족으로 기능 구현하기에 급급했습니다. 그래서 계획했던 리팩토링 시간을 내기 어려웠습니다. 하지만 이번에는 Pull Request때 마다 다같이 검토해보면서 리팩토링 시간을 가질 수 있어서 좋았습니다.
- CRUD를 직접 프로젝트에 녹여낼 수 있는 기회가 되서 재밌었습니다. 데이터를 주고 받을 때 디스트럭처링을 여러가지 겪어보면서 숙련도도 늘었고 CRUD를 서버와 어떤 데이터를 통신해야 하는지 어떻게 구조를 설계해야 좋은지에 대해 배우면서 클라이언트와 서버간 전체 프로세스에 대해 배울 수 있어서 좋았습니다.
- 프로젝트를 여러번 하다보니 GIT사용이 점점 익숙해지고 있다고 느꼈습니다. GIT과 점점 친해지면서 VSCode에 Extension으로 Git Lens나 Git Grpah, Git History같은 것을 설치하면서 좀 더 자유자재로 다룰 수 있게 되었습니다. 이제는 conflict가 두렵지 않습니다.
- 점점 깃 사용에 편한함을 느끼고 있다는 점이 체감됩니다. 이제 conflict가 나도 초조하지 않습니다!

**어려운 점**

- 동적으로 생성되야 하는 데이터들을 표시해주기 위해 여러번 마크업 구조와 스타일을 변경해야 했습니다. 예상하지 못한 부분에서 신경써야 할 부분이 생각보다 많다는 것을 알게 됐습니다.
- 구조를 개편하면서 짜놓은 코드를 몇 번 소멸되는 일이 있었습니다. 한번에 커밋하는 방식으로 GIT을 사용하다보니 이런일이 발생했습니다. 작은 단위로 잦은 PR을 보내야겠다는 것을 느끼게 되어 실무에서도 작은 단위로 자주 PR을 보낸다고 들었는데 미리 좋은 경험 한 것 같습니다. 
- 이번 프로젝트로 REST API와 많이 친해졌지만 댓글 삭제, 수정기능을 구현할 때 동일한 메소드를 사용하는 경우가 있었고 어떤 방식이 더 적합한가를 고민하게 됐습니다.
