// Primitive Data Types - Numbers, Strings, and Booleans


// Reference Data Types

// Arrays can hold collections of data.

// Array 1
var produceList = ["apples", "oranges", "jalapenos"];
// 1. var keyword
// 2. name of variable / identifier
// 3. assignment operator =
// 4. array in square brackets
//    a. each value is separated by a comma.

// Array 2
var accountBalances = [5000, 10, 2500];

// Array 3
var auntsContact = ["Jayne", "Smithe", "123 Main Street", "Springfield", "MO", 12345];

// Arrays do not always have to be restricted to holding one datatype

var isABostonian = true;
var jack = ['Jack', 'Ohrn', 23, isABostonian];
jack.push('light blue');
jack[10] = 'hello';
jack.push('Views');

// change light blue to navy blue
jack[4] = 'navy blue';

console.log(jack);

/*
Arrays are always zero-indexed - they start at zero.
(4) ['Jack', 'Ohrn', 23, true]
0: "Jack"
1: "Ohrn"
2: 23
3: true

length: 4

*/

// console.log(jack(2));
console.log(jack[2]);

