
function printMessage(username, array){
  //The printMessage() needs to iterate over each item in the array and log out the name of each repository
  var message = "\n" + username + " has " + array.length + " repos.\n";
  array.forEach(function(arrayItem){
    message += "\n* " + arrayItem.name;
  });
  console.log(message);
}


module.exports.printMessage = printMessage;
