/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let res = []
  let board = Array.from({ length: n }, () => Array(n).fill('.'));

  const isValid = (board, row, col) => { 
    // 检查列
    for (let i = 0; i < row; i++) { 
      if (board[i][col] === 'Q') { 
        return false
      }
    }

    // 检查左上
    for (let i = 1; row - i >= 0 && col - i >= 0; i++) { 
      if (board[row - i][col - i] === 'Q') { 
        return false
      }
    }

    // 检查右上
    for (let i = 1; row - i >= 0 && col + 1 < n; i++) { 
      if (board[row - i][col + i] === 'Q') { 
        return false
      }
    }

    return true
  }

  const backTrack = (board, row) => { 
    if (row === n) { 
      let subRes = board.map(i => i.join(''));
      res.push(JSON.parse(JSON.stringify(subRes))); 
      return;
    }

    for (let i = 0; i < n; i++) { 
      if (!isValid(board, row, i)) { 
        continue;
      }
      board[row][i] = 'Q'
      backTrack(board, row + 1)
      board[row][i] = '.'
    }
  }

  backTrack(board, 0);
  return res;
};
// @lc code=end

