const fs = require('fs');

const textIn = fs.readFileSync('../downloads_course_mat/complete-node-bootcamp-master/1-node-farm/final/txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written!');
