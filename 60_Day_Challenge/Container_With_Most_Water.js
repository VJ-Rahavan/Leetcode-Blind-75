const inp = [1, 8, 6, 2, 5, 4, 8, 3, 7];

const maxArea = (arr) => {
  let maxSum = -Infinity;
  let l = 0,
    r = arr.length - 1;
  while (l < r) {
    const sum = Math.min(arr[l], arr[r]) * (r - l);
    maxSum = Math.max(sum, maxSum);
    if (arr[l] > arr[r]) {
      r--;
    } else {
      l++;
    }
  }

  console.log(maxSum);
};

maxArea(inp);
