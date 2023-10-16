// class Users{
//     // age =0;
//     constructor(title){
//         // console.log(`Salom Xus kelibsiz ${title} kompaniyaga`);
//         this.title = title
//         //  console.log(this);
//     }
//     // console.log('');
//      FullName() {
//         console.log(++this.age);
//         // console.log(`Hi mening ismim`);
//     }
    
//     welcomeMs(){
//         console.log(`Hi ${this.title} welcome to webbbrain academy`);
//     }
// }
// let usr1 = new Users("Eshmat");

// usr1.welcomeMs()
// // let usr2 = new Users("pdp")
// // let usr2 = new Users("pdp")
// // let usr3 = new Users("Najot talim")





// // usr1.FullName()
// // usr1.FullName()





// class User{
//     constructor(title){
//         this.title = title;
//         console.log(this);
//     }

//     set welcomeMs(value){
//         console.log(value);
//         // console.log(`Salom mening ismim ${value}`);
//     }

//     get welcomeMs(){
//         console.log(this);
//         console.log(`Salom mening ismim ${this.title}`);
//     }
// }

// let use1= new User("Hojiakbar")
// let use2= new User("assalom")

// use1.welcomeMs = "Dilshod"
// use1.welcomeMs;


class Animals{
    speed(hour){
        console.log("bu yerda bir necha malumotlarni yozishingiz mumkin");
        console.log(`this animal ${hour}km per hour run`);
    }
}

class rabbit extends Animals {
    info(){
        console.log(`quyoni ni 2 ta qulogi bor`);
    }
}
class wolf extends Animals {
    info(){
        // console.log(this);
        console.log(`bo'rini ni 2 ta qulogi bor`);
    }
}

// let animals = new Animals()
let rb = new rabbit()
let wl = new wolf()

rb.info("quyon")
rb.speed("12")
console.log("====================");
wl.info("bo'ri")
wl.speed(10)