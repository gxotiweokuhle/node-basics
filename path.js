const path = require('path');

//joining files
const filePath = path.join(__dirname, 'files', 'data.txt');
console.log(filePath);

const dirName = path.dirname(__dirname, 'files', 'data.txt');
console.log(dirName);