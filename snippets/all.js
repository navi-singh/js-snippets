// To test if all element of an array returns true on the predicate
const all = (arr, fn = Boolean) => arr.every(fn);

const input = [4, 0, 2, 6];
console.log(`Input:${input}`);
console.log(`Output for x => x % 2 == 0 :${all(input, x => x % 2 === 0)}`);

const secondInput = [4, 8, 2, 5];
console.log(`Input:${secondInput}`);
console.log(
  `Output for x => x % 2 == 0 :${all(secondInput, x => x % 2 === 0)}`
);
