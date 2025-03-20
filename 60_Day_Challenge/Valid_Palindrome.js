// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

const s = 'A man, a plan, a canal: Panama';

const pal = (str) => {
  const regex = /^[A-Za-z]+$/;
  let newStr = '';

  for (let i of str) {
    if (regex.test(i)) {
      newStr += i.toLowerCase();
    }
  }
  let l = 0,
    r = newStr.length - 1;
  while (l < r) {
    if (newStr[l] !== newStr[r]) {
      return false;
    }
    l++;
    r--;
  }

  return true;
};
