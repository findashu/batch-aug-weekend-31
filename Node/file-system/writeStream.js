const fs = require('fs');


let data = 'There is no guaranteed ordering when using asynchronous methods. So the following is prone to error because the fs.stat() operation may complete before the fs.rename() operation:'

let writeStream = fs.createWriteStream(__dirname+'/myle.txt', {encoding:'utf-8',emitClose:true});

writeStream.write(data);


writeStream.on('finish', function() {
    console.log('Done Writing');
});


writeStream.on('error', function(err) {
    console.log(err)
})
