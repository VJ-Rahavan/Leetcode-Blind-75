// Given an array of positive integers nums and a positive integer target, return the minimal length of a
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

function minSubArrayLen(target, nums) {
  let min = Infinity,
    cur = 0,
    tot = 0,
    l = 0;

  for (let i = 0; i < nums.length; i++) {
    console.log(i);
    tot += nums[i];
    cur++;
    if (tot >= target) {
      min = Math.min(cur, min);
      while (tot >= target) {
        min = Math.min(cur, min);
        tot -= nums[l];
        cur--;
        l++;
      }
    }
  }

  return min === Infinity ? 0 : min;
}
