import http from "http"

const  server = http.createServer((req, res)=>{
    res.write("<h1>hello owlrd</h1>");
    res.end();
});

server.listen(8080, ()=>{
   console.log("Server running on port 8080"); 
});
