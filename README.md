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

