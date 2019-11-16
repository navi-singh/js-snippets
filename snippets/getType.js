const getType = v =>
  // eslint-disable-next-line no-nested-ternary
  v === undefined
    ? "undefined"
    : v === null
    ? "null"
    : v.constructor.name.toLowerCase();
console.log(`Type of 8: ${getType(8)}`);
console.log(`Type of null: ${getType(null)}`);
console.log(`Type of [2,4,5]: ${getType(new Set([2, 4, 5]))}`);
