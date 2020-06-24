//nodejs로 구현하기.

var http = require('http');//To use the HTTP server and client one must require('http').
var fs = require('fs');//The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.
var url = require('url');//The url module provides utilities for URL resolution and parsing.
var qs = require('querystring');


function templatehtml(jsdata,cssdata){
    return(
    `
    <html>
<head>
  <title>LOLCAT CLOCK</title>

  <link href="https://fonts.googleapis.com/css?family=Bungee|Bungee+Shade|Covered+By+Your+Grace" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:800" rel="stylesheet">
  <style type="text/css">${cssdata}</style>
</head>
<body>
  <div class="page">
    <header>
      <h1>LOLCAT CLOCK</h1>
    </header>

    <h4>
      I CAN HAZ TIME?? <br>
      <span id="clock">Clock goes here</span>
    </h4>

    <img id="lolcatImage" src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg" alt="lolcat">

    <blockquote id="timeEvent">This is where time events are reported</blockquote>
    <div id="wakeUpTimeSelector">
    </div>
    <div id="lunchTimeSelector">
    </div>
    <div id="napTimeSelector">
    </div>
    <div id="walktimeselector">
    </div>
    <div id="usertimeselector">
    </div>
    <br>
    <button id="partyTimeButton">Party!</button>
    <footer>
      <p>&copy; Skillcrush 2016</p>
    </footer>
  </div>
  <script>
  ${jsdata}
  </script>
</body>
</html>"
`)
};

var app = http.createServer(function (request, response) {
    fs.readFile('script_3.js','utf8', function (err, data_1) {
      fs.readFile('style_3.css','utf8', function (err, data_2) {
        console.log(data_2);
      var template = templatehtml(data_1,data_2);
      response.writeHead(200);
      response.end(template);
      });
      });
    });
app.listen(3000);