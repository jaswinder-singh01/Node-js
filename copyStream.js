//Write a program to copy the content of one file to another file using streams

const fs = require('fs');

const rstream = fs.createReadStream("files/file1.txt");

const wstream = fs.createWriteStream("files/file2.txt");

rstream.pipe(wstream);


