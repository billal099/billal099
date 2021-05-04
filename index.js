
const http = require('http');
const hostname = '127.0.0.1';
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('hahahaha');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
var fs = require('fs')

http.createServer(function (req, res) {
  fs.readFile(fs.access(root) + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    console.log(req,res)
    res.writeHead(200);
    res.end(data);
  });
}).listen(9999,hostname);
