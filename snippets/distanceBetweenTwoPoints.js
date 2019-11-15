const distanceBetweenPoints = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);

console.log(
  `Distance between (1,1) and (5,5): ${distanceBetweenPoints(1, 1, 5, 5)}`
);
