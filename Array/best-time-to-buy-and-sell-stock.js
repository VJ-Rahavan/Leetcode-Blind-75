// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

const bruteForce = (stocks) => {
  let max = 0;
  for (let i = 0; i < stocks.length - 1; i++) {
    for (let j = i + 1; j < stocks.length; j++) {
      if (stocks[j] > stocks[i]) max = Math.max(max, stocks[j] - stocks[i]);
    }
  }

  return max;
};

console.log(bruteForce([7, 1, 5, 3, 6, 4]));

const maxProfit = (stocks) => {
  let l = 0,
    max = 0;
  for (let i = 0; i < stocks.length; i++) {
    if (stocks[l] < stocks[i]) {
      const val = stocks[i] - stocks[l];
      max = Math.max(val, max);
    } else if (stocks[l] > stocks[i]) {
      l = i;
    }
  }

  return max;
};

console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
