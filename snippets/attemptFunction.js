const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e.message : new Error(e);
  }
};

var arrayOutOfBounds = arr => {
  throw new Error("array out of bounds");
};
console.log(attempt(arrayOutOfBounds, [1, 2, 3, 4, 42]));
