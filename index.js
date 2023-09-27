const API_KEY = "a465092357a4459d8470f9a87b8b27a9";
const recipesListE1 = document.getElementById("recipe-list");
function displayRecipes(recipes) {
    recipesListE1.innerHTML = "";
    recipes.forEach(recipe => {

        const recipeItemE1 = document.createElement("li");
        recipeItemE1.classList.add("recipe-item");
        recipeImageE1 = document.createElement("img");
        recipeImageE1.src = recipe.image;
        recipeImageE1.alt = "recipe image";
        recipeItemE1.appendChild(recipeImageE1);
        recipesListE1.appendChild(recipeItemE1);
    });
}
async function getRecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
    const data = await response.json();

    return data.recipes;
};
async function init() {
    const recipes = await getRecipes();
    console.log(recipes);
    displayRecipes(recipes);
}
init();


