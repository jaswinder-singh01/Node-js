//Write a program to create a new directory using the fs module
fs.mkdir("newDirectory", (err) => {
    if (err) {
        return console.error(err);
    }
    else {
        console.log("Directory created successfully");
    }
})