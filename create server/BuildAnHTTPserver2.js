const fs = require("fs");
const http = require("http");

let mimeTypes = {
  html: "text/html",
  jpeg: "image/jpeg",
  jpg: "image/jpeg",
  png: "image/png",
  svg: "image/svg+xml",
  json: "application/json",
  js: "text/javascript",
  css: "text/css",
};

http
  .createServer(function (req, res) {
    console.log("listen on port : 8000");

    fs.readFile(__dirname + req.url, function (req, res) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      var mimeTypes = mimeTypes[req.url.splite(".").pop()];

      if (!mimeTypes) {
        mimeTypes = "text/plain";
      }

      res.writeHead(200, { "content-Type": mimeTypes });
      res.write(data, "binary");
      res.end();
    });
  })
  .listen(8080);
