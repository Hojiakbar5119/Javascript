// class webbrain{

//     static year = 0;

//     static getYear(){
//         console.log(++webbrain.year);
//     }
//     age = 0;
//     getAge(){
//         console.log(++this.age);
//     }
// }
// let st1 = new webbrain();
// let st2 = new webbrain();


// console.log("-----men funksiya orqali chaqirganim -----");
// webbrain.getYear()
// webbrain.getYear()
// webbrain.getYear()

// console.log("-----men oddiy orqali chaqirganim -----");

// st1.getAge()
// st1.getAge()
// st2.getAge()


// console.log("-----men static orqali chaqirganim -----");
// st1.getYear()
// st1.getYear()
// st2.getYear()
// st2.getYear()



// class Person{
//     constructor(firstName, lastName){
//         // console.log(this);
//         this.firstName = firstName;
//         this.lastname = lastName;
//     }
// }


// const per1 = new Person("Hojiakbar","Abdulhakimov");
// console.log(per1);

// class Person{
//     constructor(firstName, lastName,age, country,city){
//         console.log(this);
//         this.firstName = firstName;
//         this.lastname = lastName;
//         this.age = age;
//         this.country = country;
//         this.city = city
//     }

//     getFullName(){
//         const fullName = this.firstName + " " + this.lastname;
//         return fullName
//     }

// }


// const per1 = new Person("Hojiakbar","Abdulhakimov", 23, "Uzbekistan", "Tashkent");
// console.log(per1);
// console.log(per1.getFullName());


// Sizning kodingiz JavaScript klassi yaratish va klassdagi xususiyatlar va ularning qo'llanilishini o'rgatadi. 

// - `_name` xususiyati "webbrain" qiymatiga ega. Undan tashqari, bu xususiyatni o'zgartirish uchun kirish, ma'lumotni olish va uni o'zgartirish imkoniyati mavjud.
// - `#protected` xususiyati esa "I don't know do'nt touch me!" qiymatiga ega, lekin u klassning ichida maxfiy (private) hisoblanadi va unga tashqari tashqi kodlar uchun rad etilgan. Buning uchun # belgisi ishlatiladi. U "get" va "set" metodlari orqali o'qilishi va o'zgartirilishi mumkin.
// - `get getProtect` xususiyati, `#protected` xususiyatini o'qish uchun ishlatiladi. Bu metodni chaqirib, `#protected` xususiyatining qiymatini konsolga chiqaradi.
// - `set getProtect` xususiyati, `#protected` xususiyatini o'zgartirish uchun ishlatiladi. Bu metodni chaqirib, `#protected` xususiyatining qiymatini yangilab qo'yadi.

// Sizning kodingiz to'g'ri ishlaydi, lekin hozirda `pro.getProtect` orqali `#protected` xususiyati o'qiladi va konsolga chiqariladi. Shuningdek, `pro.getProtect` ga qiymat tashlab qo'yilgan holatda `pro.getProtect = "Tegma kuyasan";` orqali qiymatni o'zgartirish ham mumkin. Bu, xususiyatga kirish, uni o'qish va o'zgartirish uchun getter va setter metodi ishlatishning o'rtasidagi o'zgartirishlar bilan kelsa keladi.

// class Protected{
//     _name = "webbrain"
//     #protected = "I don't know do'nt touch me!"
//     get getProtect(){
//         console.log(this.#protected);
//         // return this.#protected
//     }
//     set getProtect(vl){
//         // console.log(this.#protected);
//          this.#protected =vl
//     }
// }
// let pro = new Protected()
// // console.log(pro);

// pro.getProtect;
// // pro.getProtect = "Tegma kuyasan";
// // pro.getProtect


class User{
    getName(){
        console.log("no name");
    }
}

let obj = {
    info(){
        console.log("No info");
    }
}

Object.assign(User.prototype, obj)



let us = new User();
// console.log(us);

us.info();