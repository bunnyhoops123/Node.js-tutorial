//create readStream and writeStream

const fs = require('fs');

const rs = fs.createReadStream('./chapter02/files/lorem.txt');

const ws = fs.createWriteStream('./chapter02/files/new_lorem.txt');

// rs.on('data', (data) => {
//     ws.write(data);
// })
//The above process is slow and can be done by the following

rs.pipe(ws);

process.on('uncaughtException', (err) => {
    console.log(`Errors: ${err}`);
    console.exit(1);
})
