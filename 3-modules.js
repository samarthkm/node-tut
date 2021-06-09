//every file in node is a module

const names = require('./4-names');
console.log(names);
const sayHi = require('./5-utils');
const data = require('./6-alternateImp');
console.log(data);

require('./7-mindGrenade.js');

sayHi('skip');
sayHi(names.steph);
sayHi(names.blake);
sayHi(names.john);