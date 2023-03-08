# Conditional Statements in JavaScript

## Conditional statements create "forks in the road"

```js
var person = 'Elle';

if (person === 'Elle') {
  console.log('Step into the Elle club, my good lady.');
}
```

## Parts of a conditional statement:

1. The if keyword
2. Parentheses
   1. Inside the parentheses, we have a boolean expression which will resolve or evaluate to either true or false.
3. Following the parentheses, we have curly braces that hold the "code block" of the condition.

### The Else Keyword ("Otherwise")

```js
person = 'Narciso';

if (person == 'Elle') {
  console.log('Step into the Elle club, my good lady.');
} else {
  console.log('Sorry. Only Elles are allowed.')
}
```

### The `else if` keyword - another door

```js
person = 'Andrea';

if (person === 'Elle') {
  console.log('Step into the Elle club, my good lady.');
} else if (person === 'Andrea') {
  console.log('Welcome to Andrea\'s club.')
} else {
  console.log('Sorry. Only Elles are allowed.')
}
```

### Use if to specify a block of code to be executed, if a specified condition is true.

### Use else to specify a block of code to be executed, if the same condition is false.

### Use else if to specify a block of code to be executed, if the previous condition is false.