/*
...variable => 

REST => Converts comma seperated values to an array
Spread => Converts array to comma seperated values
*/ 


function add (...args) {
    // arguments
    console.log(args)
    console.log(...args)
}

add(13,23,45,56);

add(12,34)


let arr = [34,45,67,89];

let largest = Math.max(...arr);

console.log(largest)