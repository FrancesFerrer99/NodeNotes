const { readFile } = require('fs')
const { result } = require('lodash')

console.log('started first task')

//this is asynchronus
readFile('./content/first.txt', 'utf-8', (err, result) =>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('commpleted first task')
})

console.log('starting next task')