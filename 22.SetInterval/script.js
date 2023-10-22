// console.log("Salom dunyo");

// const time = setTimeout(()=>{
//     console.log(1);
// },2000)

// const timeInterval = setInterval(()=>{console.log(1);},1000)

// const timeIntervals = setInterval(()=>{
//     for(let i=0; i<=100;i++){
//         console.log(i++);
//     }
// },1000)

// const timeInterval = setInterval(() => {
//     let i = 0;
//     const interval = setInterval(() => {
//         console.log(i);
//         i++;
//         if (i > 100) {
//             clearInterval(interval); // Intervalni to'xtatish
//         }
//     }, 1000);
// }, 1000);

//! I learning time out  with time interval
// let TmeInterval = setInterval(()=>{
//     let date = new Date();
//     console.log(`Today: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
// },1000)


let getName=()=>{
    return (name)=>{
        console.log(`my name is ${name}`);
    };
};

// let call = getName("Hojiakbar")

// call("Webbrain")

getName()("Hojiakbar")