function Person(name,gender) {
    // console.log(this);
    // this = {}
    this.name = name;
    this.gender = gender;
    this.description = function() {
        console.log('I am function')
    }
}

Person.married = false;


var js = new Person('javascript', 'female');

js.description();

var mac = new Person('macbook', 'male');

console.log(js);

console.log(mac.name);

var ashu = Person('ashu','male');

console.log(ashu);


console.log(js.constructor);

let obj = {
    a:10,
    b:24
}


console.log(obj.constructor);

console.log(Person.constructor);

let sum = new Function('a','b','return a+b');


function sm(a,b) {
    return a+b;
}

console.log(sum(1,1));

console.log(typeof sum);
