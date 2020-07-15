//.tip까지 이동하는 것까지는 성공, 구동 순서 원리 확실히 이해하고 데이터 띄우는 페이지 만들고 띄우기.
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var path = require('path')
template1 = function (cssfile, jsfile) {
    return (
        `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${cssfile}</style>
  <title>Document</title>
</head>
<body>
  <div id="container">
      <h1>Tip Calculator</h1>
      <div id="calculator">
    
    
        <form>
          <p>How much was your bill?
            <p>
              $ <input id="billamt" type="text" placeholder="Bill Amount">
    
              <p>How was your service?
                <p>
                  <select id="serviceQual">
                    <!--disabled selected value="0" 안누르면 0이 선택됨. defalut값-->
                <option disabled selected value="0">-- Choose an Option --</option>
                <option value="0.3">30&#37; &#45; Outstanding</option>
                <option value="0.2">20&#37; &#45; Good</option>
                <option value="0.15">15&#37; &#45; It was OK</option>
                <option value="0.1">10&#37; &#45; Bad</option>
                <option value="0.05">5&#37; &#45; Terrible</option>
            </select>
    
        </form>
        <p>How many people are sharing the bill?</p>
        <input id="peopleamt" type="text" placeholder="Number of People"> people
        <button type="button" id="calculate">Calculate!</button>
      
      </div>
      <!--calculator end-->      
      <form method="post" id="dtip" action="http://localhost:3000/data">
      <div id="totalTip">
        <sup>$</sup><input id="tip" type='text' name='tip' value=0 readonly>
        <small id="each">each</small>
      </div>
      <!--totalTip end-->
    </div>
    </form>
    <!--container end-->
    <script>${jsfile}</script>
</body>
</html>
`)

}
template2 = function () {
    fs.readFile("./data/tip", (err, tipdata) => {
        console.log(tipdata);
        return (
            `
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>${tipdata}</p>
</body>
</html>`
        )
    })
}
console.log(3);
var app = http.createServer(function (request, response) {
    var _url = request.url;
    var pathname = url.parse(_url, true).pathname;
    console.log("abs")
    console.log(pathname);
    if (pathname === "/") {
        fs.readFile('./jscss/style.css', (err, data_1) => {
            fs.readFile('./jscss/tipcalculator.js', (err, data_2) => {
                template_1 = template1(data_1, data_2);
                console.log(pathname);
                console.log(2);
                response.writeHead(200);
                response.end(template_1);
                console.log(1);
            })
        })
    }
    else if (pathname === '/data') {
        console.log(100);
        //post방식의 데이터 받기.
        var body = '';
        request.on('data', function (data) {
            console.log(101);
            body = body + data;
            console.log(body);
        });
        request.on('end', function () {
            var post = qs.parse(body);
            var title = post.tip;
            var date = new Date();
            fs.appendFile(`data/tip`, `\n${date}:${title}`, 'utf-8'
                , function (err) {
                    console.log(102);
                    response.writeHead(302, { location: "./tips" });
                    console.log(103);
                    response.end();
                    console.log(104);
                });
        });

    }
    else if (pathname === "/tips") {
        console.log(pathname);
        console.log(10);
        response.writeHead(200);
        template_2 = template2();
        response.end(template_2);
    }
    console.log(1000);
});
app.listen(3000);