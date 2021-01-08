/*  Create a stop watch
    Need a start button,
    a stop button 
    and a reset button.
    Display the timer with seconds and milliseconds
    Seconds and milliseconds need to be added onto 00:00, instead of displaying current secs and millisecs */

    (function(){  
  
      let start = document.getElementById("start"),
      stop = document.getElementById("stop"),
      reset = document.getElementById("reset"), 
      seconds = document.getElementById("seconds"),
      milliSeconds = document.getElementById("milli-seconds"),
      count = 0,
      secCount = 0,
      interval;
    
      function startTimer() {
        count++;
        //increases milliseconds
        if (count < 10) {
          milliSeconds.innerHTML = `0${count}`;
        } else {
          milliSeconds.innerHTML = `${count}`;
        }
        //increases seconds
        if (count === 99 ) {
          secCount++;
          count = 0;   
        }
        //adds 0 before seconds when less than 10
        if (secCount < 10) {
          seconds.innerHTML = `0${secCount}`;
        } else {
          seconds.innerHTML = `${secCount}`;
        }
      }
    
      //start button
      start.addEventListener("click", function(){
        clearInterval(interval);
        interval = setInterval(startTimer, 10);  
        this.classList.add("hide");
        stop.classList.remove("hide");
      });
    
      //stop button 
      stop.addEventListener("click", function(){
        clearInterval(interval);
        this.classList.add("hide");
        start.classList.remove("hide");
      });
    
      //reset button
      reset.addEventListener("click", function(){
        clearInterval(interval);
        seconds.innerHTML = "00"; 
        milliSeconds.innerHTML = "00"; 
        count = 0;
        secCount = 0;
        stop.classList.add("hide");
        start.classList.remove("hide");
    });
    })();
    