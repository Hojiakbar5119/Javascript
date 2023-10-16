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





class User{
    constructor(title){
        this.title = title;
        console.log(this);
    }

    set welcomeMs(value){
        console.log(value);
        // console.log(`Salom mening ismim ${value}`);
    }

    get welcomeMs(){
        console.log(this);
        console.log(`Salom mening ismim ${this.title}`);
    }
}

let use1= new User("Hojiakbar")
let use2= new User("assalom")

use1.welcomeMs = "Dilshod"
use1.welcomeMs;