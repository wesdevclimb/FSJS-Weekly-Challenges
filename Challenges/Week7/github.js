//See readme for challenge instructions

/*
 * Note about github api: requires User-Agent header to be set. This can be done
 * in Node by passing an options object (rather than a simple url string) as the
 * first param to the https.get() function
 *
 * So something like
 * var options = {
 *   hostname: api.github.com,
 *   path: <<try to find in documentation linked in readme>>,
 *   headers: {
 *     'User-Agent': '<<your github username>>'
 *   }
 * };
 *
 */

var https = require("https");

function printMessage(username, array, printMethod){
  //The printMessage() needs to iterate over each item in the array and log out the name of each repository
  var message = "\n" + username + " has " + array.length + " repos.\n";
  array.forEach(function(arrayItem){
    message += "\n* " + arrayItem.name;
  });
  printMethod(message);
}

function getRepos(username, printMethod){
  //Task 2: Configure options by creating a JavaScript object
  var options = {
    'hostname' : 'api.github.com',
    'path' : '/users/' + username + '/repos',
    //'headers' object must be set or a 403 error will be caused
    'headers' : {
      'User-Agent' : 'wesdevclimb'
    }
  };

  //Create the https.get request
  var request = https.get(options, function(response){
  //Concatenate data stream into the body
    var body = "";
    response.on('data', function(chunk){
      body += chunk;
    });
    response.on('end', function(){
      //if() { try{} catch{} } else {} statement handles incorrect username errors
      if(response.statusCode === 200){
        try {
          var repos = JSON.parse(body);
          printMessage(username, repos, printMethod);
        } catch(error) {
          console.log(error.message);
        }
      }
      else {
        console.log("Sorry. No information could be found for " + username + ".");
      }
    });
  });
  request.end();
}



//Task 1: Export getRepos() module
module.exports.getRepos = getRepos;
