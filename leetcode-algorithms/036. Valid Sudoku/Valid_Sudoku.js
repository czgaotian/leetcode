/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let row = new Set()
  let col = new Set()
  let cube = new Set()
  for (let i = 0; i < 9; i++) {
    row.clear()
    col.clear()
    cube.clear()
    for (let j = 0; j < 9; j++) {
      
      // 判断行
      if (board[i][j] !== '.') {
        if(row.has(board[i][j])) return false
        else {
          row.add(board[i][j])
        }
      }
      
      // 判断列
      if (board[j][i] !== '.') {
        if (col.has(board[j][i])) return false
        else {
          col.add(board[j][i])
        }
      }

      // 判断块
      let cubeX = 3 * Math.floor(i % 3) + Math.floor(j % 3)
      let cubeY = 3 * Math.floor(i / 3) + Math.floor(j / 3)
      if (board[cubeX][cubeY] !== '.') {
        if (cube.has(board[cubeX][cubeY])) return false
        else {
          cube.add(board[cubeX][cubeY])
        }
      }
    }
  }
  return true
};