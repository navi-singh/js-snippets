// To test if all element of an array returns true on the predicate
const all = (arr, fn = Boolean) => arr.every(fn);

const input = [4, 0, 2, 6];
console.log(`Input:${input}`);
console.log("Output for x => x % 2 == 0 :" + all(input, x => x % 2 == 0));

const input_2 = [4, 8, 2, 5];
console.log(`Input:${input_2}`);
console.log("Output for x => x % 2 == 0 :" + all(input_2, x => x % 2 == 0));
