/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let window = new Map();
  let need = new Map();

  for (let i = 0; i < p.length; i++) { 
    if (need.has(p[i])) {
      need.set(p[i], need.get(p[i]) + 1)
    } else { 
      need.set(p[i], 1)
    }
  }

  let left = 0, right = 0;
  let res = [];
  let valid = 0;
  
  while (right < s.length) { 
    let c = s[right]
    right++

    if (need.has(c)) { 
      if (window.has(c)) {
        window.set(c, window.get(c) + 1)
      } else { 
        window.set(c, 1)
      }
      if (need.get(c) === window.get(c)) { 
        valid++
      }
    }

    while (right - left >= p.length) { 
      if (valid === need.size) { 
        res.push(left)
      }
      let d = s[left]
      left++
      if (need.has(d)) { 
        if (window.get(d) === need.get(d)) { 
          valid--
        }
        window.set(d, window.get(d) - 1)
      }
    }
  }

  return res;
};
// @lc code=end

