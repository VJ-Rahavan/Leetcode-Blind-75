// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

const containsDuplicate = (arr) => {
  const obj = new Set();

  for (let i of arr) {
    if (obj.has(i)) {
      return true;
    } else {
      obj.add(i);
    }
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3]));
