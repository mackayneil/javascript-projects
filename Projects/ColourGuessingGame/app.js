// Display 6 random colours for squares on page load and on New colors btn click.
// RGB text at top must match one block at random.
// If correct block is clicked, all blocks and top background must change to that color, text must display saying correct,  else must say incorrect try again.
// Easy btn must show 3 blocks (hide last 3)
// Hard btn must dispaly all 6 blocks

(function() {
  let rgbText = document.querySelector("#rgbText"),
  square = document.querySelectorAll(".square"),
  squareArr = Array.from(square),
  newColors = document.querySelector("#new-colors"),
  easyBtn = document.querySelector("#easy"),
  hardBtn = document.querySelector("#hard"),
  header = document.querySelector("#header"),
  text = document.querySelector("#text"),
  numSquares = 6;
  
  // Easy button function, adds hide to 3 squares
  easyBtn.addEventListener("click", function() {
  numSquares = 3;
  randomColors();
  for (let i = 3; i < 6; i++) {
    squareArr[i].classList.add("hide");
  }
    easyBtn.classList.add("active");
    hardBtn.classList.remove("active");
  });

  // Hard button function, removes hide from all squares
  hardBtn.addEventListener("click", function() {
    squareArr.forEach(function(i) {
      i.classList.remove("hide");
    });
    numSquares = 6;
    randomColors();
    easyBtn.classList.remove("active");
    hardBtn.classList.add("active");
  });

  // Random rgb number function
  let randomNumber = () => {
    return Math.floor(Math.random() * 255);
  };

  // Random colours function
  let randomColors = () => { 
    square.forEach(function(x) {
      x.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    });

    let squareNo = Math.floor(Math.random() * numSquares) ;

    let squareColor = squareArr[squareNo].style.backgroundColor;
    rgbText.innerHTML = squareColor.toUpperCase();

    header.style.backgroundColor = null;
    text.innerHTML = `guessing game`;
  };

  // New colours function
  newColors.addEventListener("click", randomColors);

  // Load new random colours on page load
  window.addEventListener("load", randomColors);


  // Check to see if coluor matchess
  squareArr.forEach(function(e) {
  e.addEventListener("click", function() {
    if (this.style.backgroundColor === rgbText.innerHTML.toLowerCase()) {
      header.style.backgroundColor = e.style.backgroundColor;
      squareArr.forEach(function(i) {      
        i.style.backgroundColor = e.style.backgroundColor;
        i.classList.remove("fade");
      });
      text.innerHTML = `is correct!`;
    } else {
        this.classList.add("fade");
        text.innerHTML = `is wrong, try again`;
      }
    });
  });
})();






