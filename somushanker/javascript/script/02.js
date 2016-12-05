/**
 * Created by somu on 12/3/2016.
 */
/*
var x = {
    firstName: 'somu',
    callBack: function () {
        return 'shanker';

    },
    rollNumber: 100
}*/
/*
function square(number){
    return number*number;
}
console.log(square(2));
*/
/*
function myFunc(theObject) {
    theObject.make = "Toyota";
}

var mycar = {make: "Honda", model: "Accord", year: 1998};
var x, y;

x = mycar.make; // x gets the value "Honda"
console.log(x);
myFunc(mycar);
y = mycar.make; // y gets the value "Toyota"
                // (the make property was changed by the function)
console.log(y);
console.log(mycar);*/

/*

anonymous function */

/*var square = function(number) { return number * number };
var x = square(4); // x gets the value 16
console.log(x);*/
/*
var factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n-1)
};

console.log(factorial(3));*/
/*
function map(f,a) {
    var result = [], // Create a new Array
        i;
    for (i = 0; i != a.length; i++)
        result[i] = f(a[i]);
    return result;
}
var multiply = function(x) {return x * x * x}; // Expression function.
map(multiply, [0, 1, 2, 5, 10]);

*/
/*
function factorial(n){
    if((n===0)||(n===1))
        return 1;
    else
        return(n*factorial(n-1));
}
console.log(factorial(5));
var a, b, c, d, e;
a = factorial(1); // a gets the value 1
b = factorial(2); // b gets the value 2
c = factorial(3); // c gets the value 6
d = factorial(4); // d gets the value 24
e = factorial(5); // e gets the value 120
console.log(a,b,c,d,e);
*/

// The following variables are defined in the global scope
var num1 = 20,
    num2 = 3,
    name = "Chamahk";

// This function is defined in the global scope
function multiply() {
    return num1 * num2;
}

multiply(); // Returns 60

// A nested function example
function getScore () {
    var num1 = 2,
        num2 = 3;

    function add() {
        return name + " scored " + (num1 + num2);
    }

    return add();
}

getScore(); // Returns "Chamahk scored 5"
console.log(getScore());