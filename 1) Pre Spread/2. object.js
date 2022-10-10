let obj = {
    name:"Vaibhav",
    add:{
        country:"India",
        state:{
            code:"DL",
            pin:"1111"
        }
    }
}

// let obj2 = obj
// obj2.name = "abcd"
// console.log(obj);
// console.log(obj2);
//problem is name gets updated in both

//solution
// let obj2 = {...obj} //SHALLOW copy
// console.log(obj2);
// obj2.name="abcd"

// obj.add.country="America"//But country name is changed for both

// console.log(obj2);
// console.log(obj);

//Though by writing obj2={..obj1} new object is created and the name is changed but add is still pointing to country and state in the same location, that's why country location is changed for the both,so we will spread that too 

// let obj2={...obj,add:{...obj.add}}
// obj2.add.country="USA"

// console.log(obj);
// console.log(obj2);

//Now if
// obj2.add.state.code=10;
// console.log(obj);
// console.log(obj2);
//10 will be updated on both the places

//**********************************************/
//solution we need to spread the sate too
// let obj2={...obj,add:{...obj.add,state:{...obj.add.state}}} //DEEP COPY
// obj2.add.state.code="SGRL"
// console.log(obj);
// console.log(obj2);

//Another way to do DEEP copy is using JSON
// let obj2=JSON.parse(JSON.stringify(obj))
// obj2.name="Rahul"
// obj2.add.state.code="Bihar"

// console.log(obj);
// console.log(obj2);
