const fs = require('fs');


//Create a new directory

//check if directory already exists
if(!fs.existsSync('./chapter02/new')){
    fs.mkdir('./chapter02/new', (err) => {
        if(err) throw err;
        console.log("Dir created");
    });
}

//delete dir if exists
if(fs.existsSync('./chapter02/new')){
    fs.rmdir('./chapter02/new', (err) => {
        if(err) throw err;
        console.log("Dir removed");
    });
}


process.on('uncaughtException', (err) => {
    console.log(`Errors: ${err}`);
    console.exit(1);
})
