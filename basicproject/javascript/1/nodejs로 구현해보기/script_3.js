let title = ['set wake up', 'set Lunch Time', 'set Nap Time', 'set walk Time', '<input type="text" id="usertext">'];
let weburl = ['setwakeup', 'setLunchTime', 'setNapTime', 'setwalkTime', 'setusertime'];
let idd = ["wakeUpTimeSelector", "lunchTimeSelector", "napTimeSelector", "walktimeselector", "usertimeselector"];
let iddd = ['wakeuptime', 'lunchtime', 'naptime', 'walktime', 'usertime'];
var myFunction=function () {
  document.getElementById("iidd").click()
}
for (i = 0; i < title.length; i++) {
  console.log(1);
  document.getElementById(idd[i]).innerHTML =
    `
    ${title[i]}
    <select id=${iddd[i]} name='time_${i}' form="myForm"
    onchange="myFunction(${i})"> 
    <option value="1">1 AM - 2AM</option>
      <option value = "2" > 2 AM - 3AM</option >
        <option value="3">3 AM - 4AM</option>
        <option value="4">4 AM - 5AM</option>
        <option value="5">5 AM - 6AM</option>
        <option value="6">6 AM - 7AM</option>
        <option value="7">7 AM - 8AM</option>
        <option value="8">8 AM - 9AM</option>
        <option value="9">9 AM - 10AM</option>
        <option value="10">10 AM - 11AM</option>
        <option value="11">11 AM - 12PM</option>
        <option value="12">12 PM - 1PM</option>
        <option value="13">1 PM - 2PM</option>
        <option value="14">2 PM - 3PM</option>
        <option value="15">3 PM - 4PM</option>
        <option value="16">4 PM - 5PM</option>
        <option value="17">5 PM - 6PM</option>
        <option value="18">6 PM - 7PM</option>
        <option value="19">7 PM - 8PM</option>
        <option value="20">8 PM - 9PM</option>
        <option value="21">9 PM - 10PM</option>
        <option value="22">10 PM - 11PM</option>
        <option value="23">11 PM - 12AM</option>
        <option value="24">12 AM - 1AM</option>
    </select >
    <br>`;}

//유저가 입력할 수 있는 공간 만들기.
var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var walktime = 21;
var partytime;
var evening = 18;
var usertime;
// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var lolcatImageJS = document.getElementById('lolcatImage');
  
  if (time == partytime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "Let's party!";
  }
  else if (time == usertime){
    image = "data:image/jpeg;base64,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";
    messageText =umessage;
  }
  else if ( time==walktime)
  {
    image = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/%ED%98%B8%EC%88%98%EC%82%B0%EC%B1%85%28AMJ%29.jpg/525px-%ED%98%B8%EC%88%98%EC%82%B0%EC%B1%85%28AMJ%29.jpg";
    messageText = "walking";
  }
  else if (time == wakeuptime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Wake up!";
  }
  else if (time == lunchtime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "Let's have some lunch!";
  }
  else if (time == naptime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Sleep tight!";
  }
  
  else if (time < noon)
  {
    image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    messageText = "Good evening!";
  }
  
  else
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  lolcatImage.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeuptime");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchtime");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("naptime");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);


var walktimeselector = document.getElementById("walktime");

var walkEvent = function()
{
    walktime = walktimeselector.value;
};
walktimeselector.addEventListener("change",walkEvent);

var usertimeselector = document.getElementById("usertime");

var userEvent = function()
{
    usertime = usertimeselector.value;
    umessage = document.getElementById("usertext").value;
};
usertimeselector.addEventListener("change",userEvent);


  
