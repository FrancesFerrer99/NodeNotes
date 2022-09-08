//Modules -> encapsulated code

//const {john, peter} = require('./4-Names');
const names = require('./4-Names');
const sayHi = require('./5-Utils');
const data = require('./6-Alternative')
//when you import a module you actually invoke it
require('./7-mind-grenade') //this work because the function is executed in the other module

console.log(names)
sayHi(names.john)
sayHi(names.peter)
console.log(data)
