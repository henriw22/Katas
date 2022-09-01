// const multiplicationTable = function(maxValue) {
//   let table = "";
//   let number = 0;
//   for (let i = 1; i < maxValue + 1; i++) {
//     for (let j = 1; j < maxValue + 1; j++) {
//       number = i * j;
//       table = table + number + " ";
//     }
//     table = table + "\n";
//   }
//   return table;
// };

const multiplicationTable = function(maxValue) {
  let table = "";
  let number = 0;
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      number = i * j;
      table += number + " ";
    }
    table = table + "\n";
  }
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));