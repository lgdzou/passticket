/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let zeroList = [];
  matrix.forEach((i, indexI) => {
    i.forEach((j, indexJ) => {
      if (j === 0) zeroList.push([indexI, indexJ])
    })
  })

  let zeroX = zeroList.map(i => i[0])
  let zeroY = zeroList.map(i => i[1])

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (zeroX.includes(i) || zeroY.includes(j)) {
        matrix[i][j] = 0;
      }
    }
  }
}
// @lc code=end

