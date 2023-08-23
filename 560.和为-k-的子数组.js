/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/**
 * 
 * 
 * 我们可以基于方法一利用数据结构进行进一步的优化，我们知道方法一的瓶颈在于对每个 iii，我们需要枚举所有的 jjj 来判断是否符合条件，这一步是否可以优化呢？答案是可以的。
  我们定义 pre[i]\textit{pre}[i]pre[i] 为 [0..i][0..i][0..i] 里所有数的和，则 pre[i]\textit{pre}[i]pre[i] 可以由 pre[i−1]\textit{pre}[i-1]pre[i−1] 递推而来，即：

  pre[i]=pre[i−1]+nums[i] \textit{pre}[i]=\textit{pre}[i-1]+\textit{nums}[i]
  pre[i]=pre[i−1]+nums[i]
  那么「[j..i][j..i][j..i] 这个子数组和为 kkk 」这个条件我们可以转化为

  pre[i]−pre[j−1]==k \textit{pre}[i]-\textit{pre}[j-1]==k
  pre[i]−pre[j−1]==k
  简单移项可得符合条件的下标 jjj 需要满足

  pre[j−1]==pre[i]−k \textit{pre}[j-1] == \textit{pre}[i] - k
  pre[j−1]==pre[i]−k
 */

var subarraySum = function (nums, k) {
  let mp = new Map()
  mp.set(0, 1)

  let count = 0, pre = 0;
  nums.forEach(x => { 
    pre += x;

    if (mp.has(pre - k)) { 
      count += mp.get(pre - k);
    }

    if (mp.has(pre)) { 
      mp.set(pre, mp.get(pre) + 1)
    } else {
      mp.set(pre, 1)
    }
  })
  
  return count
};
// @lc code=end

