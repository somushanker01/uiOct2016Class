/**
 * Created by somu on 12/2/2016.
 */

/* Declare the function 'myFunc' */

function myFunc(theObject){
    theObject.brand=" Toyata ";
}
/*
 * Declare variable 'mycar';
 * create and initialize a new Object;
 * assign reference to it to 'mycar'
 */
var myCar = {
    brand: " Honda ",
    model: " Accord ",
    year: 1998
};
/* Logs 'Honda' */
console.log(myCar.brand);

/* Pass object reference to the function */
myFunc(myCar);

/*
 * Logs 'Toyota' as the value of the 'brand' property
 * of the object, as changed to by the function.
 */
console.log(myCar.brand);
