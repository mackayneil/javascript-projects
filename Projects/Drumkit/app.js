//On button click and on key click, create sounds
//Show and hide reference
//When E,I,K is clicked, animate the cymbol

(function() {
  let crashImg = document.getElementById("crash-img"),
      splashImg = document.getElementById("splash-img"),
      hiHatImg = document.getElementById("hiHat-img"),
      crashAudio = new Audio("audio/crash.wav"),
      rideAudio = new Audio("audio/ride.wav"),
      floorTomAudio = new Audio("audio/tom-low.wav"),
      midTomAudio = new Audio("audio/tom-mid.wav"),
      highTomAudio = new Audio("audio/tom-high.wav"),
      kickAudio = new Audio("audio/kick.wav"),
      kickTwoAudio = new Audio("audio/kick(1).wav"),
      snareAudio = new Audio("audio/snare.wav"),
      splashAudio = new Audio("audio/hihat-open.wav"),
      hiHatAudio = new Audio("audio/hihat-close.wav"),
      refBtn = document.querySelector(".key-ref-text"),
      ref = document.querySelector(".slider-container");
  
  //Play sounds function
  let myPlay = (sound) => {
    sound.play();
    sound.currentTime = 0;
  };
  
  //Add class function
  let moveFunc = (vars, cls) => {
    setTimeout(function(){
      vars.classList.toggle(cls);
    },100);
    vars.classList.toggle(cls);
  };
  
    //Keyboard buttons to play sound
  document.addEventListener("keydown", function(event) {
    switch (event.key) {
      case "e":
        myPlay(crashAudio);
        moveFunc(crashImg, "rotate");    
        break;
      case "r":
        myPlay(rideAudio);
        break;
      case "f":
        myPlay(floorTomAudio);
        break;
      case "g":
        myPlay(midTomAudio);
        break;
      case "h":
        myPlay(highTomAudio);
        break;
      case "v":
        myPlay(kickAudio);
        break;
      case "b":
        myPlay(kickTwoAudio);
        break;
      case "j":
        myPlay(snareAudio);
        break;
      case "i":
        myPlay(splashAudio);
        moveFunc(splashImg, "rotate");
        break;
      case "k":
        myPlay(hiHatAudio);
        moveFunc(hiHatImg, "upDown");      
        break;
    }
  });
  
  //Click buttons to play sound
  document.addEventListener("click", function(e) {
    let id = e.target.id;
    switch (id) {
      case "E":
        myPlay(crashAudio);
        moveFunc(crashImg, "rotate");    
      break;
      case "R":
        myPlay(rideAudio);
      break;
      case "F":
        myPlay(floorTomAudio);
      break;
      case "G":
        myPlay(midTomAudio);
      break;
      case "H":
        myPlay(highTomAudio);
      break;
      case "V":
        myPlay(kickAudio);
      break;
      case "B":
        myPlay(kickTwoAudio);
      break;
      case "J":
        myPlay(snareAudio);
      break;
      case "I":
        myPlay(splashAudio);
        moveFunc(splashImg, "rotate");
      break;
      case "K":
        myPlay(hiHatAudio);
        moveFunc(hiHatImg, "upDown");      
      break;
    }
  });
  
  //Show reference slider
  refBtn.addEventListener("click", function() {
    ref.classList.toggle("show");
  });
  
  })();
  