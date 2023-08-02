/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result = []
  let track = []
  let part1 = n, part2 = n;

  const backTrack = (track, part1, part2) => { 
    if (track.length === n * 2) { 
      let subTrack = track.join('')
      result.push(subTrack)
      return
    }

    if (part1 > 0) {
      track.push('(')
      backTrack(track, part1 - 1, part2)
      track.pop()
    }

    if (part2 > 0 && part1 < part2) {
      track.push(')')
      backTrack(track, part1, part2 - 1)
      track.pop()
    }
  }

  backTrack(track, part1, part2)
  return result
};
// @lc code=end

