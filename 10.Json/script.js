//? homework


let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let date = new Date();
let yy = date.getFullYear() - Math.round(date.getFullYear() / 100) * 100;

const moment = () => {
  return {
    format(data) {
      switch (data) {
        case "MMMM Do YYYY, h:mm:ss a":
          return `${
            month[date.getMonth()]
          } ${date.getDate()}th ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} pm`;
          break;
        case "dddd":
          return `${day[date.getDay()]}`;
          break;
        case "MMM Do YY":
          return `${month[date.getMonth()].slice(
            0,
            3
          )} ${date.getDate()}th ${yy}`;
          break;
        case "LT":
          return `${date.getHours()}:${date.getMinutes()} PM`;
          break;
        case "LTS":
          return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} PM`;
          break;
        case "L":
          return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
          break;
        case "l":
          return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
          break;
        case "LL":
          return `${
            month[date.getMonth()]
          } ${date.getDate()}, ${date.getFullYear()}`;
          break;
        case "ll":
          return `${month[date.getMonth()].slice(
            0,
            3
          )} ${date.getDate()}, ${date.getFullYear()}`;
          break;
        case "LLL":
          return `${
            month[date.getMonth()]
          } ${date.getDate()} ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()} PM`;
          break;
        case "lll":
          return `${month[date.getMonth()].slice(
            0,
            3
          )} ${date.getDate()} ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()} PM`;
          break;
        case "LLLL":
          return `${day[date.getDay()]}, ${
            month[date.getMonth()]
          } ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} PM`;
          break;
        case "llll":
          return `${day[date.getDay()].slice(0, 3)}, ${month[
            date.getMonth()
          ].slice(
            0,
            3
          )} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} PM`;
          break;
      }
    },
  };
};
console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
console.log(moment().format("dddd"));
console.log(moment().format("MMM Do YY"));
console.log(moment().format("LT"));
console.log(moment().format("LTS"));
console.log(moment().format("L"));
console.log(moment().format("l"));
console.log(moment().format("LL"));
console.log(moment().format("ll"));
console.log(moment().format("LLL"));
console.log(moment().format("lll"));
console.log(moment().format("LLLL"));
console.log(moment().format("llll"));


// Masalalar

// 1. Sonni osish tartibidan buzilgan raqamni topish
const firstNonConsecutive = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - arr[i - 1] !== 1) return arr[i]
    }
    return null
};
console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6,8]));

// 2. Butun sonni bo'luvchilarini kamayish tartibida yozing
const factors = (x) => {
  let arr = [];
  if (x % 2 == 0 && x > 1) {
    for (let i = 1; i <= x; i++) {
      if (x % i == 0) {
        arr.push(i);
      }
    }
    return arr.sort((a, b) => b - a);
  } else return -1;
};
console.log(factors(8));

// 3.
const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
  }
console.log(GetSum(172, -320));