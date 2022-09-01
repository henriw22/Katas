// const urlEncode = function(text) {
//   text = text.trim();
//   let String = "";
//     for (let i = 0; i < text.length; i++) {
//       if (text[i] === " ") {
//         String += "%20";
//       } else {
//         String += text[i];
//       }
//     }
//   return String;  
// };
// return text.trim().replace(/ /g, '%20')

const urlEncode = function(text) {
  return text.trim().replace(/ /g, '%20');
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));