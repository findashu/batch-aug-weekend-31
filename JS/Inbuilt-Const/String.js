var primitiveStr = 'Hello I am primitive';

var str = new String('Hello I am string object');

console.log(typeof primitiveStr);

console.log(typeof str);

console.log(str instanceof String);

console.log(primitiveStr instanceof String);


console.log(str.length);

console.log(primitiveStr.length);

console.log(primitiveStr[1]);

// access the value from string object
console.log(str.toString());
console.log(str.valueOf());

console.log(str.toUpperCase());

// toLowerCase

console.log(primitiveStr.toLowerCase());

// charAt();

console.log(str.charAt(2));

// indexOf();


console.log(str.indexOf('l',3));

console.log(str.lastIndexOf('o',17));

// split();

console.log(primitiveStr.split(''));

// substr();

console.log(primitiveStr.substr(1,4));

console.log(primitiveStr.substring(1,4));
