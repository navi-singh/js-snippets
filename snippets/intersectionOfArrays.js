const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

console.log(intersection([3, 5, 6], [1, 3, 6]));
