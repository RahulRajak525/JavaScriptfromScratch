let multiply = function (x,y){
  console.log(`Multiplication of ${x} and ${y} is ${x*y}`);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByFour = multiply.bind(this, 4);
multiplyByFour(5);


let addition  = function(a){
    return function(b){
        console.log(`Addition of ${a} and ${b} is ${a+b}`);
    }
}
let additionByTwo = addition(2);
additionByTwo(5);