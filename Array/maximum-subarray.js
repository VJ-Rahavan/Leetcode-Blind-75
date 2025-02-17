// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

function maximumSubArray(nums) {
  let max = nums[0],
    cur = 0;
  for (let i = 0; i < nums.length; i++) {
    cur = Math.max(nums[i], cur + nums[i]);
    max = Math.max(cur, max);
  }

  return max;
}

console.log(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
