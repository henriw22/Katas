// const camelCase = function(input) {
//   let string = "";
//   let foundSpace = false;
//   for (let i = 0; i < input.length; i++) {
//     if (input.charAt(i) != " ") {
//       if (foundSpace) {
//         string = string + input.charAt(i).toUpperCase();
//         foundSpace = false;
//       } else {
//         string = string + input.charAt(i);
//       }
//     } else if (input.charAt(i) === " ") {
//       foundSpace = true;
//     }
//   }
//   return string;
// };

const camelCase = function(input) {
  let result = "";
  const data = input.split(" ");
  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      result += data[i];
    } else {
      result += data[i].charAt(0).toUpperCase() + data[i].slice(1);
    }
  }
  return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));