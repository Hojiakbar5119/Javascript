let user={
    name: 'Webbrain',
    _stir:'1234',
}

let range={
    from:1,
    to:10,
}

let proxy = new Proxy(range,{
    has(target,prop){
        return target.from<=prop && target.to>=prop
    }
    
})

range.to = 10

console.log(99 in proxy);

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