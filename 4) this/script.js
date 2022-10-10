//Environment are of two types- Browser, Node
//Modes- strict, non Strict
//Here we are discussing 'this' related to browser environment and non strict mode

// console.log(this); //this keyword refers to the current object (which is a global object here, in the case of browser it's 'window')

// function fn(){

//     console.log(this);
// }//Here , this => object through which function is called
// fn(); //As we are directly calling function, so here, object would be global.


// let obj={
//     name:'Vaibhav',
//     func:fn
// }
// obj.func() // As we're calling a 'fn' function using 'obj' object, so here current object would be '{ name: 'Vaibhav',func: fn}' and it will be displayed while console logging 'this'.

//***********************************************************************

//function inside function
// function fn(){
//     console.log(this); //{name: 'Vaibhav',func: fn} as object calling is obj 
//     function abc(){
//         console.log(this); // Here, window object will pe printed as it is called inside function automatically 
//     }
//     abc();
// }
// let obj={
//     name:'Vaibhav',
//     func:fn
// }

// obj.func()


//But if we want that even if function is called inside a function then also 'this' would refer to the current object and not window object then

//METHOD 1: bind function
// function fn() {
//     console.log(this); 
//     function abc() {
//         console.log(this); 
//     }
//     let ret = abc.bind(this);// bind returns the function definiton, after binding the function with the calling object
//     ret();
// }
// let obj = {
//     name: 'Vaibhav',
//     func: fn
// }

// obj.func()

//METHOD 2:Arrow function
// function fn() {
//     console.log(this); 
//     abc = ()=> { // Arrow function apne 'this' key liye apne parent key 'this' pey jata hai by default
//         console.log(this); 
//     }
//     abc();
// }
// let obj = {
//     name: 'Vaibhav',
//     func: fn
// }
// obj.func()