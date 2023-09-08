const format = require('date-fns').format;
const { v4: uuid } = require('uuid'); //import Version 4 as uuid

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));

console.log(uuid());