// const logEvents = require('E:/node.js/chapter04/logEvents.js');

// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {};

// //initialise object
// const myEmitter = new MyEmitter();

// //add listener for the log event
// myEmitter.on('log', (msg) => {
//     logEvents(msg)
// });

// setTimeout(() => {
//     //Emit event 
//     myEmitter.emit('log', 'Log event emitted\n');    
// }, 2000);

const logEvents = require('./logEvents');
const {EventEmitter} = require('events');

class MyEmitter extends EventEmitter{};

const myEmitter = MyEmitter();

//listener for the event 
myEmitter.on('log', (msg) => {
    try{
        logEvents(msg);
    }catch(err){
        console.error(err);
    }
})

setTimeout(() => myEmitter.emit('log', 'Log event emiited'), 2000);