// const fs = require('fs');
// const path = require('path'); // Use path to reduce errors

// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), (err, data) => {
//     if(err) throw err;
//     console.log(data.toString());
// });

// fs.readFile('E:/node.js/chapter02/files/starter.txt', 'utf-8',(err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// console.log('Hello...'); // To demonstrate asynchronous

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'),'Nice to meet you', (err)=>{
//     if(err) throw err;
//     console.log("Operation complete");

// })

// //Will append content and all can create a new file
// fs.appendFile(path.join(__dirname, 'files', 'test.txt'),'Testing text', (err)=>{
//     if(err) throw err;
//     console.log("Append complete");

// })


// // exit on uncaught errors
// process.on('uncaughtException',err => {
//     console.error(`There was an uncaught error : ${err}`);
//     process.exit(1);
// } )

const fsPromises = require('fs').promises;
const path = require('path');

//Read contents of file and store in data,delete the original file, write the data to another file, append data to it 
//rename the file and log content of the new file

const fileOps = async () =>{
    try{
        //Read data from file
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'),'utf8');
        console.log(data);

        //Unlink(delete) the original file
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));

        //Write data to new file
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseFile.txt'), data);

        //Append data to new file
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseFile.txt'), '\n\nNice to meet you too.');

        //Rename file
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseFile.txt'), path.join(__dirname, 'files', 'newPromises.txt'));

        //Read data from new file
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'newPromises.txt'), 'utf8');
        console.log(newData);
    }
    catch(err){
        console.log("Errors caught:  " + err);
    }
}
fileOps();




//Below code is an example of the above. It can be described as call-back hell.

// fs.readFile(path.join(__dirname, 'files', 'starter.txt'),'utf-8', (err, data) =>{
//     if(err) throw err;
//     console.log("Read complete");
//     console.log(data);
// })

// fs.writeFile(path.join(__dirname, 'files','reply.txt'), 'Nice to meet you', (err) => {
//     if(err) throw err;
//     console.log("Write complete");

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nPleasure is mine!', (err) => {
//         if(err) throw err;
//         console.log("Append complete");

//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'new_reply.txt'), (err) => {
//             if(err) throw err;
//             console.log('Rename complete');
//         })
//     })
// }
// ),
// fs.unlink(path.join(__dirname, 'files', 'starter.txt'), (err) => {
//     if(err) throw err;
//     console.log("Deleted file");
// })

// console.log("Async test");

//exit on uncaught errors
process.on('uncaughtException', err => {
    console.log("Uncaught Exception :" + err);
    process.exit(1);
})