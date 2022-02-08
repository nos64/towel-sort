
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  let result = [];
  if (matrix === null || matrix === undefined) result;
  if (matrix) {
    for (let i = 0; i < matrix.length; i++) {
      if ( i % 2 === 0) {
        for (let j = 0; j < matrix[i].length; j++) {
          arr.push(matrix[i][j]);
        }
      } else {
        for (let j = matrix[i].length - 1; j >= 0; j--) {
          arr.push(matrix[i][j]);
        }
      }
    result = arr;
    }
  }
  return result;
}
