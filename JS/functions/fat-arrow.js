// this keyword

let sum = function(a,b) {
    return a+b;
}

// let add = (a,b) => {
//     return a+b;
// }

let add = (a,b) => a+b;


let sq = x => x*x;

let foo = () => 'I am foo';


console.log(add(2,2));

console.log(sq(5));

console.log(foo());


// function outer(x) {
//     return function(y) {
//         return x+y;
//     }
// }


let outer = x => y => x+y;


let firstVal = outer(10);
let res = firstVal(10);

console.log(res);