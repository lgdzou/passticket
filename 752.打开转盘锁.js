/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  const plusOne = (s, j) => { 
    let arr = s.split('');
    arr[j] = arr[j] === '9' ? '0' : String(Number(arr[j]) + 1);
    return arr.join('');
  }

  const minusOne = (s, j) => { 
    let arr = s.split('');
    arr[j] = arr[j] === '0' ? '9' : String(Number(arr[j]) - 1);
    return arr.join('');
  }

  let p = ['0000'];
  let minStep = 0;
  let visited = new Set(['0000']);
  let dead = new Set(deadends)

  while (p.length > 0) { 
    let size = p.length;

    for (let i = 0; i < size; i++) { 
      let cur = p.shift();

      if (cur === target) { 
        return minStep;
      }

      if (dead.has(cur)) { 
        continue
      }

      for (let j = 0; j < 4; j++) { 
        let plusVal = plusOne(cur, j)
        if (!visited.has(plusVal)) { 
          p.push(plusVal)
          visited.add(plusVal)
        }
        let minusVal = minusOne(cur, j)
        if (!visited.has(minusVal)) { 
          p.push(minusVal)
          visited.add(minusVal)
        }
      }
    }

    minStep++
  }

  return -1;
};
// @lc code=end

