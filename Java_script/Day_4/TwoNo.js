const prompt=require("prompt-sync")({sigint:true})

var x = parseInt(prompt("Enter first number: "));
var y = parseInt(prompt("Enter second number: "));
 
// Convert string to integer
var num1 = parseInt(x);
console.log('First input numer: ' + num1);
 
var num2 = parseInt(y);
console.log('Second input numer: ' + num2);
 
// Calcualte the Sum
var sum = num1 + num2;

console.log(sum)
