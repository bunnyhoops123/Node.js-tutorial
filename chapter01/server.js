// //Node runs on the server and not on the browser
// console.log('Hello World');
// //There is a global object instead of a window object
// // console.log(global);
// //Has common core modules
// //CommonJS modules instead of ES6 modules
// // Missing some JS APIs like fetch

// const os = require('os');
// const path = require('path');
// const math = require('./math');
// const {add, subtract, multiply, divide} = require('./math');

// console.log(math.add(2, 3));
// console.log(subtract(2, 3));
// console.log(math.multiply(2, 3));
// console.log(divide(2, 3));

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));


// console.log('Hello World');

const os = require('os');
const path = require('path');
const math = require('./math');

const {add, subtract} = require('./math');

console.log(os.homedir());
console.log(os.version());
console.log(os.type());

console.log(path.dirname(__filename));
console.log(path.parse(__filename));
console.log(path.basename(__filename));

console.log(add(2,3));
console.log(math.subtract(3, 4));



