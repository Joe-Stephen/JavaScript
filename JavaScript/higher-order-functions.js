// higher order function example

const car = function(engine){
    let engineInside = engine();
    console.log(`This car is powered by ${engineInside}`);
    return function(){
        return 1+1;
    }
}

const engine = function(){
    return "v8";
}

car(engine);