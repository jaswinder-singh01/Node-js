// Write a program to read a text file and print its content using streams

const fs = require('fs');
const rstream = fs.createReadStream("files/newFile.txt");

rstream.on('data', (chunk) => {
    console.log(chunk.toString());

});



