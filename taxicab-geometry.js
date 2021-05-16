const blocksAway = function(directions) {
  const direction = ['north', 'east', 'south', 'west'];
  let directionIndex;
  let destination;
  if(directions[0] === 'right') {
    directionIndex = 1;
    destination = {
      east: directions[1],
      north: 0,
    };
  } else {
    directionIndex = 0;
    destination = {
      east: 0,
      north: directions[1],
    };
  }
  
  for (let i = 2; i < directions.length; i++) {
    if (directions[i] === "right") {
      directionIndex += 1;
      if (directionIndex > 3) {
        directionIndex = 0;
      }
      continue;
    } if (directions[i] === "left") {
      directionIndex -= 1;
      if (directionIndex < 0) {
        directionIndex = 3;
      }
      continue;
    } 

    // console.log(directions[i]);
    // console.log(direction[directionIndex]);

    if (direction[directionIndex] === 'east'){
      destination['east'] += directions[i];
    } else if (direction[directionIndex] === 'north') {
      destination['north'] += directions[i];
    } else if (direction[directionIndex] === 'west'){
      destination['east'] -= directions[i];
    } else if (direction[directionIndex] === 'south') {
      destination['north'] -= directions[i];
    }
  }

  return destination;
};


console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));



// Expected output:
// {east: 1, north: 3}
// {east: 3, north: 3}
// {east: 0, north: 0}