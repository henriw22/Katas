const squareCode = function(message) {
  let string = "";
  
  for (let i = 0; i < message.length; i++) {
    if (message[i] != " ") {
      string += message[i];
    }
  }
  // return string;
  
  let size = Math.ceil(Math.sqrt(string.length));
  let result= [];
  
  for (let column = 0; column < size; column++) { 
    let word = "";
    for (let row = 0; row < size; row++) {
      word += string.charAt(column + row * size);
    }
    result.push(word);
  }
  return result.join(" ");
};



console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));


// Expected output:
// clu hlt io  
// fto ehg ee dd
// hae and via ecy
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau