/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  let track = [];
  let used = new Array(s.length).fill(false);
  let result = [];

  const isValid = (str) => { 
    let strTemp = str.split('').reverse().join('')
    return str === strTemp
  }

  const backTrack = (track, used) => { 
    if (track.join('').length === s.length) { 
      result.push([...track]);
      return;
    }

    let usedIndex = used.findIndex(i => i === false)

    for (let i = usedIndex; i < s.length; i++) { 
      let str = s.substring(usedIndex, i + 1);
      if (isValid(str)) { 
        track.push(str)
        used.fill(true, usedIndex, i + 1)
        backTrack(track, used)
        track.pop()
        used.fill(false, usedIndex, i + 1)
      }
    }
  }

  backTrack(track, used);
  return result;
};
// @lc code=end

