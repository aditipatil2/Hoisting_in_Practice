// Hoisting with functions

calulateAge(1965); // Hoisting with function declaration

function calulateAge(year) {
    console.log(2016 - year);

}

// hoisting with function expression
//retirement(1990);

var retirement = function(year) {
    console.log(65 - (2016 - year));
}

// Note: hoisting only works with function declaration and not
// with function expression


//Hoisting with variables

console.log(age);
var age = 23; // this age var gets stored in global execution context object

console.log(age);

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);

