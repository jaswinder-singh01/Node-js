// Write a program to read a directory and print all the files in the directory using t he fs module

const fs = require('fs');

fs.readdir('./files', (err, files) => {
    if (err) {

        console.log(err);
    }
    else {
        console.log("\nCurrent directory filenames:");
        files.forEach(file => {
            console.log(file);
        })
    }
})