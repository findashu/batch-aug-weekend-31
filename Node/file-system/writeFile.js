const fs = require('fs');

console.log('Program Starts');


// Synchronous Way

// fs.writeFileSync(__dirname+'/myFile.txt', 'This is written by Node', 'utf-8')


fs.writeFile(__dirname+'/myFile.txt', 'Writing Using fs writeFile', function(err) {
    if(err) {
        console.log(err)
    }else {
        console.log('Successsfully Written')
    }
})



console.log('Program Ends');



// fs.appendFile();
// fs.readdir();
// fs.rmdir();
// fs.rename();
// fs.chown();