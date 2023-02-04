// Write a program to create a new file in the given directory using the fs module

const fs = require('fs');
fs.writeFileSync("files/newFile.txt", "This is the new file ");
