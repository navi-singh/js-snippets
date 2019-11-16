const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key]));
const input = {
  test1: { age: 35, active: false },
  test2: { age: 28, active: true },
  test3: { age: 31, active: true }
};

console.log(`First active key is:${findKey(input, ob => ob.active)}`);
