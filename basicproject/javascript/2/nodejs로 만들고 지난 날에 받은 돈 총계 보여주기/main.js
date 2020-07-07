var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var path =require('path')
template=function(cssfile, jsfile){
    return(
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
      <div id="totalTip">
        <sup>$</sup><span id="tip">0.00</span>
        <small id="each">each</small>
      </div>
      <!--totalTip end-->
    
    </div>
    <!--container end-->
    <script>${jsfile}</script>
</body>
</html>
`)
}
fs.readFile('./jscss/style.css', (err, data_1) => {
    fs.readFile('./jscss/tipcalculator.js', (err, data_2) => {
        var app = http.createServer(function (request, response) {
            template_1 = template(data_1, data_2);
            response.writeHead(200);
            response.end(template_1);
        }
        )
app.listen(3000);
    });
});
