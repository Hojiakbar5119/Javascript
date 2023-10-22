let ar= [1,2,3,54,53,3]
ar = ar.reverse()
console.log(ar);

let exp = ar.reduce((first,current)=>first/current,1)
console.log(exp);