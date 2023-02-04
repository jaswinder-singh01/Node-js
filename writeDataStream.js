//Write a program to write content in a text file using streams

const fs = require('fs');

const wstream = fs.createWriteStream("files/newFile.txt");

wstream.write("This is the extra data added wth thw write stream");
wstream.end("hello");