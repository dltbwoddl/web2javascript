module.exports={
    html: function(jsdata,cssdata){
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
        <form action="http://localhost:3000/timedata" method = 'post' id="myForm">
        <input id='iidd' type="submit" style="visibility: hidden";>
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
        </form>
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
  }
  }
  console.log(10000);