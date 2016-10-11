//create function
<<<<<<< HEAD
function evaluate(message){
  //control and return statements
  if (message === 'hello') {
    alert('Hello, world!');
  }
  else if (message !== 'hello') {
=======
function evaluate(message)
{
  //control and return statements
  if (message === 'hello')
  {
    alert('Hello, world!');
  }
  else if (message !== 'hello')
  {
>>>>>>> db61f94930728078f548f23f8563ced984d47c20
    alert("Sorry. You didn't enter the desired response.");
  }
}

//Prompt user for input and store variable
var userResponse = prompt('Enter the word "Hello" to bring the program to life!');
//Call function
evaluate(userResponse.toLowerCase());
//Alert user results
