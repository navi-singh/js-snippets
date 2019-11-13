const filterArray = (arr, filter = Boolean) => arr.filter(filter);

const arr = [1, 5, "2", "", "trfvc", null, 34];

console.log(filterArray(arr));
console.log(filterArray(arr, val => Number.isInteger(val)));
