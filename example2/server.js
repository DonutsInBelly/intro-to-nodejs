var http = require('http');

http.createServer(function(request, response) {
  response.write('Welcome to HackFREE!');
  response.end();
}).listen(8080);
