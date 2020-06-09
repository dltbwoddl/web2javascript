var links={
    setcolor :function(color){
    //   var links = document.querySelectorAll('a');
    //   var i = 0
    //   while (i < links.length) {
    //     links[i].style.color = color;
    //     i += 1;}
    $('a').css( "color", color );
    }
  }
  var Body = {
    setcolor: function (color) {
        $('body').css( "color", color );
    },
    setbackgroundcolor: function (color) {
      document.querySelector('body').style.backgroundColor = color;
      $('body').css( "backgroundColor", color );
    },
    
  }
  function nightfunction(self) {
    var changetage = document.querySelector('body')
    if (self.value === 'night') {
      Body.setbackgroundcolor('black');
      Body.setcolor('white');
      self.value = 'day';
      links.setcolor('white');
      }

     else {
      Body.setbackgroundcolor('white');
      Body.setcolor('black');
      self.value = 'night';
      links.setcolor('black');

      }
    }
    //<!--가장 큰 정리 정돈 도구
   // 1.함수로 정리 정돈
   // 2.객체로 정리 정돈
    //3.파일로 정리 정돈
    //위의 버튼 1억개의 파일에 배포해야 하고 요소 바꿔야 한다면>??
    //사람이 하는 것이 불가능 때문에 파일로 쪼개는 것
    //.js로 태그 제외하고 저장하기
    //가독성이 좋아진다./서버입장에서는 접속을 두번 해야 하므로 좋지 않으나 좋음
    //왜냐하면 캐시(저장)때문이다. js는 저장되어 다음에 접속할 때 서버에서 받아오지 않아도됨. 
