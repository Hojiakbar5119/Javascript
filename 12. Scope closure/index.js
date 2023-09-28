//! Palindromlikka tekshirish
// String.prototype.isPalindrom = function () {
//   let str = "";
//   for (let i = this.length - 1; i >= 0; i--) {
//     str += this[i];
//   }
//   return this.includes(str)
//     ? `True this word is a palindrome`
//     : `False this word is not a palindrome`;
// };
// let i = "ikki";
// console.log(i.isPalindrom());

//! Stringdagi har bir harfni 2marta kopaytirib chiqarish
// String.prototype.dubblelatter = function () {
//   let str = "";
//   for (let i = 0; i < this.length; i++) {
//     str += this[i] + this[i];
//   }
//   return str
// };
// let str = "hello"
// console.log(str.dubblelatter());

//! Raqamlarni qidirish
// String.prototype.searchnum = function () {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] == "0" || parseInt(this[i])) arr.push(parseInt(this[i]));
//   }
//   return arr;
// };
// let str = "hello12hi8o10o";
// console.log(str.searchnum());

//! Harflar sonini topish agar bir biriga teng bolsa true bolmasa false
// String.prototype.equality = function(str2){
//   if (this.length == str2.length) {
//     str1 = this.split("").sort((a, b) => a.localeCompare(b)).join("");
//     str2 = str2.split("").sort((a, b) => a.localeCompare(b)).join("");
//     return str1.includes(str2)
//   }else return false
// };
// let str1 ="abw",str2 = "wba"
// console.log(str1.equality(str2));

//! @ buni a harfiga ozgartirish
// String.prototype.change = function (){
//     return this.split("").map((v) => v == "@"? v="a":v).join("")
// }
// let str = "@s@dbek"
// console.log(str.change());

//! Kichik va katta harflarni sonini hisoblash
// String.prototype.countlatters = function () {
//   let uppercase = 0;
//   let lowercase = 0;
//   this.split("").forEach((v) => {
//     if (v !== " ") {
//       v.includes(v.toUpperCase()) ? uppercase++ : lowercase++;
//     }
//   });
//   return `katta harf ${uppercase}, kichik harf ${lowercase}`;
// };
// let name = "Webbrain Academy";
// console.log(name.countlatters());

// Arrayda ikki honali sonlarni chiqarish
// Array.prototype.num = function () {
//   return this.filter((v) => v > 9 && v < 100);
// };
// let arr = [1, 2, 3, 44, 5, 667, 10, 8, 9, 90, 654, 223, 4, 456, 7, 8, 888, 99];
// console.log(arr.num());