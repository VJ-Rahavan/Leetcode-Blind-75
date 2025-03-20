const Valid_Parentheses = (s) => {
  const stack = [];

  const type = { '{': '{', '[': '[', '(': '(' };

  const close_type = { '}': '}', ']': ']', ')': ')' };

  const pair = { '{': [']', ')'], '[': ['}', ')'], '(': [']', '}'] };

  for (let i of s) {
    if (i in type) {
      stack.push(i);
    } else if (i in close_type) {
      const val = stack.pop();

      if (pair[val].includes(i)) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
