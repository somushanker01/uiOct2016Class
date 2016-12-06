/**
 * Created by somu on 12/5/2016.
 */
(function () {
    function mathematics(a, b) {
        return {
            add: function() {
                var result = a + b ;
                return (result);
            },

            subtract: function() {
                var result = a - b ;
                return (result);
            },
            product: function() {
                var result = a * b ;
                return (result);
            },

            divide: function() {
                var result = a / b ;
                return (result);
            }


        }
    }


    var total = mathematics(10, 2);
    console.log(total.add());
    console.log(total.subtract());
    console.log(total.product());
    console.log(total.divide());

})();


/*

function Mathematics(a,b){
    function addition(){
        return a+b;
    }
    return addition();
}

console.log(Mathematics(4,2));
*/

