const fs = require('fs');
const path = require('path')


console.log('Program Starts');

let pth = path.join(__dirname, "../intro.js")

// synchronous
console.log(pth);


// let data = fs.readFileSync(pth, 'utf-8');


// console.log(data)


// asynchronous

fs.readFile(pth, 'utf-8', function(err, data) {
    if(err) {
        console.log(err)
    }else {
        console.log(data)
    }
})


console.log('Program Ends');


