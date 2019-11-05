const approximateEqual = (v1, v2, epsilon = 0.001) =>
  Math.abs(v1 - v2) < epsilon;
const pieTest = approximateEqual(Math.PI / 2, 1.5708);
console.log(`test pie/2:${pieTest}`);

console.log(`test different int:${approximateEqual(2, 4)}`);
