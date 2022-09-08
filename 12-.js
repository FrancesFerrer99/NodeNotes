//http module allows to setup a web server

const http = require('http')

//req->request and res->reponse are both objects
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        //res.write();
        res.end('welcome to our home page') //ends the request
    }
    if(req.url === '/about'){
        res.end('Here is the about section')
    }
    //default response for resource not found
    res.end(
        `
        <h1>Oops!</h1>
        <p>Page not available</p>
        <a href="/">Back home</a>
        `
    )
})

//the port the server will be listening to
server.listen(5000)