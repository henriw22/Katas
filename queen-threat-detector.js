let whiteQueen = [0, 0];  /* black queen cant be in [5,0], [4,1], [3,2], [2,3], [1,4]*/
let blackQueen = [5, 7];


const generateBoard = function(whiteQueen, blackQueen) {
  let board = [];
  
  for (let x = 0; x < 8; x++) {
    board[x] = [];
    for (let y = 0; y < 8; y++) {
      board[x][y] = 0;
    }
  }
  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;
  
  return board;
};

const queenThreat = function(board) {
  if (whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1]) {
    return true;
  } else if ((Math.abs(whiteQueen[0] - blackQueen[0])) === (Math.abs(whiteQueen[1] - blackQueen[1]))) {
    return true;
  } else {
    return false;
  }
};

let generatedBoard = generateBoard(whiteQueen, blackQueen);


console.log(generatedBoard);
console.log(queenThreat(generatedBoard));




// Expected output:
// [
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
// false