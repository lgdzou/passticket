/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let memo = new Array(amount + 1);

  const dp = (amount) => { 
    if (amount < 0) return -1;
    if (amount === 0) return 0;
    if (memo[amount]) return memo[amount];

    let res = Infinity;
    coins.forEach(coin => { 
      const subDp = dp(amount - coin);
      if (subDp !== -1) { 
        res = Math.min(res, subDp + 1);
      }
    })

    memo[amount] = res === Infinity ? -1 : res;
    return memo[amount]
  }

  return dp(amount)
};
// @lc code=end

