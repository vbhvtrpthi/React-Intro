let arr=[1,2,3,4]
// If we want a new array where *2 of these values are stored

// let newArr=[]
// for(let i=0;i<arr.length;i++)
// {
//     newArr.push(arr[i]*2)
// }
// console.log(newArr);

//********************************************************* */

//Another way is using map function
//It doesn't make changes in the original array rather it returs the changed array

let newArr=arr.map((value,idx)=>{
//   console.log(value,idx);
  return value*2
}) // map function will call the callback function for each value in the arr

console.log(arr);
console.log(newArr);

