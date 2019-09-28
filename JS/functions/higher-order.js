function foo() {
    return 'I am function foo'
}

function acceptsFunction(cb ){
    let res = cb();
    return res;
}

let res = acceptsFunction(foo);

console.log(res);



function add (a,b, cb ){
   if(typeof a != 'number' || typeof b != 'number') {
       cb('Pass a number to add', null)
   }else {
       let sum = a+b;
       cb(null, sum)
   }
}

function sqaure(x, cb) {
   if(typeof x != 'number'){
       cb('Square Accepts a number',null)
   }else {
       cb(null, x*x)
   }
}

let n1 = 10;
let n2 = 5;

add(n1,n2, function(err,data) {
    if(err) {
        console.log(err)
    }else {
        console.log(data);
        sqaure(data, function(err,sq) {
            if(err) {
                console.log(err)
            }else {
                console.log(sq);
            }
        })
    }
});




function outer (x) {
    let a = 10;
    console.log('I am outer fn')
    function inner(y) {
        console.log('I am inner function')
        return a+y;
    }

    // console.log(b);

    return inner;

}

let val = outer(10);
let resl = val(10);

let resl2 = val(20);


console.log(resl);

console.log(resl2);


// function sum (a,b) {
//     return a+b;
// }

function sum (x) {
    
    return function (y) {
        return x+y;
    };
}

let firstVal = sum(2);
let finalRes = firstVal(2);

console.log(finalRes);