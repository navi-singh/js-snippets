const findLast = (arr, fn) => arr.filter(fn).pop();

const input = [2, 4, 5, 6, 9, 1];
console.log(
  `Last element divided by 3 is:${findLast(input, elem => elem % 3 === 0)}`
);
