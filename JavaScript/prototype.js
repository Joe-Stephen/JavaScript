const radius = [ 3, 1, 5, 8, 10 ];

//defining logic

const area = function(radius){
    return Math.PI * (radius*radius);
}

const circumference = function(radius){
    return 2 * (Math.PI * radius);
}

const diameter = function(radius){
    return 2 * radius;
}

//defining common function
Array.prototype.calculate = function(logic){
    //so here we are putting the calculate method in the prototype of Array object. So that, it can be accessed just like a property of an array in the entire code.
    let result = [];
    for(let i=0; i<this.length; i++){
        result.push(logic(this[i]));
    };
    return result;
};

console.log(radius.map(area));
console.log(radius.calculate(area));


// console.log("area :",calculate(radius, area));
// console.log("circumference :",calculate(radius, circumference));
// console.log("diameter :",calculate(radius, diameter));