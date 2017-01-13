/**
 * Created by somu on 1/13/2017.
 */

/*
JAVASCRIPT
Data types
1.Primitive data types
2. Object
3. Functions
*/
var x = 10 ;
console.log(x);
x='somu';
console.log(x);

x = {
    firstName : "somu",
    lastName : 'shanker'
};
console.log(x);
console.log(x.firstName);
/*x.firstName = 'vattamvar';

console.log(x.firstName);*/
x = {
    firstName : "somu",
    lastName : 'shanker',
    y : {
        rollnumber : 10,
        z : {
            gender :'male'
        }
    }

};
console.log(x);
console.log(x.y.z.gender);
x.y.z.gender = 'm';

console.log(x.y.z.gender);
x = function (value){
    value = 1 ;
    return value;
};

console.log(x());
x = function addition() {
    var a =1;
    var b = a+1;
    return b;

};
console.log(x());
/*var myvar = "my value";

(function() {
    console.log(myvar); // undefined
    var myvar = "local value";
})();*/




