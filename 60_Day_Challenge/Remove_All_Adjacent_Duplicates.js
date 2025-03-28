// Input: s = "abbaca"
// Output: "ca"
// Explanation:
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

function removeDuplicates(s) {
  const stack = [];

  for (let i of s) {
    const val = stack.pop();
    if (val !== i) {
      stack.push(val);
      stack.push(i);
    }
  }

  return stack.join('');
}
