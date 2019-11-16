const indexOfAll = (arr, val) =>
  arr.reduce((acc, elem, index) => (elem === val ? [...acc, index] : acc), []);

console.log(`Index of val 5: ${indexOfAll([3, 2, 5, 6, 5])}`);
