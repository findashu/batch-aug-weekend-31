
//  Function Declaration

function myFunc () {
    console.log('Inside the function log');
}


myFunc();


// function add(a,b,c) {
// //    arguments
//     // arguments
//     console.log(arguments)

//     var sum = a+b+c;

//     if(typeof a != 'number') {
//         return 'Pass a number'
//     }

//     console.log('Sum is ', sum);
//     return sum;
// }

// var firstAdd = add('ashu',3)


function add () {
    var sum = 0;

    for(var i =0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

var secondAdd = add(5,5,10);

// console.log(firstAdd);
console.log(secondAdd);