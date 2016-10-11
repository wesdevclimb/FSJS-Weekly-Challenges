//create function
function evaluate(message)
{
  //control and return statements
  if (message === 'hello')
  {
    alert('Hello, world!');
  }
  else if (message !== 'hello')
  {
    alert("Sorry. You didn't enter the desired response.");
  }
}

//Prompt user for input and store variable
var userResponse = prompt('Enter the word "Hello" to bring the program to life!');
//Call function
evaluate(userResponse.toLowerCase());
//Alert user results
