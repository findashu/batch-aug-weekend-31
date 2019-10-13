// parseInt();

let n = '12';

let num = parseInt(n);

console.log(typeof num);

console.log(parseInt(10,8))

// parseFloat();

let f =  '12.02';

console.log(parseFloat(f)) ;


let nn = 123*'a';

console.log(nn)

// isNaN();

console.log(isNaN(nn));

// isFinite();

let finite = 1e309;

console.log(isFinite(finite));


let obj = {
    name:'JS',
    gender: 'female'
};

let obj2 = {
    name:'javascript',
    age: 25
};

Object.assign(obj2, obj);

console.log(obj2 == obj)

console.log(obj2);

// 

let person1 = {
    name:'ashu'
}

let person2 = {
    name:'ashu',
    age:25
}

// JSON
console.log(JSON.stringify(person1));

console.log('Compare 2 objs ',person1 === person2);

console.log(JSON.stringify(person1) === JSON.stringify(person2));