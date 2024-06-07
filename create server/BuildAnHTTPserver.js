//http

const http = require('http');

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html");
    res.end("<h1>Hello, World!</h1>")
})

const port = process.env.port || 3000
server.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
})


//Express

// const express = require("express");
// const app = express();

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running at port ${PORT}`);
// });
