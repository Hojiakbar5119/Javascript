// Sardor, [8/25/2023 5:48 PM]
// 1. Uchburchak yuzi
// 2. Aylana uzunligi
// 3. Doira yuzini topish
// 4. Sonni palindromlikka tekshirish (121 => 121)
// 5. Sonni murakkablikka tekshirish (131)
// 6. FizzBuzz, batafsil pastda👇

// Sardor, [8/25/2023 5:49 PM]
// 1-100 sonlar, 3ga  "Fizz", 5ga "Buzz", 3 ga 5 ga "FizzBuzz"

// hart operatorlari turli shartlar bajarilishiga qarab shu shartlarga mos topshiriqlarni bajarishga mo'ljallangan kodlarni ishga tushirishda ishlatiladi.

// Shart bayonotlari
// Aksar hollarda dasturchi kod yozayotgan paytida tuli xil holatlar uchun turli kodlarning ishga tushishini hohlaydi.

// Bunday hollarda shart bayonotalaridan foydalanish mumkin.

// JavaScript dastrulash tilida quyidagi shart bayonotlari mavjud:

// Shart to'g'ri bo'lganda (shartning mantiqiy qiymati rost (true) bo'lganda) ishga tushadigan kod blokini belgilash uchun if kalit so'zidan foydalanish.
// Shart noto'g'ri bo'lgandan (shartning mantiqiy qiymati yolg'on (false) bo'lganda) ishga tushadigan kod blokini belgilash uchun else kalit so'zidan foydalanish.
// Agar birinchi shart noto'g'ri bo'lsa va ikkinchi shartni ham qo'shishga ehtiyoj sezilsa unda else if kalit so'zidan foydalanish.
// Agar shartlar soni juda ko'p bo'lib bu shartlarning har biriga alohida-alohida kod blokini belgilash zaruriyati yuzaga kelsa, switch kalit so'zidan foydalanish.
// switch kalit so'zi yordamida shartlarni yozish haqida keyingi mavzuda batafsil tanishamiz.

// fnction declaration
// function ex
// arrrow function

// function declaration

// console.log("Hojkiakbar")
// console.log("Hojkiakbar")
// console.log("Hojkiakbar")
// console.log("Hojkiakbar")
// console.log("Abdulloh")
// console.log("Abdulloh")
// console.log("Abdulloh")
// console.log("Abdulloh")

// console.log(ShowProgram())

// function ShowProgram() {
//     return "bu qiymat ishlagapti bu faqat node js orqali ishlashi mumkin ";
// }

// // function declaration

// function exspresion

// console.log(getData())

// const getData = function() {
//     return "men function experssion orqali ishlatdim"
// }

// hello = function() {   return "Salom JavaScript!";}

// console.log(hello());

//? homework

// uchburchakni yuzini topamiz

// function TriangleAreas(a,h) {
//     return "uchburchakni yuzinig topish furmulasi orqali ishlatishimiz mumkin \t  " + (a*h/2); 
    
// }

// console.log(TriangleAreas(6,3))

// Aylana uzunligi

// function CircleAres(r){
//     return Math.PI * Math.pow(r,2);
// }


// Doir yuzini topish?
// let n = 1;
// function uzunligi(n) {
//   if (n <= 0) console.log("Noto'gri malumot kiritildi!");
//   n = 3.14 * n ** 2;
//   console.log(n);
// }
// uzunligi(10);

// Murakkab sonni topish
// let m = 0;
// const murakkab = (m) => {
//   for (let i = 2; i <= m; i++) {
//     let son = 0;
//     for (let n = 1; n <= i; n++) {
//       if (i % n === 0) son++;
//     }
//     if (son > 2) console.log(i, "Murakkab son");
//   }
// };
// murakkab(15);

// Uchburchak yuzini topish
// let a = 0,
//   b = 0,
//   c = 0;
// const yuza = (a, b, c) => {
//   let p = (a + b + c) / 2;
//   S = p * (p - a) * (p - b) * (p - c);
//   p = Math.sqrt(S);
//   console.log(Math.sqrt(S), "~~", Math.round(p), "Uchburchak Yuzasi");
// };
// yuza(5, 6, 2);

// const fizbuz = (n) => {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("Fiz Buz");
//     } else if (i % 3 === 0) {
//       console.log("Fiz");
//     } else if (i % 5 === 0) {
//       console.log("Buz");
//     } else console.log(i);
//   }
// };

// fizbuz(50);