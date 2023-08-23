//! if else

//? else if

// if("condition"){"code"}
// else{"code"}

// cls

// if(a>0){
//     console.log(`a = ${a}  ning noldan katta bo'ladi `);
// }
// else{
//     console.log("u qiymat noldan kichkina yani manfiy qiymatlar qabul qiladi ");
// }

// console.log(1 == "0"  || false)\

// console.log(!(1 !== "0" && true && "hey"));

// let temp=1;
// if(temp){
//     console.log("ishladi");
// }
//  if(true) {
//     console.log("ishlagapti");
// // }

// let temp = prompt();

// if (temp === "sovuq") {
//   console.log(`havo ${temp} , shunaqa kiyinib oling`);
// } else if (temp === "yomg'ir") {
//   console.log(`havo ${temp} , shunaqa kiyinib oling`);
// } else if (temp === "bulut") {
//   console.log(`havo ${temp} , shunaqa qalin qor yog'adi`);
// } else if (temp === "issiq") {
//   console.log(`havo ${temp} , shunaqa bemalol yuring`);
// } else {
//   console.log("nomalum ob havo");
// }

// 0darajada past bo'ladi sibir
// 0 darajada 15 darajada sovuq qish oylik o'zbekistondan yasagapsiz

// 15 darajadan 25darajagacha juda salqin havo illiq bo'ladi

// 25 35 bo'lsa havo issiq yoz oylarida

// 35 darajada juda  issiq bo'ladi arabiston hatto O'zbekistonda
// 1&&1=1
// 1&&0=0
// 1||1=1
// 1||0=1

// let gradus = prompt()

// if(gradus<0){
//     alert(`${gradus} bu darajadagi sovuq sibir o'lkalarda yasagapsiz`);
// } else if(0<=gradus && gradus<15){
//     alert(`${gradus} bu darajadagi sovuq qish oylarida o'zbekistondan yashagan ediz`);
// }else if(gradus>=15 && gradus <25){
//     alert(`${gradus} bu darajadagi havo juda salqin va havo illiq bo'ladi `);
// }else if(gradus>=25 && gradus <35){
//     alert(`${gradus} bu darajadagi havo issiq `);
// }else{
//     alert(`${gradus} bu havo anomal issiq lekin nomalum obhavo desak bo'ladi`)
// }

// if(gradus<45){
//     console.log(`${gradus} bu havo anomal issiq lekin nomalum obhavo desak bo'ladi`);
// }else if(gradus<35){
//     console.log(`${gradus} bu havo judda issiq `);
// }else if(gradus<15){
//     console.log(`${gradus} bu darajadagi havo juda salqin va havo illiq bo'ladi `);
// }else if(gradus<0){
//     console.log(`${gradus} bu darajadagi sovuq qish oylarida o'zbekistondan yashagan ediz`);
// }else{
//     console.log("nomalum obhavo")
// }

// if (temp === "sovuq") {
//   console.log("ehtiyot chorasini ko'rishni iltimos qilaman");
// }

// if(null??undefined){
//     console.log("salsdad");
// }

// console.log(1??null);
// switch (new Date().getDay()) {
//     case 0:
//       kun = "Yakshanba";
//       break;
//     case 1:
//         kun = "Dushanba";
//        break;
//     case 2:
//          kun = "Seshanba";
//         break;
//     case 3:
//       kun = "Chorshanba";
//         break;
//     case 4:
//         kun = "Payshanba";
//        break;
//     case 5:
//         kun = "Juma";
//         break;
//     case 6:
//       kun = "Shanba";
//   }console.log(kun);

// let hafta_kunlari=4;

// switch(hafta_kunlari){
//     case 0:
//         kun ="Yaxshanba";
//         break;
//     case 1:
//         kun ="Dushanba";
//         break;

//     case 2:
//         kun ="Seshanba";
//         break;

//     case 3:
//         kun ="Chorshanba";
//         break;

//     case 4:
//         kun ="Payshanba";
//         break;

//     case 5:
//         kun ="Juma";
//         break;
//     case 6:
//         kun ="Shanba";
//         break;

// }console.log(kun);

//! switch bilan berilgan case lar qat'iy tenglik taqqoslashidan (===) foydalanadilar.

//? Ya'ni bunda o'zgaruvchilarning qiymati ham ma'lumot tipi ham bir xil bo'lishi kerak.

//? Quyidagi namunada x o'zgaruvchisiga bironta ham holat (case) mos kelmaydi. Shuning uchun ham defaul bilan berilgan kod ishga tushadi.

// nullish null undefined

// console.log(true ?? undefined);

// if()  ? else :
// let temp = 2;

// temp < 0 ? console.log("havo sovuq") : console.log("narmalni havo");

// if("0"){
//     alert("Hello")
// }
// // Hello
// let a=2;
// let b=1;

// let result ;
// if(a+b<4){
//     result ='Bellow';
// }else{
//     result ="over"
// }
// console.log(result);

// let a = 4;
// let b = 1;

// let result;


// a+b<4? result='Bellow':result="over";
// console.log(result);

// let login ='Employe'
// let message;

// if(login == 'Employe'){
//     message = 'Hello'
// }else if(login == 'Director'){
//     message = 'Gretting'
// }else if(login == ''){
//     message = 'no login'
// }else{
//     message='not found'
// } 
// console.log(message);

let login = 'Employe'
let message;


login == 'Employe'
 ? message = 'hello' 
 : login == 'Director' 
 ? message = 'Grettings'
 : login ==''
 ? message ="no login"
 :console.log('not found')