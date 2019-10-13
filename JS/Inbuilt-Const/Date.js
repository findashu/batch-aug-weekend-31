let today = new Date();

console.log(today);

// getter and setter


console.log(today.getDate());

// month count starts frm 0
console.log(today.getMonth());

console.log(today.getFullYear());

console.log(today.getMinutes());

console.log(today.getHours());

let setDate = today.setDate(15)

// setMonth
// setYear
// setHours
// setMinutes





console.log(new Date(setDate));


let dt = '10/24/2019';

let myDt = new Date(dt);

console.log(myDt);

console.log(today.getTime());

// Epoch Time
console.log(new Date(0));