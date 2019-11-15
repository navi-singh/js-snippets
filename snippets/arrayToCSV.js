const arrayTOCSV = (arr, delimiter = ",") =>
  arr.map(v => v.map(val => `${val}`).join(delimiter)).join("\n");

console.log(arrayTOCSV([["a", "b"], ["u", "x"]]));
