const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer();

server.on('request', function(req,res) {

    let parsedUrl = url.parse(req.url, true);

    if(parsedUrl.pathname == '/') {

        fs.readFile(__dirname+'/index.html', 'utf-8', function(err,data) {
            if(err) {
                res.writeHead(500, {'Content-Type':'text/html'});
                res.end('Something went wrong, please try again');
            }else {
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data);
                res.end();
            }
        })

    }else if (parsedUrl.pathname == '/contact' && req.method == 'GET') {
        fs.readFile(__dirname+'/contact.html', 'utf-8', function(err,data) {
            if(err) {
                res.writeHead(500, {'Content-Type':'text/html'});
                res.end('Something went wrong, please try again');
            }else {
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data);
                res.end();
            }
        })
    }else if(parsedUrl.pathname == '/contact' && req.method == 'POST'){
        // console.log(parsedUrl);
        // console.log(req)


        req.on('data', function(data) {
            console.log(data);

            let dt = Buffer.from(data).toString();

            console.log(dt)

        });

        req.on('end', function() {
            res.end('Thanks for Contacting us');
        })
        
    }
    else {
        res.writeHead(404, {'Content-Type':'text/html'});
        res.end('Not Found');
    }

})





server.listen(3002, () => console.log('Server running on port 3002'))