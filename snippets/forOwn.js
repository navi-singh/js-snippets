const forOwn = (obj, fn) => Object.keys(obj).forEach(elem => fn(obj[elem]));
const input = {
  first: { name: "abc", letters: 3 },
  second: { name: "test", letters: 4 }
};

const fn = elem =>
  console.log(`String "${elem.name}" has ${elem.letters} letters in it.`);

forOwn(input, fn);
