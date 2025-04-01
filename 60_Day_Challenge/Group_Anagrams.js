// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

const str = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

const check = (s) => {
  const hashMap = {};

  for (let data of s) {
    const val = data.split('').sort().join('');
    if (val in hashMap) {
      hashMap[val].push(data);
    } else hashMap[val] = [data];
  }

  console.log(Object.values(hashMap));
};

check(str);
