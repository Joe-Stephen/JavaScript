//call

// const fullname= function(){
//     console.log(this.firstName+" "+this.lastName);
// }

// const person1 = {
//     firstName:"Joe",
//     lastName:"Stephen",
// };

// fullname.call(person1);

// const person2 = {
//     firstName:"Tony",
//     lastName:"Stark",
// };

// fullname.call(person2, "New York", "USA")

//apply

// const fullname= function(){
//     console.log(this.firstName+" "+this.lastName);
// }

// const person1 = {
//     firstName:"Joe",
//     lastName:"Stephen",
// };

// fullname.apply(person1,["Joe", "Stephen"]);

//bind

const fullname=function(){console.log(this.firstName+" "+this.lastName);}

const person1 = {
    firstName:"Joe",
    lastName:"Stephen",
};

let newFunction = fullname.bind(person1);
console.log(newFunction)
newFunction()