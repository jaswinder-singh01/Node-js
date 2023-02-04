// Write a program to concanate multiple files into one file usig streams

const multi = require('multistream');
const fs = require('fs');
const pth = require("path");

let streams = [
    fs.createReadStream(pth.join("files/file1.txt")),
    fs.createReadStream(pth.join("files/file2.txt"))
];
let writerStream = fs.createWriteStream("files/file3.txt");

new multi(streams).pipe(writerStream);