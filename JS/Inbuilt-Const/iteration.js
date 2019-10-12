let arr = [23,34,56,67];

// for in loop
for (var ele in arr) {
    console.log(arr[ele]);
}

// for of

for(var el of arr) {
    console.log(el);
}

let obj = {
    name:'JS',
    gender: 'Female',
    age: 25
}

// for in on objects
for(let ele in obj) {

    if(obj.hasOwnProperty(ele)){
        console.log(obj[ele]);
    }
}


// 

let keys = Object.keys(obj);

console.log(keys)

Object.keys(obj).forEach(ele => {
    console.log(obj[ele])
})