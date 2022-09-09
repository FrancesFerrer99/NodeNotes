const http = require('http')


//this is why this should be asynchronus: the /about req occupies the server for the other requests
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Home Page')
    }
    if(req.url === '/about'){
        //BLOCKING CODE
        for(let i = 0; i < 1000; i++){
            for(let j = 0; j < 0; j++){
                console.log(`${i}, ${j}`)
            }
        }
        res.end('About')
    }
    res.end('Error Page')
})

server.listen(5000, () => {
    console.log('Server is listening on port 5000.')
})