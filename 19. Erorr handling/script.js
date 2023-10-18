// //! Ma'lumotlar to'plami (o'zgaruvchalar va bog'langan o'zgaruvcha)
// const data = [
//     [1, 2, 3, 10],
//     [2, 3, 4, 12],
//     [3, 4, 5, 14],
//     [4, 5, 6, 16],
// ];

// //! Ajratilgan o'zgaruvchalar (independent variables) va bog'langan o'zgaruvcha (dependent variable)
// const X = data.map(row => row.slice(0, -1)); // Independent variables
// const y = data.map(row => row[row.length - 1]); // Dependent variable

// //! Modelni yaratish
// function trainMultipleLinearRegression(X, y) {
//     //? Ko'ffitsiyentlar (beta)
//     const beta = Array(X[0].length).fill(0);

//     //? Learning rate va epochlar
//     const learningRate = 0.01;
//     const epochs = 1000;

//     for (let epoch = 0; epoch < epochs; epoch++) {
//         for (let i = 0; i < X.length; i++) {
//             const prediction = X[i].reduce((sum, xi, j) => sum + xi * beta[j], 0);
//             const error = y[i] - prediction;
//             for (let j = 0; j < beta.length; j++) {
//                 beta[j] += learningRate * error * X[i][j];
//             }
//         }
//     }

//     return beta;
// }

// //! Modelni o'rganish
// const learnedBeta = trainMultipleLinearRegression(X, y);
// console.log('Learned Beta:', learnedBeta);

// //! Test qilish
// const xTest = [1, 2, 3]; // Test uchun o'zgaruvchalar qiymatlari
// let predictedY = 0;

// for (let j = 0; j < learnedBeta.length; j++) {
//     predictedY += xTest[j] * learnedBeta[j];
// }

// console.log(`X1 = ${xTest[0]}, X2 = ${xTest[1]}, X3 = ${xTest[2]}, Predicted Y = ${predictedY}`);



//! try catchlarni o'rganamiz

// try {
//     console.log(number);
//     // JSON.parse(`{name:2}`)
//     throw new Error("birorta xatolik bor")
// } catch (error) {
//     console.log(error.message);
// }



// try {
//     let lastName = 'Yetayeh'
//     let fullName = fistName + ' ' + lastName
//   } catch (err) {
//     console.log(err)
//   }

// //? calbacklarni o'rganamiz

// const user={
//     Najmiddin:{
//         login:"Namiddin",
//         paroli:12345,
//     },
//     Sardorbek:{
//         login:"Sardorbek",
//         paroli:12345,
//     },
// }


//! Promislarni o'rganamiz
// A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.
// Creates a new Promise.
let user = new Promise((resolve, reject) => {
    if (database.najmiddin.login === lg && database.najmiddin.password === pw) {
        return resolve(`Welcome to Facebook`)
    } else {
        return reject(`parolingiz notog'ri`)
    }
})