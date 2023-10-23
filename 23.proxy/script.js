// let user={
//     name: 'Webbrain',
//     _stir:'1234',
// }

//? Obyektdan  1dan 10gacha bo'lgan mmalumotlarni bor yoki yo'qligini tekshirish 

// let range={
//     from:1,
//     to:10,
// }

// let proxy = new Proxy(range,{
//     has(target,prop){
//         return target.from<=prop && target.to>=prop
//     }
    
// })

// range.to = 10

// console.log(99 in proxy);

// let proxy = new Proxy(user, {
//     // get(target,props){
//     //     // return "Hello world"

//     //     return target[props];

//     // }


//     ownKeys(target){
//        return Object.keys(target).filter(vl=> !vl.startsWith("_"))
//     }
// })

// // console.log(user.name);
// // console.log(proxy._stir);

// console.log(proxy);

// for(vl in proxy){
//     // console.log(user[vl]);
//     console.log(vl);
// }

//? get set method orqali qoshish yani reflect qilish 
// const target ={
//     name: 'Hojiakbar',
//     age:23, 
// }

// const handler = {
//     set: function(target,prop, value){
//         console.log(`Men Set metod orqali ${prop} va ${value} qo'shdim`);
//         return target[prop] =value
//     }
// }

// const proxyes = new Proxy(target,handler)

// proxyes.job = 'Frontend mentor'

// console.log(proxyes);
// console.log(target);

//? call user orqali chaqirish qanaqaligini bilib olamiz 

// const user ={
//     name: "hojiakbar",
//     _pw:'1234',
//     get(){
//         console.log(this.name, this._pw);
//     }
// }

//  console.log(user.get);

// const data = user.get
// data.call(user)
// data


function get(){
    console.log(this);
}
console.log(this);

get()