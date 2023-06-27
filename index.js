// const http = require('http')

// http.createServer((req, resp) => {
//     resp.write(" < h2 > this is abhishek< /h2>");
//     resp.end();
// }).listen(4500);

//console.warn("Try Abhi, bhumi");

const http = require('http');
const d = require('./data');
http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'application\json' });
    // resp.write(JSON.stringify({ name: 'Abhishek Kumar', email: 'abhikumar7248225833@gmail.com' }));
    resp.write(JSON.stringify(d));

    resp.end();
}).listen(5000);