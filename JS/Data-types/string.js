var name = 'Javascript';

var price = '10';

console.log(name);

console.log(typeof price);


var sent = "I'm learning \"JS\""


// Escape Characters \

// \n => new line
// \t => tab
// \u => unicode character

var para = "Hello My Name is JS.\nI am\tvery famous now \u0026";

console.log(sent);

console.log(para);


// Concatenation Operator +


var firstName = 'Java';

var lastName = 'Script';

var age = 27;


var fullName = firstName + lastName;

console.log(fullName);


var about = "Hello, I am " + firstName +" " + lastName +". I am "+age+" years old";

console.log(about);


var numStr = "hello"+10;

console.log(numStr);


var boolConcat = 'hi'+true;

console.log(boolConcat);

var val = 1 + true;

console.log(val);


// String Literal

var strLiteral = `Hello I'm "JS"
I am famous now.`;

console.log(strLiteral);

console.log(typeof strLiteral);



var abt = `Hello I am ${firstName} ${lastName}. I am ${age} years old. ${10+20}`;

console.log(abt);


// var s = new String('Hello');

console.log(abt.length);