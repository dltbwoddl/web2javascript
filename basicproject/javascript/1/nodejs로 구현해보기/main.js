//nodejs로 구현하기.

var http = require('http');//To use the HTTP server and client one must require('http').
var fs = require('fs');//The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.
var url = require('url');//The url module provides utilities for URL resolution and parsing.
var qs = require('querystring');
var template = require('./template.js')
// var template={
//   html: function(jsdata,cssdata){
//       return(
//       `
//       <html>
//   <head>
//     <title>LOLCAT CLOCK</title>
  
//     <link href="https://fonts.googleapis.com/css?family=Bungee|Bungee+Shade|Covered+By+Your+Grace" rel="stylesheet">
//     <link href="https://fonts.googleapis.com/css?family=Open+Sans:800" rel="stylesheet">
//     <style type="text/css">${cssdata}</style>
//   </head>
//   <body>
//     <div class="page">
//       <header>
//         <h1>LOLCAT CLOCK</h1>
//       </header>
  
//       <h4>
//         I CAN HAZ TIME?? <br>
//         <span id="clock">Clock goes here</span>
//       </h4>
  
//       <img id="lolcatImage" src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg" alt="lolcat">
  
//       <blockquote id="timeEvent">This is where time events are reported</blockquote>
//       <form action="http://localhost:3000/timedata" method = 'post' id="myForm">
//       <input id='iidd' type="submit" style="visibility: hidden";>
//       <div id="wakeUpTimeSelector">
//       </div>
//       <div id="lunchTimeSelector">
//       </div>
//       <div id="napTimeSelector">
//       </div>
//       <div id="walktimeselector">
//       </div>
//       <div id="usertimeselector">
//       </div>
//       </form>
//       <br>
//       <button id="partyTimeButton">Party!</button>
//       <footer>
//         <p>&copy; Skillcrush 2016</p>
//       </footer>
//     </div>
//     <script>
//     ${jsdata}
//     </script>
//   </body>
//   </html>"
//   `)
// }
// }
var app = http.createServer(function (request, response) {
  console.log(0)
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  fs.readFile('script_3.js', 'utf8', function (err, data_1) {
    fs.readFile('style_3.css', 'utf8', function (err, data_2) {
      var html = template.html(data_1, data_2);
      response.writeHead(200);
      response.end(html);
    });
  });
  //시간 받아서 페이지에 표시하기.
if (pathname=="/timedata"){
  console.log(1122);
    var body = '';
    request.on('data', function (data) {
        body = body + data;
    });
    
    request.on('end', function () {
        var post = qs.parse(body);
        console.log(post);
        fs.readFile('data/timedata', 'utf8', function (err, data) {
          var timedatas='';
          timedatas=timedatas+data+"/";
          timedatas=timedatas+post.time_0+',';
          timedatas=timedatas+post.time_1+',';
          timedatas=timedatas+post.time_2+',';
          timedatas=timedatas+post.time_3+',';
          timedatas=timedatas+post.time_4+',';
        fs.writeFile(`data/timedata`,timedatas, 'utf-8'
            , function (err) {
                console.log(100);
                response.writeHead(302, {location:'/'});
                console.log(1000);
                response.end();
            })
          })
    });

}
});
app.listen(3000);