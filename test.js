function foo (name) {
    this.name = name
}

foo.prototype.last = 'hello'

let ob = new foo('ashu')

let obj = Object.create(ob);


console.log(obj);

console.log(obj.constructor)

console.log(obj.constructor.prototype)