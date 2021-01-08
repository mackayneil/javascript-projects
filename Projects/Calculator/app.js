(function(){
  let display = document.getElementById("display"),
  answer = document.getElementById("answer"),
  displayNum = display.innerHTML,
  answerNum = null,
  num2 = null,
  num1 = null,
  num = document.querySelectorAll(".num"),
  clear = document.getElementById("clear"),     
  divide = document.getElementById("divide"),
  multiply = document.getElementById("multiply"),
  subtract = document.getElementById("subtract"),
  add = document.getElementById("add"),
  equals = document.getElementById("equals"),
  period = document.getElementById("period"),
  colorBtn = document.querySelectorAll("#color"),
  sideRow = document.querySelectorAll(".side-row"),
  sideBar = document.getElementById("color-buttons"),
  operator;

//Changes calculator color 
colorBtn.forEach((i) => {
let allColors = i.classList.value;
i.addEventListener("click", () => {
  sideRow.forEach((e) => {
    let arrClass = Array.from(e.classList);
    arrClass.pop();
    e.classList = arrClass.join(" ");
    e.classList.add(allColors);  
    answer.style.color = `var(--${e.classList[2]})` 
  }); 
}); 
});

//Show/hide color button side bar
sideBar.addEventListener("click", () => {
sideBar.classList.toggle("move");
});

//Changes display from 0 to number selected.
num.forEach((i) => {
i.addEventListener("click", () => {
  if (displayNum == 0) {
    display.innerHTML = "";   
  } 
  if (display.innerHTML.includes(".")) {
      period.disabled= true;
  }
  display.innerHTML += i.innerHTML;
  displayNum = parseFloat(display.innerHTML); 
  answer.classList.add("hide");
  display.classList.remove("hide");
}); 
});

//Addition function
let addition = function() {
calculate(null, subtract, multiply, divide);
if (num1 === null) {
    num1 = displayNum;       
  } else if (num1 !== null && answerNum !== null) {
    num2 = displayNum;    
    answerNum += num2;
  } else if (num1 !== null) { 
    num2 = displayNum;      
    answerNum = num1 + num2;  
  }
displayAnswer(add);
};


//Subtraction function
let subtraction = function() {
calculate(add, null, multiply, divide);
  if (num1 === null) {
    num1 = displayNum;
  } else if (num1 !== null && answerNum !== null) {
    num2 = displayNum;  
    answerNum -= displayNum;
  } else if (num1 !== null) {
    num2 = displayNum;      
    answerNum = num1 - num2;  
  }
displayAnswer(subtract);
};

//Multiplication function
let multiplication = function() {
calculate(add, subtract, null, divide);
if (num1 === null) {
    num1 = displayNum;
} else if (num1 !== null && answerNum !== null && displayNum !== 0) {
    num2 = displayNum;  
    answerNum *= num2;
} else if (num1 !== null && displayNum !== 0) {   
    num2 = displayNum;   
    answerNum = num1 * num2;  
} 
displayAnswer(multiply);
};

//Division function
let division = function() {
calculate(add, subtract, multiply, null);
if (num1 === null) {
    num1 = displayNum;
  } else if (num1 !== null && answerNum !== null && displayNum !== 0) {
    num2 = displayNum;  
    answerNum /= displayNum;
  } else if (num1 !== null && displayNum !== 0) {
    num2 = displayNum;  
    answerNum = num1 / num2;  
  }
displayAnswer(divide);
};

//Display answer
let displayAnswer = (oper) => {
if (answerNum !== null) {
  answer.innerHTML = answerNum;
  answer.classList.remove("hide");
  display.classList.add("hide");
}
operator = oper;
displayNum = 0;
};

//Addition button
add.addEventListener("click", addition);
subtract.addEventListener("click", subtraction);
multiply.addEventListener("click", multiplication);
divide.addEventListener("click", division);

//Clears the display
clear.addEventListener("click", function(){
displayNum = 0;
answerNum = null;
num1 = null;
answer.innerHTML = answerNum;
display.innerHTML = displayNum;
if (!answer.classList.contains("hide")) {
  answer.classList.add("hide");
  display.classList.remove("hide");
}  
});

//Equals button
equals.addEventListener("click", function(){
calculate(add, subtract, multiply, divide);
num1 = null;
num2 = null;
}); 


//Equals function - ensures that the last equation is solved as soon as the next operator button is clicked
let calculate = (add, subtract, multiply, divide) => {
switch (operator) {
  case add:
    addition();
    break;
  case subtract:
    subtraction();
    break;
  case multiply:
    multiplication();
    break;
  case divide:
    division();
    break;
  default:
    return answerNum;
}
};




})();
