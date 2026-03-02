const fs = require('fs');

// Blocking, synchronous way
/*
const textIn = fs.readFileSync('../downloads_course_mat/complete-node-bootcamp-master/1-node-farm/final/txt/input.txt', 'utf-8');
console.log(textIn);
const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written!');
*/

// Non-blocking, aynchronous way
fs.readFile('../downloads_course_mat/complete-node-bootcamp-master/1-node-farm/final/txt/start.txt', 'utf-8', (err, data1) => {
    if (err) return console.log('ERROR!');

    fs.readFile(`../downloads_course_mat/complete-node-bootcamp-master/1-node-farm/final/txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile('../downloads_course_mat/complete-node-bootcamp-master/1-node-farm/final/txt/append.txt', 'utf-8', (err, data3) => {
            console.log(data3);

            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
                console.log('Your File has been written');
            })
        });
    });
});
console.log('Will read file!');

// node.js is build around this philosophy of callBacks (new ES6 syntax)!!