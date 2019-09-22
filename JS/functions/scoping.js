// Scope => 

var a = 10;


if(true) {
    var b = 10;
    console.log(a);
    console.log('Val of b ',b)
}

console.log('Val of b outside ',b)


function foo(x) {
    var c = 10;
    d= 20;
    console.log(x)
    console.log('Inside fn ',a);
    console.log('Val of b inside fn ', b);
    console.log('Val of c inside fn ',c);
}

foo(2)

// console.log('Value of c outside fn ',c)

console.log(d)