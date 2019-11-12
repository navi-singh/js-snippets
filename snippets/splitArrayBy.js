const result = [[], []];
const splitBy = (arr, filter) =>
  arr.reduce((acc, val) => (acc[filter(val) ? 0 : 1].push(val), acc), result);

splitBy([2, 5, 6, 8, 10, 21], val => val % 2) == 0;
console.log(`Array split is: ${result}`);
