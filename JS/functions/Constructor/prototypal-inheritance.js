function gF() {
    this.gfName = 'Grandfather';
};

function Parent () {
    this.pName = 'Parent';
}

function Person(name) {
    this.name = name;
}

Parent.prototype = new gF();
Person.prototype = new Parent();

let me = new Person('ashu');


console.log(me instanceof Person);

console.log(me);

console.log(me.name); // ashu

console.log(me.pName);

console.log(me.gfName);