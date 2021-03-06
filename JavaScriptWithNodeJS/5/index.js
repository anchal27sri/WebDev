const http = require('http');
const { listenerCount } = require('process');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 80;
const index = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');
const services = fs.readFileSync('./services.html');
const contact = fs.readFileSync('./contact.html');

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    url = req.url;
    if(url == '/') {
        res.end(index);
    }
    else if(url == '/about') {
        res.end(about);
    }
    else if(url == '/contact') {
        res.end(contact);
    }
    else if(url == '/services') {
        res.end(services);
    }
    else {
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
})

server.listen(port, hostname, () => {
    console.log("listening on port 80");
})