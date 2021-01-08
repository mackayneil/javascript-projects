(function() {
  let categories = {
    0: "countries",
    1: "animals"
  };
  
  let answers = {
    "countries" : {
      0 : "South Africa",
      1 : "America",
      2 : "New Zealand",
      3 : "Australia",
      4 : "Spain"
    },
    "animals" : {
      0 : "Giraffe",
      1 : "Elephant",
      2 : "Gorilla",
      3 : "Chimpanzee",
      4 : "Snake"
    }, 
  };
  
  let hints = {
    "South Africa" : {
      0 : "Hosted the 2010 world cup",
      1 : "Is bordered with Namabia",
      2 : "Has one of the 7 wonders of the world",
      3 : "There are 11 official languages",
      4 : "The national anthem contains 5 languages"
    }, 
    "America" : {
      0 : "Has The 4th Longest River System In The World",
      1 : "There are 27 versions of this countries flag",
      2 : "There is no official language",
      3 : "In some places, there are more cows than people",
      4 : "The people who live here eat about 100 acres of pizza each day"
    }, 
    "New Zealand" : {
      0 : "In 1893 this became the first country to give women the right to vote",
      1 : "The first person to climb Mount Everest was from here",
      2 : "The first person in the world to split the atom was from here",
      3 : "This country has the worlds only flightless parrot",
      4 : "There are 9 sheep per person here"
    }, 
    "Australia" : {
      0 : "If you visit one new beach here every day, it would take over 27 years to see them all",
      1 : "This is the only continent in the world without an active volcano",
      2 : "There are 3 times more sheep than people",
      3 : "You will find more kangaroos than you will humans",
      4 : "Saudi Arabia imports camels from here"
    }, 
    "Spain" : {
      0 : "This is the EU's second largest country",
      1 : "Home of the world’s second most widely-spoken language",
      2 : "Has the fifth largest population in Europe",
      3 : "150,000 tomatoes are thrown every year",
      4 : "One of the world’s most popular tourist destinations"
    },
    "Giraffe" : {
      0 : "They only need to drink once every few days",
      1 : "They can run as fast as 35 miles an hour over short distances",
      2 : "They only need 5 to 30 minutes of sleep in a 24-hour period",
      3 : "They only eat plants",
      4 : "They eat up to 45kg of leaves and twigs a day!"
    },
    "Elephant" : {
      0 : "They've got thick skin",
      1 : "They need up to 150kg of food per day ",
      2 : "They communicate through vibrations",
      3 : "There are 3 different species",
      4 : "They are the largest mammals on Earth"
    },
    "Gorilla" : {
      0 : "There are an estimated 1,063 in the wild",
      1 : "We share about 98% of our DNA with them",
      2 : "They can eat all day long",
      3 : "They have 16 different types of call",
      4 : "They live in family groups"
    },
    "Chimpanzee" : {
      0 : "For a long time, scientists thought human beings were the only ones who made tools",
      1 : "In captive they can be taught human sign language",
      2 : "In the wild they rarely live longer than 50 years",
      3 : "They can walk on two legs if they want",
      4 : "Mothers and young are always together"
    },
    "Snake" : {
      0 : "They're carnivores",
      1 : "They don't have eyelids",
      2 : "They can’t bite food so have to swallow it whole",
      3 : "They have internal ears but not external ones",
      4 : "There are around 3000 different species"
    }
  };
  
  let category = document.querySelector("#category"),
      answer = document.querySelector("#answer"),
      letterBtns = document.querySelectorAll(".letter"),
      hangman = document.querySelectorAll(".hangman-parts"),
      hangmanArr = Array.from(hangman),
      livesText = document.querySelector("#lives"),
      playAgainBtn = document.querySelector("#play-again-btn"),
      hintText = document.querySelector("#hint"),
      hintBtn = document.querySelector("#hint-btn"),
      pushedBtn,
      livesCount = 9,
      answerLetters;
  
  let playGame = () => {
    //Random number generator
     let randomNum = (x) => {
      let num = Math.floor(Math.random() * x.length);
      return num;
    };
  
    //Random categories number
    let randomCategory = () => {
      let catNum = randomNum(Object.keys(categories));
      category.innerHTML = categories[catNum];
    };
    randomCategory();
  
  
     //Random answer number
    let randomAnswer = () => {
      Object.keys(answers).forEach(function(x) {
        if (x === category.innerHTML) {
          let ansNum = randomNum(Object.keys(answers[x])),
              ansArr = Array.from(answers[x][ansNum]);
    
          hintBtn.addEventListener("click", function() {
            Object.keys(hints).forEach(function(x) {
              let hintNum = randomNum(Object.values(hints[x]));
              hintText.innerHTML = `Hint: ${hints[answers[category.innerHTML][ansNum]][hintNum]}`;
            });
          });
        
          //Wraps each letter in p tag
          for (let i = 0; i < answers[x][ansNum].length; i++) {
            ansArr[i] = `<p>${ansArr[i]}</p>`;
          }
          answer.innerHTML = ansArr.join(" ");
        }
      });  
    };
  randomAnswer();
  
   //Array through answer letters
  answerLetters = Array.from(answer.children);
  
  // Adds the space back to the word if needed and hides letters
  let hideLetter = () => {
    answerLetters.forEach(function(i) {
      if (i.textContent === " ") {
        i.classList.add("space");
      }
      i.classList.add("transparent"); 
    });
  };
  hideLetter();
  
  };
  playGame();
  
  //Defines the pushed button
  let checkBtn = (e) => {
    answerLetters.forEach(function(i) {
    if (pushedBtn === i.innerHTML.toLowerCase()) {
      i.classList.remove("transparent"); 
      e.classList.add("correct");
      } 
    });
  };
    
  //Checks to see if letters match the pushed button
  letterBtns.forEach(function(e) {
    e.addEventListener("click", function() {
      pushedBtn = e.innerHTML;
      checkBtn(e);    
      e.disabled = true;
      e.classList.add("disabled");  
      livesText.innerHTML = `You win`;
      for (let i = 0; i < answerLetters.length; i++) {
        if (answerLetters[i].className === "transparent") {
          livesText.innerHTML = `You have ${livesCount + 1} lives`;
          break;
        }
      }
      if (livesText.innerHTML === `You win`) {
        letterBtns.forEach(function(e) {
          e.classList.add("disabled");   
          hintBtn.classList.add("disabled");
          hintBtn.disabled = true;    
        });
      }
      if (!e.classList.contains("correct")) {
        hangmanArr[livesCount].classList.add("reveal");
        livesCount--;
        livesText.innerHTML = `You have ${livesCount + 1} lives`;
      }
      if (livesCount < 0) {
        answer.style.color = "rgb(41, 40, 40)";
        letterBtns.forEach(function(e) {
          e.classList.add("disabled");
          livesText.innerHTML = `You lose, try again`;
          hintBtn.classList.add("disabled");
          hintBtn.disabled = true;  
        });
      }  
    });
  });
  
  //Play again button
   playAgainBtn.addEventListener("click", function() { 
    playGame();
    hangmanArr.forEach(function(e) {
    e.classList.remove("reveal");
    });
    letterBtns.forEach(function(e) {
      e.classList.remove("disabled");
      e.classList.remove("correct");
      e.disabled = false;
    });
    hintBtn.classList.remove("disabled");
    hintBtn.disabled = false;  
    livesText.innerHTML = `You have 10 lives`;
    hintText.innerHTML = "";
    livesCount = 9;
  });  
  
})();


