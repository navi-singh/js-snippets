const differenceBy = (first, second, fn) => {
  const uniquesInB = new Set(second.map(fn));
  return first.filter(val => !uniquesInB.has(fn(val)));
};

console.log(differenceBy([2, 3, 4, 5, 6], [2, 4, 6], val => Math.floor(val)));
