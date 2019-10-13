// PI

console.log(Math.PI);

// SQRT

console.log(Math.SQRT2);

// Euler's constant
console.log(Math.E);

// Lg 10
console.log(Math.LN10);

// LN2
console.log(Math.LN2);

// pow();
console.log(Math.pow(10,2));

// max();

console.log(Math.max(23,45,67,43,12));

// min()

console.log(Math.min(23,45,67,43,12));


// Round Methods
// ceil()
// floor()
// round();

let num = 10.4;

console.log(Math.ceil(num));

console.log(Math.floor(num));

console.log(Math.round(num));

// sqrt

console.log(Math.sqrt(9));

// log10

console.log(Math.log10(23));

// random();

console.log(Math.random());

function randomNumber(min, max) {
    return parseInt(Math.random()*min + (max-min))
}

console.log(randomNumber(50,100));