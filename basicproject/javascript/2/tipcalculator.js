//흐름: billamt,serviceQual,peopleamt입력하고 calculate을 누르면
//calculateTip()이 실행된다.
//calculateTip()에서는 받은 값들을 id를 통해 불러오고 if문을 거쳐
//입력을 제대로 받았는지 체크하고 결과를 계산하여 
//innerhtml을 통해 결과를 보여주고 숨겨져 있던 div를 보여준다.
function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleamt").value;

  //bill amt와 servicequal은 무조건 들어와야 한다.
  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;//다시 입력하고 실행해야 하므로 return을 통해 function에서 빠져 나와야 한다.
  }
  //
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