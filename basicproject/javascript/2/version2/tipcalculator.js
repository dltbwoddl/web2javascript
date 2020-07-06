// a='100'
// "100"
// b=200
// 200
// a+b
// "100200"
// c='123'
// "123"
// a+c
// "100123"
// a*c
// 12300
// a*b
// 20000
//js는 string인 숫자들도 연산이 가능하다. 자동으로 형변환을 한다.

//1. 문자로 자동 변환되는 경우
// 덧셈(+) 연산자를 사용하는 경우
// 2. 숫자로 자동 변환 되는 경우
// 빼기(-), 나누기(/), 곱하기(*) 연산자를 사용하는 경우
// 3. Boolean 으로 변환되는 경우
// 논리부정연산자(!)를 사용하는 경우
// 조건문(if/switch/for/while)을 사용하는 경우
function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleamt").value;

  //bill amt와 servicequal은 무조건 들어와야 한다.
  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;//다시 입력하고 실행해야 하므로 return을 통해 function에서 빠져 나와야 한다.
  }
 //숫자가 아닌 문자로 입력했을 때 alert낼 수 있도록 한다., NUMBER()에서 안에 문자가 있다면 오류가 나는 것이 아니라 NAN이 반환된다.
 //전역 NaN 속성은 Not-A-Number(숫자가 아님)
if (isNaN(Number(billAmt)) ||isNaN(Number(serviceQual))){
  alert("insert number please");
  return;
}
//혼자 OR 다수
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate tip
  var total = (billAmt * serviceQual) / numOfPeople;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();
};

//JavaScript는 
//엄격한 비교와 형변환 비교 두 가지의 비교 방법을 모두 가지고 있습니다.
// 엄격(일치) 비교(===)는 두 피연산자가 같은 자료형에, 그 내용도 일치해야만 참입니다.
// 추상(동등) 비교(==)는 비교 전에 두 피연산자를 동일한 자료형으로 변환합니다. 