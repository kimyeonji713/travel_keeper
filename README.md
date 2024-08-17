## 프로젝트 소개

- url

- 소개

> 부산 거주자, 관광 및 여행 온 사람들이 문화체육관광부가 지정한 맛집 리스트의 정보로 메뉴를 고민 될 때, 고를 때 도움이 될 수 있는 앱입니다.

### 타이틀 작성 (앱 이름)

- 부산 YUM

> 부산의 맛집 + 맛있는 것을 생각하거나 먹을 때 내는 소리 yum을 합쳐 만든 이름입니다.

### 목적성

> 문화체육관광부가 선정한 부산 방방곡곡에 유명한 맛집부터 숨겨져 잇는 로컬 맛집까지 소개를 하며 정보 제공하는 어플입니다.

> 부산의 16개의 구/군 별로 카테고리가 나누어져있어 가고자하는 구/군에 음식점을 쉽게 찾아볼 수 있습니다.

> 추천 메뉴 20개를 메인 베너에 보여짐으로써 생각하지 못했던 메뉴를 볼 수 있습니다.

### 기술 (Stack)

js, react, node js, git, github, css

### 개발 기간

2024년 8월 10일~ 8월 16일 (총 6일)

### 구현 기능

- 슬라이드를 이용한 메인베너로 메뉴 추천
- 스와이퍼를 이용해 16개의 구/군 나누어 구분
- 클릭시 좋아요
- 무한 스크롤를 이용해 스크롤 시 메뉴 보여주기
- 로그인/ 회원가입/ 찜목록 페이지 구현
- 상호명, 대표메뉴, 설명, 영업시간, 전화번호를 디테일 페이지에 구현.

### 지원디바이스

- PC/모바일/브라우저 사용 가능 기기
- 웹/앱 지원

### 방식

- 개발

### 프로젝트 기획

- 포인트 색상

> #5BBCFF #FDE767

- 폰트

> 메인: Noto Sans KR
> 서브: "Jua", sans-serif

- 레퍼런스 UI

> <img src="https://img.freepik.com/premium-vector/travel-app-ui-design-mobile_369252-16.jpg?w=1060" alt="travelapp" >

> https://brunch.co.kr/@button/8

### 프로젝트하면서 느낀점 및 개선방안

- api 확인을 잘하자!

> 이번 '부산YUM' 프로젝트를 만들면서 뼈저리게 느낀 점이 아닐까 싶습니다.
> 원래는 지금 프로젝트 전에 해외 안전공지를 불러옴으로써 국내 뿐만 아니라 해외 여행 계획 시에도 도움을 줄 수 있는 앱을 만들고자 했는데 사전 조사에서 api에 대한 확인이 부족해 여러차례 수정을 걸쳐 지금 프로젝트를 만들게 되었습니다.

- 레퍼런스 참고를 많이 하자

> 제 스스로가 디자인적인 면에서 많이 부족하다고 느낍니다.
> 하지만 작업을 하다보면 초반에는 레퍼런스 참고를 많이 하지만 후반기에는 레퍼런스와 다른 모습을 갖추어 가는 것 같습니다.

> 그래서 다음 프로젝트에는 ui 리서치 및 사전 조사를 꼼꼼히 하고 많이 참고 하며 단순하게 보이는 것 보다는 사용자에게 궁금증과 호기심을 유발하여 좀 더 머물고 싶고 이용하고 싶은 앱을 만들고자 합니다.

> 그래도 이번 프로젝트를 하면서 api를 불러오는데 좀 더 능숙해졌고 부족한 정보는 직접 배열을 만들어 쓰며 많이 성장할 수 있는 계기가 되었던 것 같습니다.

### 프로젝트 진행 중 새로 알게 된 내용

- 무한스크롤

> api 옵션에 pageNo에 변수를 두고 무한스크롤을 이용해 스크롤 시 api에서 불러올 수 있는 정보를 최대로 불러올 수 있는 점이 너무 편하고 좋았습니다. 사용자에게도 더 많은 정보를 제공할 수 있고 사용자 입장에서 많은 정보로 흥미를 유발 할 수 있다고 생각했습니다.

- useLocation

> 새로 알게 된 기능은 아니지만 이번 프로젝트를 통해서 완벽히 이해한 기능입니다. 직접 배열을 만든 경우도 있었는데, 구/군 페이지 클릭시 구/군 이름과 페이지 이름이 같게 나오길 원했는데 찾은 api가 정보가 적은 편이다 보니 useLocation을 통해 직접 만든 배열에서 타이틀을 넘겨주면서 가능하게 만들었습니다.

### 프로젝트 진행 중 반성 및 칭찬 사항

- 칭찬

> api를 불러오는데에 대한 자신감이 없어서 프로젝트를 시작하기가 무서웠습니다. 하지만 비록 제 불찰이긴 하지만 api에 대한 조사를 제대로 안하면서 여러 api를 불러오고 찾아보면서 자연스레 극복하게 되었고 덕분에 프로젝트를 기획하고 진행하는데에 있어 자신감이 붙은 것 같습니다.

- 반성

> 기획하는 과정에서 꼼꼼하게 찾아보지 못한 것이 아쉽습니다. 초반 기획과 전혀 다른 프로젝트가 나왔고 정해진 기한을 유용하지 못한 것이 가장 반성할 점이라 생각합니다. 그래도 이런 과정이 있었기에 자신 없었던 부분을 극복하고 전에 쓰지 않았던 기능을 쓰면서 한층 성장할 수 있었던 계기가 된 것 같습니다.
