// ! "proto" va "prototype" JavaScriptda o'zaro bog'liqlikka ega bo'lgan usullar va obyektlar haqida ma'lumotlarni boshqarish uchun ishlatiladigan muhim terimlardir.

//? 1. `prototype`: 
//    - "prototype" so'zi funksiya (constructor) obyektlarining xususiy xususiyati. 
//    - Har bir funksiya obyekti, `prototype` nomli xususiyatni o'z ichiga oladi. Bu xususiyatga qo'shimcha funksiyalar yaratishda qulaylik qiladi. 
//    - Misol:
//      ```javascript

    //  function Person(name) {
    //    this.name = name;
    //  }
     
    //  Person.prototype.sayHello = function() {
    //    console.log(`Salom, men ${this.name}`);
    //  };
     
    //  const person1 = new Person('John');
    //  person1.sayHello(); // "Salom, men John"
//      ```

// 2. `__proto__` yoki "proto":
//    - `__proto__` so'zi obyektlar orasidagi prototipning ("prototype") o'z xususiyati. Bu prototip, obyektning o'zining xususiyatlarini va funksiyalarini o'z ichiga olish imkonini beradi.
//    - Misol:
//      ```javascript
    // ? const cat = { legs: 4 };
    // ? const myCat = { color: 'orange' };
     
    //?  myCat.__proto__ = cat; // myCat prototipini cat ga bog'laydi
     
    // ? console.log(myCat.legs); // 4, cat obyektining xususiyatiga murojaat qiladi
    //  ```

// Yaqin paytda `__proto__` o'rniga `Object.setPrototypeOf()` va `Object.getPrototypeOf()` usullari yordamida prototipni o'zgartirishda `Object.create()` usuli keng tarqalgan shaklda ishlatilmoqda.

// Eng muhim farqi quyidagi:
// - `prototype` obyekt tuzilishi funksiyalar uchun (constructor functions) ishlatiladi.
// - `__proto__` obyektlar orasidagi bog'liqlik uchun ishlatiladi va obyektning boshqa obyektlarning xususiyatlariga murojaat qilish imkonini beradi.

// Buni xulosa qilib aytsak, "prototype" funksiya obyektlarini yaratish uchun ishlatiladi, "proto" (yoki `__proto__`) esa obyektlarning bog'liqlik tizimini tuzish uchun ishlatiladi.


// ! buy yerda protoni birinchi obeyktni va ikkinchi obyektga clonlashtirgapti 
// let user1 = {name: "webbrain academy"}
// let user2 = {title: "It academy"}

// user1.__proto__ = user2;

// // ? user1 ni user2 qo'shilib qolsin degan manoda aytilgan 

// console.log(user1)


// ! sonlardan nima massivlardan ishlatish qanaqa bo'larkan 


let arr =[1,2,3,4,5,6,7,8,3,3,4,3,2,1]
Array.prototype.remove = function (n){
    let res = this.filter((value) => value !==n);
    console.log(res);
};
arr.remove(4);