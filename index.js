// const http = require('http')

// http.createServer((req, resp) => {
//     resp.write(" < h2 > this is abhishek< /h2>");
//     resp.end();
// }).listen(4500);

//console.warn("Try Abhi, bhumi");

// const http = require('http');
// const d = require('./data');
// http.createServer((req, resp) => {
//     resp.writeHead(200, { 'Content-Type': 'application\json' });
//     // resp.write(JSON.stringify({ name: 'Abhishek Kumar', email: 'abhikumar7248225833@gmail.com' }));
//     resp.write(JSON.stringify(d));

//     resp.end();
// }).listen(5000);
const gs = require('fs');
const input = process.argv;
if (input[2] == 'add') {
    gs.writeFileSync(input[3], input[4]); //to add file
} else if (input[2] == 'remove') {
    gs.unlinkSync(input[3]); // to delete file.
} else {
    console.log("Invalid Input");
}
//console.log(process.argv[2]);