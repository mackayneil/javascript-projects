(function() {
  let convertHex = document.querySelector("#convertHex"),
      convertRGB = document.querySelector("#convertRGB"),
      hexInput = document.querySelector("#hexInput"),
      rgbInput = document.querySelector("#rgbInput"),
      convertHexBtn = document.querySelector("#convertHexBtn"),
      convertRGBBtn = document.querySelector("#convertRGBBtn"),
      result = document.querySelector("#result"),
      bodyBG = document.querySelector("#body"),
      rgbResult = [],
      hexResult = [],
      R,
      G,
      B,
      restrictHexInput = new RegExp(/[/\d/a-fA-F(?<=v)meta(?<=c)meta]/),
      restrictRGBInput = new RegExp(/[\d/0-9(?<=v)meta(?<=c)meta]/),
      navBar = document.querySelector("#nav");

  rgbInput.children[0].value = null;
  rgbInput.children[1].value = null;
  rgbInput.children[2].value = null;


  // Hex to RGB menu item, display Hex input
  convertHex.addEventListener("click", function() {
    if (!this.classList.contains("opacity")) {
      togglePages();
   }
    rgbInput.children[0].value = null;
    rgbInput.children[1].value = null;
    rgbInput.children[2].value = null;
  });

  // RGB to RGB menu item, display RGB input
  convertRGB.addEventListener("click", function() {
    if (!this.classList.contains("opacity")) {
      togglePages();
   }
  });

  // Toggle classes for buttons etc between pages
  let togglePages = () => {
    rgbInput.classList.toggle("hide");
    hexInput.classList.toggle("hide");
    convertHexBtn.classList.toggle("hide");
    convertRGBBtn.classList.toggle("hide");
    convertHex.classList.toggle("opacity");
    convertRGB.classList.toggle("opacity");
    hexInput.value = null;
    result.innerHTML = "";
  };

  // Loads random colour on load
  window.addEventListener("load", function() {
    let randomNum = (x) => {
      let num = Math.floor(Math.random() * 255);
      return num;
    }; 
    rgbInput.children[0].value = randomNum();
    rgbInput.children[1].value = randomNum();
    rgbInput.children[2].value = randomNum();
    calculateRGBToHex();
    hexInput.value = hexResult.join("");
    changeBGColor();
    hexResult = [];  
  });


  // Loops through Hex input, runs below function for each input
  let convertHextoRGB = () => {
    let hexInputArr = Array.from(hexInput.value.toUpperCase());
    ifThreeChar(hexInputArr);
    threeOrSixChar(hexInputArr);
    changeBGColor();
    rgbResult = [];    
    darkLightBG(R, G, B);
  };

  // Assign Hex number to RGB number and calculates 
  let checkHexInput = (i) => {
    switch(i) {
      case "0":
        rgbResult.push(0);
        break;
      case "1":
        rgbResult.push(1);
        break;
      case "2":
        rgbResult.push(2);
        break;
      case "3":
        rgbResult.push(3);
        break;
      case "4":
        rgbResult.push(4);
        break;
      case "5":
        rgbResult.push(5);
        break;
      case "6":
        rgbResult.push(6);
        break;
      case "7":
        rgbResult.push(7);
        break;
      case "8":
        rgbResult.push(8);
        break;
      case "9":
        rgbResult.push(9);
        break;
      case "A":
        rgbResult.push(10);
        break;
      case "B":
        rgbResult.push(11);
        break;
      case "C":
        rgbResult.push(12);
        break;
      case "D":
        rgbResult.push(13);
        break;
      case "E":
        rgbResult.push(14);
        break;
      case "F":
        rgbResult.push(15);
        break;
    }
    R = rgbResult[0] * 16 + rgbResult[1];
    G = rgbResult[2] * 16 + rgbResult[3];
    B = rgbResult[4] * 16 + rgbResult[5];
    result.innerHTML = `RGB(${R}, ${G}, ${B})`;
  };

  // Loops through RGB input, runs below function for each input
  let convertRGBtoHex = () => {
    calculateRGBToHex()
    result.innerHTML = `#${hexResult.join("")}`;
  };

  // Calculates RGB number into Hex number
  let calculateRGBToHex = () => {
    let R = rgbInput.children[0].value,
    G = rgbInput.children[1].value,
    B = rgbInput.children[2].value;
    darkLightBG(R, G, B);
    R /= 16;
    G /= 16;
    B /= 16;
    hexResult[0] = parseInt(R);
    hexResult[1] = (parseFloat(R) - hexResult[0]) * 16;
    hexResult[2] = parseInt(G);
    hexResult[3] = (parseFloat(G) - hexResult[2]) * 16;
    hexResult[4] = parseInt(B);
    hexResult[5] = (parseFloat(B) - hexResult[4]) * 16;
    hexResult.forEach(function(i) {
      checkRGBInput(i);
    });
    hexResult.splice(0,6);
  };

  // Assigns RGB number to Hex number
  let checkRGBInput = (i) => {
    switch(i) {
      case 0:
        hexResult.push(0);
        break;
      case 1:
        hexResult.push(1);
        break;
      case 2:
        hexResult.push(2);
        break;
      case 3:
        hexResult.push(3);
        break;
      case 4:
        hexResult.push(4);
        break;
      case 5:
        hexResult.push(5);
        break;
      case 6:
        hexResult.push(6);
        break;
      case 7:
        hexResult.push(7);
        break;
      case 8:
        hexResult.push(8);
        break;
      case 9:
        hexResult.push(9);
        break;
      case 10:
        hexResult.push("A");
        break;
      case 11:
        hexResult.push("B");
        break;
      case 12:
        hexResult.push("C");
        break;
      case 13:
        hexResult.push("D");
        break;
      case 14:
        hexResult.push("E");
        break;
      case 15:
        hexResult.push("F");
        break;
    }
  };

  // Changes background colour to match Hex code
  let changeBGColor = () => {
    document.body.style.backgroundColor = `#${hexInput.value}`;
  };

  // Restricts RGB input to only numbers
  rgbInput.addEventListener("keydown", function(e) {
    if (!restrictRGBInput.test(e.key)) {
      e.preventDefault();
    }
  });

  // Restricts Hex input to only Hex characters
  hexInput.addEventListener("keydown", function(e) {
    if (!restrictHexInput.test(e.key)) {
      e.preventDefault();
    }
  });

  // Function for if there are only 3 characters
  let ifThreeChar = (arr) => {
    if ((arr[0] === arr[1] && arr[0] === arr[2]) && arr.length === 3) 
      { arr[3] = arr[1];
      arr[4] = arr[1];
      arr[5] = arr[1];
      } else if ((arr[0] !== arr[1] || arr[0] !== arr[2]) && arr.length === 3)
      { arr[5] = arr[2];
        arr[4] = arr[2];
        arr[3] = arr[1];
        arr[2] = arr[1];
        arr[1] = arr[0];
      } 
    hexInput.value = arr.join(""); 
  };

  // Changes text color depending on background lightness / darkness
  let darkLightBG = (r, g, b) => {
    if (r > 143 && g > 143 & b > 143 ) {
      document.documentElement.style.setProperty('--white', '#000000');
      document.documentElement.style.setProperty('--black', '#ffffff');
      document.documentElement.style.setProperty('--opacityBG', '#00000080');
    } else {
      document.documentElement.style.setProperty('--white', '#ffffff');
      document.documentElement.style.setProperty('--black', '#000000');
      document.documentElement.style.setProperty('--opacityBG', '#ffffffB3');
    }
  };

  // Prevents entering anything other than 3 or 6 characters
  let threeOrSixChar = (arr) => {
    if (arr.length === 3 || arr.length === 6) {
      arr.forEach(function(i) {
        checkHexInput(i);
      });
    }
    else {
      result.innerHTML = `Please enter 3 or 6 characters`;
    }
  };

  // Convert Hex to RGB button
  convertHexBtn.addEventListener("click", convertHextoRGB);

  // Convert RGB to Hex button
  convertRGBBtn.addEventListener("click", convertRGBtoHex);

  // Convert button using Enter key
  window.addEventListener("keydown", function(e) {
    if (e.key === "Enter" && convertHex.classList.contains("opacity")) {
      convertHextoRGB();
    } else if(e.key === "Enter" && convertRGB.classList.contains("opacity")) {
      convertRGBtoHex();
    }
  });

})();



