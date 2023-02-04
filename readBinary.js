const fs = require('fs');

const data = fs.readFileSync("files/binary.jpg", 'hex');

console.log(data);
