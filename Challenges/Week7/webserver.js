var github = require("./github");
var http = require("http");
var url = require('url');
var PORT = 8080;

//Bonus 2. Require the http library to set up web server on localhost:8080
var server = http.createServer(function(request, response){
  //response.writeHead(200);
  var queryObject = url.parse(request.url, true).query;
  var username = queryObject.username;
  github.getRepos(username, response.write);
  response.end();
});

server.listen(PORT, function(){
  console.log("\nServer is running on localhost 8080");
});
