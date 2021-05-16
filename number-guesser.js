let prompt = require("prompt-sync")();

let number = Math.floor((Math.random() * 100) + 1);
console.log(number);
let answers = [];
let answer = -1;

while (answer !== number) {
  answer = Number(prompt("Guess a number: "));
  // console.log(Number.isNaN(test));
  console.log("You answered: " + answer);
    if (answers.includes(answer)) {
      console.log("Already Guessed!");
      continue;
    }
    if (number > answer) {
      console.log("Too Low!");
      answers.push(answer);
      continue;
    }
    if (number < answer) {
      console.log("Too High!");
      answers.push(answer);
      continue;
    }
    if (Number.isNaN(answer)) {
      console.log("Not a number! Try again!");
      continue;
    }
    if (answer === number) {
      answers.push(answer);
      console.log("You got it! You took " + answers.length + " attempts!");
      continue;
    }
}
