let obj1 = {num:4};
let obj2 = {num:5};
function add(a){
    return  this.num +a;
}

let y1= add.call(obj1, 5);
let y2= add.call(obj2, 5);
console.log(y1);
console.log(y2);



let arr = [2,3,4];
function multi(b,c,d){
    return   this.num*b*c*d;
}

console.log(multi.apply(obj1, arr));
console.log(multi.apply(obj2, arr));

var bound1 = multi.bind(obj1);
var bound2 = multi.bind(obj2);
console.log(bound1(1,2,3));
console.log(bound2(0,2,3));


let stu = {age:20};
 var printAge =function(){
    console.log(`Student age is ${this.age}`);
 }
let y = printAge.bind(stu);
y();

 