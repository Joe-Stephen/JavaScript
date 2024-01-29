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

const calculate = function(radius, logic){
    let result = [];
    for(let i=0; i<radius.length; i++){
        result.push(logic(radius[i]));
    };
    return result;
};

console.log("area :",calculate(radius, area));
console.log("circumference :",calculate(radius, circumference));
console.log("diameter :",calculate(radius, diameter));