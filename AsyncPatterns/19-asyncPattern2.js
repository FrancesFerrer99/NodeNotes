const {readFile, writeFile} = require('fs')
const util = require('util')

//this does exactly what the funciont below does
//these can be avoided if:
//const {readFile, writeFile} = require('fs').promises
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

//this will be substituded with the async, await
//const getText = (path) => {
    //return new Promise((resolve, reject) => {
        //readFile(path, 'utf-8', (err, data) => {
            //if(err){
                //reject(err)
            //} else {
                //resolve(data)
            //}
        //})
    //})
//}

//IMPORTANT!!
const start = async () =>{
    try{
        //now these still need the second parameter
        const first = await readFilePromise('../content/first.txt', 'utf-8')
        const second = await readFilePromise('../content/second.txt', 'utf-8')
        await writeFilePromise('../content/result-mind-grenade.txt', 
        `THIS IS AWESOME: ${first} ${second}`
        )
        console.log(first, second)
    } catch(error) {
        console.log(error)
    }
    
}
start()

//getText('../content/first.txt')
    //.then(result => console.log(result))
    //.catch((err) => console.log(err))