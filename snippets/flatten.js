const flatten = (arr, depth = 1) =>
  arr.reduce(
    (acc, val) =>
      acc.concat(depth > 1 && Array.isArray(val) ? flatten(val) : val),
    []
  );
const input = [2, [4, 2], [2, [4, [5, 8], 98]]];
console.log(`Flattened array:${flatten(input)}`);
