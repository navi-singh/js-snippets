const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

console.log(intersectionBy([2.4, 4.4], [6, 4, 2.4], Math.floor));
