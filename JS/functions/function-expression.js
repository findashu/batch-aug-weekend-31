// Function Expression

// NFE => Named Function Expression

var sum = function (a,b) {
    return a+b;
}

var res = sum(2,3)


console.log(res);

// Use of Anonymous Functions
// 1. Self Executing Function
// 2. Callbacks

// self executing function
(function (x,y) {
    console.log('I am anonymous ',x)
})(2,3);


// Callbacks

function foo() {
    console.log('Hello I m callback');
}


function acceptCallback(cb) {
    cb();
}


acceptCallback(function() {
    console.log('i m passed as cb')
});

foo();