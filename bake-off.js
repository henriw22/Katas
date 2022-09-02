// const ingredientCheck = function(bakery, ingredient) {
//     //checking if the ingredients matches with any ingredieng in the bakery
//     for (let i = 0; i < bakery.length; i++) {
//         if (ingredient === bakery[i]) {
//             return true;
//         }
//     }
//     return false;
// }

// const chooseRecipe = function(bakeryA, bakeryB, recipes) {
//     // to go through recipes array
//     for (let i = 0; i < recipes.length; i++) {
//         const ingredient1 = recipes[i].ingredients[0];
//         const ingredient2 = recipes[i].ingredients[1];
//         //if an ingredient in position 0 of the recipe array matches with any in bakeryA
//         if(ingredientCheck(bakeryA, ingredient1)) {
//             //if an ingredient in position 1 of the recipe array matches with any in bakeryB, can be combined with the if statement above with &&
//             if (ingredientCheck(bakeryB, ingredient2)) {
//                 return recipes[i].name;
//             }
//         // if an ingredient in position 1 of the recipe array matches with any in Bakery B, just a reverse of the above nested if statement.
//         } else if (ingredientCheck(bakeryB, ingredient1)) {
//             if (ingredientCheck(bakeryA, ingredient2)) {
//                 return recipes[i].name;
//             }
//         }
//     }
//     return "Recipe not found";
// }

// can combine the whole if statements above into one line if statement with this code
// if((ingredientCheck(bakeryA, ingredient1) && ingredientCheck(bakeryB, ingredient2)) ||  (ingredientCheck(bakeryB, ingredient1) && ingredientCheck(bakeryA, ingredient2))) {
//     return recipes[i].name;
// }



const chooseRecipe = function (bakeryA, bakeryB, recipes) {
    for (let recipe of recipes) {
        const ingredients = recipe.ingredients;
        if ((bakeryA.includes(ingredients[0]) && bakeryB.includes(ingredients[1])) || (bakeryB.includes(ingredients[0]) && bakeryA.includes(ingredients[1]))) {
                return recipe.name;
        }
    }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));