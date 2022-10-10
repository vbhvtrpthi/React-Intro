//Want only the fruits whose word length is greater than 6
let arr=["apple","banana","Orange","Watermelon"]
let narr=[]
// for(let i=0;i<arr.length;i++)
// {   fruit=arr[i]
//     if(fruit.length>6)
//      narr.push(fruit)
// }
// console.log(arr);
// console.log(narr);

//************************************************* */
narr=arr.filter(function(fruit){
return fruit.length > 7
}) //will call the callback function for each value present in arr and return the value if length is > than 6
console.log(arr);
console.log(narr);





