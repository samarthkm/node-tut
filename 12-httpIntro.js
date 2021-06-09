const http = require('http');

const server = http.createServer((req,res) => {
    //console.log(req);
    if(req.url === '/'){
        res.end('Welcome to our home page');
    } 
    if(req.url === '/about'){
        res.end('About us');
    } 
    //res.write('welcome to our home page');
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page that you're looking for</p>
    <a href = "/">back home</a>`
    )
})

server.listen(5000);

//localhost:5000 (in browser)