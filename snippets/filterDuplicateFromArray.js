const filterDuplicateFromArray = arr => [...new Set(arr)];
const input = [2, 3, 4, 3, 5, 2, 9];
console.log(
  `Unique values in [2,3,4,3,5,2,9]: ${filterDuplicateFromArray(input)}`
);
