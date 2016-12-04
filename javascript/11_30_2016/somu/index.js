/**
 * Created by somu on 11/30/2016.
 */
(function () {
    /*global variables */
    var so = 'somu';
    var lname=undefined;
    var a = {
        rollnumber: 55,
        firstname: 'somu',
        b:{
            rollnumber:13,
            lastname: 'shanker'
        }
    };
    console.log(a);
    a.rollNumber= 11;
    a.b.rollNumber=22;
    console.log(a);
    /*named function */

    function addition(){
        var z = 10;
        var y = z + 1.1;
        var name =so+'shanker';
        console.log(lname);
        console.log(so === 'somu');
        console.log(name);
        return y;

    }

    console.log(addition());




})();

    

