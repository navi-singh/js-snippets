const arrayTOCSV = (arr, delimiter = ",") =>
  arr.map(v => v.map(v => `${v}`).join(delimiter)).join("\n");

console.log(arrayTOCSV([["a", "b"], ["u", "x"]]));
