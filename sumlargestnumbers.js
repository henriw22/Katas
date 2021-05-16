const sumLargestNumbers = function(data) {
  let maxSum = 0;
  for (let i=0; i<data.length; i++) {
    for (let j=i+1; j<data.length; j++) { // i+1 here!
      let sum = data[i] + data[j];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));