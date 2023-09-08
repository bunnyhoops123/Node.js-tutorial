// const format = require('date-fns').format;

// const {v4: uuid} = require('uuid');

// const fs = require('fs');
// const fsPromises = require('fs').promises;
// const path = require('path');
// const { log } = require('console');

// //make dir called logs



// const logEvents = async (message) =>  {
//     const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
//     const logItem = `${dateTime}\t${uuid()}\t${message}`;
//     console.log(logItem);

//     try{
//         if(!fs.existsSync(path.join(__dirname, 'logs'))){
//             await fsPromises.mkdir(path.join(__dirname, 'logs'));
//         }
//         //testing 0.1
//         await fsPromises.appendFile(path.join(__dirname,'logs','event_log.txt'), logItem);
//     }catch(err){
//         console.error(err);
//     }
// }

// // console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));

// // console.log(uuid());

// module.exports = logEvents;

const format = require('date-fns').format;
const {v4:uuid} = require('uuid');
const fs = require('fs');

const logEvents = async (msg) => {
    const dateTime = format(new Date(), 'yyyyMMdd\tHH:mm:ss');
    const eventLog = `${dateTime} ${uuid()} ${msg}\n`;
    console.log(eventLog);

    //create a logs dir and append log and log file
    try{
        if(!fs.existsSync(path.join(__dirname, 'logs'))){
            fs.promises.mkdir(path.join(__dirname, 'logs'));
        }
        await fs.promises.appendFile(path.join(__dirname,'logs','logs.txt'), eventLog);
        console.log("Logged!");

    }catch(err){
        console.error(err);
    }    
}

process.on('uncaughtException', (err)=> {
    console.error(err);
})

module.exports = logEvents;