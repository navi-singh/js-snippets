const arr = [2, [3, 34, [23, 45], 67, 5], [4, 9]];
const flattenDeepArray = arrValues =>
  [].concat(
    ...arrValues.map(val => (Array.isArray(val) ? flattenDeepArray(val) : val))
  );

console.log(flattenDeepArray(arr));
