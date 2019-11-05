const averageBy = (arr, fn) =>
  arr
    .map(typeof fn === "function" ? fn : val => val[fn])
    .reduce((acc, val) => acc + val, 0) / arr.length;

console.log(`Average of array of objects after mapping the required element:
  ${averageBy(
    [{ a: 2 }, { a: 7 }, { a: 1 }, { a: 9 }, { a: 4 }],
    obj => obj.a
  )}`);
