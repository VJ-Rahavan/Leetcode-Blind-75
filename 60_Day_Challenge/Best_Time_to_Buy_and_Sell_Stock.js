const prices = [7, 1, 5, 3, 6, 4];

const buyAndSell = (arr) => {
  let min = arr[0],
    maxPrice = 0;

  for (let i of arr) {
    maxPrice = Math.max(maxPrice, i - min);
    min = Math.min(min, i);
  }

  return maxPrice;
};
