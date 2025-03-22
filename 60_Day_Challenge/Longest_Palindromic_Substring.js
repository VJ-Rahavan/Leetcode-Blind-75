const longestPalindrome = (str) => {
  let max = '';
  const check = (s, l, r) => {
    while (l >= 0 && r <= s.length) {
      if (s[l] !== s[r]) {
        return false;
      }
      if (max.length < r - l + 1) {
        max = s.slice(l, r + 1);
      }
      l--;
      r++;
    }
  };

  for (let i = 0; i < str.length; i++) {
    check(str, i, i + 1);
    check(str, i, i);
  }

  return max;
};
