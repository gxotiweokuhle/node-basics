//first way to export
//const gama = require('./test');
//console.log(gama.people, gama.ages)//empty object
//console.log(people);cant access the values from outside the file, we have to access from inside the file manually by saying modules.exports to give the empty object a value

//second way to export several things
//const { people, ages } = require('./test');
//console.log(people, ages);

const os = require('os'); //to find out the operating system and home directory
console.log(os.platform(), os.homedir());
