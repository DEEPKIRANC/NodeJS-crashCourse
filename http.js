const http=require('http');
const path=require('path');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    if(req.url === '/'){
        fs.readFile(path.join(__dirname,"index.html"),(err,data)=>{
        if(err) { throw err; }
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        res.end();
        });
    }
    if(req.url === '/products'){
        res.write("<h1>PRODUCT CATALOG</h1>");
        res.end();
    }
})

server.listen(8080,()=>console.log("Server Up and running!"))