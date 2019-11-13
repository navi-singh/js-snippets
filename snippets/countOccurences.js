const countOccurences = (arr, target) =>
  arr.reduce((acc, val) => (target === val ? acc + 1 : acc), 0);

const arr = [2, 3, 656, 7, 2, 2, 3, 4];
console.log(countOccurences(arr, 2));
console.log(countOccurences(arr, 3));
