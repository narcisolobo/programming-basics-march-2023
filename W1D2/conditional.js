var hour = 10;

if (hour < 18) {
  console.log('Good day.');
} else {
  console.log('Good evening');
}

// CHALLENGE
// change the code above
// to say good morning,
// good afternoon,
// good evening,
// good god

// FizzBuzz Algorithm
// Print the numbers 1 to 100.
// If the number is evenly divisible by 3,
// print "fizz" instead of the number.
// If the number is evenly divisible by 5,
// print "buzz" instead of the number.
// If the number is evenly divisible by 3 AND 5,
// print "fizzbuzz" instead of the number.

function recFib(idx) {
  if (idx < 2) return idx;
  else {
    return recFib(idx - 1) + recFib(idx - 2);
  }
}

[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

console.log(recFib(6));