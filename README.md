# web2javascript
web2javascript 강의 마스터
#web3 ajax
fetch api :
fetch()는 첫번째 인자 데이터 서버에 요청한다.
then()는 서버가 적당한 데이터 꺼내서 응답해야 하는데 시간이 걸릴 수 있다. 
이런 상황에서 then을 사용하면 서버가 응답하기 전까지 다른 일을 할 수 있다. 
ex) fetch("html").then(000)
  console.log(1);
  console.log(2);
 결과는 1-)2-)000실행
응답이 끝나면 000실행하고 그전에 다른 것 먼저 실행
asynchronous(비동기)적으로 실행
동기적이라는 000실행-)1-)2
ajax의 첫번째 글자

#싱글 페이지 애플리케이션(single-page application, SPA, 스파)은 서버로부터 완전한 새로운 페이지를 불러오지 않고 현재의 페이지를 동적으로 다시 작성함으로써 사용자와 소통하는 웹 애플리케이션이나 웹사이트를 말한다. 
ajax로 만들 수 있다.
