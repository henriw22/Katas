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

let name = ''
for (let i = 0; i < bakeryA.length; i++) {

  for (let j = 0; j < bakeryB.length; j++) {

    for (let k = 0; k < recipes.length; k++) {
      if ((((recipes[k].ingredients[0]) === bakeryA[i]) && ((recipes[k].ingredients[1]) === bakeryB[j])) || (((recipes[k].ingredients[1]) === bakeryA[i]) && ((recipes[k].ingredients[0]) === bakeryB[j])))
        name = recipes[k].name;
    }
  }
}
  return name;
}



// const chooseRecipe = function(bakeryA, bakeryB, recipes) {
//   let recipe = "";
//   for (let i = 0; i < recipes.length; i++) {
//       for (let j = 0; j < recipes[i].ingredients.length; j++) {
//       console.log(recipes[i].ingredients[j]);
//       }
      
//   }


// }

// console.log(bakeryA[3]);
// console.log(bakeryB[3]);
// console.log(recipes[1].ingredients[1]);
// console.log(recipes[0].ingredients[0]);
