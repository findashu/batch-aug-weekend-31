const fs = require('fs');

let writeStream = fs.createWriteStream(__dirname+'/file.txt', 'utf-8');


for(let i =0; i< 1e6; i++) {
    writeStream.write("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n")
}

writeStream.end();