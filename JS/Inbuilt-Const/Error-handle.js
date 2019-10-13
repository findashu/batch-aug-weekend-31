// console.log(xyz);

// let xyz = 12;

// Error
// ReferenceError
// SyntaxError
// EvalError
// URIError



try {
    // console.log(xyz)

    throw  new Error('Something nasty happend');

} catch (error) {
    console.log('In the catch block')
    console.log(error.message);
    console.log(error.stack);
    console.log(error.name)
} finally {
    console.log('I am finally')
}


console.log('Hello JS Folks');




function foo() {
    console.log(marker);
}

function bar() {
    console.log('I m bar');
    foo();
}


function baz() {
    console.log('I am baz');
    bar()
}

// baz()

try {
    baz()
} catch (error) {
    console.log(error)
}