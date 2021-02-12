// Rank is how much I enjoyed making the project. 1 is meh, 5 is great.
const jsProjects = [
  {
    name: "Calculator app",
    image: "Projects/Calculator/Calculator.png",
    app: "Projects/Calculator/index.html", 
    code: "Projects/Calculator/app.js", 
    month: 09,
    year: 2020,
    rank: 4,
    descr: "I used Electron to create an app inspired by the Mac calculator. I imporoved the design by allowing users to customise colours.",
  },
  {
    name: "Colour guessing game",
    image: "Projects/ColourGuessingGame/ColourGuessingGame.png",
    app: "Projects/ColourGuessingGame/index.html",
    code: "Projects/ColourGuessingGame/app.js",
    month: 10,
    year: 2020,
    rank: 2,
    descr: "I used math.random to generate the random RGB colours as well as the answer. An if/else statement was used to let the user know if they have selected the correct answer or the wrong one.",
  },
  {
    name: "Drumkit",
    image: "Projects/Drumkit/Drumkit.png",
    app: "Projects/Drumkit/index.html",
    code: "Projects/Drumkit/app.js",
    month: 10,
    year: 2020,
    rank: 4,
    descr: "Using event listener for keydown and click I used a switch statement to ensure the correct audio file was played for each letter selected on the drumkit.",
  },
  {
    name: "Hangman game",
    image: "Projects/HangmanGame/HangmanGame.png",
    app: "Projects/HangmanGame/index.html",
    code: "Projects/HangmanGame/app.js",
    month: 10,
    year: 2020,
    rank: 5,
    descr: "This project was very rewarding to complete. I used objects to place the categories, answers and hints. Math.random was used to display a random category. The same logic was used to for the hints",
  },
  {
    name: "Hex to RGB converter",
    image: "Projects/HexToRGB/HexToRGB.png",
    app: "Projects/HexToRGB/index.html",
    code: "Projects/HexToRGB/app.js",
    month: 10,
    year: 2020,
    rank: 4,
    descr: "I found myself using a website to convert Hex to RGB and vice versa, so I decided to make an app instead. This project was also a very rewarding one to complete as it involved quite a bit of different JS code.",
  },
  {
    name: "Stopwatch",
    image: "Projects/Stopwatch/Stopwatch.png",
    app: "Projects/Stopwatch/index.html",
    code: "Projects/Stopwatch/app.js",
    month: 09,
    year: 2020,
    rank: 2,
    descr: "A simple stopwatch made by using if/else statements, event listeners, set interval and clear interval.",
  },
  {
    name: "Meal generator",
    image: "Projects/MealGenerator/MealGenerator.png",
    app: "Projects/MealGenerator/index.html",
    code: "Projects/MealGenerator/app.js",
    month: 02,
    year: 2021,
    rank: 5,
    descr: "A random meal generator using a third party API and fetch to retrieve and populate the data",
  }
];

let jsBall = document.querySelector("#js-ball"),
    sortByBtn = document.querySelector("#sort-by"),
    sortByContent = document.querySelector(".sort-by-content"),
    sortByCaret = document.querySelector(".sort-by-caret"),
    sortByText = document.querySelector("#sort-by-text"),
    hamburgerMenu = document.querySelector("#hamburger-menu"),
    navArrows = document.querySelector(".open-nav"),
    closeMenu = document.querySelector("#close-menu"),  
    body = document.querySelector("body"),     
    modal = document.querySelector(".modal"),
    closeModal = document.querySelector("#close-modal"),    
    allProjects = document.querySelector(".figure-container"),
    sortNewest = document.querySelector("#newest"),
    sortOldest = document.querySelector("#oldest"),
    sortAlpha = document.querySelector("#alpha"),
    sortEnjoyable = document.querySelector("#enjoyable"),
    jsCodeBtn = document.querySelector("#js-code"),
    endResultBtn = document.querySelector("#end-result");


// Ball bounce 
jsBall.addEventListener("click", function() {
  if(this.classList.contains("ball-drop")) {
    this.classList.remove("ball-drop"); 
  } 

  if (!this.classList.contains("ball-bounce")) {
    this.classList.add("ball-bounce") 
    setTimeout(function(){
      this.classList.remove("ball-bounce")
    }.bind(this), 2000)
  }
});

