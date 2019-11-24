const http = require('http');



http.createServer(function(req,res) {
    res.end('Hello World!')
}).listen(3000, function() {
    console.log('Server Up n Running on port 3000')
});