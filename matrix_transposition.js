const transpose = function(matrix) {
  let newArr = [];
  let row = matrix.length;
  let column = matrix[0].length;
  
  for (let i = 0; i < column; i++) {
    let pushedRow = [];
    
    for (let j = 0; j < row; j++) {
      pushedRow.push(matrix[j][i]);
    }
    newArr.push(pushedRow);
  }
  return newArr;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n');
  }
};


printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));
// [[1,1,1,1]        1
// [2,2,2,2]       1
// [3,3,3,3]
// [4,4,4,4]]

console.log('----');

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----');

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));