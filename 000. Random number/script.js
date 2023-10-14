// random number 

// const genrator = document.querySelector("#generate")
// console.log(genrator)

const randomizeFuntion = (min,max)=>{
    return Math.floor(Math.random()*(max-min+1))+min
}

const generate = ()=>{

    const minEl = document.getElementById("min")
    const maxEl = document.getElementById("max")
    const min = Number(minEl.value);
    const max = Number(maxEl.value);
    
    // console.log("generating...");
    const textEL = document.querySelector('#placeholder')
    textEL.textContent = randomizeFuntion(min,max)
    
    if(min=="" || max==""){
        return  textEL.textContent = "Iltimos ma'lumotni kiriting!"
    }

    if(min>max){
         alert("iltimos sonlarni to'gri yozing")
         return textEL.textContent = "#";
    }
   
}
// generate()

const btnEl= document.getElementById("generate");
btnEl.addEventListener('click',generate)





















// let obj = {
//     name: "webbrain",
//     title: "It center"
// };

// // Obyektni Map obyektiga o'zgartiramiz
// let map = new Map(Object.entries(obj));

// // Map obyektni qaytaradi
// let resultObject = Object.fromEntries(map);

// console.log(resultObject);



// let list =[
//     {id:1, name:'eshmat',title:'CEO'},
//     {id:2, name:'toshmat',title:'CTO'},
//     {id:3, name:'gulmat',title:'HR'},
//     {id:4, name:'holmat',title:'CEE'},
// ]
// const update = ()=>{
//     //code here ...
// }

// update({id:4, title:'HR'})


// let list = [
//     { id: 1, name: 'eshmat', title: 'CEO' },
//     { id: 2, name: 'toshmat', title: 'CTO' },
//     { id: 3, name: 'gulmat', title: 'HR' },
//     { id: 4, name: 'holmat', title: 'CEE' },
// ];

// const update = (updateData) => {
//     // `updateData` obyekti ichidagi ID va yangi qiymatlar
//     const { id, title, name } = updateData;

//     // `list` massivini o'zgartirish
//     for (let i = 0; i < list.length; i++) {
//         if (list[i].id === id) {
//             // `id` mos kelgan malumot topilganda yangi qiymatlarni o'zgartiramiz
//             if (title !== undefined) {
//                 list[i].title = title;
//             }
//             if (name !== undefined) {
//                 list[i].name = name;
//             }
//             break; // Malumotni topib bo'lganda to'xtatamiz
//         }
//     }
// };

// // Funksiyani chaqirish
// update({ id: 4, title: 'HR', name: 'newName' });

// // Yangilangan malumotni ko'rish
// console.log(list);




// const list = [
//     { id: 1, name: 'eshmat', title: 'CEO' },
//     { id: 2, name: 'toshmat', title: 'CTO' },
//     { id: 3, name: 'gulmat', title: 'HR' },
//     { id: 4, name: 'holmat', title: 'CEE' },
// ];

// const update = (updatedInfo) => {
//     // Malumotni yangilash uchun berilgan ID bo'yicha obyektni izlash
//     const index = list.findIndex(item => item.id === updatedInfo.id);

//     // ID'si mos kelgan obyektni yangilash
//     if (index !== -1) {
//         list[index] = { ...list[index], ...updatedInfo };
//         console.log(`Malumot ID=${updatedInfo.id} yangilandi.`);
//     } else {
//         console.log(`ID=${updatedInfo.id} mos kelgan malumot topilmadi.`);
//     }
// };

// update({ id: 4, title: 'HR' });

// // Yangilangan malumotni ekranga chiqarish
// console.log(list);


// let list = [
//     { id: 1, name: 'eshmat', title: 'CEO' },
//     { id: 2, name: 'toshmat', title: 'CTO' },
//     { id: 3, name: 'gulmat', title: 'HR' },
//     { id: 4, name: 'holmat', title: 'CEE' }
// ];

// const update = (updateData) => {
//     // ID ni izlash
//     const idToUpdate = updateData.id;
    
//     // List ichidagi obyektlarni tekshirish va yangilash
//     for (let i = 0; i < list.length; i++) {
//         if (list[i].id === idToUpdate) {
//             // Yangi ma'lumotlarni kiritish
//             if (updateData.name) {
//                 list[i].name = updateData.name;
//             }
//             if (updateData.title) {
//                 list[i].title = updateData.title;
//             }
//             return; // Tugash, chunki ma'lumot topildi va yangilandi
//         }
//     }
    
//     // Agar ID topilmasa, xatolik xabarini chiqarish
//     console.log(`ID=${idToUpdate} topilmadi.`);
// }

// // Funksiyani test qilish
// update({ id: 4, title: 'HR' });

// console.log(list);




    // let list=[
    //     {id:1, name:'eshmat', title:"CEO"},
    //     {id:2, name:'toshmat', title:"CTO"},
    //     {id:5, name:'eshmat', title:"CEO"},
    //     {id:6, name:'toshmat', title:"CTO"},
    // ];

    // //javob

    // let res={
    //     ceo:[
    //         {id:1, name:'eshmat', title:"CEO"},
    //         {id:5, name:'eshmat', title:"CEO"},
    //     ],
    //     cto:[
    //         {id:2, name:'toshmat', title:"CTO"},
    //         {id:6, name:'toshmat', title:"CTO"},     
    //     ]
    // }


    // let list = [
    //     { id: 1, name: 'eshmat', title: "CEO" },
    //     { id: 2, name: 'toshmat', title: "CTO" },
    //     { id: 5, name: 'eshmat', title: "CEO" },
    //     { id: 6, name: 'toshmat', title: "CTO" }
    //   ];
      
    //   let res = {};
      
    //   list.forEach(item => {
    //     if (!res[item.title.toLowerCase()]) {
    //       res[item.title.toLowerCase()] = [];
    //     }
    //     res[item.title.toLowerCase()].push(item);
    //   });
      
    //   console.log(res);
      




    