/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = nums[0];
  let min = nums[0];
  let ans = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];

    if (curr < 0) {
      [max, min] = [min, max];
    }

    max = Math.max(curr, curr * max);
    min = Math.min(curr, curr * min);

    ans = Math.max(ans, max);
  }

  return ans;
};
