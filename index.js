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
        recipeTitleE1 = document.createElement("h2");
        recipeIngredientsE1 = document.createElement("p");
        recipeLinkE1 = document.createElement("a");
        recipeLinkE1.href = recipe.sourceUrl;
        recipeLinkE1.innerText = "Viiew Recipe";
        recipeIngredientsE1.innerHTML = `<strong>Ingredients:</strong> ${recipe.extendedIngredients.map(ingredient => ingredient.original).join(",")}`;
        recipeTitleE1.innerText = recipe.title;
        recipeItemE1.appendChild(recipeImageE1);
        recipesListE1.appendChild(recipeItemE1);
        recipesListE1.appendChild(recipeTitleE1);
        recipesListE1.appendChild(recipeIngredientsE1);
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


