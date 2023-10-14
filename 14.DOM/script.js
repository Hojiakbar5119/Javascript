// //   const input = document.querySelector('input')
// //   console.log(input);

// //! Creating an element 

// const body = document.querySelector('body')
// const container = document.createElement("div")
// const wrapper = document.querySelector(".wrapper");
// container.setAttribute("class", "login")

// body.before(container)
// wrapper.before(container)

// wrapper.style.cssText = `

// border:1px solid salmon;

// `


// //  men sizga account beraman hech kimga bermang ikkalamiz bir vaqtni ozida kirsa bo'ladida

// // wifi muammo  sizda  to'grilasa bo'ladi vaqt oladi  2 kun chuqulab otirish kerak men sizga wifi tarqataman qarab turing

// // hope study band ekan wifi tarmoq kirish uchun cheklangan bo'larkan 
// // endi ishingizga qaytoring


// console.log(wrapper.offsetWidth)


// const element = document.getElementById('myElement');
// const clientWidth = element.clientWidth;
// const clientHeight = element.clientHeight;

// console.log(clientHeight);
// console.log(clientWidth);









// hi()

// function hi(){
//     console.log(1);
// }

// let obj1 = {
//     name: "user",
//     age: "erer",
// }
// console.log(Object.apply(obj1));// [["name"],["user"],["age"], ["erer"]]

// function get(name,age){
//     console.log(this, name,age);
// }
// get.bind(obj1, obj1.name)(obj1.age)
// get.call(obj1, obj1.name)



// const heading = document.getElementById('myElement')
// // console.log(heading);

// heading.textContent = 'Salom matni o\'zgartirdim'


// const paragraph = document.createElement('p')
// // console.log(paragraph);
// const text = document.createTextNode("bu yerda nimdaur yozish mumkin");
// console.log(text);

// // const submit = paragraph.appendChild(text)

// // console.log(submit);
// // console.log();

// const box = document.getElementsByClassName('wrapper');

// // box.appendChild(text);




const changeHeading = ()=>{

    const heading  = document.getElementById('heading');
    heading.textContent = 'Yangi sarlavha o\'zgartilidi'
}
const btn = document.getElementsByTagName("button")