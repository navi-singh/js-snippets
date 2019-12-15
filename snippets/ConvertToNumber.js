// Prepending any variable with plus (+) automatically try to convert any variable to number
console.log(+("1234")); // 1234
console.log(+("ABC")); // NaN
console.log(+("19ABC")); // NaN

// If the object is of date type it will return the timestamp number

console.log(+new Date()); // 1576443239315

const obj = { bb: 19};
console.log(+obj); //NAN
