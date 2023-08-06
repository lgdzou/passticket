/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const mMax = board[0].length - 1
  const nMax = board.length - 1
  let track = word.split('');
  let used = Array.from({ length: nMax + 1 }, () => Array(mMax + 1).fill(false))
  let result = false;

  const backTrack = (n, m, used, track) => { 
    if (track.length === 0) { 
      return true
    }

    if (!isValid(n, m, track[0])) return false;

    used[n][m] = true;
    const ans = backTrack(n + 1, m, used, track.slice(1)) ||
      backTrack(n, m + 1, used, track.slice(1)) ||
      backTrack(n - 1, m, used, track.slice(1)) ||
      backTrack(n, m - 1, used, track.slice(1));
    used[n][m] = false;
    
    return ans
  }

  const isValid = (n, m, word) => { 
    if (
      n < 0
      || m < 0
      || n > nMax
      || m > mMax
      || board[n][m] !== word
      || used[n][m]) {
      return false;
    }
    return true;
  }

  const firstWord = word[0];
  const firstWordList = [];
  board.forEach((i, iIndex) => { 
    i.forEach((j, jIndex) => { 
      if (j === firstWord) { 
        firstWordList.push([iIndex, jIndex])
      }
    })
  })

  for (let i = 0; i < firstWordList.length; i++) { 
    if (backTrack(firstWordList[i][0], firstWordList[i][1], used, track)) { 
      result = true;
      break;
    }
  }

  return result;
};
// @lc code=end

