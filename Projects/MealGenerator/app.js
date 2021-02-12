let getRecipe = document.querySelector("#get-recipe"),
    getRecipeBtn = document.querySelector("#get-recipe"),
    recipeHeader = document.querySelector("#recipe-header"),
    recipeMain = document.querySelector("#recipe-main"),
    getNewRecipeBtn = document.querySelector("#get-new-recipe"),
    mealName = document.querySelector("#meal-name"),
    category = document.querySelector("#category"),
    image = document.querySelector("#recipe-image"),
    steps = document.querySelector("#steps"),
    ingredients = document.querySelector("#ingredients");
    
// Initial display recipe function
getRecipeBtn.addEventListener("click", function() {
  recipeHeader.style.display = "grid";
  recipeMain.style.display = "inline-block";
  getRecipe.style.display = "none";
  newRecipe();
})


// Populates all recipe data from API
let createMeal = function (meal) {
  mealName.textContent = meal.strMeal;
  category.textContent = meal.strCategory;
  image.attributes.src.textContent = meal.strMealThumb;
 let measureArr = [...Object.entries(meal)].filter(function(e) {
    return e[0].includes("strMeasure") 
  });
  let ingredientArr = [...Object.entries(meal)].filter(function(e) {
    return e[0].includes("strIngredient") 
  });
  
  let measureArrLength = measureArr.map(function(e) {
      if (e[1] !== ""){
        return e
      }
  })
  let ingredientArrLength = ingredientArr.map(function(e) {
    if (e[1] !== ""){
      return e
    }
  })
  let instructionsArr = meal.strInstructions.split('\n').filter((n) => {return n !== "\r"}) ;
  steps.innerHTML = "";
  for (let i = 0; i < instructionsArr.length; i++) {
    let instruction = instructionsArr[i],
        li = document.createElement("li");
    li.innerHTML = `<li class="step"><span class="step-num">STEP ${i + 1}</span> ${instruction}</li>`;
    steps.appendChild(li);
  };

  ingredients.innerHTML = "";
  for (let i = 0; i < measureArrLength.length; i++) {
    let measurement = measureArrLength[i][1],
        ingredient = ingredientArrLength[i][1],
        li = document.createElement("li");
    li.innerHTML = `<li><span class="quantity">${measurement}</span> - ${ingredient}</li>`
    ingredients.appendChild(li);
  }
};


// Fetch function retrieving info from API
let newRecipe = function() {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  .then(res => res.json())
  .then(res => {
    createMeal(res.meals[0]);
  })
  .catch(function(err) {
    console.log("Fetch problem:" + err.message);
  });
}

// Get new recipe button
getNewRecipeBtn.addEventListener("click", function() {
  newRecipe();
})

