// Given an integer array nums, find a
// subarray
//  that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

function maxProduct(nums) {
  let highest = nums[0];
  let lowestSoFar = highest;
  let highestSoFar = highest;

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    const candidateOne = lowestSoFar * num;
    const candidateTwo = highestSoFar * num;

    highestSoFar = Math.max(num, candidateOne, candidateTwo);
    lowestSoFar = Math.min(num, candidateOne, candidateTwo);

    highest = Math.max(highestSoFar, highest);
  }

  return highest;
}
