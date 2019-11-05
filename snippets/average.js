const average = (...nums) =>
  (nums.reduce((acc, val) => acc + val, 0) / nums.length).toFixed(2);

console.log(`Average of 3,65,8 => ${average(3, 65, 8)}`);
console.log(`Average of 4,8 => ${average(4, 8)}`);
