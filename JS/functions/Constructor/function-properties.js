function foo(a,b) {
    return 'Hello World';
}

foo.hello = 'ashu';

console.log(foo.hello);

// name
console.log(foo.name);

// length
console.log(foo.length);

// constructor
console.log(foo.constructor);

// prototype;

console.log(foo.prototype);

console.log(typeof foo.prototype);

foo.prototype.watch = 'titan';

console.log(foo.prototype);


// call() bind() apply()
