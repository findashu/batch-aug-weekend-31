function Gadget(name,color) {
    this.name = name;
    this.color = color;
}

Gadget.price = 20;

Gadget.prototype.company = 'Google';


console.log(Gadget.price);

var watch = new Gadget('titan','brown');

var marker = new watch.constructor('camlin','blue')

console.log(watch.constructor)

console.log(watch.name);

console.log(watch.price);

console.log('trying to access prototype ',watch.company)

console.log(watch.hasOwnProperty('company'));

console.log(watch.constructor.prototype.hasOwnProperty('company'));
console.log('trying to find toString')

console.log(watch.hasOwnProperty('toString'));
console.log(watch.constructor.hasOwnProperty('toString'));
console.log(watch.constructor.prototype.hasOwnProperty('toString'));


console.log(Object.hasOwnProperty('toString'));
console.log(Object.constructor.prototype.hasOwnProperty('toString'));


let n = watch.toString(10);

console.log(n);




console.log(marker);