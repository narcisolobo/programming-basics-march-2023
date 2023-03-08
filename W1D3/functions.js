// Functions - what are they even?

// Functions are chunks of code that accomplish a task.
// Think of them like a recipe, a step by step description

// Function Declarations
function greet(greetee) {
  console.log('Hello ' + greetee + '!');
}

var person = 'Everett'
// Function Invocation
greet(person);

// the ingredients for a function
// are called parameters during declaration
// and arguments during invocation

greet('Devin');

function greeter2(timeOfDay, greetee) {
  console.log('Good ' + timeOfDay + ', ' + greetee + '!');
  // template literals
  console.log(`Good ${timeOfDay}, ${greetee}!`);
}

