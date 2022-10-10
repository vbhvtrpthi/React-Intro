let obj={
name:'Vaibhav',
state:'MP',
country:'India'
}

//Traditional way to extract value from the object
// let name=obj.name
// let state=obj['state']

// console.log(name,state);


//Through destructuring

//the keys while destructuring have to be named same as in the defined object.
// let {name,state,country} = obj

//But however we wish to not provide the same name as of key we can do so by
// let {name:firstName,state,country}=obj
// console.log(firstName,state,country);


//to add some extra value
// let {name,state,country,extra="default value"} = obj

// console.log(name,state,country,extra);
