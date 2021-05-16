const calculateChange = function(total, cash) {
  const twentyDollars = 2000;
  const tenDollars = 1000;
  const fiveDollars = 500;
  const twoDollars = 200;
  const oneDollar = 100;
  const quarter = 25;
  const dime = 10;
  const nickel = 5;
  const penny = 1;  


  let result = {};

  let change = cash - total;

  if (change > twentyDollars) {
    let count = 0;
    count = Math.floor(change / twentyDollars);
    result["twentyDollars"] = count;
    change = change % twentyDollars;
  }

  if (change > tenDollars) {
    let count = 0;
    count = Math.floor(change / tenDollars);
    result["tenDollars"] = count;
    change = change % tenDollars;
  }

  if (change > fiveDollars) {
    let count = 0;
    count = Math.floor(change / fiveDollars);
    result["fiveDollars"] = count;
    change = change % fiveDollars;
  }

  if (change > twoDollars) {
    let count = 0;
    count = Math.floor(change / twoDollars);
    result["twoDollars"] = count;
    change = change % twoDollars;
  }

  if (change > oneDollar) {
    let count = 0;
    count = Math.floor(change / oneDollar);
    result["oneDollar"] = count;
    change = change % oneDollar;
  }

  if (change > quarter) {
    let count = 0;
    count = Math.floor(change / quarter);
    result["quarter"] = count;
    change = change % quarter;
  }

  if (change > dime) {
    let count = 0;
    count = Math.floor(change / dime);
    result["dime"] = count;
    change = change % dime;
  }

  if (change >nickel) {
    let count = 0;
    count = Math.floor(change / nickel);
    result["nickel"] = count;
    change = change % nickel;
  }

  if (change >penny) {
    let count = 0;
    count = Math.floor(change / penny);
    result["penny"] = count;
    change = change % penny;
  }
  return result;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));


// expected result:
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

// another way to do it by making the denominations as one object
// const calculateChange = function(total, cash) {
//   const changeObject = {
//     twentyDollar: 2000,
//     tenDollar: 1000,
//     fiveDollar: 500,
//     twoDollar: 200,
//     oneDollar: 100,
//     quarter: 25,
//     dime: 10,
//     nickel: 5,
//     penny: 1, 
//   };
  
//   let result = {};
//   let change = cash - total;
//   for (let changeDenominator in changeObject) {
//     if (change > changeObject[changeDenominator]) {
//       result[changeDenominator] = Math.floor(change / changeObject[changeDenominator]);
//       change = change % changeObject[changeDenominator];
//     }
//   }
//   return result;
// };
