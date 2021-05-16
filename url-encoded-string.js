const replace = function(data) {
  let string = "";
  let checker = false;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "%") {
      checker = true;
    } else if (data[i] === "2") {
      checker = true;
    } else if (data[i] === "0") {
      string = string + " ";
      checker = false;
    } else {
      string += data[i];
    }
  }
  return string;
}

const urlDecode = function(text) {
  let result = {};
 
  const queries = text.split("&");
  queries.forEach(query => {
    const [key, value] = query.split('=');    
    result[key] = replace(value);
  });
  return result

};




console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);



// expected output:
// {duck: "rubber"}
// {bootcamp: "Lighthouse Labs"}
// {city: "Vancouver", weather: "lots of rain"}
// "lots of rain"



// this code is a more elaborate way to the problem, assuming that the character that follows "%" or "%2" is not a "0".
// const replace = function(data) {
//   let string = "";
//   let tempString = "";
//   for (let i = 0; i < data.length; i++) {
//     if (data[i] === "%") {
//       tempString = "%";
//     } else if (tempString === "%" && data[i] === "2") {
//       tempString = "%2";
//     } else if (tempString === "%2" && data[i] === "0") {
//       string = string + " ";
//       tempString = "";
//     } else {
//       if (tempString === "%2") {
//         string += tempString;
//       }
//       string += data[i];
//       tempString = "";
//     }
//   }
//   return string;
// }