var res = [10,20,30];

var res2 = new Array(10,20,30,40,50,60);

var prices = new Array(10);

console.log(res2);

console.log(prices);

console.log(prices.length);


// push();
res2.push(40);
console.log(res2);

// pop();

res2.pop();

console.log(res2);

// shift and unshift

res2.unshift(23);

console.log(res2);

res2.shift();
console.log(res2);

// join();

let joinedValue = res2.join('-');
console.log(joinedValue);


// slice();

let sliced = res2.slice(1,3);

console.log(sliced);
console.log(res2);

// splice();

let spliced = res2.splice(1,3,100,200,300,'400');

console.log(spliced)
console.log(res2);


// sort();

let unsorted = [3,2,11,41,81, 5,9];

let sorted = unsorted.sort();

console.log(sorted);


// 
let arr = [2,4,6,8];
let mltiple = [];

console.log('Adv Me');


arr.forEach(function(ele,i,arr) {
    // console.log(ele);
    // console.log(i);
    // console.log(arr)

    mltiple.push(ele*2);
})

console.log(mltiple);


let str = 'Hello I am learning JS';

// H-I-a-l-J

Array.prototype.add = function() {

   let result = 0;

    for(var i =0; i< this.length; i++) {
        result += this[i];
    }

    return result;
}

let rest = arr.add();

console.log(rest)

res2.add();

// Array.prototype.push = function() {
//     return 'Hello'
// }

