function lengthOfLongestSubstring(s) {
  const map = {};
  let l = 0,
    max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map && l <= map[s[i]]) {
      l = map[s[i]] + 1;
      map[s[i]] = i;
    } else {
      map[s[i]] = i;
    }
    max = Math.max(i - l + 1, max);
  }
  return max;
}
