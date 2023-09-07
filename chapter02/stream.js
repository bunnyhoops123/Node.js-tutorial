const fs = require('fs');

//Create readStream 
const rs = fs.createReadStream('./files/lorem.txt', {encoding:'utf8'});


//Create writeStream

const ws = fs.createWriteStream('./files/newLorem.txt');

//Listen and write to file
rs.on('data', (dataChunk) => {
    ws.write(dataChunk);
})
//exit on uncaught exceptions

process.on('uncaughtException', (err) => {
    console.log(`Errors: ${err}`);
    process.exit(1);
})