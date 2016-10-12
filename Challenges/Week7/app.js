//See readme for challenge instructions
//Task 1: Require the github.js file for access to github.getRepos() in app.js
var github = require("./github");
//Task 3. Using process.argv.slice() you can set the users[] === the remaining items in the process.argv[]
var users = process.argv.slice(2);
users.forEach(github.getRepos);
