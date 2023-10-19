// function* myGenerator() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }

//   const generator = myGenerator();
//   console.log(generator.next());
//   console.log(generator.next());
//   console.log(generator.next());
//   console.log(generator.next());


// function* getData(){
//     yield 1;
// }
// const generator = getData();

// console.log(generator.next());  


// function* GetData(){
//     let id=users.length;
//     while (true) {
//         yield ++id;
//     }
// }
// const generator = GetData();

// // console.log(generator.next());
// // console.log(generator.next());


// let users = [
//     { id: 1, name: 'Eshmat1' },
//     { id: 2, name: 'Eshmat2' },
//     { id: 3, name: 'Eshmat3' },
//     { id: 4, name: 'Eshmat4' },
//     { id: 5, name: 'Eshmat5' },
//     { id: 6, name: 'Eshmat6' },
// ]
// A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
// Returns the elements of an array that meet the condition specified in a callback function.

// const onDelete = (id) => {
//     let res = users.filter((vl)=>vl.id !== id);
//     users=res;
// }
// // onDelete(2);
// // onDelete(3);

// const addEl = (usr)=>{
//     users = [...users, {id:generator.next().value, name:usr}];
// };

// onDelete(2);
// addEl("Gulbashakar")
// addEl("Gulbashakar1")
// // onDelete(6);    
// addEl("Gulbashakar2")
// // onDelete(6);




function* GetData() {
    let id = 0;
    while (true) {
        yield ++id;
    }
}
const generator = GetData();

// console.log(generator.next());
// console.log(generator.next());

const getNextId = ()=> generator.next().value;


let users = [
    { id: getNextId(), name: 'Eshmat1' },
    { id: getNextId(), name: 'Eshmat2' },
    { id: getNextId(), name: 'Eshmat3' },
    { id: getNextId(), name: 'Eshmat4' },
    { id: getNextId(), name: 'Eshmat5' },
    { id: getNextId(), name: 'Eshmat6' },
]



console.log(users);
const onDelete = (id) => {
    let res = users.filter((vl) => vl.id !== id);
    users = res;
}
// onDelete(2);
// onDelete(3);

const addEl = (usr) => {
    users.push({id:getNextId(), name:usr})
};

onDelete(2);
addEl("Gulbashakar")
addEl("Gulbashakar1")
// onDelete(6);    
addEl("Gulbashakar2")
// onDelete(6);

console.log(users);
