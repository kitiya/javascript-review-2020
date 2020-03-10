const http = require("http");

const server = http.createServer((request, response) => {
  console.log("headers", request.headers);
  console.log("method", request.method);
  console.log("url", request.url);

  response.setHeader("Content-Type", "text/html");
  response.end("<h1>HELLO!!!</h1>");
});

server.listen(3000);
