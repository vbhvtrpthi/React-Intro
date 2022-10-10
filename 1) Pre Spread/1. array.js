//Problem
let arr = [1, 2, 3]
// let arr2 = arr // assigning arr address to arr2
// arr2.push(4)
// arr.push(10);

// console.log(arr);
// console.log(arr2);
//Both will have same o/p


//**************************/

// //Solution Spread operator -> Only value gets copied and not the addrees
console.log(arr)
console.log(...arr);

let arr2 = [...arr]

arr2.push(10)

console.log(arr2);
console.log(arr);
// //10 will be pushed only in arr2