/**
 * Created by somu on 12/1/2016.
 */

/*anonymous function */
(function () {
    var a=100;
    var x = {
        rollNumber: 51,
        firstName: 'somu',
        isPresent: true,
        isSuspended: null,

        y: {
            rollNumber: 52,
            lastName: 'shanker',
            z: {
                rollNumber: 53,
                fullName: 'somu shanker'

            }
        }
    };
    var b=function () {
        var h = 'sm';
        return h;

    };
    console.log(b());
    function form() {
        a=200;
        x.y.rollNumber = 54;
        x.firstName = 'sold';
        x.y.lastName = 'out';
        x.y.z.fullName = 'sold out';
        console.log(x);

        return b;

    }
    console.log(form());



})();


