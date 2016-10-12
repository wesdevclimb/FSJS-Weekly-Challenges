//See readme for challenge instructions
//Task 1: Require the github.js file for access to github.getRepos() in app.js
var github = require("./github");
//Bonus 2. Require the http library to set up web server on localhost:8080
var http = require("http");
// var url = require('url');
var PORT = 8080;

var server = http.createServer(function(request, response){
  response.writeHead(200);
  // var queryObject = url.parse(request.url, true).query;
  // console.dir(queryObject);
  response.write("server works");
  // queryString.parse();

  response.end();
});

server.listen(PORT, function(){
  console.log("\nServer is running on localhost 8080");
});

//Task 3. Using process.argv.slice() you can set the users[] === the remaining items in the process.argv[]
var users = process.argv.slice(2);
users.forEach(github.getRepos);
