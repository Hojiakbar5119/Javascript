// const user ={
//     name:"webbrain",
//     last:"Academy",
//     get fullName(){
//         console.log(this.name, this.last);
//     },
//     set fullName(value){
//         console.log(value || (this.name,this.last));
//     }
// }


// // user.fullName()
// user.fullName = {name:"eshmat", last:"Toshmat"}
// user.fullName



//! cyrry function 


// function Alpha(a){
//     return (b)=>{
//         return (c)=>{
//             return a+b+c
//         }
//     }
// }

// console.log(Alpha(2)(3)(4));


// ? arrow function uchun curry function qilsa bo'ladi 

// const Alpha = (a)=> (b)=> (c)=> a+b+c;

// console.log(Alpha(1)(2)(3));


// const mergewords = function(l){
//     return (a)=>(b)=>(c)=>(d)=>{
//         return `${l} ${a} ${b} ${c} ${d}`
//     }
// }

// console.log(mergewords('There')('is')('no')('spoon. '));


function Mergewords(a){
    return(b)=>{
        return(c)=>{
            return(d)=>{
                return(l)=>{
                    return `${a} ${b} ${c} ${d} ${l}`
                }
            }
        }
    }
}

console.log(Mergewords('there')('is')('no')('spoon')('.'));