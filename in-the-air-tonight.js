// const checkAir = function (samples, threshold) {
//   let count = 0;
//   let totalCount = samples.length;
//   for (let i = 0; i < samples.length; i++) {
//     if (samples[i] === "dirty") {
//       count++;
//     }
//   }
  
//   if (count / totalCount < threshold) {
//     return "Clean";
//   } else {
//     return "Polluted"
//   }
// };


const checkAir = function (samples, threshold) {
  let clean = 0;
  let dirty = 0;
  for (let sample of samples) {
    if (sample === "clean") {
      clean++;
    } else {
      dirty++;
    }
  }
  if ((dirty / (clean + dirty)) > threshold) {
    return "Polluted";
  } else {
    return "Clean";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))