// function num_string_range(start, end, step) {
//     if (typeof start !== 'string' || typeof end !== 'string' || start.length !== 1 || end.length !== 1) {
//       throw new Error('Start and end must be single characters.');
//     }

//     if (start.charCodeAt(0) > end.charCodeAt(0)) {
//       throw new Error('Start character must be less than or equal to end character.');
//     }

//     if (typeof step !== 'number' || step < 1) {
//       throw new Error('Step must be a positive number.');
//     }

//     const result = [];
//     for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i += step) {
//       result.push(String.fromCharCode(i));
//     }

//     return result;
//   }

//   console.log(num_string_range("a", "z", 2));

// function num_string_range(boshlangich, oxirgi, qadam) {
//     const natija = [];

//     if (typeof boshlangich === 'string' && boshlangich.length === 1 && typeof oxirgi === 'string' && oxirgi.length === 1) {
//       const boshlangichKod = boshlangich.charCodeAt(0);
//       const oxirgiKod = oxirgi.charCodeAt(0);

//       for (let i = boshlangichKod; i <= oxirgiKod; i += qadam) {
//         natija.push(String.fromCharCode(i));
//       }
//     } else if (typeof boshlangich === 'number' && typeof oxirgi === 'number') {
//       for (let i = boshlangich; i <= oxirgi; i += qadam) {
//         natija.push(i);
//       }
//     }

//     return natija;
//   }

//   console.log(num_string_range("a", "z", 3));

//? Dominator games

// function dominator(arr) {
//     const count = {};
//     const n = arr.length;

//     // Count the occurrences of each element in the array
//     for (let i = 0; i < n; i++) {
//       const num = arr[i];
//       if (count[num] === undefined) {
//         count[num] = 1;
//       } else {
//         count[num]++;
//       }

//       // Check if the current element is a dominator
//       if (count[num] > n / 2) {
//         return num;
//       }
//     }

//     // If no dominator is found, return -1
//     return -1;
//   }

//   // Example usage:
//   const arr = [3, 4, 3, 2, 3, 1, 3, 3];
//   console.log(dominator(arr)); // Output: 3

function dominator(arr) {
  const count = {};
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    const num = arr[i];
    if (count[num] === undefined) {
      count[num] = 1;
    } else {
      count[num]++;
    }
    if (count[num] > n / 2) {
      return num;
    }
  }
  return -1;
}