// Mobile nav menu
let toggleNav = (pos) => { 
  let html = document.querySelector("html"),
      mobileNavContent = document.querySelector(".mobile-nav-content");

      mobileNavContent.style.left = pos;
      html.classList.toggle("opacity");
      body.classList.toggle("stop-scoll");
 };

hamburgerMenu.addEventListener("click", () => {
  toggleNav("0px");
  jsBall.style.zIndex = "-5"
});

closeMenu.addEventListener("click", () => {
  toggleNav("-150px");
  jsBall.style.zIndex = "0"
});

// Open desktop nav
navArrows.addEventListener("click", function() {
  let nav = document.querySelector("nav"),
      navOptions = document.querySelectorAll(".desktop-nav-options"),
      listItem = document.querySelectorAll(".list-item");

  nav.style.width !== "135px" ? nav.style.width = "135px" : nav.style.width = "55px";

  listItem.forEach(function(e) {
    e.classList.toggle("text-indent")
  });
  navOptions.forEach(function(e) {
    console.log(e)
    e.classList.toggle("d-none")
  })
  this.classList.toggle("rotate")

})


//Project modal
let modalFunc = () => {
  [...allProjects.children].forEach((elem) => { 
    elem.addEventListener("click", () => {  
      jsProjects.forEach(function(item){
        let modalTitle = document.querySelector(".modal-title"),
            projectModal = document.querySelector(".project-container"),  
            modalDescr = document.querySelector(".modal-descr");

        if (elem.innerText === item.name) {
          modalTitle.innerHTML = item.name;
          projectModal.innerHTML = `<object data="${item.app}"> </object>`;
          modalDescr.innerHTML = item.descr;
                     
          jsCodeBtn.addEventListener("click", function() {
           
            projectModal.innerHTML = `<object data="${item.code}"> </object>`;      
            this.classList.add("d-none");
            endResultBtn.classList.remove("d-none");
            
          });

          endResultBtn.addEventListener("click", function() {
            projectModal.innerHTML = `<object data="${item.app}"> </object>`;
            this.classList.add("d-none");
            jsCodeBtn.classList.remove("d-none");
          })   
        }
      });
      modal.classList.toggle("d-none");
      body.classList.toggle("stop-scoll");
  })
  });
}


//Close modal
closeModal.addEventListener("click", () => { 
  modal.classList.toggle("d-none");
  body.classList.toggle("stop-scoll");
  jsCodeBtn.classList.remove("d-none");
  endResultBtn.classList.add("d-none");
 });


// Display the projects
let showAllProjects = () => {
  let displayProjects = jsProjects.map(function(item){
    return `<figure class="figure-project">
              <div class="figure-img-container">
                <img src="${item.image}" alt="" />
              </div>        
              <figcaption>${item.name}</figcaption> 
            </figure>`
})
  displayProjects = displayProjects.join("");
  allProjects.innerHTML = displayProjects;
  modalFunc();
};
showAllProjects()


// Sort by dropdown
sortByBtn.addEventListener("click", (e) => {
  sortByContent.classList.toggle("d-none");
  sortByCaret.classList.toggle("rotate");
});

// Closing sort by menu when clicking anywhere on page
window.addEventListener("click", (e) => {
  if (e.target !== sortByBtn && !sortByContent.classList.contains("d-none")) {
    sortByContent.classList.add("d-none");
    sortByCaret.classList.toggle("rotate");
  }
});

// Sort by alpha
sortAlpha.addEventListener("click", function() {
  jsProjects.sort(function(a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return - 1;
    };
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  sortByText.innerHTML = `${this.innerText} `
  showAllProjects()
});

// Sort by most enjoyable to make
sortEnjoyable.addEventListener("click", function() {
  jsProjects.sort(function(a, b) {
    return b.rank - a.rank
  });
  sortByText.innerHTML = `${this.innerText} `
  showAllProjects()
});

// Sort by newest
sortNewest.addEventListener("click", function() {
  jsProjects.sort(function(a, b) {
    if (b.year === a.year) {
      return b.month - a.month;
    } else {
    return b.year - a.year
    }
  });
  sortByText.innerHTML = `${this.innerText} `
  showAllProjects()
});

// Sort by oldest
sortOldest.addEventListener("click", function() {
  jsProjects.sort(function(a, b) {
    if (a.year === b.year) {
      return a.month - b.month;
    } else {
      return a.year - b.year
    }
  });
  sortByText.innerHTML = `${this.innerText} `
  showAllProjects()
});




