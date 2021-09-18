const titleCase  = function(text) {
  // Your code in here ...
  let result = "";
  if (text === "") {
    return "";
  }
  let input = text.toLowerCase().split(" ");
  let cap = input.map(x => x[0].toUpperCase() + x.slice(1));
  result = cap.join(' ');
  console.log(result);
  return result;
};


titleCase('hELlO WorLd');