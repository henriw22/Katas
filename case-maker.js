const camelCase = function(input) {
  let string = "";
  let foundSpace = false;
  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) != " ") {
      if (foundSpace) {
        string = string + input.charAt(i).toUpperCase();
        foundSpace = false;
      } else {
        string = string + input.charAt(i);
      }
    } else if (input.charAt(i) === " ") {
      foundSpace = true;
    }
  }
  return string;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));