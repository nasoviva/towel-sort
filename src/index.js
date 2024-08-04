
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    let res = [];
    let el = 0;
    let row = 0;
    while (row < matrix.length) {
      if (row % 2 === 0) {
        el = 0;
        while (el < matrix[row].length) {
          res.push(matrix[row][el]);
          el++;
        }
      } else {
        el = matrix[row].length - 1;
        while (el >= 0) {
          res.push(matrix[row][el]);
          el--;
        }
      }
      row++;
    }
    return res;
  }
