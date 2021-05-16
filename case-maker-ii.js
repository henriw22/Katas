const caseConversion = function(input, cases) {
  let string = "";

  if (cases === "camel") {
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
  } else if (cases === "pascal") {
    let capital = false;
    for (let i = 0; i < input.length; i++) {
      if (input.charAt(i) != " ") {
        if (capital) {
          string = string + input.charAt(i).toUpperCase();
          capital = false;
        } else {
          string = string + input.charAt(i);
        }
      } else if (input.charAt(i) === " ") {
        capital = true;
      }
    }
    return string;
  } else if (cases === "snake") {
    for (let i = 0; i < input.length; i++) {
      if (input.charAt(i) != " ") {
          string = string + input.charAt(i);
      } else if (input.charAt(i) === " ") {
          string = string + "_";
      }
    }
    return string;
  } else if (cases === "kebab") {
    for (let i = 0; i < input.length; i++) {
      if (input.charAt(i) != " ") {
          string = string + input.charAt(i);
      } else if (input.charAt(i) === " ") {
          string = string + "-";
      }
    }
    return string;
  } 
  
  if (cases === "title") {
    let foundSpace = true;
    for (let i = 0; i < input.length; i++) {
      if (input.charAt(i) != " ") {
        if (foundSpace) {
          string = string + input.charAt(i).toUpperCase();
          foundSpace = false;
        } else {
          string = string + input.charAt(i);
        }
      } else if (input.charAt(i) === " ") {
        string = string + " ";
        foundSpace = true;
      }
    }
    return string;
  } 
  
  if (cases === "vowel") {
    for (let i = 0; i < input.length; i++) {
      if (input.charAt(i) === "a" || input.charAt(i) === "e" || input.charAt(i) == "i" || input.charAt(i) === "o" || input.charAt(i) === "u") {
        string = string + input.charAt(i).toUpperCase();
      } else {
        string = string + input.charAt(i);
      }
    }
    return string;
  } else if (cases === "consonant") {
    for (let i = 0; i < input.length; i++) {
      if (input.charAt(i) === "a" || input.charAt(i) === "e" || input.charAt(i) == "i" || input.charAt(i) === "o" || input.charAt(i) === "u") {
        string = string + input.charAt(i);
      } else {
        string = string + input.charAt(i).toUpperCase();
      }
    }
    return string;
  }

  if (cases === "upper") {
    return input.toUpperCase();
  } else if (cases === 'lower') {
    return input.toLowerCase();
  }
  return string;
}

const makeCase = function(input, cases) {
  if (typeof cases === 'string') {
    return caseConversion(input, cases);
  } else if (Array.isArray(cases)) {
    let string = input
    for (let i = 0; i < cases.length; i++) {
      if (cases[i] === "camel" || cases[i] === "pascal" || cases[i] === "snake" || cases[i] === "kebab" || cases[i] === "title") {
        string = caseConversion(string,cases[i]);
      } 
    }
    for (let i = 0; i < cases.length; i++) {
      if (cases[i] === "vowel" || cases[i] === "consonant") {
        string = caseConversion(string,cases[i]);
      } 
    }
    for (let i = 0; i < cases.length; i++) {
      if (cases[i] === "upper" || cases[i] === "lower") {
        string = caseConversion(string,cases[i]);
      } 
    }
    return string;
  }
}


// another approach using switch statement (UNFINISHED)
// const makeCase = function(input, cases) {
//   let string = input;
//   // first priority:
//     for(let i =0; i < cases.length; i++){
//       switch(cases[i]){
//         case "camel":
//         string = caseConversion(string, cases[i]);
//         break;
//         case "pascal":
//           string = caseConversion(string, cases[i]);
//         break;
//         case "snake":
//           string = caseConversion(string, cases[i]);
//         break;
//         case "kebab":
//           string = caseConversion(string, cases[i]);
//         break;
//         case "title":
//           string = caseConversion(string, cases[i]);
//         break;
//       }
//     }
      
//       // second priority:
      
//     for(let j =0; j<cases.length; j++){
//       switch(cases[j]){
//         case "vowel":
//           string = caseConversion(string, cases[j]);    
//         break;
//         case "consonant":
//           string = caseConversion(string, cases[j]);
//         break;
//       }
//     }
//       //last priority:
      
//     for(let x = 0; x<cases.length; x++){
//       switch(cases[x]){
//         case "upper":
//           string = caseConversion(string, cases[x]); 
//         break;   
//         case "lower":
//           string = caseConversion(string, cases[x]);
//         break;
//       }
//     }
//   // }
//   return string;
// }


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));



// expected output:
// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG
// THIS_IS_A_STRING