//Destructuring is basically an easy way of how we can extract values from array or object, 1 visible

let arr=["Hi","I","am","Vaibhav"]
//Traditional way to extract the property from array using index
// let a =arr[0]
// let b=arr[1]

// console.log(a,b);

//Better way,Destructuring
// let [a,b,c,d] =arr
// console.log(a,b,c,d);

//Suppose if I want to skip the value then simply put comma
// let [a,b,,d]=arr
// console.log(a,b,d);

//we can also provide some extra value 
let [a,b,c,d,extra=`hlo`]=arr
console.log(a,b,c,d,extra);
