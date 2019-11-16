const getDaysBetweenDates = (firstDate, secondDate) =>
  (secondDate - firstDate) / (1000 * 3600 * 24);
const firstDate = new Date("2019-09-01");
const secondDate = new Date("2019-09-29");
console.log(
  `Days between '2019-09-01' and '2019-09-29' are: ${getDaysBetweenDates(
    firstDate,
    secondDate
  )}`
);
