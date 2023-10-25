// function num_string_range(start, end, step) {
//     if (typeof start !== 'string' || typeof end !== 'string' || start.length !== 1 || end.length !== 1) {
//       throw new Error('Start and end must be single characters.');
//     }

//     if (start.charCodeAt(0) > end.charCodeAt(0)) {
//       throw new Error('Start character must be less than or equal to end character.');
//     }

//     if (typeof step !== 'number' || step < 1) {
//       throw new Error('Step must be a positive number.');
//     }

//     const result = [];
//     for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i += step) {
//       result.push(String.fromCharCode(i));
//     }

//     return result;
//   }

//   console.log(num_string_range("a", "z", 2));

// function num_string_range(boshlangich, oxirgi, qadam) {
//     const natija = [];

//     if (typeof boshlangich === 'string' && boshlangich.length === 1 && typeof oxirgi === 'string' && oxirgi.length === 1) {
//       const boshlangichKod = boshlangich.charCodeAt(0);
//       const oxirgiKod = oxirgi.charCodeAt(0);

//       for (let i = boshlangichKod; i <= oxirgiKod; i += qadam) {
//         natija.push(String.fromCharCode(i));
//       }
//     } else if (typeof boshlangich === 'number' && typeof oxirgi === 'number') {
//       for (let i = boshlangich; i <= oxirgi; i += qadam) {
//         natija.push(i);
//       }
//     }

//     return natija;
//   }

//   console.log(num_string_range("a", "z", 3));

//? Dominator games

// function dominator(arr) {
//     const count = {};
//     const n = arr.length;

//     // Count the occurrences of each element in the array
//     for (let i = 0; i < n; i++) {
//       const num = arr[i];
//       if (count[num] === undefined) {
//         count[num] = 1;
//       } else {
//         count[num]++;
//       }

//       // Check if the current element is a dominator
//       if (count[num] > n / 2) {
//         return num;
//       }
//     }

//     // If no dominator is found, return -1
//     return -1;
//   }

//   // Example usage:
//   const arr = [3, 4, 3, 2, 3, 1, 3, 3];
//   console.log(dominator(arr)); // Output: 3

// function dominator(arr) {
//   const count = {};
//   const n = arr.length;
//   for (let i = 0; i < n; i++) {
//     const num = arr[i];
//     if (count[num] === undefined) {
//       count[num] = 1;
//     } else {
//       count[num]++;
//     }
//     if (count[num] > n / 2) {
//       return num;
//     }
//   }
//   return -1;
// }



// arr[2, 4, undefined, null ,"webbrain"]


// const massiv = []
// const massiv2 = new Array();

// // console.log(typeof(massiv));
// // console.log(typeof(massiv2));


// // [1,23,4,5,2,4,5,]
// console.log(massiv2.length);




// const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // raqamlar massivi

// console.log(typeof(numbers));
// const fruits = ['banana', 'orange', 'mango', 'lemon'] // satrlar massivi, mevalar
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // satrlar massivi, sabzavotlar 
// // const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // satrlar massivi, mahsulotlar
// // const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // web-texnologiyalar massivi
// // const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // satrlar massivi, mamlakatlar



// const massiv = new Array(4)

// console.log(massiv);

// let ar = [12, 3, 4, "hey", true, function () {}, null, undefined];

// console.log(ar[0]);
// console.log(ar.at(-3));

// let ar = new Array("4"); // array length

// // console.log(ar[100]);
// console.log(ar.length);

// let ar1 = [1, 2, 3, 4];
// let ar2 = [5, 6, 7];

// // console.log(ar1.toString() + ar2.toString());
// console.log(ar1.join());

// console.log(typeof(ar1));
// console.log(Array.isArray([1]));

// let ar = [];

// console.log(ar == 0);
// console.log(ar == "0");

// let user = ["Abdulloh", "Muhammad", "Sardorbek", "Shohruh"];

// for (let i = 1; i < user.length; i=i+2) {
//   console.log(user[i].toLowerCase());
// }

// console.log(user[0].toUpperCase());

// for (index in user) {
//   console.log(index);
// }  //!  indexlarni ko'rib bera oladi adashmaylik in bo'lsa bo'lsa 

// for(value of user){
//   console.log(value);
// }

// let ar = [1, 2, 3];

// ar.pop();
// ar.push(4);

// console.log(ar[1]);

// ar.unshift(0);
// ar.shift();

// console.log(ar[1]);

// let ar = [1, 2, 3, 4, 5];
// console.log(ar.slice(1, 3));
// console.log(ar);

// let ar = [1, 2, 3, 4, 5]; // insertion, remove

// console.log(ar.splice(2, 1, "Najmiddin tushundingizmi?"));
// console.log(ar);

// let ar1 = [1, 2, 3];
// let ar2 = [4, 5, 6];
// console.log(ar1.concat(ar2, ar1));

// console.log(ar1.indexOf(1, 3));
// console.log(ar1.lastIndexOf(1, 3));

// let str = "1,23,3,4";

// console.log(str.split(","));

// console.log(ar1.join("").split(","));

// geCacl(ar){

// }

// let ar1 = [1, 2, 3, 4];
// let ar2 = ["webbrain", "academy"];
// res = {
//   w: 1,
//   e: 2,
//   b: 2,
//   r: 1,
//   n: 1,
//   c: 1,
//   a: 3,
//   d: 1,
//   m: 1,
// };

// // ar1.reverse();
// console.log(ar1.includes(11));



//? index of 

const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];

const bananaIndex = fruits.indexOf('cherry');
console.log(bananaIndex); // Output: 1

const peachIndex = fruits.indexOf('peach');
console.log(peachIndex); // Output: -1


console.log('Blue Whale'.indexOf('Blue'));
console.log("======");     // returns  0
console.log('Blue Whale'.indexOf('Blute'));
console.log("======");    // returns -1
console.log('Blue Whale'.indexOf('blue'));
console.log("======");     // returns -1
console.log('Blue Whale'.indexOf('Whale', 0));
console.log("======"); // returns  5
console.log('Blue Whale'.indexOf('Whale', 5));
console.log("======"); // returns  5
console.log('Blue Whale'.indexOf('Whale', 7));
console.log("======"); // returns -1
console.log('Blue Whale'.indexOf(''));
console.log("======");         // returns  0
console.log('Blue Whale'.indexOf('', 9));
console.log("======");      // returns  9
console.log('Blue Whale'.indexOf('', 10));
console.log("======");     // returns 10
console.log('Blue Whale'.indexOf('', 11));
console.log("======");     // returns 10