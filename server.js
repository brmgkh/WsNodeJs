const http = require("http");

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("<h1>Hello Node!!!!</h1>\n");
};

const server = http.createServer(requestListener);
server.listen(3000);
